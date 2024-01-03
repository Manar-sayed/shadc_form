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
import HomeTitle from '@/components/HomeTitle';
const formSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Please enter password' })
      .min(8, { message: 'Must be between 8 to 16 characters!' })
      .max(16, { message: 'Must be between 8 to 16 characters!' })
      .refine((data) => data.trim(), { message: 'Should be trimmed' }),
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

function ForgotPassword({}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <section className="py-5   ">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-4 px-8 border-[1px] border-gray-100">
          {/* <h3 className="text-lg md:text-2xl text-center font-bold text-[#86908E]">
            Forgot Password
          </h3> */}
          <HomeTitle title="Forgot Password" />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
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

              <Button
                type="submit"
                className="w-full !text-white rounded-lg shadow-md border-2 border-primary-color border-solid text-secondary-color bg-primary-color text-base md:text-xl font-semibold duration-300 "
              >
                Reset Password
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
