import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { motion } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { CalendarCheck2 } from 'lucide-react';
import { Controller, UseFormReturn } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-number-input';
import { z } from 'zod';

interface StudentFormProps {
  form: UseFormReturn<z.infer<any>>; // Pass the form object from the parent component
}

function StudentForm({ form }: any) {
  return (
    // <motion.div
    //   initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   transition={{ duration: 0.3, ease: 'easeInOut' }}
    // >
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
                      <option value={'saudi arabia'}>Saudi Arabia</option>
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
            name="StudentID"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Student ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={'student national id'}
                    type="text"
                    {...field}
                    // {...register('StudentID')}
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

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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

        {/* Date of Birth */}
        <div>
          <FormLabel className="block mb-3">Select Brith Date:</FormLabel>
          <Controller
            control={form.control}
            name="birthDate"
            render={({ field: { onChange, value }, fieldState }) => (
              <>
                <div
                  className={`border rounded-sm  border-gray-200 flex justify-between items-center px-3 mt-[17px]`}
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
                  <FormMessage className="mt-2">
                    {fieldState.error.message}
                  </FormMessage>
                )}
              </>
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

        {/* gender */}
        <div>
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
                      <FormLabel className="font-normal">Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* email */}
        {/* <div className="">
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
        </div> */}
        {/* phone */}
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6"></div>

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
                      focus:ring-green-500  sm:text-sm sm:leading-6"
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
                      className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
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
                      className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
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
                        focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
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
                       focus:ring-inset focus:ring-green-500  sm:leading-6"
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

        {/* Aramco Relation */}
        <div className="">
          <FormField
            control={form.control}
            name="aramcoRelation"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Aramco Relation
                </FormLabel>
                <FormControl>
                  <>
                    <select
                      defaultValue=""
                      id="aramcoRelation"
                      {...field}
                      className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 
                        py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                        focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
                    >
                      <option
                        className="text-gray-200 text-sm"
                        value=""
                        disabled
                      >
                        Select grade
                      </option>
                      <option value={'father'}>Father</option>
                      <option value={'mother'}>Mother</option>
                      <option value={'both'}>Both</option>
                    </select>
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
    // </motion.div>
  );
}

export default StudentForm;
