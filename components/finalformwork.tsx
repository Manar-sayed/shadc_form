'use client';
import * as z from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import 'react-phone-number-input/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import Steps from './steps';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

import { BadgeCheck, CalendarCheck2 } from 'lucide-react';
import FatherForm from './FORM/FatherForm';
import ImageForm from './FORM/ImageForm';
import MotherForm from './FORM/MotherForm';
import StudentForm from './stdFormTest';

const FormDataSchema = z.object({
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
  aramcoRelation: z.enum(['father', 'mother', 'both']),

  DAS: z.enum(['yes', 'no']),
  passportNumber: z.string().refine((data) => /^[a-zA-Z0-9]{12}$/.test(data), {
    message: 'Passport Number must be 12 characters (numbers and/or letters)',
  }),

  StudentID: z.coerce.string().min(1, { message: 'Please enter national id' }),
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

  fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),
  DASalumnus: z.enum(['yes', 'no']),
  DASDhahrani: z.enum(['yes', 'no']),
  DASEmployee: z.enum(['yes', 'no']),

  fatherEmail: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  // images
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
  // birthCertificateimage: z
  //   .custom((value) => value)
  //   .refine((value) => value !== null, {
  //     message: 'Birth certificate image is required',
  //   }),
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

  fatherwork: z.string().min(3, 'father work is required'),
  expDate: z.date({
    required_error: 'Date is required',
    invalid_type_error: 'Format invalid',
  }),
  faterAramcoId: z
    .string()
    .min(12, { message: 'Father Aramco ID must have at least 12 numbers' })
    .max(14, { message: 'Father Aramco ID cannot have more than 14 numbers' })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Father Aramco ID must be only numbers',
    }),

  // mother Info----------------
  motherDASalumnus: z.enum(['yes', 'no']),
  motherDASDhahrani: z.enum(['yes', 'no']),
  motherDASEmployee: z.enum(['yes', 'no']),
  mothernationality: z.enum(['saudi arabia', 'egypt', 'korean']),
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
      // email: '',
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
    <section className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
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

// // 'use client';
// // import * as z from 'zod';
// // import { Controller, useForm } from 'react-hook-form';
// // import { zodResolver } from '@hookform/resolvers/zod';
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from '@/components/ui/form';
// // import { Input } from '@/components/ui/input';
// // import { Button } from '@/components/ui/button';
// // import {
// //   Select,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from '@/components/ui/select';
// // import { SelectContent } from '@radix-ui/react-select';
// // import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// // import ReactDatePicker from 'react-datepicker';

// // import 'react-datepicker/dist/react-datepicker.css';
// // import { Label } from '@/components/ui/label';
// // import { useState } from 'react';
// // import Steps from './steps';
// // import { motion } from 'framer-motion';

// // const FormDataSchema = z.object({
// //   firstName: z
// //     .string()
// //     .min(3, { message: 'First name must be at least 3 char' }),
// //   thirdName: z
// //     .string()
// //     .min(3, { message: 'Third name must be at least 3 char' }),
// //   middleName: z
// //     .string()
// //     .min(3, { message: 'middl name must be at least 3 char' }),
// //   lastName: z.string().min(3, 'Last name must be at least 3 char'),
// //   arabicfirstName: z
// //     .string()
// //     .min(3, { message: 'arabic First name must be at least 3 char' }),
// //   arabiclastName: z
// //     .string()
// //     .min(3, { message: 'arabic last name must be at least 3 char' }),
// //   arabicthirdName: z
// //     .string()
// //     .min(3, { message: 'arabic third name must be at least 3 char' }),
// //   arabicmiddleName: z
// //     .string()
// //     .min(3, { message: 'arabic middle name must be at least 3 char' }),
// //   nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
// //   currentGrade: z.enum(['excellent', 'very good', 'good', 'none']),
// //   religion: z.enum(['muslim', 'christian']),
// //   enrolmentYear: z.enum(['2016-2017', '2017-2018']),
// //   applyingforGrade: z.enum(['grade 11', 'grade 12']),
// //   DAS: z.enum(['yes', 'no']),
// //   email: z.string().min(1, 'Email is required').email('Invalid email address'),
// //   passportNumber: z.coerce
// //     .string()
// //     .min(8, { message: 'Passport Number must have ayt least 8 numbers' })
// //     .max(12, { message: 'Passport Number cannot have more than 12 numbers' })
// //     .refine((data) => /^\d+$/.test(data), {
// //       message: 'Passport Number must be only numbers',
// //     }),
// //   studentNationalID: z.coerce
// //     .string()
// //     .min(12, {
// //       message: 'Student National ID  must have ayt least 12 numbers',
// //     })
// //     .max(14, {
// //       message: 'Student National ID  cannot have more than 14 numbers',
// //     })
// //     .refine((data) => /^\d+$/.test(data), {
// //       message: 'Student National ID  must be only numbers',
// //     }),
// //   placeofBirth: z.string().min(3, 'please enter a valid city name'),

