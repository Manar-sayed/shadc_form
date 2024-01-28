import NextAuth from 'next-auth';
import authConfig from '@/auth.config';

import {
  DEFAULT_LOGIN_REDIRECT_ADMIN,
  DEFAULT_LOGIN_REDIRECT_USER,
  apiAuthPrefix,
  authRoutes,
  adminRoutes,
  publicRoutes,
  testRoute,
  DEFAULT_NO_PERMISSION,
} from '@/routes';
import { cookies } from 'next/headers';
import { currentUser } from './lib/auth';
import { NextResponse } from 'next/server';
const { auth } = NextAuth(authConfig);
const protectedPage = [
  '/admin-profile',
  '/all-applications',
  '/search-applications',
  '/upload-applications',
  '/users-app',
  '/confirmEmail',
  '/home',
  '/my-applications',
  '/my-profile',
  '/new-application',
  '/das-form',
  '/fill-form',
];

export default async function middlware(req: any) {
  const user = await currentUser();
  // console.log('currentUser', user);
  if (!user && protectedPage.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  if (user && authRoutes.includes(req.nextUrl.pathname)) {
    if (user.role == 'ADMIN') {
      return Response.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT_ADMIN, req.nextUrl.origin)
      );
    } else {
      return Response.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT_USER, req.nextUrl.origin)
      );
    }
  }

  if (
    user &&
    user.role == 'USER' &&
    adminRoutes.includes(req.nextUrl.pathname)
  ) {
    return Response.redirect(
      new URL(DEFAULT_NO_PERMISSION, req.nextUrl.origin)
    );
  }

  // if (user) {
  //   const absoluteUrl = new URL('/settings', req.nextUrl.origin);
  //   return NextResponse.redirect(absoluteUrl.toString());
  // }
}
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
