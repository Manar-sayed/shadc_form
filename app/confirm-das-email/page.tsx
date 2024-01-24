'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState, useTransition } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ConfirmSchema } from '@/schemas';

import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

import { verifyCode } from '@/actions/verifyCode';

import { BeatLoader } from 'react-spinners';
const ConfirmDasEmail = () => {
  const searchParams = useSearchParams();
  const urlEmail = searchParams.get('email');
  const otp = searchParams.get('otp');
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof ConfirmSchema>>({
    resolver: zodResolver(ConfirmSchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!urlEmail) {
      setError('Missing Email!');
      return;
    }
    verifyCode(urlEmail, otp)
      .then((data) => {
        console.log('data', data);

        if (data?.success) {
          setSuccess(data.success);
          const verificationCode = otp ?? '';
          sessionStorage.setItem('verificationCode', verificationCode);

          window.location.href = '/das-form';
        }
        if (data?.error) {
          setError(data.error);
        }
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [error, success, otp, urlEmail]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <section className="py-5  bg-gray-100 h-[calc(100vh-200px)] flex items-center">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-6 px-8 border-[1px] border-gray-100">
          <h4 className="text-center">Confirming your verification das code</h4>
          <div className="flex items-center justify-center w-full my-5">
            {!success && !error && <BeatLoader />}
            <FormSuccess message={success} />
            {!success && <FormError message={error} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmDasEmail;
