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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';
import Steps from '@/components/steps';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';

const FormDataSchema = z.object({
  nationality: z.enum(['saudi arabia', 'egypt', 'korean']),

  studentNationalID: z.coerce
    .string()
    .min(12, {
      message: 'Student National ID  must have ayt least 12 numbers',
    })
    .max(14, {
      message: 'Student National ID  cannot have more than 14 numbers',
    })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Student National ID  must be only numbers',
    }),

  // father Info----------------

  fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),

  // mother Info----------------

  motherEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
});
function FormFull() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const steps = [
    {
      id: 'Student Information',
      fields: ['studentNationalID', 'nationality'],
    },
    {
      id: 'Father Information',
      fields: ['fatherNationality'],
    },
    {
      id: 'Mother Information',
      fields: ['motherEmail'],
    },
    { id: 'Complete' },
  ];

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    mode: 'onChange',
    defaultValues: {
      studentNationalID: '',

      motherEmail: '',
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
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div>
                <div className="my-2">
                  <Label className="text-base font-semibold leading-7 ">
                    Student Information
                  </Label>
                  <p className=" text-sm leading-6 text-gray-600">
                    Provide Student Information details.
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3  gap-6 ">
                  {/* nationality */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Nationality
                          </FormLabel>
                          <FormControl className="bg-slate-500 ">
                            <>
                              <select
                                defaultValue=""
                                id="nationality"
                                {...field}
                                // autoComplete="nationality-name"
                                className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-green-500  sm:text-sm sm:leading-6"
                              >
                                <option
                                  className="text-gray-200 text-sm"
                                  value=""
                                  disabled
                                >
                                  Select nationality
                                </option>
                                <option value={'saudi arabia'}>
                                  Saudi Arabia
                                </option>
                                <option value={'egypt'}>Egypt</option>
                                <option value={'korean'}>Korean</option>
                              </select>
                              <FormMessage></FormMessage>
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* std id */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="studentNationalID"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Student National ID
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'student national id'}
                              type="text"
                              {...field}
                              // {...register('studentNationalID')}
                              className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Passport Number */}
                </div>
              </div>
            </motion.div>
          )}
          {/* father info */}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h2 className="text-base font-semibold leading-7 ">Address</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Father details Info
              </p>
              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
                {/* nationality */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherNationality"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Father Nationality
                        </FormLabel>
                        <FormControl className="bg-slate-500 ">
                          <>
                            <select
                              defaultValue=""
                              id="fatherNationality"
                              {...field}
                              className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-green-500   sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select nationality
                              </option>
                              <option value={'saudi arabia'}>
                                Saudi Arabia
                              </option>
                              <option value={'egypt'}>Egypt</option>
                              <option value={'korean'}>Korean</option>
                            </select>
                            <FormMessage></FormMessage>
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Father work*/}
              </div>
            </motion.div>
          )}

          {/* mother info */}

          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Mother details Info
              </p>

              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
                {/* father email */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherEmail"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          mother Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'motherEmail'}
                            type="motherEmail"
                            {...field}
                            className=" p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Mother National ID*/}
              </div>
            </motion.div>
          )}

          {currentStep === steps.length - 1 && <div>Thanks alot</div>}

          <div className="mt-3  pt-5 pb-5"></div>
        </form>
      </Form>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={currentStep === 0}
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={currentStep === steps.length - 1}
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default FormFull;