// //   birthDate: z.date({
// //     required_error: 'Date is required',
// //     invalid_type_error: 'Format invalid',
// //   }),
// //   currentSchoolName: z
// //     .string()
// //     .min(1, { message: 'please enter your School Name' }),

// //   gender: z.enum(['male', 'female'], {
// //     required_error: 'Please Select Your Gender',
// //   }),
// //   // father info----------------
// //   fatherNationalID: z.coerce
// //     .string()
// //     .min(12, {
// //       message: 'Student National ID  must have ayt least 12 numbers',
// //     })
// //     .max(14, {
// //       message: 'Student National ID  cannot have more than 14 numbers',
// //     })
// //     .refine((data) => /^\d+$/.test(data), {
// //       message: 'Student National ID  must be only numbers',
// //     }),

// //   fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),
// //   DASalumnus: z.enum(['yes', 'no']),
// //   DASDhahrani: z.enum(['yes', 'no']),
// //   DASEmployee: z.enum(['yes', 'no']),

// //   fatherEmail: z
// //     .string()
// //     .min(1, 'Email is required')
// //     .email('Invalid email address'),

// //   fatherwork: z.string().min(3, 'father work is required'),
// //   faterAramcoId: z.coerce
// //     .string()
// //     .min(12, {
// //       message: 'fater Aramco Id  must have at least 12 numbers',
// //     })
// //     .max(14, {
// //       message: 'fater Aramco Id  cannot have more than 14 numbers',
// //     })
// //     .refine((data) => /^\d+$/.test(data), {
// //       message: 'fater Aramco Id  must be only numbers',
// //     }),

// //   expDate: z.date({
// //     required_error: 'Date is required',
// //     invalid_type_error: 'Format invalid',
// //   }),
// // });
// // function FormScreen() {
// //   const [previousStep, setPreviousStep] = useState(0);
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const delta = currentStep - previousStep;
// //   const steps = [
// //     {
// //       id: 'Student Information',
// //       fields: [
// //         'firstName',
// //         'lastName',
// //         'thirdName',
// //         'middleName',
// //         'arabicfirstName',
// //         'arabiclastName',
// //         'arabicthirdName',
// //         'arabicmiddleName',
// //         'email',
// //         'passportNumber',
// //         'studentNationalID',
// //         'nationality',
// //         'placeofBirth',
// //         // 'gender',
// //         // 'currentSchoolName',
// //         // 'currentGrade',
// //         // 'DAS',
// //         // 'applyingforGrade',
// //         // 'enrolmentYear',
// //         // 'religion',
// //       ],
// //     },
// //     {
// //       id: 'Father Information',
// //       // name: 'Father Information',
// //       fields: [
// //         'fatherNationalID',
// //         'fatherwork',
// //         'fatherEmail',
// //         'fatherNationality',
// //         'faterAramcoId',
// //       ],
// //     },
// //     { id: 'Step 3', name: 'Complete' },
// //   ];

// //   const form = useForm<z.infer<typeof FormDataSchema>>({
// //     resolver: zodResolver(FormDataSchema),
// //     defaultValues: {
// //       firstName: '',
// //       lastName: '',
// //       middleName: '',
// //       thirdName: '',
// //       studentNationalID: '',
// //       email: '',
// //       arabicfirstName: '',
// //       arabiclastName: '',
// //       arabicmiddleName: '',
// //       arabicthirdName: '',
// //       passportNumber: '',
// //       faterAramcoId: '',
// //       fatherEmail: '',
// //       fatherNationalID: '',
// //       fatherwork: '',
// //       currentSchoolName: '',
// //       placeofBirth: '',
// //     },
// //   });

// //   const processForm = async (values: z.infer<typeof FormDataSchema>) => {
// //     console.log({ values });
// //   };
// //   type Inputs = z.infer<typeof FormDataSchema>;

