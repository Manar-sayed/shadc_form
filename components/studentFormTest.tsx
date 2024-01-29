import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '././ui/form';
import { Input } from '././ui/input';
import { Label } from './ui/label';
import { BadgeInfo, CalendarCheck2, Trash } from 'lucide-react';
import ReactDatePicker from 'react-datepicker';
import { Controller, UseFormReturn } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import TooltipComp from './FORM/tooltipComp';
import PopverComp from './FORM/popverComp';

function StudentFormTest({ form }: any) {
  const isLargeScreen = window.innerWidth >= 1028;
  const [isLarge, setIsLarge] = useState(isLargeScreen);

  const handleWindowSizeChange = () => {
    setIsLarge(window.innerWidth >= 1028);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Nationality
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'select nationality'} />
                    ) : (
                      <PopverComp
                        title={'select nationality'}
                        placement="top"
                      />
                    )}
                  </div>

                  <div className="w-[100%] items-start ">
                    <div className="flex">
                      <FormControl className="bg-slate-500 ">
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
                            <option value={'Jordan'}>Jordan</option>
                            <option value={'korean'}>Korean</option>
                          </select>
                        </>
                      </FormControl>
                    </div>

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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0  md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Student National ID
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write national id'} />
                    ) : (
                      <PopverComp title={'write national id'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <div className="flex">
                      <FormControl>
                        <Input
                          placeholder={'student national id'}
                          type="text"
                          {...field}
                          // {...register('studentNationalID')}
                          className="   text-sm md:text-lg font-normal "
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent ">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      First name
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write first name (en)'} />
                    ) : (
                      <PopverComp title={'write first name (en)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'first name'}
                        className=" p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Middle name
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write second name (en)'} />
                    ) : (
                      <PopverComp title={'write second name (en)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'middle name'}
                        className=" p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Third name
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write third name (en)'} />
                    ) : (
                      <PopverComp title={'write third name (en)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'third name'}
                        {...field}
                        className=" p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Last name
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write third name (en)'} />
                    ) : (
                      <PopverComp title={'write third name (en)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'last name'}
                        {...field}
                        className=" p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      First name (Arabic)
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write first name (ar)'} />
                    ) : (
                      <PopverComp title={'write first name (ar)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic first name'}
                        {...field}
                        className="  p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Middle name (Arabic)
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write middle name (ar)'} />
                    ) : (
                      <PopverComp title={'write middle name (ar)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic middle name'}
                        {...field}
                        className="  p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className=" block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Third name (Arabic)
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write third name (ar)'} />
                    ) : (
                      <PopverComp title={'write third name (ar)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic third name'}
                        {...field}
                        className="  p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Last name (Arabic)
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write last name (ar)'} />
                    ) : (
                      <PopverComp title={'write last name (ar)'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'arabic last name'}
                        {...field}
                        className="  p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Place of Birth
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'enter place of birth'} />
                    ) : (
                      <PopverComp title={'enter place of birth'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'place of birth'}
                        {...field}
                        className=" p-4    text-sm md:text-lg font-normal "
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
        <div className="md:flex w-full justify- items-center gap-3  bg-transparent">
          <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
            <FormLabel className="   block text-sm font-medium leading-6 ">
              {' '}
              <span className="text-red-500">*</span>
              Select Brith Date:
            </FormLabel>
            {isLargeScreen ? (
              <TooltipComp title={'select brith date'} />
            ) : (
              <PopverComp title={'select brith date'} />
            )}{' '}
          </div>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Religion
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'select religion'} />
                    ) : (
                      <PopverComp title={'select religion'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
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
                          <option
                            className="text-gray-200 text-sm"
                            value=""
                          ></option>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-600">*</span>
                      Current Grade
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'select current grade'} />
                    ) : (
                      <PopverComp title={'select current grade'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
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
                          <option
                            className="text-gray-200 text-sm"
                            value=""
                          ></option>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-600">*</span>
                      Enrolment Year
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'select religion'} />
                    ) : (
                      <PopverComp title={'select religion'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
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
                          <option
                            className="text-gray-200 text-sm"
                            value=""
                          ></option>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-600">*</span>
                      Applying for Grade
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'applying for grade'} />
                    ) : (
                      <PopverComp title={'applying for grade'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
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
                          <option
                            className="text-gray-200 text-sm"
                            value=""
                          ></option>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-600">*</span>
                      Does the student have siblings at DAS
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp
                        title={'Does the student have siblings at DAS'}
                      />
                    ) : (
                      <PopverComp
                        title={'Does the student have siblings at DAS'}
                      />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
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
                          <option
                            className="text-gray-200 text-sm"
                            value=""
                          ></option>
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-600">*</span>
                      Aramco Relation
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'aramco relation'} />
                    ) : (
                      <PopverComp title={'aramco relation'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <>
                        <select
                          id="aramcoRelation"
                          {...field}
                          className="px-3 placeholder:text-gray-300 placeholder:text-sm block
                          w-full rounded-md border-0 py-1.5  s
                          hadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                          focus:ring-inset focus:ring-green-500  sm:leading-6"
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                 <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                       
                <F6 ">
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
                <div className="md:flex justify-center gap-3 items-center bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      Current School Name
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write current school name'} />
                    ) : (
                      <PopverComp title={'write current school name'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'current school name'}
                        {...field}
                        className="mb-2    text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[50%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Passport Number
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'write passport number'} />
                    ) : (
                      <PopverComp title={'write passport number'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start  ">
                    <FormControl>
                      <Input
                        placeholder={'passport number'}
                        {...field}
                        className="mb-2  p-4    text-sm md:text-lg font-normal "
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
                <div className="md:flex w-full justify- items-center bg-transparent gap-3  space-y-3">
                  <div className="flex mb-1 mt-3 md:mt-0   w-[100%] ">
                    <FormLabel className=" w-[100%]   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Select Gender...
                    </FormLabel>
                    {isLargeScreen ? (
                      <TooltipComp title={'select gender'} />
                    ) : (
                      <PopverComp title={'select gender'} />
                    )}{' '}
                  </div>
                  <div className="w-[100%] items-start ms-[10%]  ">
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
                          <FormLabel className=" md:w-[50%] mt-3 md:mt-0 font-normal">
                            Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex justify-center items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className=" md:w-[50%] mt-3 md:mt-0 font-normal">
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
    //                   <option value={'Jordan'}>Jordan</option>
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
    //                 className="mt-10  p-4    text-sm md:text-lg font-normal "
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
