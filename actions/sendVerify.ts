'use server';
import { getUserVerifyByEmail } from '@/data/verify-code';
import { db } from '@/lib/db';
import { sendVerificationDasCode } from '@/lib/mail';
import { ResetSchema } from '@/schemas';
import * as z from 'zod';

export const verifyCode = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid email!' };
  }

  console.log('validateFields', validateFields);
  const { email } = validateFields.data;
  const verificationCode = Math.floor(Math.random() * 100000) + 1;
  const isDasUser = await getUserVerifyByEmail(email);
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
  if (!isDasUser) {
    const user = await db.das.create({
      data: {
        email,
        verificationCode: verificationCode.toString(),
      },
    });
    const message = `رمز التحقق الخاص بك هو ${verificationCode}`;
    await sendVerificationDasCode(user.email, message);
  }
  if (isDasUser) {
    await db.das.update({
      where: { id: isDasUser.id },
      data: { verificationCode: verificationCode.toString() },
    });
    const message = `رمز التحقق الخاص بك هو ${verificationCode}`;
    await sendVerificationDasCode(isDasUser.email, message);
  }

  // await db.das.delete({
  //   where: { id: user.id },
  // });
  return { success: 'DAS email sent!' };
};