// //   type FieldName = keyof Inputs;
// //   const next = async () => {
// //     const fields = steps[currentStep].fields;
// //     const output = await form.trigger(fields as FieldName[], {
// //       shouldFocus: true,
// //     });

// //     if (!output) return;

// //     if (currentStep < steps.length - 1) {
// //       if (currentStep === steps.length - 2) {
// //         await form.handleSubmit(processForm)();
// //       }
// //       setPreviousStep(currentStep);
// //       setCurrentStep((step) => step + 1);
// //     }
// //   };

// //   const prev = () => {
// //     if (currentStep > 0) {
// //       setPreviousStep(currentStep);
// //       setCurrentStep((step) => step - 1);
// //     }
// //   };

// //   return (
// //     <div className="absolute inset-0 flex flex-col justify-between p-20 ">
// //       <Steps currentStep={currentStep} steps={steps}></Steps>
// //       <Form {...form}>
// //         <form
// //           onSubmit={form.handleSubmit(processForm)}
// //           className="max-w-md w-full flex flex-col gap-4"
// //         >
// //           {currentStep === 0 && (
// //             <motion.div
// //               initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
// //               animate={{ x: 0, opacity: 1 }}
// //               transition={{ duration: 0.3, ease: 'easeInOut' }}
// //             >
// //               <div>
// //                 <div className="my-2">
// //                   <Label className="text-base font-semibold leading-7 ">
// //                     Student Information
// //                   </Label>
// //                   <p className=" text-sm leading-6 text-gray-600">
// //                     Provide Student Information details.
// //                   </p>
// //                 </div>
// //                 <div className="mt-5 grid grid-cols-1 md:grid-cols-3  gap-6 ">
// //                   {/* nationality */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="nationality"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Nationality
// //                           </FormLabel>
// //                           <FormControl className="bg-slate-500 ">
// //                             <>
// //                               <select
// //                                 defaultValue=""
// //                                 id="nationality"
// //                                 {...field}
// //                                 // autoComplete="nationality-name"
// //                                 className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
// //                                  ring-gray-300 focus:ring-2 focus:ring-inset
// //                                   focus:ring-sky-600  sm:text-sm sm:leading-6"
// //                               >
// //                                 <option
// //                                   className="text-gray-200 text-sm"
// //                                   value=""
// //                                   disabled
// //                                 >
// //                                   Select your nationality
// //                                 </option>
// //                                 <option value={'saudi arabia'}>
// //                                   Saudi Arabia
// //                                 </option>
// //                                 <option value={'egypt'}>Egypt</option>
// //                                 <option value={'korean'}>Korean</option>
// //                               </select>
// //                               <FormMessage></FormMessage>
// //                             </>
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* std id */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="studentNationalID"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Student National ID
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'student national id'}
// //                               type="text"
// //                               {...field}
// //                               // {...register('studentNationalID')}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* Passport Number */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="passportNumber"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Passport Number
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'passport number'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* names */}
// //                 <div className="mt-5 grid grid-cols-1  gap-6 sm:grid-cols-6">
// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="firstName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             First name
// //                           </FormLabel>
// //                           <FormControl {...field}>
// //                             <Input
// //                               placeholder={'first name'}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="middleName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Middle name
// //                           </FormLabel>
// //                           <FormControl {...field}>
// //                             <Input
// //                               placeholder={'middle name'}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="thirdName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Third name
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'third name'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>
// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="lastName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Last name
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'last name'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                 </div>
// //                 {/* arabic names */}
// //                 <div className="mt-5 grid grid-cols-1  gap-6 sm:grid-cols-6">
// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="arabicfirstName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             First name (Arabic)
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'arabic first name'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="arabicmiddleName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Middle name (Arabic)
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'arabic middle name'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>
// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="arabicthirdName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Third name (Arabic)
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'arabic third name'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   <div className="sm:col-span-3">
// //                     <FormField
// //                       control={form.control}
// //                       name="arabiclastName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Last name (Arabic)
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'arabic last name'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
// //                   {/* place of birth */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="placeofBirth"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Place of Birth
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'place of birth'}
// //                               {...field}
// //                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* email */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="email"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Email Address
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'email'}
// //                               type="email"
// //                               {...field}
// //                               className=" p-4 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* current school name */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="currentSchoolName"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                             Current SchoolName
// //                           </FormLabel>
// //                           <FormControl>
// //                             <Input
// //                               placeholder={'current school name'}
// //                               {...field}
// //                               className="mt-10 h-14  text-sm md:text-lg font-normal "
// //                             />
// //                           </FormControl>

// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* gender */}
// //                 <FormField
// //                   control={form.control}
// //                   name="gender"
// //                   render={({ field }) => (
// //                     <FormItem className="space-y-3">
// //                       <FormLabel>Select Gender...</FormLabel>
// //                       <FormControl>
// //                         <RadioGroup
// //                           onValueChange={field.onChange}
// //                           defaultValue={field.value}
// //                           className="flex flex-col space-y-1"
// //                         >
// //                           <FormItem className="flex items-center space-x-3 space-y-0">
// //                             <FormControl>
// //                               <RadioGroupItem value="male" />
// //                             </FormControl>
// //                             <FormLabel className="font-normal">Male</FormLabel>
// //                           </FormItem>
// //                           <FormItem className="flex items-center space-x-3 space-y-0">
// //                             <FormControl>
// //                               <RadioGroupItem value="female" />
// //                             </FormControl>
// //                             <FormLabel className="font-normal">
// //                               Female
// //                             </FormLabel>
// //                           </FormItem>
// //                         </RadioGroup>
// //                       </FormControl>
// //                       <FormMessage />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <div className="mt-5 gap-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
// //                   {/* Religion */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="religion"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Religion
// //                           </FormLabel>
// //                           <FormControl>
// //                             <>
// //                               <select
// //                                 defaultValue=""
// //                                 id="religion"
// //                                 {...field}
// //                                 // autoComplete="religion-name"
// //                                 className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                               >
// //                                 <option
// //                                   className="text-gray-200 text-sm"
// //                                   value=""
// //                                   disabled
// //                                 >
// //                                   Select your Religion
// //                                 </option>
// //                                 <option value={'muslim'}>Muslim</option>
// //                                 <option value={'christian'}>Christian</option>
// //                               </select>
// //                               <FormMessage />
// //                             </>
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* current grade */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="currentGrade"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Current Grade
// //                           </FormLabel>
// //                           <FormControl>
// //                             <>
// //                               <select
// //                                 defaultValue=""
// //                                 id="currentGrade"
// //                                 {...field}
// //                                 // autoComplete="currentGrade-name"
// //                                 className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                               >
// //                                 <option
// //                                   className="text-gray-200 text-sm"
// //                                   value=""
// //                                   disabled
// //                                 >
// //                                   Select your current grade
// //                                 </option>

// //                                 <option value={'excellent'}>Excellent</option>
// //                                 <option value={'very good'}>Very Good</option>
// //                                 <option value={'good'}>Good </option>
// //                                 <option value={'none'}>none</option>
// //                               </select>
// //                               <FormMessage />
// //                             </>
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* Enrolment Year */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="enrolmentYear"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Enrolment Year
// //                           </FormLabel>
// //                           <FormControl>
// //                             <>
// //                               <select
// //                                 defaultValue=""
// //                                 id="enrolmentYear"
// //                                 {...field}
// //                                 // autoComplete="enrolmentYear-name"
// //                                 className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                               >
// //                                 <option
// //                                   className="text-gray-200 text-sm"
// //                                   value=""
// //                                   disabled
// //                                 >
// //                                   Select your Enrolment year
// //                                 </option>
// //                                 <option value={'2016-2017'}>2016-2017</option>
// //                                 <option value={'2017-2018'}>2017-2018</option>
// //                               </select>
// //                               <FormMessage />
// //                             </>
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* Applying for Grade */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="applyingforGrade"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             Applying for Grade
// //                           </FormLabel>
// //                           <FormControl>
// //                             <>
// //                               <select
// //                                 defaultValue=""
// //                                 id="applyingforGrade"
// //                                 {...field}
// //                                 // autoComplete="applyingforGrade-name"
// //                                 className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0
// //                                   py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2
// //                                   focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                               >
// //                                 <option
// //                                   className="text-gray-200 text-sm"
// //                                   value=""
// //                                   disabled
// //                                 >
// //                                   Select your grade
// //                                 </option>
// //                                 <option value={'grade 11'}>Grade 11</option>
// //                                 <option value={'grade 12'}>Grade 12</option>
// //                               </select>
// //                               <FormMessage />
// //                             </>
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>
// //                   {/* Does the student have siblings at DAS */}
// //                   <div className="">
// //                     <FormField
// //                       control={form.control}
// //                       name="DAS"
// //                       render={({ field }) => (
// //                         <FormItem className="bg-transparent">
// //                           <FormLabel className="block text-sm font-medium leading-6 ">
// //                           <span className='text-red-500'>*</span>

