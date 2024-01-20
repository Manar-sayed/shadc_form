import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import { Input } from '../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { CalendarCheck2 } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import Upload from '../upload/uploadComp';
import ImageUploader from '../upload/uploadComp';

interface FatherFormProps {
  form: UseFormReturn<z.infer<any>>;
}
function FatherForm({ form }: any) {
  return (
    <div>
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="fatherNationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Father Nationality
                  </FormLabel>
                  <FormControl className="bg-slate-500 ">
                    <>
                      <select
                        defaultValue=""
                        id="fatherNationality"
                        {...field}
                        className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-primary-color   sm:leading-6"
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
                    </>
                  </FormControl>
                </div>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
        </div>
        {/* Father National ID*/}
        <div className="-mt-5">
          <FormField
            control={form.control}
            name="fatherNationalID"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Father National ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'father national id'}
                      type="text"
                      {...field}
                      // {...register('fatherNationalID')}
                      className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2">
        {/* Father Aramco ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="faterAramcoId"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Father Aramco ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'father aramco id'}
                      type="text"
                      {...field}
                      className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Exp Date */}
        <div className="flex w-full justify- items-center  bg-transparent">
          <FormLabel className="w-[23%] block mb-3 me-3">
            <span className="text-red-500">*</span>
            Father Aramco Exp Date
          </FormLabel>
          <div className="w-[85%]">
            <Controller
              control={form.control}
              name="expDate"
              render={({ field: { onChange, value }, fieldState }) => (
                <>
                  <div
                    className={`border-2 rounded-sm  border-gray-200 flex justify-between items-center px-3 `}
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
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2 ">
        {/* DAS Employee */}
        <div className="">
          <FormField
            control={form.control}
            name="DASEmployee"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Is the father a DAS employee
                  </FormLabel>
                  <FormControl>
                    <>
                      <select
                        defaultValue=""
                        id="DASEmployee"
                        {...field}
                        className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color   sm:leading-6"
                      >
                        <option
                          className="text-gray-200 text-sm"
                          value=""
                          disabled
                        >
                          Select DAS Employee
                        </option>
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option>
                      </select>
                    </>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* DAS Dhahrani */}
        <div className="">
          <FormField
            control={form.control}
            name="DASDhahrani"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Did the father study in DAS (Dhahrani)
                  </FormLabel>
                  <FormControl>
                    <>
                      <select
                        defaultValue=""
                        id="DASDhahrani"
                        {...field}
                        className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                      >
                        <option
                          className="text-gray-200 text-sm"
                          value=""
                          disabled
                        >
                          Select DAS Dhahrani
                        </option>
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option>
                      </select>
                    </>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* DASalumnus */}
        <div className="">
          <FormField
            control={form.control}
            name="DASalumnus"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Is the father a DAS alumnus
                  </FormLabel>
                  <FormControl>
                    <>
                      <select
                        defaultValue=""
                        {...field}
                        className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                      >
                        <option
                          className="text-gray-200 text-sm"
                          value=""
                          disabled
                        >
                          Select DAS Alumnus
                        </option>
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option>
                      </select>
                    </>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Father work*/}
        <div className="">
          <FormField
            control={form.control}
            name="fatherwork"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Father work
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'father work'}
                      type="text"
                      {...field}
                      // {...register('fatherwork')}
                      className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2">
        {/* father email */}
        <div className="">
          <FormField
            control={form.control}
            name="fatherEmail"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="flex justify-center items-center bg-transparent">
                  <FormLabel className=" w-[30%] block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Father Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'fatherEmail'}
                      type="fatherEmail"
                      {...field}
                      className=" p-4 h-14  text-sm md:text-lg font-normal "
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* father phone */}

        <div className="flex justify-start items-center bg-transparent">
          <FormLabel className=" w-[30%] block mb-3">
            <span className="text-red-500">*</span>
            Father Mobile No
          </FormLabel>
          <Controller
            name="fatherPhone"
            control={form.control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <>
                <div className="flex w-full">
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    // defaultCountry="JO"
                    inputStyle={{
                      borderColor: 'lightgray',
                      width: '100%',
                      borderRadius: '5px',
                      height: '50px',
                    }}
                    country="sa"
                    // id="PhoneInput"
                    // country="US" // Set the country code (ISO 3166-1 alpha-2 code)
                    // placeholder="Enter phone number"
                    //
                    // className={`mt-4 p-2 w-full border border-solid    dark:border-dark-color rounded`}
                  />
                </div>
                {fieldState.error && (
                  <FormMessage className="flex">
                    {fieldState.error.message}
                  </FormMessage>
                )}
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default FatherForm;
