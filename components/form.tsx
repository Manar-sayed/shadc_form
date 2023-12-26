'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { date, z } from 'zod';
// import { FormDataSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { Label } from './ui/label';

const steps = [
  {
    id: 'Step 1',
    name: 'Student Information',
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
      // 'gender',
      // 'currentSchoolName',
      // 'currentGrade',
      // 'DAS',
      // 'applyingforGrade',
      // 'enrolmentYear',
      // 'religion',
    ],
  },
  {
    id: 'Step 2',
    name: 'Father Information',
    fields: [
      'fatherNationalID',
      'fatherwork',
      'fatherEmail',
      'fatherNationality',
      'faterAramcoId',
    ],
  },
  { id: 'Step 3', name: 'Complete' },
];

export default function FormFull() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

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
    nationality: z.string().min(1, 'nationality is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),

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
    religion: z.string().min(1, 'religion is required'),
    currentGrade: z.string().min(1, 'currentGrade is required'),
    enrolmentYear: z.string().min(1, 'DAS is required'),

    applyingforGrade: z.string().min(1, 'applyingforGrade is required'),
    DAS: z.string().min(1, 'DAS is required'),
    // gender: z.enum(['mentions', 'all', 'none'], {
    //   invalid_type_error: 'you must choose gender',
    // }),

    // date: z.date({
    //   required_error: 'A date of birth is required.',
    // }),
    currentSchoolName: z
      .string()
      .min(1, { message: 'please enter your School Name' }),

    // father info----------------
    fatherNationalID: z.coerce
      .string()
      .min(12, {
        message: 'father National ID  must have ayt least 12 numbers',
      })
      .max(14, {
        message: 'father National ID  cannot have more than 14 numbers',
      })
      .refine((data) => /^\d+$/.test(data), {
        message: 'father National ID  must be only numbers',
      }),
    fatherNationality: z.string().min(1, 'nationality is required'),
    fatherEmail: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),

    fatherwork: z.string().min(1, 'fatherwork is required'),
    faterAramcoId: z.coerce
      .string()
      .min(12, {
        message: 'fater Aramco Id  must have ayt least 12 numbers',
      })
      .max(14, {
        message: 'fater Aramco Id  cannot have more than 14 numbers',
      })
      .refine((data) => /^\d+$/.test(data), {
        message: 'fater Aramco Id  must be only numbers',
      }),

    // faterAramcoExpDate: z.string().min(1, 'faterAramcoExpDate is required'),
    DASalumnus: z.string().min(1, 'DASalumnus is required'),
    DASDhahrani: z.string().min(1, 'DASDhahrani is required'),
    DASEmployee: z.string().min(1, 'DASEmployee is required'),
  });
  const form = useForm<z.infer<any>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      country: '',
      city: '',
      state: '',
      zip: '',
    },
  });

  type Inputs = z.infer<typeof FormDataSchema>;

  // async function onSubmit(data: any) {
  //   console.log('data', data);
  // }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  // const processForm: SubmitHandler<Inputs> = (data) => {
  //   console.log(data);
  //   reset();
  // };
  function processForm(data: z.infer<typeof FormDataSchema>) {
    console.log(data);
    // reset();
  }

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
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
    <section className="absolute inset-0 flex flex-col justify-between p-24">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}

      <Form {...form}>
        <form
          onSubmit={handleSubmit(processForm)}
          className="space-y-10  w-[100%] sm:w-[550px] md:w-auto  "
        >
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div>
                <div className="my-5">
                  <Label className="text-base font-semibold leading-7 ">
                    Student Information
                  </Label>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Provide Student Information details.
                  </p>
                </div>
                <div>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 ">
                    {/* nationality */}
                    <div className="">
                      <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                          <FormItem className="bg-transparent">
                            <FormLabel className="block text-sm font-medium leading-6 ">
                              nationality
                            </FormLabel>
                            <FormControl className="bg-slate-500 ">
                              <>
                                <select
                                  id="nationality"
                                  {...register('nationality')}
                                  // autoComplete="nationality-name"
                                  className="w-full   rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-sky-600  sm:text-sm sm:leading-6"
                                >
                                  <option
                                    disabled
                                    className="text-gray-200 text-sm"
                                  >
                                    Select your nationality
                                  </option>
                                  <option>Saudi Arabia</option>
                                  <option>Egypt</option>
                                  <option>Korean</option>
                                </select>
                                {errors.nationality?.message && (
                                  <p className="mt-2 text-sm text-red-400">
                                    {errors.nationality.message}
                                  </p>
                                )}
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
                        name="studentNationalID "
                        render={({ field }) => (
                          <FormItem className="bg-transparent">
                            <FormLabel className="block text-sm font-medium leading-6 ">
                              Student National ID
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'studentNationalID'}
                                {...register('studentNationalID')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.studentNationalID?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.studentNationalID.message}
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* Passport Number */}
                    <div className="">
                      <FormField
                        control={form.control}
                        name="passportNumber "
                        render={({ field }) => (
                          <FormItem className="bg-transparent">
                            <FormLabel className="block text-sm font-medium leading-6 ">
                              Passport Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'passportNumber'}
                                {...register('passportNumber')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.passportNumber?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.passportNumber.message}
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* names */}
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="bg-transparent">
                            <FormLabel className="block text-sm font-medium leading-6 ">
                              First name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'firstName'}
                                {...register('firstName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.firstName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.firstName.message}
                              </p>
                            )}
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
                            <FormControl>
                              <Input
                                placeholder={'middleName'}
                                {...register('middleName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.middleName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.middleName.message}
                              </p>
                            )}
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
                                placeholder={'thirdName'}
                                {...register('thirdName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.thirdName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.thirdName.message}
                              </p>
                            )}
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
                                placeholder={'lastName'}
                                {...register('lastName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.lastName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.lastName.message}
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* arabic names */}
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                placeholder={'arabicfirstName'}
                                {...register('arabicfirstName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.arabicfirstName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.arabicfirstName.message}
                              </p>
                            )}
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
                                placeholder={'arabicmiddleName'}
                                {...register('arabicmiddleName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.arabicmiddleName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.arabicmiddleName.message}
                              </p>
                            )}
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
                                placeholder={'arabicthirdName'}
                                {...register('arabicthirdName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.arabicthirdName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.arabicthirdName.message}
                              </p>
                            )}
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
                                placeholder={'arabiclastName'}
                                {...register('arabiclastName')}
                                className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                              />
                            </FormControl>

                            {errors.arabiclastName?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.arabiclastName.message}
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="sm:col-span-4">
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
                              {...register('email')}
                              className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                            />
                          </FormControl>

                          {errors.email?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.email.message}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* gender */}
                  {/* <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Notify me about...</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            // defaultValue={field.value}
                            {...register('gender')}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="all" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                All new messages
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="none" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Nothing
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        {errors.gender?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.gender.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  /> */}
                  {/* date  */}
                  {/* <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-[240px] pl-3 text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              ={field.value}
                              onSelect={field.onChange}
                              {...register('date')}
                              disabled={(date: any) =>
                                date > new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Your date of birth is used to calculate your age.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  {/* place of birth */}
                  <div className="sm:col-span-3">
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
                              placeholder={'placeofBirth'}
                              {...register('placeofBirth')}
                              className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                            />
                          </FormControl>

                          {errors.placeofBirth?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.placeofBirth.message}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* current school name */}
                  <div className="sm:col-span-3">
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
                              placeholder={'currentSchoolName'}
                              {...register('currentSchoolName')}
                              className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                            />
                          </FormControl>

                          {errors.currentSchoolName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.currentSchoolName.message}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-10 gap-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
                                  id="religion"
                                  {...register('religion')}
                                  // autoComplete="religion-name"
                                  className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option
                                    disabled
                                    className="text-gray-200 text-sm"
                                  >
                                    Select your Religion
                                  </option>
                                  <option>Muslim</option>
                                  <option>Christian</option>
                                </select>
                                {errors.religion?.message && (
                                  <p className="mt-2 text-sm text-red-400">
                                    {errors.religion.message}
                                  </p>
                                )}
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
                                  id="currentGrade"
                                  {...register('currentGrade')}
                                  // autoComplete="currentGrade-name"
                                  className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option
                                    disabled
                                    className="text-gray-200 text-sm"
                                  >
                                    Select your currentGrade
                                  </option>
                                  <option>Excellent</option>
                                  <option>Very Good</option>
                                  <option>Good </option>
                                  <option>none</option>
                                </select>
                                {errors.currentGrade?.message && (
                                  <p className="mt-2 text-sm text-red-400">
                                    {errors.currentGrade.message}
                                  </p>
                                )}
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
                                  id="enrolmentYear"
                                  {...register('enrolmentYear')}
                                  // autoComplete="enrolmentYear-name"
                                  className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option
                                    disabled
                                    className="text-gray-200 text-sm"
                                  >
                                    Select Enrolment Year
                                  </option>
                                  <option>2016-2017</option>
                                  <option>2017-2018</option>
                                  <option>2018-2019</option>
                                  <option>2019-2020</option>
                                  <option>2020-2021</option>
                                  <option>2021-2022</option>
                                  <option>2022-2023</option>
                                  <option>2023-2024</option>
                                </select>
                                {errors.enrolmentYear?.message && (
                                  <p className="mt-2 text-sm text-red-400">
                                    {errors.enrolmentYear.message}
                                  </p>
                                )}
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
                                  id="applyingforGrade"
                                  {...register('applyingforGrade')}
                                  // autoComplete="applyingforGrade-name"
                                  className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option
                                    disabled
                                    className="text-gray-200 text-sm"
                                  >
                                    Select Grade
                                  </option>
                                  <option>Grade 12</option>
                                  <option>Grade 11</option>
                                  <option>Grade 12</option>
                                  <option>Grade 12</option>
                                  <option>Grade 13</option>
                                </select>
                                {errors.applyingforGrade?.message && (
                                  <p className="mt-2 text-sm text-red-400">
                                    {errors.applyingforGrade.message}
                                  </p>
                                )}
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
                                  id="DAS"
                                  {...register('DAS')}
                                  // autoComplete="DAS-name"
                                  className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option
                                    disabled
                                    className="text-gray-200 text-sm"
                                  >
                                    Select
                                  </option>
                                  <option>Yes</option>
                                  <option>No</option>
                                </select>
                                {errors.DAS?.message && (
                                  <p className="mt-2 text-sm text-red-400">
                                    {errors.DAS.message}
                                  </p>
                                )}
                              </>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

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

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* father id */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherNationalID "
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          father National ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'fatherNationalID'}
                            {...register('fatherNationalID')}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                          />
                        </FormControl>

                        {errors.fatherNationalID?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.fatherNationalID.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* father Nationality */}
                <div className="">
                  <FormField
                    control={form.control}
                    name="fatherNationality"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          fatherNationality
                        </FormLabel>
                        <FormControl className="bg-slate-500 ">
                          <>
                            <select
                              id="fatherNationality"
                              {...register('fatherNationality')}
                              // autoComplete="fatherNationality-name"
                              className="w-full   rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-sky-600  sm:text-sm sm:leading-6"
                            >
                              <option
                                disabled
                                className="text-gray-200 text-sm"
                              >
                                Select your fatherNationality
                              </option>
                              <option>Saudi Arabia</option>
                              <option>Egypt</option>
                              <option>Korean</option>
                            </select>
                            {errors.fatherNationality?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.fatherNationality.message}
                              </p>
                            )}
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* father Email */}
                <div className="sm:col-span-4">
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
                            {...register('fatherEmail')}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                          />
                        </FormControl>

                        {errors.fatherEmail?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.fatherEmail.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* father work */}
                <div className="sm:col-span-4">
                  <FormField
                    control={form.control}
                    name="fatherwork"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Father Work
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'fatherwork'}
                            {...register('fatherwork')}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                          />
                        </FormControl>

                        {errors.fatherwork?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.fatherwork.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* fater Aramco Id*/}
                <div className="sm:col-span-4">
                  <FormField
                    control={form.control}
                    name="faterAramcoId"
                    render={({ field }) => (
                      <FormItem className="bg-transparent">
                        <FormLabel className="block text-sm font-medium leading-6 ">
                          Father Aramco Id
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={'faterAramcoId'}
                            {...register('faterAramcoId')}
                            className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                          />
                        </FormControl>

                        {errors.faterAramcoId?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.faterAramcoId.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Is the father a DAS employee  */}
                {/* <div className="">
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
                              id="DASEmployee"
                              {...register('DASEmployee')}
                              // autoComplete="DASEmployee-name"
                              className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option
                                disabled
                                className="text-gray-200 text-sm"
                              >
                                Select
                              </option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                            {errors.DASEmployee?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.DASEmployee.message}
                              </p>
                            )}
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div> */}

                {/* Did the father study in DAS (Dhahrani) */}
                {/* <div className="">
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
                              id="DASDhahrani"
                              {...register('DASDhahrani')}
                              // autoComplete="DASDhahrani-name"
                              className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option
                                disabled
                                className="text-gray-200 text-sm"
                              >
                                Select
                              </option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                            {errors.DASDhahrani?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.DASDhahrani.message}
                              </p>
                            )}
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div> */}

                {/* Is the father a DAS alumnus */}
                {/* <div className="">
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
                              id="DASalumnus"
                              {...register('DASalumnus')}
                              // autoComplete="DASalumnus-name"
                              className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option
                                disabled
                                className="text-gray-200 text-sm"
                              >
                                Select
                              </option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                            {errors.DASalumnus?.message && (
                              <p className="mt-2 text-sm text-red-400">
                                {errors.DASalumnus.message}
                              </p>
                            )}
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div> */}
              </div>
            </motion.div>
          )}
          {currentStep === 2 && (
            <>
              <h2 className="text-base font-semibold leading-7 ">Complete</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Thank you for your submission.
              </p>
            </>
          )}
        </form>
      </Form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <Button
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
          </Button>
          <Button
            type="submit"
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
          </Button>
        </div>
      </div>
    </section>
  );
}
