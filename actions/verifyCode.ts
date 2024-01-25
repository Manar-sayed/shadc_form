'use server';
import { getUserVerifyByEmail } from '@/data/verify-code';
import { db } from '@/lib/db';

export const verifyCode = async (
  email?: string | null,
  code?: string | null
) => {
  if (!email) {
    return { error: 'Email missing!' };
  }
  if (!code) {
    return { error: 'Code missing!' };
  }
  const isDasUser = await getUserVerifyByEmail(email);

  console.log('isDasUser', isDasUser);
  console.log(
    'new Date(isDasUser?.expires)',
    new Date(isDasUser?.expires ?? new Date())
  );
  const hasExpired = new Date(isDasUser?.expires ?? new Date()) < new Date();

  console.log('hasExpired', hasExpired);
  if (hasExpired) {
    return { error: 'Code has expired!' };
  }
  if (isDasUser && isDasUser.verificationCode == code) {
    if (isDasUser.isUsed == false) {
      await db.das.update({
        where: { id: isDasUser.id },
        data: {
          isUsed: true,
        },
      });
      return { success: 'Code Is Correct', isCode: true };
    } else {
      return { error: 'Code Is Used' };
    }
  } else {
    return { error: 'SomeThing wrong!' };
  }

  // await db.das.delete({
  //   where: { id: user.id },
  // });
};
