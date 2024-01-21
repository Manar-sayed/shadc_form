'use server';
import { getUserById } from '@/data/user';

import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';

import { UserFormSchema } from '@/schemas';
import * as z from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const updateUser = async (
  values: z.infer<typeof UserFormSchema>,
  id?: string
) => {
  const validatedFields = UserFormSchema.safeParse(values);
  // console.log('wal', validatedFields);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const existingUser = await getUserById(id);

  const user = await currentUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }
  const dbUser = await getUserById(user.id);
  if (!dbUser) {
    return { error: 'Unauthorized' };
  }

  console.log('existingUser', existingUser);
  if (existingUser) {
    const updatedUser = await db.user.update({
      where: { id: existingUser.id },
      data: {
        ...values,
      },
    });
    revalidatePath('/users-app');
    redirect('/users-app');
  } else {
    return { error: 'Failed Updated' };
  }
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
