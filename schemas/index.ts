import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: 'Email is required',
    }),
    password: z.string().min(6, {
      message: 'Minimum 6 characters required',
    }),
    name: z.string().min(1, {
      message: 'Name is required',
    }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please enter confirm password' }),
    phone: z
      .string()
      .refine((data) => data !== '', { message: 'Please write your phone.' }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'Paswords do not match!',
      path: ['confirmPassword'],
    }
  );

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const DasSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  code: z.optional(z.string()),
});

export const NewPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: 'Minimum 6 characters required',
    }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please enter confirm password' }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'Paswords do not match!',
      path: ['confirmPassword'],
    }
  );

export const ProfileSchema = z
  .object({
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'Password is required!',
      path: ['password'],
    }
  );

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  phone: z.optional(z.string()),
  email: z.optional(z.string().email()),
  role: z.optional(z.enum(['ADMIN', 'USER'])),
  // password: z.optional(z.string().min(6)),
  // newPassword: z.optional(z.string().min(6)),
});
export const ConfirmSchema = z.object({
  code: z.optional(z.string()),
});

export const UserFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  phone: z
    .string()
    .refine((data) => data !== '', { message: 'Please write your phone.' }),
  email: z.string().email({
    message: 'Email is required',
  }),
  role: z.enum(['ADMIN', 'USER']),
  // password: z.optional(z.string().min(6)),
  // newPassword: z.optional(z.string().min(6)),
});
// .refine(
//   (data) => {
//     if (data.password && !data.newPassword) {
//       return false;
//     }

//     return true;
//   },
//   {
//     message: 'New password is required!',
//     path: ['newPassword'],
//   }
// )
// .refine(
//   (data) => {
//     if (data.newPassword && !data.password) {
//       return false;
//     }
//     return true;
//   },
//   {
//     message: 'Password is required!',
//     path: ['password'],
//   }
// );
