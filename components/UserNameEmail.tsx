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
import Steps from './steps';
import { Label } from './ui/label';
import { motion } from 'framer-motion';
import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';

const FormDataSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 char' }),
  thirdName: z
    .string()
    .min(3, { message: 'Third name must be at least 3 char' }),
  middleName: z
    .string()
    .min(3, { message: 'middl name must be at least 3 char' }),
  lastName: z.string().min(3, 'Last name must be at least 3 char'),
  arabicfirstName: z
    .string()
    .min(3, { message: 'arabic First name must be at least 3 char' }),
  arabiclastName: z
    .string()
    .min(3, { message: 'arabic last name must be at least 3 char' }),
  arabicthirdName: z
    .string()
    .min(3, { message: 'arabic third name must be at least 3 char' }),
  arabicmiddleName: z
    .string()
    .min(3, { message: 'arabic middle name must be at least 3 char' }),
  nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
  currentGrade: z.enum(['excellent', 'very good', 'good', 'none']),
  religion: z.enum(['muslim', 'christian']),
  enrolmentYear: z.enum(['2016-2017', '2017-2018']),
  applyingforGrade: z.enum(['grade 11', 'grade 12']),
  DAS: z.enum(['yes', 'no']),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  passportNumber: z.coerce
    .string()
    .min(8, { message: 'Passport Number must have ayt least 8 numbers' })
    .max(12, { message: 'Passport Number cannot have more than 12 numbers' })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Passport Number must be only numbers',
    }),
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
  placeofBirth: z.string().min(3, 'please enter a valid city name'),
  phone: z
    .string()
    .refine((data) => data.trim(), { message: 'Should be trimmed.' })
    .refine((data) => data !== '', { message: 'Please write  phone.' }),

  birthDate: z.date({
    required_error: 'Date is required',
    invalid_type_error: 'Format invalid',
  }),
  currentSchoolName: z
    .string()
    .min(1, { message: 'please enter  School Name' }),

  gender: z.enum(['male', 'female'], {
    required_error: 'Please Select  Gender',
  }),
  // father Info----------------
  fatherNationalID: z.coerce
    .string()
    .min(12, {
      message: 'Father National ID  must have ayt least 12 numbers',
    })
    .max(14, {
      message: 'Father National ID  cannot have more than 14 numbers',
    })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Father National ID  must be only numbers',
    }),

  fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),
  DASalumnus: z.enum(['yes', 'no']),
  DASDhahrani: z.enum(['yes', 'no']),
  DASEmployee: z.enum(['yes', 'no']),

  fatherEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),

  fatherwork: z.string().min(3, 'father work is required'),
  expDate: z.date({
    required_error: 'Date is required',
    invalid_type_error: 'Format invalid',
  }),
  faterAramcoId: z.coerce
    .string()
    .min(12, {
      message: 'fater Aramco Id  must have at least 12 numbers',
    })
    .max(14, {
      message: 'fater Aramco Id  cannot have more than 14 numbers',
    })
    .refine((data) => /^\d+$/.test(data), {
      message: 'fater Aramco Id  must be only numbers',
    }),

  // mother Info----------------
  motherDASalumnus: z.enum(['yes', 'no']),
  motherDASDhahrani: z.enum(['yes', 'no']),
  motherDASEmployee: z.enum(['yes', 'no']),
  motherEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  motherNationalID: z.coerce
    .string()
    .min(12, {
      message: 'Mother National ID  must have ayt least 12 numbers',
    })
    .max(14, {
      message: 'Mother National ID  cannot have more than 14 numbers',
    })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Mother National ID  must be only numbers',
    }),
  motherAramcoId: z.coerce
    .string()
    .min(12, {
      message: 'mother Aramco Id  must have at least 12 numbers',
    })
    .max(14, {
      message: 'mother Aramco Id  cannot have more than 14 numbers',
    })
    .refine((data) => /^\d+$/.test(data), {
      message: 'mother Aramco Id  must be only numbers',
    }),
  motherwork: z.string().min(3, 'mother work is required'),
  motherexpDate: z.date({
    required_error: 'Date is required',
    invalid_type_error: 'Format invalid',
  }),
  motherPhone: z
    .string()
    .refine((data) => data.trim(), { message: 'Should be trimmed.' })
    .refine((data) => data !== '', { message: 'Please write  phone.' }),
  motherName: z
    .string()
    .min(3, { message: 'mother name must be at least 3 char' }),
  motherNameArabic: z
    .string()
    .min(3, { message: 'mother name must be at least 3 char' }),
});
function UserEmail() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const steps = [
    {
      id: 'Student Information',
      fields: [
        'firstName',
        'lastName',
        'thirdName',
        'middleName',
        'arabicfirstName',
        'arabiclastName',
        'arabicthirdName',
        'arabicmiddleName',
        'email',
        'passportNumber',
        'studentNationalID',
        'nationality',
        'placeofBirth',
        'gender',
        'currentSchoolName',
        'currentGrade',
        'DAS',
        'applyingforGrade',
        'enrolmentYear',
        'religion',
        'phone',
        'birthDate',
      ],
    },
    {
      id: 'Father Information',
      fields: [
        'fatherNationalID',
        'fatherwork',
        'fatherEmail',
        'fatherNationality',
        'faterAramcoId',
        'expDate',
        'DASalumnus',
        'DASDhahrani',
        'DASEmployee',
      ],
    },
    {
      id: 'Mother Information',
      fields: [
        'motherEmail',
        'motherDASalumnus',
        'motherDASDhahrani',
        'motherDASEmployee',
        'mptherphone',
        'motherwork',
        'motherNationalID',
        'motherAramcoId',
        'motherexpDate',
        'motherName',
        'motherNameArabic',
        'motherPhone',
      ],
    },
    { id: 'Complete' },
  ];

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      thirdName: '',
      studentNationalID: '',
      email: '',
      arabicfirstName: '',
      arabiclastName: '',
      arabicmiddleName: '',
      arabicthirdName: '',
      passportNumber: '',
      faterAramcoId: '',
      fatherEmail: '',
      fatherNationalID: '',
      fatherwork: '',
      currentSchoolName: '',
      placeofBirth: '',
      motherEmail: '',
      motherNationalID: '',
      motherAramcoId: '',
      motherName: '',
      motherNameArabic: '',
      motherwork: '',
      phone: '',
      motherPhone: '',
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

                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="middleName"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Middle name
                        </FormLabel>
                        <FormControl {...field}>
                          <Input
                            placeholder={'middle name'}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="thirdName"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Third name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'third name'}
                            {...field}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Last name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'last name'}
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

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Date of Birth */}

                {/* <div>
                  <FormLabel className="block mb-3">
                    Select Brith Date:
                  </FormLabel>
                  <Controller
                    control={form.control}
                    name="birthDate"
                    render={({ field: { onChange, value }, fieldState }) => (
                      <>
                        <div
                          className={`border-2 rounded-sm  border-gray-200 flex justify-between items-center px-3 `}
                        >
                          <ReactDatePicker
                            placeholderText="Select Date Picker"
                            id="ReactDatePicker"
                            onChange={onChange}
                            selected={value}
                            maxDate={new Date()}
                            className={`
                               text-sm md:text-lg font-normal
                                placeholder:text-gray-300 placeholder:text-sm
                                rounded-md  sm:text-sm
                                  ${fieldState.error && 'border-red-600'}`}
                          />
                          <CalendarCheck2 className=" text-gray-300" />
                        </div>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </>
                    )}
                  />
                </div> */}
                {/* gender */}
                {/* <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Select Gender...</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex  space-x-5"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </div>
          </motion.div>
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
        </form>
      </Form>
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
          {/* <Button
            // type="submit"
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
          </Button> */}
        </div>
      </div>
    </section>
  );
}

export default UserEmail;