// //                             DAS
// //                           </FormLabel>
// //                           <FormControl>
// //                             <>
// //                               <select
// //                                 defaultValue=""
// //                                 id="DAS"
// //                                 {...field}
// //                                 // autoComplete="DAS-name"
// //                                 className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                               >
// //                                 <option
// //                                   className="text-gray-200 text-sm"
// //                                   value=""
// //                                   disabled
// //                                 >
// //                                   Select DAS
// //                                 </option>
// //                                 <option value={'yes'}>Yes</option>
// //                                 <option value={'no'}>No</option>
// //                               </select>
// //                               <FormMessage />
// //                             </>
// //                           </FormControl>
// //                         </FormItem>
// //                       )}
// //                     />
// //                   </div>

// //                   {/* Date of Birth */}
// //                   <div>
// //                     <FormLabel className="block mb-3">
// //                     <span className='text-red-500'>*</span>

// //                       Select Brith Date:
// //                     </FormLabel>
// //                     <Controller
// //                       control={form.control}
// //                       name="birthDate"
// //                       render={({ field: { onChange, value }, fieldState }) => (
// //                         <>
// //                           <ReactDatePicker
// //                             placeholderText="Select Date Picker"
// //                             onChange={onChange}
// //                             selected={value}
// //                             maxDate={new Date()}
// //                             className={`border-2 rounded-sm p-2 border-gray-600 ${
// //                               fieldState.error && 'border-red-600'
// //                             }`}
// //                           />
// //                           {fieldState.error && (
// //                             <FormMessage>
// //                               {fieldState.error.message}
// //                             </FormMessage>
// //                           )}
// //                         </>
// //                       )}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           )}

// //           {/* father info */}
// //           {currentStep === 1 && (
// //             <motion.div
// //               initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
// //               animate={{ x: 0, opacity: 1 }}
// //               transition={{ duration: 0.3, ease: 'easeInOut' }}
// //             >
// //               <h2 className="text-base font-semibold leading-7 ">Address</h2>
// //               <p className="mt-1 text-sm leading-6 text-gray-600">
// //                 Father details Info
// //               </p>
// //               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
// //                 {/* Father National ID*/}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="fatherNationalID"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Father National ID
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder={'father national id'}
// //                             type="text"
// //                             {...field}
// //                             // {...register('fatherNationalID')}
// //                             className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                           />
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* nationality */}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="fatherNationality"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Father Nationality
// //                         </FormLabel>
// //                         <FormControl className="bg-slate-500 ">
// //                           <>
// //                             <select
// //                               defaultValue=""
// //                               id="fatherNationality"
// //                               {...field}
// //                               className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
// //                                  ring-gray-300 focus:ring-2 focus:ring-inset
// //                                   focus:ring-sky-600  sm:text-sm sm:leading-6"
// //                             >
// //                               <option
// //                                 className="text-gray-200 text-sm"
// //                                 value=""
// //                                 disabled
// //                               >
// //                                 Select your nationality
// //                               </option>
// //                               <option value={'saudi arabia'}>
// //                                 Saudi Arabia
// //                               </option>
// //                               <option value={'egypt'}>Egypt</option>
// //                               <option value={'korean'}>Korean</option>
// //                             </select>
// //                             <FormMessage></FormMessage>
// //                           </>
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* father email */}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="fatherEmail"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Father Email Address
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder={'fatherEmail'}
// //                             type="fatherEmail"
// //                             {...field}
// //                             className=" p-4 h-14  text-sm md:text-lg font-normal "
// //                           />
// //                         </FormControl>

// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* Father work*/}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="fatherwork"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Father work
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder={'father work'}
// //                             type="text"
// //                             {...field}
// //                             // {...register('fatherwork')}
// //                             className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                           />
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* Father Aramco ID*/}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="faterAramcoId"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Father Aramco ID
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder={'father aramco id'}
// //                             type="text"
// //                             {...field}
// //                             className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
// //                           />
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* Exp Date */}
// //                 <div>
// //                   <FormLabel className="block mb-3">
// //                   <span className='text-red-500'>*</span>

