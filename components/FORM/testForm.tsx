// 'use client';
// import React, { useState } from 'react';
// import Form1 from './form1';
// import Form2 from './form2';
// import Form3 from './form3';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Form } from '@/components/ui/form';
// import { z } from 'zod';
// import Steps from '../steps';

// function TestForm() {
//   const [previousStep, setPreviousStep] = useState(0);
//   const [currentStep, setCurrentStep] = useState(0);
//   const delta = currentStep - previousStep;
//   const FormDataSchema = z.object({
//     firstName: z
//       .string()
//       .min(3, { message: 'First name must be at least 3 char' }),
//     // father Info----------------
//     fatherwork: z.string().min(3, 'father work is required'),
//     // mother Info----------------
//     motherwork: z.string().min(3, 'mother work is required'),
//   });

//   const form = useForm<z.infer<typeof FormDataSchema>>({
//     resolver: zodResolver(FormDataSchema),
//     defaultValues: {
//       firstName: '',
//       fatherwork: '',
//       motherwork: '',
//     },
//   });

//   const steps = [
//     {
//       id: 'Student Information',
//       component: <Form1 form={form} />,
//     },
//     {
//       id: 'Father Information',
//       component: <Form2 form={form} />,
//     },
//     {
//       id: 'Mother Information',
//       component: <Form3 form={form} />,
//     },
//     { id: 'Payment' },
//   ];

//   const processForm = async (values: z.infer<typeof FormDataSchema>) => {
//     console.log({ values });
//   };

//   const next = async () => {
//     // ... (remaining code remains the same)
//   };

//   const prev = () => {
//     // ... (remaining code remains the same)
//   };

//   return (
//     <section className="absolute inset-0 flex flex-col justify-between p-6 md:p-24">
//       <Steps currentStep={currentStep} steps={steps} />
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(processForm)} className="py-12 ">
//           {steps[currentStep].component}

//           {/* Remaining code remains the same */}
//         </form>
//       </Form>
//     </section>
//   );
// }

// export default TestForm;

'use client';
import * as z from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import 'react-phone-number-input/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import Steps from '../steps';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import StudentForm from './StudentForm';
import FatherForm from './FatherForm';
import MotherForm from './MotherForm';
import { BadgeCheck, CalendarCheck2 } from 'lucide-react';
import ImageForm from './ImageForm';

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

  aramcoRelation: z.enum(['father', 'mother', 'both']),

  DAS: z.enum(['yes', 'no']),
  // email: z.string().min(1, 'Email is required').email('Invalid email address'),
  passportNumber: z.coerce
    .string()
    .min(8, { message: 'Passport Number must have ayt least 8 numbers' })
    .max(12, { message: 'Passport Number cannot have more than 12 numbers' })
    .refine((data) => /^\d+$/.test(data), {
      message: 'Passport Number must be only numbers',
    }),
  StudentID: z.coerce
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
  diseaseFree: z.custom((value: any) => {
    return value;
  }),
  aramcoID: z.custom((value: any) => {
    return value;
  }),
  //images

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
        'diseaseFree',
        'aramcoID',
      ],
    },
    { id: 'Payment', fields: [] },
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
    <section className="absolute inset-0 flex flex-col justify-between p-6 md:px-24 py-12">
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

      <div className="mt-3 pt-5 pb-5">
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
            className="rounded flex items-center justify-center py-1 text-sm font-semibold bg-primary-color shadow-sm border border-primary-color   hover:bg-transparent hover:text-primary-color disabled:cursor-not-allowed disabled:opacity-50"
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
