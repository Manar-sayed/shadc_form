import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '././ui/form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from './ui/input';
import { Controller, useForm } from 'react-hook-form';
import { CalendarCheck2 } from 'lucide-react';
import TooltipComp from './FORM/tooltipComp';
import PopverComp from './FORM/popverComp';

function FatherFormTest({ form, fatherShow, setFatherShow }: any) {
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
    <div className="">
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 md:gap-7">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="fatherNationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Father Nationality
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'select nationality'} />
                    ) : (
                      <PopverComp title={'select nationality'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
                          id="fatherNationality"
                          {...field}
                          className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-primary-color   sm:leading-6"
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
        {/* Father National ID*/}
        <div className="">
          <FormField
            control={form.control}
            name="fatherNationalID"
            render={({ field }) => (
              <FormItem className="bg-transparent space-y-0">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Father National ID
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write father national id'} />
                    ) : (
                      <PopverComp title={'write father national id'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'father national id'}
                        type="text"
                        {...field}
                        // {...register('fatherNationalID')}
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
      {fatherShow && (
        <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 md:gap-7">
          {/* Father Aramco ID*/}

          <div className="">
            <FormField
              control={form.control}
              name="faterAramcoId"
              render={({ field }) => (
                <FormItem className="bg-transparent ">
                  <div className="md:flex justify-center items-center gap-3 bg-transparent">
                    <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                      <FormLabel className="   block text-sm font-medium leading-6 ">
                        <span className="text-red-500">*</span>
                        Father Aramco ID
                      </FormLabel>
                      {isLarge ? (
                        <TooltipComp title={'write father aramco id'} />
                      ) : (
                        <PopverComp title={'write father aramco id'} />
                      )}
                    </div>
                    <div className="w-[100%] items-start ">
                      <FormControl>
                        <Input
                          placeholder={'father aramco id'}
                          type="text"
                          {...field}
                          className="text-sm md:text-lg font-normal "
                        />
                      </FormControl>
                      <FormMessage className="my-2" />
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>

          {/* Exp Date */}
          <div className="md:flex justify-center items-center gap-3 bg-transparent">
            <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
              <FormLabel className="   block text-sm font-medium leading-6 ">
                <span className="text-red-500">*</span>
                Father Aramco Exp Date
              </FormLabel>
              {isLarge ? (
                <TooltipComp title={'select father aramco id exp date'} />
              ) : (
                <PopverComp title={'select father aramco id exp date'} />
              )}
            </div>
            <div className="w-[100%]">
              <Controller
                control={form.control}
                name="expDate"
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
                      <FormMessage className="my-2">
                        {fieldState.error.message}
                      </FormMessage>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
      )}
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-2 gap-x-7 ">
        {/* DAS Employee */}
        <div className="">
          <FormField
            control={form.control}
            name="DASEmployee"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Is the father a DAS employee
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'is the father a DAS employee?'} />
                    ) : (
                      <PopverComp title={'is the father a DAS employee?'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
                          id="DASEmployee"
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
            name="DASDhahrani"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Did the father study in DAS (Dhahrani)
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp
                        title={'did father study in DAS (Dhahrani)?'}
                      />
                    ) : (
                      <PopverComp
                        title={'did father study in DAS (Dhahrani)?'}
                      />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
                          id="DASDhahrani"
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

        {/* DASalumnus */}
        <div className="">
          <FormField
            control={form.control}
            name="DASalumnus"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Is the father a DAS alumnus
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'is father a DAS alumnus?'} />
                    ) : (
                      <PopverComp title={'is father a DAS alumnus?'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <>
                        <select
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
        {/* Father work*/}
        <div className="">
          <FormField
            control={form.control}
            name="fatherwork"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Father work
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write father wrok'} />
                    ) : (
                      <PopverComp title={'write father wrok'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'father work'}
                        type="text"
                        {...field}
                        // {...register('fatherwork')}
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

      <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 md:gap-7">
        {/* father email */}
        <div className="">
          <FormField
            control={form.control}
            name="fatherEmail"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <div className="md:flex justify-center items-center gap-3 bg-transparent">
                  <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
                    <FormLabel className="   block text-sm font-medium leading-6 ">
                      <span className="text-red-500">*</span>
                      Father Email Address
                    </FormLabel>
                    {isLarge ? (
                      <TooltipComp title={'write father email address'} />
                    ) : (
                      <PopverComp title={'write father email address'} />
                    )}
                  </div>
                  <div className="w-[100%] items-start ">
                    <FormControl>
                      <Input
                        placeholder={'fatherEmail'}
                        type="fatherEmail"
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

        {/* father phone */}

        <div className="md:flex w-full justify- items-center gap-3 bg-transparent">
          <div className="flex mb-1 mt-3 md:mt-0   md:w-[70%] ">
            <FormLabel className="   block text-sm font-medium leading-6 ">
              <span className="text-red-500">*</span>
              Father Mobile No
            </FormLabel>
            {isLarge ? (
              <TooltipComp title={'write father phone number'} />
            ) : (
              <PopverComp title={'write father phone number'} />
            )}
          </div>
          <div className="w-[100%] items-start ">
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
                        height: '40px',
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
    </div>
  );
}

export default FatherFormTest;
