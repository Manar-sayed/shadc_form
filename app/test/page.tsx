'use client';
import * as z from 'zod';
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
import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '@/components/ui/input';

import { useEffect, useState } from 'react';
import Steps from '@/components/steps';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import React from 'react';
import 'react-phone-number-input/style.css';
import StudentFormTest from '@/components/studentFormTest';
import FatherFormTest from '@/components/formFatherTest';
import MotherFormTest from '@/components/formMotherTest';
import ImageForm from '@/components/FORM/ImageForm';
import { BadgeCheck } from 'lucide-react';

type FormDataSchemaType = z.ZodObject<{
  nationality: z.ZodEnum<['saudi arabia', 'egypt', 'korean']>;
  studentNationalID: z.ZodString;
  firstName: z.ZodString;
  middleName: z.ZodString;
  thirdName: z.ZodString;
  lastName: z.ZodString;
  arabicfirstName: z.ZodString;
  arabicmiddleName: z.ZodString;
  arabicthirdName: z.ZodString;
  arabiclastName: z.ZodString;
  passportNumber: z.ZodString;
  placeofBirth: z.ZodString;
  currentSchoolName: z.ZodString;
  birthDate: z.ZodDate;
  currentGrade: z.ZodEnum<['excellent', 'very good', 'good', 'none']>;
  religion: z.ZodEnum<['muslim', 'christian']>;
  enrolmentYear: z.ZodEnum<['2016-2017', '2017-2018']>;
  applyingforGrade: z.ZodEnum<['grade 11', 'grade 12']>;
  DAS: z.ZodEnum<['yes', 'no']>;
  gender: z.ZodEnum<['male', 'female']>;

  fatherNationality: z.ZodEnum<['saudi arabia', 'egypt', 'korean']>;
  DASalumnus: z.ZodEnum<['yes', 'no']>;
  DASDhahrani: z.ZodEnum<['yes', 'no']>;
  DASEmployee: z.ZodEnum<['yes', 'no']>;
  fatherNationalID: z.ZodString;
  fatherPhone: z.ZodString;
  fatherEmail: z.ZodString;
  fatherwork: z.ZodString;
  expDate: z.ZodDate;
  faterAramcoId: z.ZodString;

  aramcoRelation: z.ZodEnum<['father', 'mother', 'both']>;

  // mother Info----------------
  motherDASalumnus: z.ZodEnum<['yes', 'no']>;
  motherDASDhahrani: z.ZodEnum<['yes', 'no']>;
  motherDASEmployee: z.ZodEnum<['yes', 'no']>;
  mothernationality: z.ZodEnum<['saudi arabia', 'egypt', 'korean']>;
  motherEmail: z.ZodString;
  motherNationalID: z.ZodString;
  motherAramcoId: z.ZodString;
  motherwork: z.ZodString;
  motherexpDate: z.ZodDate;
  motherPhone: z.ZodString;
  motherName: z.ZodString;
  motherNameArabic: z.ZodString;
  //images----------
  birthCertificateimage: z.ZodAny;
  familyNationalId: z.ZodAny;
  CmPhotograph: z.ZodAny;
  studentImmuniazation: z.ZodAny;
  medicalReport: z.ZodAny;
  aramcoID: z.ZodAny;
  diseaseFree: z.ZodAny;
}>;
const FormDataSchema = z.object({
  nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
  studentNationalID: z.string().min(1, { message: 'Please enter national id' }),
  aramcoRelation: z.enum(['father', 'mother', 'both']),
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'First name must contain only letters and spaces (Arabic and English characters)',
    }),
  thirdName: z
    .string()
    .min(3, { message: 'Third name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Third name must contain only letters and spaces (Arabic and English characters)',
    }),
  middleName: z
    .string()
    .min(3, { message: 'Middle name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Middle name must contain only letters and spaces (Arabic and English characters)',
    }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Last name must contain only letters and spaces (Arabic and English characters)',
    }),
  arabicfirstName: z
    .string()
    .min(3, { message: 'Arabic First name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Arabic First name must contain only letters and spaces (Arabic and English characters)',
    }),
  arabiclastName: z
    .string()
    .min(3, { message: 'Arabic Last name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Arabic Last name must contain only letters and spaces (Arabic and English characters)',
    }),
  arabicthirdName: z
    .string()
    .min(3, { message: 'Arabic Third name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Arabic Third name must contain only letters and spaces (Arabic and English characters)',
    }),
  arabicmiddleName: z
    .string()
    .min(3, { message: 'Arabic Middle name must be at least 3 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message:
        'Arabic Middle name must contain only letters and spaces (Arabic and English characters)',
    }),
  passportNumber: z.string().refine((data) => /^[a-zA-Z0-9]{12}$/.test(data), {
    message: 'Passport Number must be 12 characters (numbers and/or letters)',
  }),
  placeofBirth: z.string().min(3, 'please enter a valid city name'),
  currentSchoolName: z
    .string()
    .min(0, { message: 'please enter  School Name' }),
  birthDate: z.date({
    required_error: 'Date is required',
    invalid_type_error: 'Format invalid',
  }),
  currentGrade: z.enum(['excellent', 'very good', 'good', 'none']),
  religion: z.enum(['muslim', 'christian']),
  enrolmentYear: z.enum(['2016-2017', '2017-2018']),
  applyingforGrade: z.enum(['grade 11', 'grade 12']),
  DAS: z.enum(['yes', 'no']),
  gender: z.enum(['male', 'female'], {
    required_error: 'Please Select  Gender',
  }),

  // father Info----------------

  fatherNationality: z.optional(z.enum(['saudi arabia', 'egypt', 'korean'])),
  fatherNationalID: z.string().optional(),
  fatherPhone: z.string().optional(),
  DASalumnus: z.optional(z.enum(['yes', 'no'])),
  DASDhahrani: z.optional(z.enum(['yes', 'no'])),
  DASEmployee: z.optional(z.enum(['yes', 'no'])),
  fatherEmail: z.string().optional(),
  expDate: z.date().optional(),
  faterAramcoId: z.string().optional(),
  fatherwork: z.string().optional(),

  // mother Info----------------
  mothernationality: z.optional(z.enum(['saudi arabia', 'egypt', 'korean'])),
  motherNationalID: z.string().optional(),
  motherEmail: z.string().optional(),
  motherAramcoId: z.coerce.string().optional(),
  motherwork: z.string().optional(),
  motherexpDate: z.date().optional(),
  motherPhone: z.string().optional(),
  motherName: z.string().optional(),
  motherNameArabic: z.string().optional(),
  motherDASalumnus: z.optional(z.enum(['yes', 'no'])),
  motherDASDhahrani: z.optional(z.enum(['yes', 'no'])),
  motherDASEmployee: z.optional(z.enum(['yes', 'no'])),
  //images -----------------
  birthCertificateimage: z.custom((value: any) => {
    return value;
  }),
  familyNationalId: z.custom((value: any) => {
    return value;
  }),
  CmPhotograph: z.custom((value: any) => {
    return value;
  }),
  studentImmuniazation: z.custom((value: any) => {
    return value;
  }),
  medicalReport: z.custom((value: any) => {
    return value;
  }),
  aramcoID: z.custom((value: any) => {
    return value;
  }),
  diseaseFree: z.custom((value: any) => {
    return value;
  }),
});
const initialSteps = [
  {
    id: 'Student Information',
    fields: [
      'studentNationalID',
      'nationality',
      'aramcoRelation',
      'firstName',
      'lastName',
      'middleName',
      'thirdName',
      'arabicfirstName',
      'arabiclastName',
      'arabicmiddleName',
      'arabicthirdName',
      'passportNumber',
      'placeofBirth',
      'currentSchoolName',
      'birthDate',
      'currentGrade',
      'religion',
      'enrolmentYear',
      'applyingforGrade',
      'DAS',
      'gender',
    ],
  },
  {
    id: 'Father Information',
    fields: [
      'fatherNationalID',
      'fatherEmail',
      'faterAramcoId',
      'fatherwork',
      'fatherNationality',
      'fatherPhone',
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
      'motherPhone',
      'motherwork',
      'motherNationalID',
      'motherAramcoId',
      'motherexpDate',
      'motherName',
      'motherNameArabic',
      'mothernationality',
    ],
  },
  {
    id: 'Image Upload',
    fields: [
      'birthCertificateimage',
      'familyNationalId',
      'CmPhotograph',
      'studentImmuniazation',
      'medicalReport',
      'aramcoID',
      'diseaseFree',
    ],
  },
  { id: 'Payment' },
];
function FormFull() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(initialSteps);

  const [schema, setSchema] = useState<FormDataSchemaType>(
    FormDataSchema as unknown as FormDataSchemaType
  );

  const delta = currentStep - previousStep;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      studentNationalID: '',
      motherEmail: '',
      firstName: '',
      lastName: '',
      middleName: '',
      thirdName: '',
      arabicfirstName: '',
      arabiclastName: '',
      arabicmiddleName: '',
      arabicthirdName: '',
      passportNumber: '',
      currentSchoolName: '',
      placeofBirth: '',
      faterAramcoId: '',
      fatherEmail: '',
      fatherNationalID: '',
      fatherwork: '',
      fatherPhone: '',
      motherAramcoId: '',
      motherName: '',
      motherNameArabic: '',
      motherNationalID: '',
      motherwork: '',
      motherPhone: '',
    },
  });

  useEffect(() => {
    if (form.getValues('aramcoRelation') === 'father') {
      // console.log('er', true);

      const updatedSchema = z.object({
        ...FormDataSchema.shape,

        fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),
        fatherNationalID: z
          .string()
          .min(1, { message: 'Please enter national id' }),
        fatherPhone: z
          .string()
          .refine(
            (data) => data !== undefined && data !== null && data !== '',
            { message: 'Phone is required.' }
          )
          .refine((data) => data.trim(), { message: 'Should be trimmed.' })
          .refine((data) => data !== '', { message: 'Please write phone.' }),
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
        faterAramcoId: z
          .string()
          .min(12, {
            message: 'Father Aramco ID must have at least 12 numbers',
          })
          .max(14, {
            message: 'Father Aramco ID cannot have more than 14 numbers',
          })
          .refine((data) => /^\d+$/.test(data), {
            message: 'Father Aramco ID must be only numbers',
          }),
      });

      setSchema(updatedSchema as unknown as FormDataSchemaType);
      const newArray = initialSteps.filter((_, index) => index !== 2);
      setSteps(newArray);
    } else if (form.getValues('aramcoRelation') === 'mother') {
      const updatedSchema = z.object({
        ...FormDataSchema.shape,

        mothernationality: z.enum(['saudi arabia', 'egypt', 'korean']),
        motherNationalID: z
          .string()
          .min(1, { message: 'Please enter national id' }),
        motherEmail: z
          .string()
          .min(1, 'Email is required')
          .email('Invalid email address'),
        motherAramcoId: z.coerce
          .string()
          .min(12, {
            message: 'Mother Aramco ID must have at least 12 numbers',
          })
          .max(14, {
            message: 'Mother Aramco ID cannot have more than 14 numbers',
          })
          .refine((data) => /^\d+$/.test(data), {
            message: 'Mother Aramco ID must be only numbers',
          }),
        motherwork: z.string().min(3, 'mother work is required'),
        motherexpDate: z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Format invalid',
        }),
        motherDASalumnus: z.enum(['yes', 'no']),
        motherDASDhahrani: z.enum(['yes', 'no']),
        motherDASEmployee: z.enum(['yes', 'no']),

        motherPhone: z
          .string()
          .refine((data) => data.trim(), { message: 'Should be trimmed.' })
          .refine((data) => data !== '', { message: 'Please write  phone.' }),
        motherName: z
          .string()
          .min(3, { message: 'Mother name must be at least 3 characters' })
          .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
            message:
              'Mother name must contain only letters and spaces (Arabic and English characters)',
          }),
        motherNameArabic: z
          .string()
          .min(3, { message: 'Mother name must be at least 3 characters' })
          .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
            message:
              'Mother name must contain only letters and spaces (Arabic and English characters)',
          }),
      });

      setSchema(updatedSchema as unknown as FormDataSchemaType);
      const newArray = initialSteps.filter((_, index) => index !== 1);
      setSteps(newArray);
    } else if (form.getValues('aramcoRelation') === 'both') {
      const updatedSchema = z.object({
        ...FormDataSchema.shape,
        //father info
        fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),
        fatherNationalID: z
          .string()
          .min(1, { message: 'Please enter national id' }),
        fatherPhone: z
          .string()
          .refine(
            (data) => data !== undefined && data !== null && data !== '',
            { message: 'Phone is required.' }
          )
          .refine((data) => data.trim(), { message: 'Should be trimmed.' })
          .refine((data) => data !== '', { message: 'Please write phone.' }),
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
        faterAramcoId: z
          .string()
          .min(12, {
            message: 'Father Aramco ID must have at least 12 numbers',
          })
          .max(14, {
            message: 'Father Aramco ID cannot have more than 14 numbers',
          })
          .refine((data) => /^\d+$/.test(data), {
            message: 'Father Aramco ID must be only numbers',
          }),
        //mother info

        mothernationality: z.enum(['saudi arabia', 'egypt', 'korean']),
        motherNationalID: z
          .string()
          .min(1, { message: 'Please enter national id' }),
        motherEmail: z
          .string()
          .min(1, 'Email is required')
          .email('Invalid email address'),
        motherAramcoId: z.coerce
          .string()
          .min(12, {
            message: 'Mother Aramco ID must have at least 12 numbers',
          })
          .max(14, {
            message: 'Mother Aramco ID cannot have more than 14 numbers',
          })
          .refine((data) => /^\d+$/.test(data), {
            message: 'Mother Aramco ID must be only numbers',
          }),
        motherwork: z.string().min(3, 'mother work is required'),
        motherexpDate: z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Format invalid',
        }),
        motherDASalumnus: z.enum(['yes', 'no']),
        motherDASDhahrani: z.enum(['yes', 'no']),
        motherDASEmployee: z.enum(['yes', 'no']),

        motherPhone: z
          .string()
          .refine((data) => data.trim(), { message: 'Should be trimmed.' })
          .refine((data) => data !== '', { message: 'Please write  phone.' }),
        motherName: z
          .string()
          .min(3, { message: 'Mother name must be at least 3 characters' })
          .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
            message:
              'Mother name must contain only letters and spaces (Arabic and English characters)',
          }),
        motherNameArabic: z
          .string()
          .min(3, { message: 'Mother name must be at least 3 characters' })
          .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
            message:
              'Mother name must contain only letters and spaces (Arabic and English characters)',
          }),
      });

      setSchema(updatedSchema as unknown as FormDataSchemaType);
      setSteps(initialSteps);
    } else {
      setSchema(FormDataSchema as unknown as FormDataSchemaType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues('aramcoRelation')]);

  const processForm = async (values: z.infer<typeof schema>) => {
    console.log({ values });
  };
  type Inputs = z.infer<typeof schema>;

  type FieldName = keyof Inputs;
  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;
    // student nationality and id
    const x = form.watch('studentNationalID');

    const y = form.watch('nationality');

    if (y == 'saudi arabia' && x.length < 12) {
      form.setError('studentNationalID', {
        type: 'manual',
        message: 'Student National ID must be at least 12 characters',
      });
      return;
    }
    if (y == 'saudi arabia' && x.length == 12) {
      const xAsString = x.toString();

      if (xAsString.charAt(0) !== '1') {
        form.setError('studentNationalID', {
          type: 'manual',
          message: 'Student National ID must be Started with 1',
        });
        return;
      }
    }
    //father nationality and id
    const x1 = form.watch('fatherNationalID');

    const y1 = form.watch('fatherNationality');

    if (y1 == 'saudi arabia' && x1?.length < 12) {
      form.setError('fatherNationalID', {
        type: 'manual',
        message: 'Father National ID must be at least 12 characters',
      });
      return;
    }
    if (y1 == 'saudi arabia' && x1?.length == 12) {
      const xAsString = x1?.toString();

      if (xAsString.charAt(0) !== '1') {
        form.setError('fatherNationalID', {
          type: 'manual',
          message: 'Father National ID must be Started with 1',
        });
        return;
      }
    }
    //mother nationality and id
    const x2 = form.watch('motherNationalID');

    const y2 = form.watch('mothernationality');

    if (y2 == 'saudi arabia' && x2?.length < 12) {
      form.setError('motherNationalID', {
        type: 'manual',
        message: 'Mother National ID must be at least 12 characters',
      });
      return;
    }
    if (y2 == 'saudi arabia' && x2?.length == 12) {
      const xAsString = x1?.toString();

      if (xAsString.charAt(0) !== '1') {
        form.setError('motherNationalID', {
          type: 'manual',
          message: 'Mother National ID must be Started with 1',
        });
        return;
      }
    }

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
              <StudentFormTest form={form} />
            </motion.div>
          )}
          {/* father info */}
          {currentStep === 1 &&
            (form.getValues('aramcoRelation') === 'father' ||
              form.getValues('aramcoRelation') === 'both') && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h2 className="text-base font-semibold leading-7 ">Address</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Father details Info
                </p>
                <FatherFormTest form={form} />
              </motion.div>
            )}
          {/* mother info */}
          {currentStep === 1 &&
            form.getValues('aramcoRelation') === 'mother' && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <MotherFormTest form={form} />
              </motion.div>
            )}
          {currentStep == 2 && form.getValues('aramcoRelation') === 'both' && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <MotherFormTest form={form} />
            </motion.div>
          )}
          {currentStep == 2 && form.getValues('aramcoRelation') !== 'both' && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ImageForm form={form} />
            </motion.div>
          )}
          {currentStep === steps.length - 1 && (
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    rotate: 720, // Rotate 2 times (360 degrees per rotation)
                    transition: {
                      delay: 0.9,
                    },
                  },
                }}
              >
                <div className="flex flex-col">
                  <div className="flex w-full justify-center">
                    <BadgeCheck className="w-32 h-32 text-green-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}{' '}
        </form>
      </Form>
      <div className="flex justify-between pt-0 pb-7">
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
