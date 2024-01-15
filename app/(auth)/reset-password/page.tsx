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

import HomeTitle from '@/components/home-title';
import { ResetSchema } from '@/schemas';
const ResetPassword = () => {
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof ResetSchema>) => {
    console.log({ values });
  };

  return (
    <section className="py-5 h-[calc(100vh-200px)] flex items-center  bg-gray-100 ">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-4 px-8 border-[1px] border-gray-100">
          {/* <h3 className="text-lg md:text-2xl text-center font-bold text-[#86908E]">
          Forgot Password
        </h3> */}
          <HomeTitle title="Reset Password" />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="my-3  shadow-sm "
            >
              <div className="mb-4">
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

              <Button
                type="submit"
                className="w-full !text-white rounded-lg shadow-md border-2 border-primary-color border-solid text-secondary-color bg-primary-color text-base md:text-xl font-semibold duration-300 "
              >
                Send reset email
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
