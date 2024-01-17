import { db } from '@/lib/db';

export const getUserVerifyByEmail = async (email: string) => {
  try {
    const userDas = await db.das.findFirst({
      where: { email },
    });
    return userDas;
  } catch {
    return null;
  }
};