// //                     Father Aramco Exp Date
// //                   </FormLabel>
// //                   <Controller
// //                     control={form.control}
// //                     name="expDate"
// //                     render={({ field: { onChange, value }, fieldState }) => (
// //                       <>
// //                         <ReactDatePicker
// //                           placeholderText="Select Date Picker"
// //                           onChange={onChange}
// //                           selected={value}
// //                           maxDate={new Date()}
// //                           className={`border-2 rounded-sm p-2 border-gray-600 ${
// //                             fieldState.error && 'border-red-600'
// //                           }`}
// //                         />
// //                         {fieldState.error && (
// //                           <FormMessage>{fieldState.error.message}</FormMessage>
// //                         )}
// //                       </>
// //                     )}
// //                   />
// //                 </div>
// //                 {/* DAS Employee */}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="DASEmployee"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Is the father a DAS employee
// //                         </FormLabel>
// //                         <FormControl>
// //                           <>
// //                             <select
// //                               defaultValue=""
// //                               id="DASEmployee"
// //                               {...field}
// //                               className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                             >
// //                               <option
// //                                 className="text-gray-200 text-sm"
// //                                 value=""
// //                                 disabled
// //                               >
// //                                 Select DAS Dhahrani
// //                               </option>
// //                               <option value={'yes'}>Yes</option>
// //                               <option value={'no'}>No</option>
// //                             </select>
// //                             <FormMessage />
// //                           </>
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* DAS Dhahrani */}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="DASDhahrani"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Did the father study in DAS (Dhahrani)
// //                         </FormLabel>
// //                         <FormControl>
// //                           <>
// //                             <select
// //                               defaultValue=""
// //                               id="DASDhahrani"
// //                               {...field}
// //                               className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                             >
// //                               <option
// //                                 className="text-gray-200 text-sm"
// //                                 value=""
// //                                 disabled
// //                               >
// //                                 Select DAS Dhahrani
// //                               </option>
// //                               <option value={'yes'}>Yes</option>
// //                               <option value={'no'}>No</option>
// //                             </select>
// //                             <FormMessage />
// //                           </>
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>

// //                 {/* DASalumnus */}
// //                 <div className="">
// //                   <FormField
// //                     control={form.control}
// //                     name="DASalumnus"
// //                     render={({ field }) => (
// //                       <FormItem className="bg-transparent">
// //                         <FormLabel className="block text-sm font-medium leading-6 ">
// //                         <span className='text-red-500'>*</span>

// //                           Is the father a DAS alumnus
// //                         </FormLabel>
// //                         <FormControl>
// //                           <>
// //                             <select
// //                               defaultValue=""
// //                               {...field}
// //                               className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
// //                             >
// //                               <option
// //                                 className="text-gray-200 text-sm"
// //                                 value=""
// //                                 disabled
// //                               >
// //                                 Select DAS Alumnus
// //                               </option>
// //                               <option value={'yes'}>Yes</option>
// //                               <option value={'no'}>No</option>
// //                             </select>
// //                             <FormMessage />
// //                           </>
// //                         </FormControl>
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>
// //               </div>
// //             </motion.div>
// //           )}
// //         </form>
// //       </Form>
// //       <div className="mt-3  pt-5 pb-5">
// //         <div className="flex justify-between">
// //           <Button
// //             type="button"
// //             onClick={prev}
// //             disabled={currentStep === 0}
// //             className="rounded flex items-center justify-center  py-1 text-sm font-semibold bg-sky-600 shadow-sm ring-1 ring-inset  hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth="1.5"
// //               stroke="currentColor"
// //               className="h-5 w-5"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M15.75 19.5L8.25 12l7.5-7.5"
// //               />
// //             </svg>
// //             <span>Prev</span>
// //           </Button>
// //           <Button
// //             type="submit"
// //             onClick={next}
// //             disabled={currentStep === steps.length - 1}
// //             className="rounded flex items-center justify-center   py-1 text-sm font-semibold bg-sky-600 shadow-sm ring-1 ring-inset  hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
// //           >
// //             <span>Next</span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth="1.5"
// //               stroke="currentColor"
// //               className="h-5 w-5"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
// //               />
// //             </svg>
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FormScreen;

// 'use client';
// import * as z from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import 'react-datepicker/dist/react-datepicker.css';

