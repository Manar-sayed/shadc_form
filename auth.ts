import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';
import { getUserById } from '@/data/user';
import NextAuth from 'next-auth';
// import { UserRole } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import authConfig from '@/auth.config';

import { db } from '@/lib/db';
import { getAccountByUserId } from './data/account';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  // update
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  // events: {
  //   async linkAccount({ user }) {
  //     await db.user.update({
  //       where: { id: user.id },
  //       data: { emailVerified: new Date() },
  //     });
  //   },
  // },

  callbacks: {
    async signIn({ user, account }) {
      // console.log({ user, account });
      // Allow OAuth without email verification
      // if (account?.provider !== 'credentials') return true;

      const existingUser = await getUserById(user.id);

      // Prevent sign in without email verification
      if (!existingUser || !existingUser.emailVerified) return false;

      // TODO: Add 2FA check
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        // console.log({ twoFactorConfirmation });

        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ session, token }: any) {
      // console.log('token', token);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }
      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.phone = token.phone;
        // session.user.isOAuth = token.isOAuth as boolean;
      }
      // console.log('sessionToken:', session);
      return session;
    },
    async jwt({ token }) {
      // console.log('I AM BEING CALLED AGAIN!');
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // console.log('existingUser', existingUser);
      // const existingAccount = await getAccountByUserId(existingUser.id);

      // token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.phone = existingUser.phone;

      // token.walaa = 'walaa';

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: 'jwt',
  },
  ...authConfig,
});
