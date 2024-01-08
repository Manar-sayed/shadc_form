import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Controller } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

import ReactDatePicker from 'react-datepicker';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';

interface MotherFormProps {
  form: any; // Pass the form object from the parent component
}

function MotherForm({ form }: any) {
  return (
    <div>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Mother details Info
      </p>

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="mothernationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Mother Nationality
                </FormLabel>
                <FormControl className="bg-slate-500 ">
                  <>
                    <select
                      defaultValue=""
                      id="mothernationality"
                      {...field}
                      className="w-full rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
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

        {/* Mother National ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="motherNationalID"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  mother National ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={'mother national id'}
                    type="text"
                    {...field}
                    className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* father email */}
        <div className="">
          <FormField
            control={form.control}
            name="motherEmail"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  mother Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={'motherEmail'}
                    type="motherEmail"
                    {...field}
                    className=" p-4 h-14  text-sm md:text-lg font-normal "
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
        {/* DAS Employee */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASEmployee"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Is the mother a DAS employee
                </FormLabel>
                <FormControl>
                  <>
                    <select
                      defaultValue=""
                      id="motherDASEmployee"
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
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* DAS Dhahrani */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASDhahrani"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Did the mother study in DAS (Dhahrani)
                </FormLabel>
                <FormControl>
                  <>
                    <select
                      defaultValue=""
                      id="motherDASDhahrani"
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
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* DASalumnus */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASalumnus"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Is the mother a DAS alumnus
                </FormLabel>
                <FormControl>
                  <>
                    <select
                      defaultValue=""
                      id="motherDASalumnus"
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
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
        {/* mother work*/}
        <div className="">
          <FormField
            control={form.control}
            name="motherwork"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Mother work
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={'mother work'}
                    type="text"
                    {...field}
                    className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Exp Date */}
        <div>
          <FormLabel className="block mb-3">Mother Aramco Exp Date</FormLabel>

          <Controller
            control={form.control}
            name="motherexpDate"
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

        {/* mother Aramco ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="motherAramcoId"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  mother Aramco ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={'mother aramco id'}
                    type="text"
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
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
        <div className="">
          <FormField
            control={form.control}
            name="motherName"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  mother name
                </FormLabel>
                <FormControl {...field}>
                  <Input
                    placeholder={'mother name'}
                    className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <FormField
            control={form.control}
            name="motherNameArabic"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  mother Name Arabic
                </FormLabel>
                <FormControl {...field}>
                  <Input
                    placeholder={'mother name arabic'}
                    className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* motherphone */}
        <div>
          <FormLabel className="block mb-3">Phone Number:</FormLabel>
          <Controller
            name="motherPhone"
            control={form.control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <>
                <div className="div-dir">
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry="SA"
                    id="PhoneInput"
                    //
                    className={`mt-4 p-2 w-full border border-solid    dark:border-dark-color rounded`}
                  />
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
  );
}

export default MotherForm;
