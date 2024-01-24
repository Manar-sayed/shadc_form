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
import { UserFormSchema } from '@/schemas';
import PhoneComponent from '@/components/phone-component';

import { updateUser } from '@/actions/update-user';
import { useSession } from 'next-auth/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const UserForm = ({ user }: any) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  // console.log('user', user);
  const form = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
  });
  const onSubmit = (values: z.infer<typeof UserFormSchema>) => {
    startTransition(() => {
      updateUser(values, user.id)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
        })
        .catch(() => setError('Something went wrong!'));
    });
  };
  return (
    <div className="container px-3">
      <div className="mx-auto w-full md:w-2/3 lg:w-1/2 mt-5 border-l border-b border-gray-300 p-4 bg-white shadow-sm relative">
        <Form {...form}>
          <form
            className="space-y-6 w-full "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="md:flex md:items-center">
                    <FormLabel className="text-primary-color md:w-[12.5%] md:basis-[12.5%]">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="md:w-[86.5%] md:basis-[86.5%]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="md:flex md:items-center">
                    <FormLabel className="text-primary-color md:w-[12.5%] md:basis-[12.5%]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="email"
                        className="md:w-[86.5%] md:basis-[86.5%]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mb-2.5 md:flex md:items-center space-y-2">
                <FormLabel className="text-primary-color md:w-[12.5%] md:basis-[12.5%]">
                  Phone
                </FormLabel>
                <div className="w-full md:w-[86.5%] md:basis-[86.5%]">
                  <PhoneComponent
                    control={form.control}
                    defaultValue={form.getValues('phone')}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="md:flex md:items-center">
                    <FormLabel className="text-primary-color md:w-[12.5%] md:basis-[12.5%]">
                      Role
                    </FormLabel>

                    <div className="md:w-[86.5%] md:basis-[86.5%]">
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={'ADMIN'}>Admin</SelectItem>
                          <SelectItem value={'USER'}>User</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className="flex items-center justify-center">
              <Button type="submit" size={'sm'} disabled={isPending}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
