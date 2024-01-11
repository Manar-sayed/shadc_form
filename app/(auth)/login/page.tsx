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
import HomeTitle from '@/components/home-title';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email address' })
    .email({ message: 'Invalid email address!' })
    .refine((data) => data.trim(), { message: 'Should be trimmed' }),
  password: z
    .string()
    .min(1, { message: 'Please enter password' })
    .min(8, { message: 'Must be between 8 to 16 characters!' })
    .max(16, { message: 'Must be between 8 to 16 characters!' })
    .refine((data) => data.trim(), { message: 'Should be trimmed' }),
  rememberMe: z.boolean().default(false).optional(),
});

function Login({}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <section className="py-5  bg-gray-100 h-[calc(100vh-200px)] flex items-center">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-4 px-8 border-[1px] border-gray-100">
          {/* <h3 className="text-lg md:text-2xl text-center font-bold text-[#86908E]">
            Login
          </h3> */}
          <HomeTitle title="Login" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="mt-5  shadow-sm "
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
              {/* <div className="flex items-center space-x-2 mb-4">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="text-primary-color">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div> */}
              <Button
                type="submit"
                className="w-full !text-white rounded-lg shadow-md border-2 border-primary-color border-solid text-secondary-color bg-primary-color text-base md:text-xl font-semibold duration-300 "
              >
                Login
              </Button>
            </form>
          </Form>

          <div className="mt-5 flex justify-between items-center ">
            <Link
              href="/forgot-password"
              className="text-sky-500 decoration-sky-500 underline "
            >
              Forgot your password
            </Link>
            <Link
              href="/register"
              className="text-sky-500 decoration-sky-500 underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
