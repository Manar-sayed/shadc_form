'use client';
import * as z from 'zod';

import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { ProfileSchema } from '@/schemas';
import PhoneComponent from '@/components/phone-component';
import DialogForm from './dialog-form';

const ProfileForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  // const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: 'walaa moustafa' || '',
      email: 'walaaemam077@gmail.com' || '',
      password: '',
      newPassword: '',
      phone: '+96688899909' || '',
    },
  });
  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    startTransition(() => {
      // settings(values)
      //   .then((data) => {
      //     if (data.error) {
      //       setError(data.error);
      //     }
      //     if (data.success) {
      //       update();
      //       setSuccess(data.success);
      //     }
      //   })
      //   .catch(() => setError('Something went wrong!'));
    });
  };
  return (
    <div className="container">
      <div className="mx-auto w-full md:w-2/3 lg:w-1/2 mt-5">
        <Form {...form}>
          <form
            className="space-y-6 w-full border-l border-b border-gray-300 p-4 bg-white shadow-sm"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <div className="mb-2.5">
                <FormLabel className="text-primary-color">Phone</FormLabel>
                <PhoneComponent
                  control={form.control}
                  defaultValue={form.getValues('phone')}
                />
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className="flex items-center justify-between">
              <Button type="submit" size={'sm'} disabled={isPending}>
                Save
              </Button>

              <DialogForm />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
