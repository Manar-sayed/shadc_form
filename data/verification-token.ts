import { db } from './../lib/db';

export const getVerficationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });
    console.log(
      'verificationToken from verificationToken table',
      verificationToken
    );
    return verificationToken;
  } catch {
    return null;
  }
};
export const getVerficationTokenByEamil = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch {
    return null;
  }
};
