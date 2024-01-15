'use client';
import * as z from 'zod';

import { useState, useTransition } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { ChangePasswordSchema } from '@/schemas';
const DialogForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: '',
      newPassword: '',
    },
  });
  const onSubmit = (values: z.infer<typeof ChangePasswordSchema>) => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} size={'sm'}>
          Change Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-6 w-full "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-2 py-2">
              <FormField
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
              />
            </div>
            <DialogFooter>
              <Button type="submit" size={'sm'}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
