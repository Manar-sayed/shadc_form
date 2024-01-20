'use client';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Steps from './steps';
import { Label } from './ui/label';
import React from 'react';
import 'react-phone-number-input/style.css';
const FormDataSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 char' }),
  // father Info----------------
  fatherwork: z.string().min(3, 'father work is required'),
  // mother Info----------------
  motherwork: z.string().min(3, 'mother work is required'),
});
function FormWork() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const steps = [
    {
      id: 'Student Information',
      fields: ['firstName'],
    },
    {
      id: 'Father Information',
      fields: ['fatherwork'],
    },
    {
      id: 'Mother Information',
      fields: ['motherwork'],
    },
    { id: 'Payment' },
  ];

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      firstName: '',
      fatherwork: '',
      motherwork: '',
    },
  });

  const processForm = async (values: z.infer<typeof FormDataSchema>) => {
    console.log({ values });
  };
  type Inputs = z.infer<typeof FormDataSchema>;

  type FieldName = keyof Inputs;
  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="absolute inset-0 flex flex-col justify-between p-6 md:p-24">
      {' '}
      <Steps currentStep={currentStep} steps={steps}></Steps>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className=" py-12 ">
          {currentStep === 0 && (
            <>
              <div>
                <div className="my-2">
                  <Label className="text-base font-semibold leading-7 ">
                    Student Information
                  </Label>
                </div>

                {/* names */}
                <div className="mt-5 grid grid-cols-1  gap-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                          <span className='text-red-500'>*</span>

                            First name
                          </FormLabel>
                          <FormControl {...field}>
                            <Input
                              placeholder={'first name'}
                              className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* father info */}

          {currentStep === 1 && (
            <>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Father details Info
              </p>
              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
                {/* Father work*/}
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherwork"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                        <span className='text-red-500'>*</span>

                          Father work
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'father work'}
                            type="text"
                            {...field}
                            // {...register('fatherwork')}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </>
          )}

          {/* mother info */}

          {currentStep === 2 && (
            <>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Mother details Info
              </p>

              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
                {/* mother work*/}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherwork"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                        <span className='text-red-500'>*</span>

                          Mother work
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'mother work'}
                            type="text"
                            {...field}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === steps.length - 1 && <div>Thanks alot</div>}

          <div className="mt-3  pt-5 pb-5">
            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="rounded flex items-center justify-center  py-1 text-sm font-semibold bg-green-500 shadow-sm ring-1 ring-inset  hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <span>Prev</span>
              </Button>
              <Button
                type="submit"
                onClick={next}
                disabled={currentStep === steps.length - 1}
                className="rounded flex items-center justify-center   py-1 text-sm font-semibold bg-green-500 shadow-sm ring-1 ring-inset  hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default FormWork;
