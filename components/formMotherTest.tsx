import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '././ui/form';
import { Input } from '././ui/input';
function MotherFormTest({ form }: any) {
  return (
    <div>
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-3 ">
        {/* mother email */}
        <div className="">
          <FormField
            control={form.control}
            name="motherEmail"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  {' '}
                  <span className="text-red-500">*</span>
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
    </div>
  );
}

export default MotherFormTest;
