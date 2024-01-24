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
import { DasSchema } from '@/schemas';
import { sendVerifyCode } from '@/actions/send-verify';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
const DasDialog = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const form = useForm<z.infer<typeof DasSchema>>({
    resolver: zodResolver(DasSchema),
    defaultValues: {
      email: '',
      code: '',
    },
  });

  const onSubmit = (values: z.infer<typeof DasSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      sendVerifyCode(values).then((data) => {
        console.log('data', data);
        if (data?.error) {
          setError(data?.error);
        }
        if (data?.success) {
          setSuccess(data?.success);
          setShowVerifyCode(true);
        }
        if (values.code && data?.isCode) {
          sessionStorage.setItem('verificationCode', values.code);

          window.location.href = '/das-form';
        }
      });
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'link'} size={'sm'}>
          Fill Application
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Das Email</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here.
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-6 w-full "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {!showVerifyCode && (
              <div className="space-x-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Enter Your DAS Email Account</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="john.doe@example.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {showVerifyCode && (
              <div className="space-x-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <FormError message={error} />
            <FormSuccess message={success} />

            <DialogFooter>
              <Button type="submit" disabled={isPending} className="w-full">
                {showVerifyCode ? 'Validate Code' : 'Send Code'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DasDialog;
