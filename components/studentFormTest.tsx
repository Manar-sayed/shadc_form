// import React from 'react';
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '././ui/form';
// import { Input } from '././ui/input';
// function StudentFormTest({ form }: any) {

//   return (
//     <div>
//       <div className="mt-5 grid grid-cols-1 md:grid-cols-3  gap-6 ">
//         <div className="">
//           <FormField
//             control={form.control}
//             name="nationality"
//             render={({ field }) => (
//               <FormItem className="bg-transparent">
//                 <FormLabel className="block text-sm font-medium leading-6 ">
//                   {' '}
//                   <span className="text-red-500">*</span>
//                   Nationality
//                 </FormLabel>
//                 <FormControl className="bg-slate-500 ">
//                   <>
//                     <select
//                       defaultValue=""
//                       id="nationality"
//                       {...field}
//                       className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
//                        ring-gray-300 focus:ring-2 focus:ring-inset
//                         focus:ring-green-500  sm:text-sm sm:leading-6"
//                     >
//                       <option
//                         className="text-gray-200 text-sm"
//                         value=""
//                         disabled
//                       >
//                         Select nationality
//                       </option>
//                       <option value={'saudi arabia'}>Saudi Arabia</option>
//                       <option value={'egypt'}>Egypt</option>
//                       <option value={'korean'}>Korean</option>
//                     </select>
//                     <FormMessage></FormMessage>
//                   </>
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="">
//           <FormField
//             control={form.control}
//             name="StudentID"
//             render={({ field }) => (
//               <FormItem className="bg-transparent">
//                 <FormLabel className="block text-sm font-medium leading-6 ">
//                   {' '}
//                   <span className="text-red-500">*</span>
//                   Student ID
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder={'student national id'}
//                     type="text"
//                     {...field}
//                     className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentFormTest;

import React, { useEffect } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '././ui/form';
import { Input } from '././ui/input';
import { Label } from './ui/label';
import { CalendarCheck2 } from 'lucide-react';
import ReactDatePicker from 'react-datepicker';
import { Controller, UseFormReturn } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

