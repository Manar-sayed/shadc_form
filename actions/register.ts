'use server';
import { RegisterSchema } from '@/schemas';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerifcationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, name ,phone} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    // console.log('existingUser', existingUser);
    return { error: 'Email already in use!' };
  }

  await db.user.create({
    data: {
      name,
      email,
      phone,
      password: hashedPassword,
    },
  });
  console.log('password', password);
  const verificationToken = await generateVerifcationToken(email);

  console.log('verificationToken', verificationToken);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: 'Confirmation email sent!' };
};

// 'use server';
// const { RegisterSchema } = require('@/schemas');
// const z = require('zod');
// const bcrypt = require('bcrypt');
// const { db } = require('@/lib/db');

// // Assuming UserWhereUniqueInput has an 'email' property
// export const register = async (values) => {
//   const validatedFields = RegisterSchema.safeParse(values);

//   if (!validatedFields.success) {
//     return { error: 'Invalid fields!' };
//   }

//   const { email, password, name } = validatedFields.data;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const existingUser = await db.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   if (existingUser) {
//     return { error: 'Email already in use!' };
//   }
//   await db.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//     },
//   });

//   return { success: 'User created!' };
// };

// // Example usage:
