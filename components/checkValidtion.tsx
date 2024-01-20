'use client';
import * as z from 'zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import 'react-phone-number-input/style.css';
import 'react-datepicker/dist/react-datepicker.css';

import { motion } from 'framer-motion';

import { BadgeCheck } from 'lucide-react';
import Steps from './steps';
import { Button } from './ui/button';
import StudentFormTest from './studentFormTest';
import FatherFormTest from './formFatherTest';
import MotherFormTest from './formMotherTest';
import { register } from 'module';

const FormDataSchema = z
  .object({
    nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
    StudentID: z.string().min(1, { message: 'Please enter Student Id' }),

    DASalumnus: z.enum(['yes', 'no']),
    DASDhahrani: z.enum(['yes', 'no']),
    DASEmployee: z.enum(['yes', 'no']),
    motherEmail: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),
  })
  .refine(
    (data) => {
      if (data.nationality === 'saudi arabia') {
        console.log('data.StudentID.length', data.StudentID.length);
        return data.StudentID.length == 12;
      }
      return true;
    },
    { message: 'Must be 12 characters', path: ['StudentID'] }
  )
  .refine(
    (data) => {
      if (data.nationality === 'egypt') {
        return data.StudentID.length == 14;
      }
      return true;
    },
    { message: 'Must be 14 charactersre', path: ['StudentID'] }
  );
function CheckValidtion() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const delta = currentStep - previousStep;

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    mode: 'onChange',
    defaultValues: {
      StudentID: '',
      motherEmail: '',
    },
  });

  const steps = [
    {
      id: 'Student Information',
      fields: ['StudentID', 'nationality'],
    },
    {
      id: 'Father Information',
      fields: ['DASalumnus', 'DASDhahrani', 'DASEmployee'],
    },
    {
      id: 'Mother Information',
      fields: ['motherEmail'],
    },

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
    // Check if the nationality is 'egypt'

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
      <Steps currentStep={currentStep} steps={steps} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className="py-12 ">
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <StudentFormTest form={form} />
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <FatherFormTest form={form} />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <MotherFormTest form={form} />
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
                    rotate: 720,
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
        </form>
      </Form>

      <div className="mt-3 pt-5 pb-5">
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
      </div>
    </section>
  );
}

export default CheckValidtion;
