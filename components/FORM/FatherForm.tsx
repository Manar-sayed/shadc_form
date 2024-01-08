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
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

interface FatherFormProps {
  form: UseFormReturn<z.infer<any>>;
}
function FatherForm({ form }: any) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 ">Address</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Father details Info
      </p>
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="fatherNationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
                    <FormMessage></FormMessage>
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* Father National ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="fatherNationalID"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
                <FormLabel className="block text-sm font-medium leading-6 ">
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

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* father phone */}
        <div>
          <FormLabel className="block mb-3">Father Mobile No</FormLabel>
          <Controller
            name="fatherPhone"
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
                    defaultCountry="JO"
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

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3">
        {/* Father work*/}
        <div className="">
          <FormField
            control={form.control}
            name="fatherwork"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Father Aramco ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="faterAramcoId"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Exp Date */}
        <div>
          <FormLabel className="block mb-3">Father Aramco Exp Date</FormLabel>

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

      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
        {/* DAS Employee */}
        <div className="">
          <FormField
            control={form.control}
            name="DASEmployee"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
            name="DASDhahrani"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
            name="DASalumnus"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default FatherForm;
