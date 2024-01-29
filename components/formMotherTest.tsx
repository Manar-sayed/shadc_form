import React, { useEffect, useState } from 'react';
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
import TooltipComp from './FORM/tooltipComp';
import PopverComp from './FORM/popverComp';
function MotherFormTest({ form, motherShow, setMotherShow }: any) {
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
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="mothernationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Mother Nationality
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'select nationality'} />
                    ) : (
                      <PopverComp title={'select nationality'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl className="bg-slate-500 ">
                      <>
                        <select
                          id="mothernationality"
                          {...field}
                          className="w-full rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      mother National ID
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write mother National id'} />
                    ) : (
                      <PopverComp title={'write mother National id'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'mother national id'}
                        type="text"
                        {...field}
                        className="  text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Is the mother a DAS employee
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'is mother a DAS employee?'} />
                    ) : (
                      <PopverComp title={'is mother a DAS employee?'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
                          id="motherDASEmployee"
                          {...field}
                          className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color   sm:leading-6"
                        >
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

        {/* DAS Dhahrani */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASDhahrani"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Did the mother study in DAS (Dhahrani)
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp
                        title={'did mother study in DAS (Dhahrani)?'}
                      />
                    ) : (
                      <PopverComp
                        title={'did mother study in DAS (Dhahrani)?'}
                      />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
                          id="motherDASDhahrani"
                          {...field}
                          className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                        >
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
      </div>
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        {/* DASalumnus */}
        <div className="">
          <FormField
            control={form.control}
            name="motherDASalumnus"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Is the mother a DAS alumnus
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'is mother a DAS alumnus?'} />
                    ) : (
                      <PopverComp title={'is mother a DAS alumnus?'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
                          id="motherDASalumnus"
                          {...field}
                          className="px-3 placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-color  sm:text-sm sm:leading-6"
                        >
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
        {/* mother work*/}
        <div className="">
          <FormField
            control={form.control}
            name="motherwork"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      Mother work
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write mother work'} />
                    ) : (
                      <PopverComp title={'write mother work'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'mother work'}
                        type="text"
                        {...field}
                        className="   text-sm md:text-lg font-normal "
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
      {motherShow && (
        <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
          {/* Exp Date */}
          <div className="md:flex w-full items-center gap-3 bg-transparent">
            <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
              <FormLabel className=" mt-3 md:mt-0 block mb-3">
                {' '}
                <span className="text-red-500">*</span>
                Mother Aramco Exp Date
              </FormLabel>
              {isLarge ? (
                <TooltipComp title={'select mother aramco id exp date'} />
              ) : (
                <PopverComp title={'select mother aramco id exp date'} />
              )}
            </div>
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

          <div className="">
            <FormField
              control={form.control}
              name="motherAramcoId"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <div className="md:flex justify-center items-center gap-3 bg-transparent">
                    <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                      <FormLabel className="   block text-sm font-medium leading-6 ">
                        {' '}
                        <span className="text-red-500">*</span>
                        mother Aramco ID
                      </FormLabel>
                      {isLarge ? (
                        <TooltipComp title={'write mother aramco id'} />
                      ) : (
                        <PopverComp title={'write mother aramco id'} />
                      )}
                    </div>
                    <div className="w-[100%] items-start ">
                      <FormControl>
                        <Input
                          placeholder={'mother aramco id'}
                          type="text"
                          {...field}
                          className="   text-sm md:text-lg font-normal "
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
      )}

      {/* names */}
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 xl:gap-7">
        <div className="">
          <FormField
            control={form.control}
            name="motherName"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      mother name
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write mother name (en)'} />
                    ) : (
                      <PopverComp title={'write mother name (en)'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'mother name'}
                        className="   text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      mother Name Arabic
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write mother name (ar)'} />
                    ) : (
                      <PopverComp title={'write mother name (ar)'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl {...field}>
                      <Input
                        placeholder={'mother name arabic'}
                        className="   text-sm md:text-lg font-normal "
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
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      {' '}
                      <span className="text-red-500">*</span>
                      mother Email Address
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write mother email address'} />
                    ) : (
                      <PopverComp title={'write mother email address'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'motherEmail'}
                        type="motherEmail"
                        {...field}
                        className="  text-sm md:text-lg font-normal "
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
        <div className="md:flex w-full items-center gap-3  bg-transparent">
          <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
            <FormLabel className="   block text-sm font-medium leading-6 ">
              {' '}
              <span className="text-red-500">*</span>
              Phone Number:
            </FormLabel>
            {isLarge ? (
              <TooltipComp title={'write mother phone number'} />
            ) : (
              <PopverComp title={'write mother phone number'} />
            )}
          </div>
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
                        height: '40px',
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