// import { Input } from '@/components/ui/input';

// import { useState } from 'react';
// import Steps from '@/components/steps';
// import { Label } from '@/components/ui/label';
// import { motion } from 'framer-motion';
// import React from 'react';
// import 'react-phone-number-input/style.css';

// const FormDataSchema = z.object({
//   nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
//   studentNationalID: z.string().min(1, { message: 'Please enter national id' }),

//   // father Info----------------

//   fatherNationality: z.enum(['saudi arabia', 'egypt', 'korean']),

//   // mother Info----------------

//   motherEmail: z
//     .string()
//     .min(1, 'Email is required')
//     .email('Invalid email address'),
// });

// function FormFull() {
//   const [previousStep, setPreviousStep] = useState(0);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [selectedNationality, setSelectedNationality] = useState();
//   const delta = currentStep - previousStep;
//   const steps = [
//     {
//       id: 'Student Information',
//       fields: ['studentNationalID', 'nationality'],
//     },
//     {
//       id: 'Father Information',
//       fields: ['fatherNationality'],
//     },
//     {
//       id: 'Mother Information',
//       fields: ['motherEmail'],
//     },
//     { id: 'Complete' },
//   ];

//   const form = useForm<z.infer<typeof FormDataSchema>>({
//     resolver: zodResolver(FormDataSchema),
//     mode: 'onChange',
//     defaultValues: {
//       studentNationalID: '',
//       motherEmail: '',
//     },
//   });

//   const processForm = async (values: z.infer<typeof FormDataSchema>) => {
//     console.log({ values });
//   };
//   type Inputs = z.infer<typeof FormDataSchema>;

//   type FieldName = keyof Inputs;
//   const next = async () => {
//     const fields = steps[currentStep].fields;
//     const output = await form.trigger(fields as FieldName[], {
//       shouldFocus: true,
//     });

//     if (!output) return;

//     const x = form.watch('studentNationalID');

//     const y = form.watch('nationality');

//     if (y == 'saudi arabia' && x.length < 12) {
//       form.setError('studentNationalID', {
//         type: 'manual',
//         message: 'Student National ID must be at least 12 characters',
//       });
//       return;
//     }
//     if (y == 'saudi arabia' && x.length == 12) {
//       const xAsString = x.toString();

//       if (xAsString.charAt(0) !== '1') {
//         form.setError('studentNationalID', {
//           type: 'manual',
//           message: 'Student National ID must be Started with 1',
//         });
//         return;
//       }
//     }

//     if (currentStep < steps.length - 1) {
//       if (currentStep === steps.length - 2) {
//         await form.handleSubmit(processForm)();
//       }
//       setPreviousStep(currentStep);
//       setCurrentStep((step) => step + 1);
//     }
//   };

//   const prev = () => {
//     if (currentStep > 0) {
//       setPreviousStep(currentStep);
//       setCurrentStep((step) => step - 1);
//     }
//   };

//   return (
//     <section className="absolute inset-0 flex flex-col justify-between p-6 md:p-24">
//       {' '}
//       <Steps currentStep={currentStep} steps={steps}></Steps>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(processForm)} className=" py-12 ">
//           {currentStep === 0 && (
//             <motion.div
//               initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.3, ease: 'easeInOut' }}
//             >
//               <div>
//                 <div className="my-2">
//                   <Label className="text-base font-semibold leading-7 ">
//                     Student Information
//                   </Label>
//                   <p className=" text-sm leading-6 text-gray-600">
//                     Provide Student Information details.
//                   </p>
//                 </div>
//                 <div className="mt-5 grid grid-cols-1 md:grid-cols-3  gap-6 ">
//                   {/* nationality */}
//                   <div className="">
//                     <FormField
//                       control={form.control}
//                       name="nationality"
//                       render={({ field }) => (
//                         <FormItem className="bg-transparent">
//                           <FormLabel className="block text-sm font-medium leading-6 ">
//                             <span className="text-red-500">*</span>
//                             Nationality
//                           </FormLabel>
//                           <FormControl className="bg-slate-500 ">
//                             <>
//                               <select
//                                 defaultValue=""
//                                 id="nationality"
//                                 {...field}
//                                 // autoComplete="nationality-name"
//                                 className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
//                                  ring-gray-300 focus:ring-2 focus:ring-inset
//                                   focus:ring-green-500  sm:text-sm sm:leading-6"
//                               >
//                                 <option
//                                   className="text-gray-200 text-sm"
//                                   value=""
//                                   disabled
//                                 >
//                                   Select nationality
//                                 </option>
//                                 <option value={'saudi arabia'}>
//                                   Saudi Arabia
//                                 </option>
//                                 <option value={'egypt'}>Egypt</option>
//                                 <option value={'korean'}>Korean</option>
//                               </select>
//                               <FormMessage></FormMessage>
//                             </>
//                           </FormControl>
//                         </FormItem>
//                       )}
//                     />
//                   </div>
//                   {/* std id */}
//                   <div className="">
//                     <FormField
//                       control={form.control}
//                       name="studentNationalID"
//                       render={({ field }) => (
//                         <FormItem className="bg-transparent">
//                           <FormLabel className="block text-sm font-medium leading-6 ">
//                             <span className="text-red-500">*</span>
//                             Student National ID
//                           </FormLabel>
//                           <FormControl>
//                             <Input
//                               placeholder={'student national id'}
//                               type="text"
//                               {...field}
//                               // {...register('studentNationalID')}
//                               className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
//                             />
//                           </FormControl>

