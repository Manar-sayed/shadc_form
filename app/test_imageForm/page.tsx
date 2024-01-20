// 'use client';
// import React, { useState } from 'react';
// import * as z from 'zod';
// import ImageUploading from 'react-images-uploading';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from '@/components/ui/form';
// import StudentForm from '@/components/FORM/StudentForm';
// import { useForm } from 'react-hook-form';

// const FormDataSchema = z.object({
//   images: z.array(z.object({ data_url: z.string() })),
// });
// const processForm = async (values: z.infer<typeof FormDataSchema>) => {
//   console.log({ values });
// };

// function ImageForm() {
//   const [images, setImages] = useState([]);
//   const maxNumber = 69;
//   const form = useForm<z.infer<typeof FormDataSchema>>({
//     mode: 'onChange',
//     defaultValues: {
//       images: [],
//     },
//   });

//   //   const {
//   //     handleSubmit,
//   //     register,
//   //     formState: { errors },
//   //   } = useForm({
//   //     resolver: zodResolver(FormDataSchema),
//   //   });

//   //   const onSubmit = (data: any) => {
//   //     console.log('Submitted data:', data);
//   //   };

//   const onChange = (imageList: any, addUpdateIndex: any) => {
//     setImages(imageList);
//   };

//   return (
//     // <Form {...form}>
//     //   <form onSubmit={form.handleSubmit(processForm)} className="py-12 ">

//     //     <div>
//     //       <StudentForm form={form} />
//     //     </div>
//     //   </form>
//     // </Form>

//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(processForm)}>
//         <div className="">
//           <FormField
//             control={form.control}
//             name="images"
//             render={({ field }) => (
//               <FormItem className="bg-transparent">
//                 <FormControl>
//                   <ImageUploading
//                     multiple
//                     value={images}
//                     onChange={onChange}
//                     maxNumber={maxNumber}
//                     dataURLKey="data_url"
//                     // {...field}
//                   >
//                     {({
//                       imageList,
//                       onImageUpload,
//                       onImageRemoveAll,
//                       onImageUpdate,
//                       onImageRemove,
//                       isDragging,
//                       dragProps,
//                     }) => (
//                       <div className="upload__image-wrapper">
//                         <button
//                           style={isDragging ? { color: 'red' } : undefined}
//                           onClick={onImageUpload}
//                           {...dragProps}
//                         >
//                           Click or Drop here
//                         </button>
//                         &nbsp;
//                         <button onClick={onImageRemoveAll}>
//                           Remove all images
//                         </button>
//                         {imageList.map((image, index) => (
//                           <div key={index} className="image-item">
//                             <img src={image['data_url']} alt="" width="100" />
//                             <div className="image-item__btn-wrapper">
//                               <button onClick={() => onImageUpdate(index)}>
//                                 Update
//                               </button>
//                               <button onClick={() => onImageRemove(index)}>
//                                 Remove
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </ImageUploading>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <button type="submit" className="bg-red-400 m-20">
//           Submit
//         </button>
//       </form>
//     </Form>
//   );
// }

// export default ImageForm;

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import {
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import ImageUploader from '@/components/upload/uploadComp';

function ImageForm({ form, setImages }: any) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 ">Address</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Image Upload</p>
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2">
        {/* nationality */}
        <div>
          <FormField
            control={form.control}
            name="birthCertificateimage"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                <span className='text-red-500'>*</span>

                  birthCertificateimage
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('birthCertificateimage')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('birthCertificateimage', imageList);
                    }}
                    maxNumber={1}
                    title="Birth Certificate"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Add other form fields as needed */}
        </div>
        {/* nationality */}
        <div>
          <FormField
            control={form.control}
            name="birthCertificateimage"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                <span className='text-red-500'>*</span>

                  birthCertificateimage
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('birthCertificateimage')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('birthCertificateimage', imageList);
                    }}
                    maxNumber={1}
                    title="Birth Certificate"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Add other form fields as needed */}
        </div>
      </div>
    </div>
  );
}

export default ImageForm;
