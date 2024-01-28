'use client';
import ImageForm from '@/components/FORM/ImageForm';
// import TestForm from '@/components/FORM/testForm';
import { Button } from '@/components/ui/button';
import Upload from '@/components/upload/uploadComp';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ImageUploading from 'react-images-uploading';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import ImageUploader from '@/components/upload/uploadComp';
import TestForm from '@/components/finalformwork';
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
export default function App() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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
  return (
    <div className="mt-10 container">
      {/* <TestForm/> */}
      <ImageForm form={form} />
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="images"
          control={control}
          defaultValue={[]}
          rules={{
            validate: (value) =>
              value.length > 0 || 'PLZ Upload at Least One Image',
          }}
          render={({ field }) => (
            <>
              <Upload
                maxNumber={1}
                {...field}
                title="Birth Certificate"
                desc="(For Kids And Grade 1 only)"
              />
              {errors.images && (
                <p className="text-red-400">{errors?.images?.message}</p>
              )}
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form> */}
      {/* upload without validation or form */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center ">
        <div className="">
          <Upload
            maxNumber={1}
            title="Birth Certificate"
            desc="(For Kids And Grade 1 only)"
          />
        </div>
        <div className="">
          <Upload
            maxNumber={1}
            title="Family National Id"
            desc="(Father ,Mother ,Student)"
          />
        </div>

        <div className="">
          <Upload
            maxNumber={1}
            title="4*6 Cm Photograph"
            desc="(For Kids And Grade 1 only)"
          />
        </div>

        <div className="">
          <Upload
            maxNumber={6}
            title="Student Immuniazation"
            desc="(Kindergration Only)"
          />
        </div>
        <div className="  ">
          <Upload
            maxNumber={1}
            title="Medical Report"
            desc="(Visual & Hearing)"
          />
        </div>
        <div className="  ">
          <Upload maxNumber={1} title="Disease Free Certificate" desc="()" />
        </div>
      </div> */}
    </div>
  );
}