//                           {form.formState.errors.studentNationalID && (
//                             <div className="text-red-500 text-sm mt-2">
//                               {form.formState.errors.studentNationalID.message}
//                             </div>
//                           )}
//                         </FormItem>
//                       )}
//                     />
//                   </div>
//                   {/* Passport Number */}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//           {/* father info */}

//           {currentStep === 1 && (
//             <motion.div
//               initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.3, ease: 'easeInOut' }}
//             >
//               <h2 className="text-base font-semibold leading-7 ">Address</h2>
//               <p className="mt-1 text-sm leading-6 text-gray-600">
//                 Father details Info
//               </p>
//               <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
//                 {/* nationality */}
//                 <div className="">
//                   <FormField
//                     control={form.control}
//                     name="fatherNationality"
//                     render={({ field }) => (
//                       <FormItem className="bg-transparent">
//                         <FormLabel className="block text-sm font-medium leading-6 ">
//                           <span className="text-red-500">*</span>
//                           Father Nationality
//                         </FormLabel>
//                         <FormControl className="bg-slate-500 ">
//                           <>
//                             <select
//                               defaultValue=""
//                               id="fatherNationality"
//                               {...field}
//                               className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
//                                  ring-gray-300 focus:ring-2 focus:ring-inset
//                                   focus:ring-green-500   sm:leading-6"
//                             >
//                               <option
//                                 className="text-gray-200 text-sm"
//                                 value=""
//                                 disabled
//                               >
//                                 Select nationality
//                               </option>
//                               <option value={'saudi arabia'}>
//                                 Saudi Arabia
//                               </option>
//                               <option value={'egypt'}>Egypt</option>
//                               <option value={'korean'}>Korean</option>
//                             </select>
//                             <FormMessage></FormMessage>
//                           </>
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Father work*/}
//               </div>
//             </motion.div>
//           )}

//           {/* mother info */}

//           {currentStep === 2 && (
//             <motion.div
//               initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.3, ease: 'easeInOut' }}
//             >
//               <p className="mt-1 text-sm leading-6 text-gray-600">
//                 Mother details Info
//               </p>

//               <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
//                 {/* father email */}
//                 <div className="">
//                   <FormField
//                     control={form.control}
//                     name="motherEmail"
//                     render={({ field }) => (
//                       <FormItem className="bg-transparent">
//                         <FormLabel className="block text-sm font-medium leading-6 ">
//                           <span className="text-red-500">*</span>
//                           mother Email Address
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder={'motherEmail'}
//                             type="motherEmail"
//                             {...field}
//                             className=" p-4 h-14  text-sm md:text-lg font-normal "
//                           />
//                         </FormControl>

//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Mother National ID*/}
//               </div>
//             </motion.div>
//           )}

//           {currentStep === steps.length - 1 && <div>Thanks alot</div>}

//           <div className="mt-3  pt-5 pb-5"></div>
//         </form>
//       </Form>
//       <div className="flex justify-between">
//         <button
//           type="button"
//           onClick={prev}
//           disabled={currentStep === 0}
//           className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>
//         <button
//           type="button"
//           onClick={next}
//           disabled={currentStep === steps.length - 1}
//           className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// }

// export default FormFull;
