// // MainForm.js
// 'use client';
// import { useState } from 'react';
// import UserNameEmail from '@/components/UserNameEmail';
// import DobGender from '@/components/DobGender';
// import Address from '@/components/Address';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { useForm } from 'react-hook-form';

// const MainForm = () => {
//   const formSchema = z.object({
//     email: z.string().email({
//       message: "`${t('email-error-message')}`",
//     }),

//     name: z.string().min(5, {
//       message: "`${t('name-error-message')}`",
//     }),
//     phone: z.string().min(5, {
//       message: "`${t('phone-error-message')}`",
//     }),
//   });

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: '',
//       name: '',
//       phone: '',
//     },
//   });
//   async function onSubmit(data: any) {
//     console.log(data);
//   }

//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     dob: '',
//     gender: 'male',
//     address: '',
//   });

//   const handleChange = (event: any) => {
//     const { name, value } = event.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const [activeTab, setActiveTab] = useState(0);

//   const formElements = [
//     // <UserNameEmail data={data} handleChange={handleChange} />,
//     <div className=" " id="form1">
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-10  w-[100%] sm:w-[550px] md:w-auto  "
//         >
//           {/* Form 2 */}
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem className="bg-transparent">
//                 {/* <FormLabel>Name</FormLabel> */}
//                 <FormControl>
//                   <Input
//                     placeholder={"t('name-placeholder')"}
//                     {...field}
//                     className="mt-10  p-4 h-14 placeholder:text-black text-sm md:text-lg font-normal capitalize"
//                   />
//                 </FormControl>
//                 {/* message for error */}
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem className="bg-transparent">
//                 <FormControl>
//                   <Input
//                     placeholder={"t('email-placeholder')"}
//                     {...field}
//                     className=" p-4 w-full h-14 placeholder:text-black text-sm md:text-lg font-normal capitalize "
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className=" grid grid-cols-2 gap-10 w-full ">
//             <FormField
//               control={form.control}
//               name="phone"
//               render={({ field }) => (
//                 <FormItem className="bg-transparent">
//                   {/* <FormLabel>Phone</FormLabel> */}
//                   <FormControl>
//                     <Input
//                       placeholder={"t('phone-placeholder')"}
//                       {...field}
//                       className="p-4 h-14 placeholder:text-black text-sm md:text-lg font-normal capitalize "
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <center>
//             <div>
//               <Button
//                 type="submit"
//                 className="w-[40%] bg-green-400
//                   hover:border hover:border-green-400
//                   hover:bg-transparent hover:text-green-400"
//               >
//                 {"t('btn-form')"}
//               </Button>
//             </div>
//           </center>
//         </form>
//       </Form>
//     </div>,
//     <DobGender data={data} handleChange={handleChange} />,
//     <Address data={data} setData={setData} />,
//   ];

//   return (
//     <div className="min-h-screen flex flex-col justify-center bg-slate-600">
//       <div className=" bg-slate-400">{formElements[activeTab]}</div>
//       <div className="flex flex-wrap gap-x-6 mx-auto">
//         <button
//           // disabled={activeTab === 0 ? 'disabled' : ''}
//           onClick={() => setActiveTab((prev) => prev - 1)}
//           className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${
//             activeTab === 0 ? 'opacity-50 bg-slate-600' : 'opacity-100'
//           }`}
//         >
//           Back
//         </button>
//         <button
//           // disabled={activeTab === formElements.length - 1 ? 'disabled' : ''}
//           onClick={() => setActiveTab((prev) => prev + 1)}
//           className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${
//             activeTab === formElements.length - 1
//               ? 'opacity-50 bg-slate-600'
//               : 'opacity-100'
//           }`}
//         >
//           Next
//         </button>
//         {activeTab === formElements.length - 1 ? (
//           <button
//             className="px-4 py-2 rounded-xl bg-blue-600 text-white"
//             onClick={() => console.log(data)}
//           >
//             Submit
//           </button>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default MainForm;

import UserNameEmail from '@/components/UserNameEmail';
import FormFull from '@/components/form';

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        {/* <UserNameEmail /> */}
        <FormFull />
      </div>
    </section>
  );
}
