import { UserRole } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';
// import { JWT } from 'next-auth/jwt';
export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  phone: string;
  isOAuth: boolean;
};
declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}

// declare module 'next-auth/jwt' {
//   interface JWT {
//     role?: 'ADMIN' | 'USER';
//   }
// }
