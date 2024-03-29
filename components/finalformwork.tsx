'use client';
import * as z from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import 'react-phone-number-input/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

import { BadgeCheck, CalendarCheck2 } from 'lucide-react';
import Steps from './steps';
import StudentForm from './FORM/StudentForm';
import FatherForm from './FORM/FatherForm';
import MotherForm from './FORM/MotherForm';
import ImageForm from './FORM/ImageForm';
import { Button } from './ui/button';

const FormDataSchema = z.object({
  nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
  StudentID: z.string().min(1, { message: 'Please enter national id' }),
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

  nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
  currentGrade: z.enum(['excellent', 'very good', 'good', 'none']),
  religion: z.enum(['muslim', 'christian']),
  enrolmentYear: z.enum(['2016-2017', '2017-2018']),
  applyingforGrade: z.enum(['grade 11', 'grade 12']),

  DAS: z.enum(['yes', 'no']),
  passportNumber: z.string().refine((data) => /^[a-zA-Z0-9]{12}$/.test(data), {
    message: 'Passport Number must be 12 characters (numbers and/or letters)',
  }),

  // StudentID: z.coerce.string().min(1, { message: 'Please enter national id' }),
  placeofBirth: z.string().min(3, 'please enter a valid city name'),

  birthDate: z.date({
    required_error: 'Date is required',
    invalid_type_error: 'Format invalid',
  }),
  currentSchoolName: z
    .string()
    .min(0, { message: 'please enter  School Name' }),

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
  fatherPhone: z
    .string()
    .refine((data) => data.trim(), { message: 'Should be trimmed.' })
    .refine((data) => data !== '', { message: 'Please write  phone.' }),

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
  faterAramcoId: z.string().optional(),

  // faterAramcoId: z
  //   .string()
  //   .min(12, { message: 'Father Aramco ID must have at least 12 numbers' })
  //   .max(14, { message: 'Father Aramco ID cannot have more than 14 numbers' })
  //   .refine((data) => /^\d+$/.test(data), {
  //     message: 'Father Aramco ID must be only numbers',
  //   }),

  // images---------------
  // birthCertificateimage: z.custom((value: any) => {
  //   return value;
  // }),
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
  diseaseFree: z.optional(
    z.custom((value: any) => {
      return value;
    })
  ),
  birthCertificateimage: z
    .custom((value) => value)
    .refine((value) => value !== null, {
      message: 'Birth certificate image is required',
    }),
  // familyNationalId: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Family national ID image is required',
  //   }),
  // CmPhotograph: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Photograph is required',
  //   }),
  // studentImmunization: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Student immunization image is required',
  //   }),
  // medicalReport: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Medical report image is required',
  //   }),
  // diseaseFree: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Disease-free image is required',
  //   }),
  // aramcoID: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Aramco ID image is required',
  //   }),
  // aramcoID: z.custom((value: any) => {
  //   return value;
  // }),
  //images

  // mother Info----------------
  motherDASalumnus: z.enum(['yes', 'no']),
  motherDASDhahrani: z.enum(['yes', 'no']),
  motherDASEmployee: z.enum(['yes', 'no']),
  mothernationality: z.enum(['saudi arabia', 'Jordan', 'korean']),
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
    .min(12, { message: 'Mother Aramco ID must have at least 12 numbers' })
    .max(14, { message: 'Mother Aramco ID cannot have more than 14 numbers' })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Mother Aramco ID must be only numbers',
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

function TestForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const delta = currentStep - previousStep;

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      thirdName: '',
      StudentID: '',
      diseaseFree: [],
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
      fatherPhone: '',
      motherPhone: '',
    },
  });

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
        // 'email',
        'passportNumber',
        'StudentID',
        'nationality',
        'placeofBirth',
        'gender',
        'currentSchoolName',
        'currentGrade',
        'DAS',
        'applyingforGrade',
        'enrolmentYear',
        'religion',
        // 'phone',
        'birthDate',
        'aramcoRelation',
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
    // {
    //   id: 'Image Upload',
    //   fields: [
    //     'birthCertificateimage',
    //     'familyNationalId',
    //     'CmPhotograph',
    //     'studentImmuniazation',
    //     'medicalReport',
    //     'diseaseFree',
    //     'aramcoID',
    //   ],
    // },
    { id: 'Payment' },
  ];
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
    const x = form.watch('StudentID');

    const y = form.watch('nationality');
    if (y == 'saudi arabia' && x.length < 12) {
      form.setError('StudentID', {
        type: 'manual',
        message: 'Student National ID must be at least 12 characters',
      });
      return;
    }
    if (y == 'saudi arabia' && x.length == 12) {
      const xAsString = x.toString();

      if (xAsString.charAt(0) !== '1') {
        form.setError('StudentID', {
          type: 'manual',
          message: 'Student National ID must be Started with 1',
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
    <section className=" p-6 md:p-10">
      <Steps currentStep={currentStep} steps={steps} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className="py-12 ">
          {/* {steps[currentStep].component} */}
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <StudentForm form={form} />
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <FatherForm form={form} />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <MotherForm form={form} />
            </motion.div>
          )}
          {currentStep === 3 && (
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
          )}

          {/* {currentStep === steps.length - 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              the last
            </motion.div>
          )} */}

          {/* <div className="mt-3 pt-5 pb-5">
            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="rounded flex items-center justify-center py-1 text-sm font-semibold bg-green-500 shadow-sm ring-1 ring-inset  hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
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
                className="rounded flex items-center justify-center py-1 text-sm font-semibold bg-green-500 shadow-sm ring-1 ring-inset  hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
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
        </form>
      </Form>

      <div className="-mt-3 pb-5">
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded flex items-center justify-center py-1 text-sm font-semibold bg-primary-color shadow-sm border border-primary-color  hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
            className="rounded flex items-center justify-center 
            py-1 text-sm font-semibold bg-primary-color shadow-sm border border-primary-color 
              hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
            className="rounded flex items-center justify-center   py-1 text-sm font-semibold bg-primary-color shadow-sm border-2 border-primary-color  hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{currentStep === steps.length - 1 ? 'Finish' : 'Next'}</span>
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

export default TestForm;
