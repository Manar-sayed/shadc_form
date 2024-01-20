'use server';
import { getUserByEmail, getUserById } from '@/data/user';
import bcrypt from 'bcryptjs';
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerifcationToken } from '@/lib/tokens';
import { ProfileSchema } from '@/schemas';
import * as z from 'zod';

export const changePassword = async (values: z.infer<typeof ProfileSchema>) => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }
  const dbUser = await getUserById(user.id);
  if (!dbUser) {
    return { error: 'Unauthorized' };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );
    if (!passwordMatch) {
      return { error: 'Incorrect password!' };
    }
    console.log('passwordMatch', passwordMatch);
    const hashedPassword = await bcrypt.hash(values.newPassword, 10);

    console.log('hashedPassword', hashedPassword);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }
  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

    console.log('updatedUser', updatedUser);
  return { success: 'Password Updated' };
};

// update({
//   user: {
//     name: updatedUser.name,
//     email: updatedUser.email,
//     isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
//     role: updatedUser.role,
//     password: updatedUser.password,
//   },
// });
