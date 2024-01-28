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
import { useEffect, useState } from 'react';
import Steps from '@/components/steps';
import { motion } from 'framer-motion';
import React from 'react';
import 'react-phone-number-input/style.css';
import StudentFormTest from '@/components/studentFormTest';
import FatherFormTest from '@/components/formFatherTest';
import MotherFormTest from '@/components/formMotherTest';
import ImageForm from '@/components/FORM/ImageForm';
import { BadgeCheck } from 'lucide-react';

type FormDataSchemaType = z.ZodObject<{
  nationality: z.ZodEnum<['saudi arabia', 'Jordan', 'korean']>;
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
  studentImmuniazation: z.ZodAny;
  aramcoID: z.ZodAny;

  diseaseFree: z.ZodAny;
  medicalReport: z.ZodAny;
  CmPhotograph: z.ZodAny;
}>;
const FormDataSchema = z.object({
  nationality: z.enum(['saudi arabia', 'Jordan', 'korean']),
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
  passportNumber: z.string().refine((data) => /^[a-zA-Z0-9]+$/.test(data), {
    message: 'Passport Number must contain only numbers and/or letters',
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
  fatherNationality: z.enum(['saudi arabia', 'Jordan', 'korean']),
  fatherNationalID: z.string().min(1, { message: 'Please enter national id' }),
  fatherPhone: z
    .string()
    .refine((data) => data !== undefined && data !== null && data !== '', {
      message: 'Phone is required.',
    })
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

  expDate: z.date().optional().default(new Date()),
  faterAramcoId: z.string().optional(),

  // mother Info----------------
  // mothernationality: z.optional(z.enum(['saudi arabia', 'egypt', 'korean'])),
  // motherNationalID: z.string().optional(),
  // motherEmail: z.string().optional(),
  // motherwork: z.string().optional(),

  // motherName: z.string().optional(),
  // motherNameArabic: z.string().optional(),
  // motherDASalumnus: z.optional(z.enum(['yes', 'no'])),
  // motherDASDhahrani: z.optional(z.enum(['yes', 'no'])),
  // motherDASEmployee: z.optional(z.enum(['yes', 'no'])),

  mothernationality: z.enum(['saudi arabia', 'Jordan', 'korean']),
  motherNationalID: z.string().min(1, { message: 'Please enter national id' }),
  motherEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  motherexpDate: z.date().optional().default(new Date()),
  motherAramcoId: z.coerce.string().optional(),
  motherDASalumnus: z.enum(['yes', 'no']),
  motherDASDhahrani: z.enum(['yes', 'no']),
  motherDASEmployee: z.enum(['yes', 'no']),
  motherwork: z.string().min(3, 'mother work is required'),

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

  //images -----------------
  birthCertificateimage: z.custom((value: any) => {
    return value;
  }),
  familyNationalId: z.custom((value: any) => {
    return value;
  }),
  CmPhotograph: z.optional(
    z.custom((value: any) => {
      return value;
    })
  ),
  studentImmuniazation: z.custom((value: any) => {
    return value;
  }),
  medicalReport: z.optional(
    z.custom((value: any) => {
      return value;
    })
  ),
  aramcoID: z.custom((value: any) => {
    return value;
  }),
  diseaseFree: z.optional(
    z.custom((value: any) => {
      return value;
    })
  ),
});
const steps = [
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
      // 'motherAramcoId',
      // 'motherexpDate',
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
function FormValidTest() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [fatherShow, setFatherShow] = useState(false);
  const [motherShow, setMotherShow] = useState(false);

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

      diseaseFree: [],
      CmPhotograph: [],
      medicalReport: [],
    },
  });

  useEffect(() => {
    if (form.getValues('aramcoRelation') === 'father') {
      // console.log('er', true);
      setFatherShow(true);
      setMotherShow(false);

      const updatedSchema = z.object({
        ...FormDataSchema.shape,
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
        expDate: z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Format invalid',
        }),
      });

      setSchema(updatedSchema as unknown as FormDataSchemaType);
      // const newArray = initialSteps.filter((_, index) => index !== 2);
      // setSteps(newArray);
    } else if (form.getValues('aramcoRelation') === 'mother') {
      setFatherShow(false);
      setMotherShow(true);
      const updatedSchema = z.object({
        ...FormDataSchema.shape,
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
        motherexpDate: z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Format invalid',
        }),
      });

      setSchema(updatedSchema as unknown as FormDataSchemaType);
      // const newArray = initialSteps.filter((_, index) => index !== 1);
      // setSteps(newArray);
    } else if (form.getValues('aramcoRelation') === 'both') {
      setFatherShow(true);
      setMotherShow(true);
      const updatedSchema = z.object({
        ...FormDataSchema.shape,
        //father info
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
        expDate: z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Format invalid',
        }),
        //mother info

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
        motherexpDate: z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Format invalid',
        }),
      });

      setSchema(updatedSchema as unknown as FormDataSchemaType);
      // setSteps(initialSteps);
    } else {
      setFatherShow(false);
      setMotherShow(false);
      setSchema(FormDataSchema as unknown as FormDataSchemaType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues('aramcoRelation')]);

  useEffect(() => {
    if (form.getValues('nationality') === 'saudi arabia') {
      const updatedSchema = z.object({
        ...FormDataSchema.shape,

        studentNationalID: z
          .string()
          .refine((value) => value.length === 12, {
            message: 'Student ID must be 12 characters long',
          })
          .refine((value) => value.startsWith('1'), {
            message: 'First digit of student ID must be 1',
          }),
      });
      setSchema(updatedSchema as unknown as FormDataSchemaType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues('nationality')]);
  useEffect(() => {
    if (form.getValues('fatherNationality') === 'saudi arabia') {
      const updatedSchema = z.object({
        ...FormDataSchema.shape,

        fatherNationalID: z
          .string()
          .refine((value) => value.length === 12, {
            message: 'Father ID must be 12 characters long',
          })
          .refine((value) => value.startsWith('1'), {
            message: 'First digit of father ID must be 1',
          }),
      });
      setSchema(updatedSchema as unknown as FormDataSchemaType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues('fatherNationality')]);
  useEffect(() => {
    if (form.getValues('mothernationality') === 'saudi arabia') {
      const updatedSchema = z.object({
        ...FormDataSchema.shape,

        motherNationalID: z
          .string()
          .refine((value) => value.length === 12, {
            message: 'Mother ID must be 12 characters long',
          })
          .refine((value) => value.startsWith('1'), {
            message: 'First digit of mother ID must be 1',
          }),
      });
      setSchema(updatedSchema as unknown as FormDataSchemaType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues('mothernationality')]);

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
    <section className="p-6 md:p-8">
      {' '}
      <Steps currentStep={currentStep} steps={steps} />{' '}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className=" py-8 ">
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
          {
            currentStep === 1 && (
              // (form.getValues('aramcoRelation') === 'father' ||
              //   form.getValues('aramcoRelation') === 'both') && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <FatherFormTest
                  form={form}
                  fatherShow={fatherShow}
                  setFatherShow={setFatherShow}
                />
              </motion.div>
            )
            // )
          }
          {/* mother info */}
          {
            currentStep === 2 && (
              // form.getValues('aramcoRelation') === 'mother' && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <MotherFormTest
                  form={form}
                  motherShow={motherShow}
                  setMotherShow={setMotherShow}
                />
              </motion.div>
            )
            //)
          }
          {/* {
            currentStep == 2 && (
              // form.getValues('aramcoRelation') === 'both' && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <MotherFormTest form={form} />
              </motion.div>
            )
            //  )
          } */}
          {
            currentStep == 3 && (
              // form.getValues('aramcoRelation') !== 'both' && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ImageForm form={form} />
              </motion.div>
            )
            //)
          }
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

export default FormValidTest;
