'use server';
import { getUserVerifyByEmail } from '@/data/verify-code';
import { db } from '@/lib/db';
import { sendVerificationDasCode } from '@/lib/mail';
import { DasSchema } from '@/schemas';
import * as z from 'zod';

export const sendVerifyCode = async (values: z.infer<typeof DasSchema>) => {
  const validateFields = DasSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid email!' };
  }

  const { email, code } = validateFields.data;
  const verificationCode = Math.floor(Math.random() * 100000) + 1;
  const isDasUser = await getUserVerifyByEmail(email);
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  if (!code) {
    if (!isDasUser) {
      const user = await db.das.create({
        data: {
          email,
          verificationCode: verificationCode.toString(),
          expires,
        },
      });
      const message = `رمز التحقق الخاص بك هو ${verificationCode}`;
      await sendVerificationDasCode(
        user.email,
        message,
        verificationCode.toString()
      );
    }
    if (isDasUser) {
      await db.das.update({
        where: { id: isDasUser.id },
        data: {
          verificationCode: verificationCode.toString(),
          expires,
          isUsed: false,
        },
      });
      const message = `رمز التحقق الخاص بك هو ${verificationCode}`;
      await sendVerificationDasCode(
        isDasUser.email,
        message,
        verificationCode.toString()
      );
    }
  }
  if (code) {
    console.log('isDasUser', isDasUser);
    // console.log('new Date(isDasUser?.expires)', new Date(isDasUser?.expires));
    const hasExpired = new Date(isDasUser?.expires ?? new Date()) < new Date();

    // console.log('hasExpired', hasExpired);
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
    }
    if (isDasUser && isDasUser.verificationCode != code) {
      return { error: 'Code Is Discorrect' };
    }
  }

  return { success: 'DAS email sent!' };
};
