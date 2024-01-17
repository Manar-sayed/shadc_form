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
import type { Metadata } from 'next';
import HomeTitle from '@/components/home-title';
import { NewPasswordSchema } from '@/schemas';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/new-password';
import Link from 'next/link';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

function NewPassword({}) {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(values, token).then((data) => {
        console.log('data from new password', data);
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <section className="py-5 h-[calc(100vh-200px)] flex items-center bg-gray-100 ">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-4 px-8 border-[1px] border-gray-100">
          {/* <h3 className="text-lg md:text-2xl text-center font-bold text-[#86908E]">
            Forgot Password
          </h3> */}
          <HomeTitle title="New Password" />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5  shadow-sm "
            >
              <div className="mb-4">
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
              </div>
              <div className="mb-4">
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
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                type="submit"
                disabled={isPending}
                className="w-full mt-4 !text-white rounded-lg shadow-md border-2 border-primary-color border-solid text-secondary-color bg-primary-color text-base md:text-xl font-semibold duration-300 "
              >
                Reset password
              </Button>
            </form>
          </Form>
          <div className="mt-5 flex justify-center items-center ">
            <Button
              variant="link"
              className="font-normal w-full"
              size="sm"
              asChild
            >
              <Link href={'/login'}>Back to Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPassword;
