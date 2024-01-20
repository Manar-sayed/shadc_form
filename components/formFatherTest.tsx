import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '././ui/form';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
function FatherFormTest({ form }: any) {
  return (
    <div>
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2">
        <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
          {/* DAS Employee */}
          <div className="">
            <FormField
              control={form.control}
              name="DASEmployee"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <FormLabel className="block text-sm font-medium leading-6 ">
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
                      <FormMessage />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FatherFormTest;
