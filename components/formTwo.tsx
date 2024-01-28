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
  nationality: z.enum(['saudi arabia', 'Jordan', 'korean']),
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

  fatherNationality: z.enum(['saudi arabia', 'Jordan', 'korean']),
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
function FormFull() {
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
    mode: 'onChange',
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
                                  focus:ring-primary-color  sm:text-sm sm:leading-6"
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
                                <option value={'Jordan'}>Jordan</option>
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
                  <div className="">
                    <FormField
                      control={form.control}
                      name="passportNumber"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Passport Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'passport number'}
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
                {/* arabic names */}
                <div className="mt-5 grid grid-cols-1  gap-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <FormField
                      control={form.control}
                      name="arabicfirstName"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            First name (Arabic)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'arabic first name'}
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
                      name="arabicmiddleName"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Middle name (Arabic)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'arabic middle name'}
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
                      name="arabicthirdName"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Third name (Arabic)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'arabic third name'}
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
                      name="arabiclastName"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Last name (Arabic)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'arabic last name'}
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
                  {/* place of birth */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="placeofBirth"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Place of Birth
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'place of birth'}
                              {...field}
                              className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* email */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'email'}
                              type="email"
                              {...field}
                              className=" p-4 h-14  text-sm md:text-lg font-normal "
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* phone */}
                  <div>
                    <FormLabel className="block mb-3">Phone Number:</FormLabel>
                    <Controller
                      name="phone"
                      control={form.control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value }, fieldState }) => (
                        <>
                          <div className="div-dir">
                            <PhoneInput
                              value={value}
                              onChange={onChange}
                              defaultCountry="SA"
                              id="PhoneInput"
                              //
                              className={`mt-4 p-2 w-full border border-solid    dark:border-dark-color rounded`}
                            />
                          </div>
                          {fieldState.error && (
                            <FormMessage>
                              {fieldState.error.message}
                            </FormMessage>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Date of Birth */}

                  <div>
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
                            <FormMessage>
                              {fieldState.error.message}
                            </FormMessage>
                          )}
                        </>
                      )}
                    />
                  </div>
                  {/* gender */}
                  <FormField
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
                              <FormLabel className="font-normal">
                                Male
                              </FormLabel>
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
                  />
                </div>

                <div className="mt-5 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                  {/* Religion */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="religion"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Religion
                          </FormLabel>
                          <FormControl>
                            <>
                              <select
                                defaultValue=""
                                id="religion"
                                {...field}
                                // autoComplete="religion-name"
                                className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset 
                                focus:ring-primary-color  sm:text-sm sm:leading-6"
                              >
                                <option
                                  className="text-gray-200 text-sm"
                                  value=""
                                  disabled
                                >
                                  Select Religion
                                </option>
                                <option value={'muslim'}>Muslim</option>
                                <option value={'christian'}>Christian</option>
                              </select>
                              <FormMessage />
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* current grade */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="currentGrade"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Current Grade
                          </FormLabel>
                          <FormControl>
                            <>
                              <select
                                defaultValue=""
                                id="currentGrade"
                                {...field}
                                // autoComplete="currentGrade-name"
                                className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                              >
                                <option
                                  className="text-gray-200 text-sm"
                                  value=""
                                  disabled
                                >
                                  Select current grade
                                </option>

                                <option value={'excellent'}>Excellent</option>
                                <option value={'very good'}>Very Good</option>
                                <option value={'good'}>Good </option>
                                <option value={'none'}>none</option>
                              </select>
                              <FormMessage />
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Enrolment Year */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="enrolmentYear"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Enrolment Year
                          </FormLabel>
                          <FormControl>
                            <>
                              <select
                                defaultValue=""
                                id="enrolmentYear"
                                {...field}
                                // autoComplete="enrolmentYear-name"
                                className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                              >
                                <option
                                  className="text-gray-200 text-sm"
                                  value=""
                                  disabled
                                >
                                  Select Enrolment year
                                </option>
                                <option value={'2016-2017'}>2016-2017</option>
                                <option value={'2017-2018'}>2017-2018</option>
                              </select>
                              <FormMessage />
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Applying for Grade */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="applyingforGrade"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Applying for Grade
                          </FormLabel>
                          <FormControl>
                            <>
                              <select
                                defaultValue=""
                                id="applyingforGrade"
                                {...field}
                                // autoComplete="applyingforGrade-name"
                                className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 
                                  py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                                  focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                              >
                                <option
                                  className="text-gray-200 text-sm"
                                  value=""
                                  disabled
                                >
                                  Select grade
                                </option>
                                <option value={'grade 11'}>Grade 11</option>
                                <option value={'grade 12'}>Grade 12</option>
                              </select>
                              <FormMessage />
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Does the student have siblings at DAS */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="DAS"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            DAS
                          </FormLabel>
                          <FormControl>
                            <>
                              <select
                                defaultValue=""
                                id="DAS"
                                {...field}
                                // autoComplete="DAS-name"
                                className="px-3 placeholder:text-gray-300 placeholder:text-sm block
                                 w-full rounded-md border-0 py-1.5  s
                                 hadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                                 focus:ring-inset focus:ring-primary-color  sm:leading-6"
                              >
                                <option
                                  className="text-gray-200 text-sm"
                                  value=""
                                  disabled
                                >
                                  Select DAS
                                </option>
                                <option value={'yes'}>Yes</option>
                                <option value={'no'}>No</option>
                              </select>
                              <FormMessage />
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* current school name */}
                  <div className="">
                    <FormField
                      control={form.control}
                      name="currentSchoolName"
                      render={({ field }) => (
                        <FormItem className="bg-transparent">
                          <FormLabel className="block text-sm font-medium leading-6 ">
                            Current SchoolName
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'current school name'}
                              {...field}
                              className="mt-10 h-14  text-sm md:text-lg font-normal "
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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
                                  focus:ring-primary-color   sm:leading-6"
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
                              <option value={'Jordan'}>Jordan</option>
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
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherwork"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
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

                {/* Exp Date */}
                <div>
                  <FormLabel className="block mb-3">
                    Father Aramco Exp Date
                  </FormLabel>

                  <Controller
                    control={form.control}
                    name="expDate"
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
                </div>
              </div>

              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
                {/* father email */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherEmail"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Father Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'fatherEmail'}
                            type="fatherEmail"
                            {...field}
                            className=" p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Father National ID*/}
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherNationalID"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Father National ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'father national id'}
                            type="text"
                            {...field}
                            // {...register('fatherNationalID')}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Father Aramco ID*/}
                <div className="">
                  <FormField
                    control={form.control}
                    name="faterAramcoId"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Father Aramco ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'father aramco id'}
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

              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
                {/* DAS Employee */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="DASEmployee"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Is the father a DAS employee
                        </FormLabel>
                        <FormControl>
                          <>
                            <select
                              defaultValue=""
                              id="DASEmployee"
                              {...field}
                              className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color   sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select DAS Employee
                              </option>
                              <option value={'yes'}>Yes</option>
                              <option value={'no'}>No</option>
                            </select>
                            <FormMessage />
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* DAS Dhahrani */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="DASDhahrani"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Did the father study in DAS (Dhahrani)
                        </FormLabel>
                        <FormControl>
                          <>
                            <select
                              defaultValue=""
                              id="DASDhahrani"
                              {...field}
                              className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select DAS Dhahrani
                              </option>
                              <option value={'yes'}>Yes</option>
                              <option value={'no'}>No</option>
                            </select>
                            <FormMessage />
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* DASalumnus */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="DASalumnus"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Is the father a DAS alumnus
                        </FormLabel>
                        <FormControl>
                          <>
                            <select
                              defaultValue=""
                              {...field}
                              className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select DAS Alumnus
                              </option>
                              <option value={'yes'}>Yes</option>
                              <option value={'no'}>No</option>
                            </select>
                            <FormMessage />
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
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
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherNationalID"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          mother National ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'mother national id'}
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

                {/* mother Aramco ID*/}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherAramcoId"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          mother Aramco ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'mother aramco id'}
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

              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
                {/* DAS Employee */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherDASEmployee"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Is the mother a DAS employee
                        </FormLabel>
                        <FormControl>
                          <>
                            <select
                              defaultValue=""
                              id="motherDASEmployee"
                              {...field}
                              className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color   sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select DAS Employee
                              </option>
                              <option value={'yes'}>Yes</option>
                              <option value={'no'}>No</option>
                            </select>
                            <FormMessage />
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* DAS Dhahrani */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherDASDhahrani"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Did the mother study in DAS (Dhahrani)
                        </FormLabel>
                        <FormControl>
                          <>
                            <select
                              defaultValue=""
                              id="motherDASDhahrani"
                              {...field}
                              className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select DAS Dhahrani
                              </option>
                              <option value={'yes'}>Yes</option>
                              <option value={'no'}>No</option>
                            </select>
                            <FormMessage />
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* DASalumnus */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherDASalumnus"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Is the mother a DAS alumnus
                        </FormLabel>
                        <FormControl>
                          <>
                            <select
                              defaultValue=""
                              id="motherDASalumnus"
                              {...field}
                              className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                            >
                              <option
                                className="text-gray-200 text-sm"
                                value=""
                                disabled
                              >
                                Select DAS Alumnus
                              </option>
                              <option value={'yes'}>Yes</option>
                              <option value={'no'}>No</option>
                            </select>
                            <FormMessage />
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
                {/* mother work*/}
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherwork"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
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

                {/* Exp Date */}
                <div>
                  <FormLabel className="block mb-3">
                    Mother Aramco Exp Date
                  </FormLabel>

                  <Controller
                    control={form.control}
                    name="motherexpDate"
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
                </div>
              </div>
              {/* names */}
              <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
                <div className="">
                  <FormField
                    control={form.control}
                    name="motherName"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          mother name
                        </FormLabel>
                        <FormControl {...field}>
                          <Input
                            placeholder={'mother name'}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="">
                  <FormField
                    control={form.control}
                    name="motherNameArabic"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          mother Name Arabic
                        </FormLabel>
                        <FormControl {...field}>
                          <Input
                            placeholder={'mother name arabic'}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* motherphone */}
                <div>
                  <FormLabel className="block mb-3">Phone Number:</FormLabel>
                  <Controller
                    name="motherPhone"
                    control={form.control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value }, fieldState }) => (
                      <>
                        <div className="div-dir">
                          <PhoneInput
                            value={value}
                            onChange={onChange}
                            defaultCountry="SA"
                            id="PhoneInput"
                            //
                            className={`mt-4 p-2 w-full border border-solid    dark:border-dark-color rounded`}
                          />
                        </div>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === steps.length - 1 && <div>Thanks alot</div>}
        </form>
      </Form>
      <div className="mt-3  pt-5 pb-5">
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded flex items-center justify-center  py-1 text-sm font-semibold bg-primary-color shadow-sm border-2 border-primary-color  hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
            className="rounded flex items-center justify-center   py-1 text-sm font-semibold bg-primary-color shadow-sm border-2 border-primary-color  hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
      {/* <div className="mt-3  pt-5 pb-5">
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded flex items-center justify-center  py-1 text-sm font-semibold bg-primary-color shadow-sm ring-1 ring-inset  hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
            className="rounded flex items-center justify-center   py-1 text-sm font-semibold bg-primary-color shadow-sm ring-1 ring-inset  hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
      </div> */}
    </section>
  );
}

export default FormFull;