function StudentFormTest({ form }: any) {
  // Custom validation rule for StudentID based on selected nationality
  //   useEffect(() => {
  //     const unregister = form.register('StudentID', {
  //       validate: (value: any) => {
  //         const selectedNationality = form.getValues('nationality');
  //         if (selectedNationality === 'egypt') {
  //           return (
  //             value.length === 12 &&
  //             /^\d+$/.test(value) &&
  //             'Student ID must have 12 numbers for Egyptian nationality'
  //           );
  //         }
  //         // Reset validation for other nationalities
  //         return true;
  //       },
  //     });

  //     return () => unregister();
  //   }, [form]);

  //   useEffect(() => {
  //     const unregister = form.register('StudentID', {
  //       validate: (value:any) => {
  //         const selectedNationality = form.getValues('nationality');
  //         if (selectedNationality === 'egypt') {
  //           return (
  //             value.length === 12 &&
  //             /^\d+$/.test(value) &&
  //             'Student ID must have 12 numbers for Egyptian nationality'
  //           );
  //         }
  //         // Reset validation for other nationalities
  //         return true;
  //       },
  //     });

  //     return () => {}; // Empty cleanup function
  //   }, [form]);

  return (
    <div>
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center  gap-y-2 gap-x-7">
        {/* nationality */}
        <div className="-mb-3 md:mb-0">
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Nationality
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl className="bg-slate-500 ">
                      {/* <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={'saudi arabia'}>
                            Saudi Arabia
                          </SelectItem>
                          <SelectItem value={'egypt'}>
                            Egypt
                          </SelectItem>
                          <SelectItem value={'korean'}>
                            Korean
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                      <>
                        <select
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
                          ></option>
                          <option value={'saudi arabia'}>Saudi Arabia</option>
                          <option value={'egypt'}>Egypt</option>
                          <option value={'korean'}>Korean</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
                <div className="md:flex justify-center items-center bg-transparent ">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Student National ID
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'student national id'}
                        type="text"
                        {...field}
                        // {...register('studentNationalID')}
                        className=" p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>

                {/* {form.formState.errors.studentNationalID && (
                  <div className="text-red-500 text-sm mt-2">
                    {form.formState.errors.studentNationalID.message}
                  </div>
                )} */}
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* names */}
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-2 gap-x-7 ">
        <div className="">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent ">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6  ">
                    {' '}
                    <span className="text-red-500">*</span>
                    First name
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'first name'}
                        className=" p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Middle name
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'middle name'}
                        className=" p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="thirdName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Third name
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'third name'}
                        {...field}
                        className=" p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Last name
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'last name'}
                        {...field}
                        className=" p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* arabic names */}
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-2 gap-x-7">
        <div className="">
          <FormField
            control={form.control}
            name="arabicfirstName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    First name (Arabic)
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic first name'}
                        {...field}
                        className="  p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="arabicmiddleName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Middle name (Arabic)
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic middle name'}
                        {...field}
                        className="  p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="arabicthirdName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Third name (Arabic)
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic third name'}
                        {...field}
                        className="  p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="arabiclastName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Last name (Arabic)
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic last name'}
                        {...field}
                        className="  p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-2 gap-x-7">
        {/* place of birth */}
        <div className="">
          <FormField
            control={form.control}
            name="placeofBirth"
            render={({ field, fieldState }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Place of Birth
                  </FormLabel>

                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'place of birth'}
                        {...field}
                        className=" p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>

        {/* Date of Birth */}
        <div className="md:flex w-full justify- items-center  bg-transparent">
          <FormLabel className="md:w-[30%] mt-3 md:mt-0 block mb-3">
            {' '}
            <span className="text-red-500">*</span>
            Select Brith Date:
          </FormLabel>
          <div className="w-full">
            <Controller
              control={form.control}
              name="birthDate"
              render={({ field: { onChange, value }, fieldState }) => (
                <>
                  <div
                    className={`border-2  bg-white rounded-md  border-gray-200 flex justify-between items-center px-3 `}
                  >
                    <ReactDatePicker
                      placeholderText="Select Date Picker"
                      id="ReactDatePicker"
                      onChange={onChange}
                      selected={value}
                      maxDate={new Date()}
                      className={`
                     text-sm md:text-lg font-normal 
                     bg-transparent
                      placeholder:text-gray-300 placeholder:text-sm
                      rounded-md  sm:text-sm
                        ${fieldState.error && 'border-red-600'}`}
                    />
                    <CalendarCheck2 className=" text-gray-300" />
                  </div>
                  {fieldState.error && (
                    <FormMessage className=" my-2">
                      {fieldState.error.message}
                    </FormMessage>
                  )}
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-2 gap-x-7">
        {/* Religion */}
        <div className="">
          <FormField
            control={form.control}
            name="religion"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Religion
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
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
                          {/* <option
                            className="text-gray-200 text-sm"
                            value=""
                            disabled
                          >
                            Select Religion
                          </option> */}
                          <option value={'muslim'}>Muslim</option>
                          <option value={'christian'}>Christian</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    <span className="text-red-600">*</span>
                    Current Grade
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
                          defaultValue=""
                          id="currentGrade"
                          {...field}
                          // autoComplete="currentGrade-name"
                          className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
                        >
                          {/* <option
                            className="text-gray-200 text-sm"
                            value=""
                            disabled
                          >
                            Select current grade
                          </option> */}

                          <option value={'excellent'}>Excellent</option>
                          <option value={'very good'}>Very Good</option>
                          <option value={'good'}>Good </option>
                          <option value={'none'}>none</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-600">*</span>
                    Enrolment Year
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
                          defaultValue=""
                          id="enrolmentYear"
                          {...field}
                          // autoComplete="enrolmentYear-name"
                          className=" px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
                        >
                          {/* <option
                            className="text-gray-200 text-sm"
                            value=""
                            disabled
                          >
                            Select Enrolment year
                          </option> */}
                          <option value={'2016-2017'}>2016-2017</option>
                          <option value={'2017-2018'}>2017-2018</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-600">*</span>
                    Applying for Grade
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
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
                          {/* <option
                            className="text-gray-200 text-sm"
                            value=""
                            disabled
                          >
                            Select grade
                          </option> */}
                          <option value={'grade 11'}>Grade 11</option>
                          <option value={'grade 12'}>Grade 12</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-600">*</span>
                    DAS
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
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
                          {/* <option
                            className="text-gray-200 text-sm"
                            value=""
                            disabled
                          >
                            Select DAS
                          </option> */}
                          <option value={'yes'}>Yes</option>
                          <option value={'no'}>No</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-600">*</span>
                    Aramco Relation
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
                          id="aramcoRelation"
                          {...field}
                          className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 
            py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
            focus:ring-inset focus:ring-green-500  sm:text-sm sm:leading-6"
                        >
                          <option
                            className="text-gray-200 text-sm"
                            value=""
                          ></option>
                          <option value={'father'}>Father</option>
                          <option value={'mother'}>Mother</option>
                          <option value={'both'}>Both</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
        {/* <div className="">
          <FormField
            control={form.control}
            name="aramcoRelation"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-600">*</span>
                    Aramco Relation
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
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
                         
                          <option value={'father'}>Father</option>
                          <option value={'mother'}>Mother</option>
                          <option value={'both'}>Both</option>
                        </select>
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div> */}
      </div>

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-2 gap-x-7">
        {/* current school name */}
        <div className="">
          <FormField
            control={form.control}
            name="currentSchoolName"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    Current SchoolName
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'current school name'}
                        {...field}
                        className="mb-2 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
              <FormItem>
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0 block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Passport Number
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'passport number'}
                        {...field}
                        className="mb-2  p-4 h-14  text-sm md:text-lg font-normal "
                      />
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center  gap-y-2 gap-x-7">
        {/* gender */}
        <div className="flex justify-between mb-2">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <div className="md:flex w-full justify- items-center bg-transparent   space-y-3">
                  <FormLabel className="w-[100%]  block text-sm font-medium leading-6 md:me-14 ">
                    <span className="text-red-500">*</span>
                    Select Gender...
                  </FormLabel>
                  <div className="w-[100%] items-start  ">
                    <FormControl className=" ">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex  space-x-5"
                      >
                        <FormItem className="flex justify-center items-center  space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="md:w-[30%] mt-3 md:mt-0 font-normal">
                            Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex justify-center items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="md:w-[30%] mt-3 md:mt-0 font-normal">
                            Female
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
    // <div>
    //   <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 ">
    //      nationality
    //     <div className="">
    //       <FormField
    //         control={form.control}
    //         name="nationality"
    //         render={({ field }) => (
    //           <FormItem className="bg-transparent">
    //             <FormLabel className="block text-sm font-medium leading-6 ">
    //               {' '}
    //               <span className="text-red-500">*</span>
    //               Nationality
    //             </FormLabel>
    //             <FormControl className="bg-slate-500 ">
    //               <>
    //                 <select
    //                   defaultValue=""
    //                   id="nationality"
    //                   {...field}
    //                   className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
    //                    ring-gray-300 focus:ring-2 focus:ring-inset
    //                     focus:ring-green-500  sm:text-sm sm:leading-6"
    //                 >
    //                   <option
    //                     className="text-gray-200 text-sm"
    //                     value=""
    //                     disabled
    //                   >
    //                     Select nationality
    //                   </option>
    //                   <option value={'saudi arabia'}>Saudi Arabia</option>
    //                   <option value={'egypt'}>Egypt</option>
    //                   <option value={'korean'}>Korean</option>
    //                 </select>
    //                 <FormMessage></FormMessage>
    //               </>
    //             </FormControl>
    //           </FormItem>
    //         )}
    //       />
    //     </div>
    //      std id
    //     <div className="">
    //       <FormField
    //         control={form.control}
    //         name="StudentID"
    //         rules={{
    //           required: true,
    //         }}
    //         render={({ field }) => (
    //           <FormItem className="bg-transparent">
    //             <FormLabel className="block text-sm font-medium leading-6 ">
    //               {' '}
    //               <span className="text-red-500">*</span>
    //               Student ID
    //             </FormLabel>
    //             <FormControl>
    //               <Input
    //                 placeholder={'student national id'}
    //                 type="text"
    //                 {...field}
    //                 // onChange={onChange}
    //                 className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
    //               />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default StudentFormTest;
