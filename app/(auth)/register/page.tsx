'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import PhoneComponent from '@/components/phone-component';
import HomeTitle from '@/components/home-title';

const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Please enter your name.' })
      .min(3, { message: 'Must be between 3 to 16 characters.' })
      .max(16, { message: 'Must be between 3 to 16 characters.' }),
    email: z
      .string()
      .min(1, { message: 'Please enter your email address.' })
      .email({ message: 'Invalid email address!' })
      .refine((data) => data.trim(), { message: 'Should be trimmed.' }),
    password: z
      .string()
      .min(1, { message: 'Please enter password' })
      .min(8, { message: 'Must be between 8 to 16 characters!' })
      .max(16, { message: 'Must be between 8 to 16 characters!' })
      .refine((data) => data.trim(), { message: 'Should be trimmed.' }),

    confirmPassword: z
      .string()
      .min(1, { message: 'Please enter confirm password' }),
    phone: z
      .string()
      .refine((data) => data !== '', { message: 'Please write your phone.' }),
    terms: z.boolean().default(false).optional(),
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
export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      terms: false,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };
  return (
    <section className="py-5  bg-gray-100 ">
      <div className="container mx-auto px-4 w-full md:w-[50%] lg:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-4 px-8 border-[1px] border-gray-100">
          <HomeTitle title="Create Account" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="mt-5  shadow-sm "
            >
              <div className="mb-2.5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-primary-color">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Name" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="mb-2.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-primary-color">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email address"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="mb-2.5 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-primary-color">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-primary-color">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password Confirm"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="mb-2.5">
                <FormLabel className="text-primary-color">Phone</FormLabel>
                <PhoneComponent control={form.control} />
              </div>
              <div className="flex items-center space-x-2 mb-2.5">
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="text-primary-color">
                        I agree on the Privacy Policy , Teams & Condition
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-2.5 !text-white rounded-lg shadow-md border-2 border-primary-color border-solid text-secondary-color bg-primary-color text-base md:text-xl font-semibold duration-300 "
              >
                Create Account
              </Button>
            </form>
          </Form>

          <div className="mt-3 text-lg flex justify-center items-center gap-1 text-gray-900 ">
            <span>Already have an account?</span>
            <Link
              href="/login"
              className="text-sky-500 underline decoration-sky-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
