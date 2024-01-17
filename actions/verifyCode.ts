'use server';
import { getUserVerifyByEmail } from '@/data/verify-code';
import { db } from '@/lib/db';
import { sendVerificationDasCode } from '@/lib/mail';
import { ConfirmSchema } from '@/schemas';
import { cookies } from 'next/headers';
import * as z from 'zod';

export const verifyCode = async (
  values: z.infer<typeof ConfirmSchema>,
  email?: string | null
) => {
  const validateFields = ConfirmSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid Code!' };
  }
  const { code } = validateFields.data;

  console.log('code', code);

  if (!email) {
    return { error: 'Email missing!' };
  }
  const isDasUser = await getUserVerifyByEmail(email);

  if (isDasUser && isDasUser.verificationCode == code) {
    console.log('code correct');
    cookies().set('verificationCode', code);

    return { success: 'Code Is Correct' };
  }

  // await db.das.delete({
  //   where: { id: user.id },
  // });
};
