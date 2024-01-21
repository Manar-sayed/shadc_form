'use client';

import { BeatLoader } from 'react-spinners';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import { FormSuccess } from './form-success';
import { FormError } from './form-error';
import { Button } from './ui/button';
import Link from 'next/link';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError('Missing token!');
      return;
    }
    newVerification(token)
      .then((data) => {
        console.log('data from verification', data);

        if (data.success) {
          setSuccess(data.success);
          window.location.href = '/';
        }
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [error, success, token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <section className="py-5  bg-gray-100 h-[calc(100vh-200px)] flex items-center">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <div className="grid grid-cols-1 bg-gray-50 py-6 px-8 border-[1px] border-gray-100">
          <h4 className="text-center">Confirming your verification</h4>
          <div className="flex items-center justify-center w-full my-5">
            {!success && !error && <BeatLoader />}
            <FormSuccess message={success} />
            {!success && <FormError message={error} />}
          </div>

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
    </section>
  );
};

export default NewVerificationForm;
