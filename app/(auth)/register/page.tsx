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
import { RegisterSchema } from '@/schemas';
import { useState, useTransition } from 'react';
import { register } from '@/actions/register';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

export default function Register() {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        if (data.success) {
          setSuccess(data.success);
          // redirect('/login');
          form.reset();
          window.location.href = '/';
        }
      });
    });
  };
  return (
    <section className="py-5  bg-gray-100 ">
      <div className="container mx-auto px-4 w-full md:w-[50%] lg:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-4 px-8 border-[1px] border-gray-100">
          <HomeTitle title="Create Account" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
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
              {/* <div className="flex items-center space-x-2 mb-2.5">
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
              </div> */}

              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                type="submit"
                disabled={isPending}
                className="w-full mt-4"
              >
                Create an account
              </Button>
            </form>
          </Form>

          <div className="mt-3 text-base md:text-lg flex justify-center items-center gap-1 text-gray-900 ">
            <span>Already have an account?</span>
            <Link
              href="/"
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
