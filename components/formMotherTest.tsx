import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '././ui/form';
import { Input } from '././ui/input';
import { Controller } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

import ReactDatePicker from 'react-datepicker';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';
import { CalendarCheck2 } from 'lucide-react';
function MotherFormTest({ form }: any) {
  return (
    <div>
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="mothernationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Mother Nationality
                  </FormLabel>
                  <div className="w-[100%] items-start ">
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
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    mother National ID
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'mother national id'}
                        type="text"
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

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* DAS Employee */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASEmployee"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    <span className="text-red-500">*</span>
                    Is the mother a DAS employee
                  </FormLabel>
                  <div className="w-[100%] items-start ">
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
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
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
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Did the mother study in DAS (Dhahrani)
                  </FormLabel>
                  <div className="w-[100%] items-start ">
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
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* DASalumnus */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASalumnus"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Is the mother a DAS alumnus
                  </FormLabel>
                  <div className="w-[100%] items-start ">
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
                      </>
                    </FormControl>
                    <FormMessage className="my-2" />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
        {/* mother work*/}
        <div className="">
          <FormField
            control={form.control}
            name="motherwork"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    Mother work
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'mother work'}
                        type="text"
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

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* Exp Date */}
        <div className="md:flex w-full justify- items-center  bg-transparent">
          <FormLabel className="md:w-[30%] mt-3 md:mt-0 block mb-3">
            {' '}
            <span className="text-red-500">*</span>
            Mother Aramco Exp Date
          </FormLabel>
          <div className="w-full">
            <Controller
              control={form.control}
              name="motherexpDate"
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

        {/* mother Aramco ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="motherAramcoId"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    mother Aramco ID
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'mother aramco id'}
                        type="text"
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
      {/* names */}
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        <div className="">
          <FormField
            control={form.control}
            name="motherName"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    mother name
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'mother name'}
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
            name="motherNameArabic"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    mother Name Arabic
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'mother name arabic'}
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

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* mother email */}
        <div className="">
          <FormField
            control={form.control}
            name="motherEmail"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center bg-transparent">
                  <FormLabel className="md:w-[30%] mt-3 md:mt-0  block text-sm font-medium leading-6 ">
                    {' '}
                    <span className="text-red-500">*</span>
                    mother Email Address
                  </FormLabel>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'motherEmail'}
                        type="motherEmail"
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
        {/* motherphone */}
        <div className="md:flex w-full justify- items-center  bg-transparent">
          <FormLabel className="md:w-[30%] mt-3 md:mt-0 block mb-3">
            {' '}
            <span className="text-red-500">*</span>
            Phone Number:
          </FormLabel>
          <div className="w-[100%] items-start ">
            <Controller
              name="motherPhone"
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
                      inputStyle={{
                        borderColor: 'lightgray',
                        width: '100%',
                        borderRadius: '5px',
                        height: '50px',
                      }}
                      country="sa"
                      //
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
    </div>
  );
}

export default MotherFormTest;
