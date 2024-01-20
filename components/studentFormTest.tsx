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
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* nationality */}
        <div className="">
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  {' '}
                  <span className="text-red-500">*</span>
                  Nationality
                </FormLabel>
                <FormControl className="bg-slate-500 ">
                  <>
                    <select
                      defaultValue=""
                      id="nationality"
                      {...field}
                      className="w-full   rounded-md border-0 py-1.5 px-3  shadow-sm ring-1 ring-inset
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
        {/* std id */}
        <div className="">
          <FormField
            control={form.control}
            name="StudentID"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  {' '}
                  <span className="text-red-500">*</span>
                  Student ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={'student national id'}
                    type="text"
                    {...field}
                    // onChange={onChange}
                    className="mt-10  p-4 h-14  text-sm md:text-lg font-normal "
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

export default StudentFormTest;
