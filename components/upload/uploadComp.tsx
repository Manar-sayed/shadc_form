// import React, { useState } from 'react';
// import ImageUploading from 'react-images-uploading';
// import { Button } from '../ui/button';
// import { Label } from '../ui/label';
// import { UpdateIcon } from '@radix-ui/react-icons';
// import { Edit, LucideDelete, Trash } from 'lucide-react';

// const ImageUploader = ({
//   images,
//   onChange,
//   maxNumber,
//   dataURLKey,
//   title,
//   desc,
// }: any) => {
//   // const [imageRequired, setImageRequired] = useState<boolean[]>(
//   //   images?.map(() => false)
//   // );

//   // const handleImageRemove = (index: number) => {
//   //   const newRequiredStatus = [...imageRequired];
//   //   newRequiredStatus[index] = true;
//   //   setImageRequired(newRequiredStatus);
//   //   onChange(images.filter((_, i) => i !== index));
//   // };
//   return (
//     <ImageUploading
//       multiple
//       value={images}
//       onChange={onChange}
//       maxNumber={maxNumber}
//       dataURLKey={dataURLKey}
//     >
//       {({
//         imageList,
//         onImageUpload,
//         onImageRemoveAll,
//         onImageUpdate,
//         onImageRemove,
//         isDragging,
//         dragProps,
//       }) => (
//         <div className="w-full p-6 bg-white rounded-md shadow-md upload__image-wrapper">
//           <Label className="text-base md:text-lg xl:text-xl flex   ">
//             {title}
//           </Label>
//           <Label className=" text-gray-300 text-xs md:text-sm xl:text-base ">
//             {desc}
//           </Label>
//           <div className="my-6">
//             {imageList.length < 1 && (
//               <Button
//                 className={`w-full py-2 px-4 border border-dashed bg-transparent hover:bg-slate-100 border-gray-400 rounded-md transition-colors ${
//                   isDragging ? 'border-red-500 text-red-500' : 'text-gray-700'
//                 }`}
//                 onClick={onImageUpload}
//                 {...dragProps}
//               >
//                 Click or Drop here
//               </Button>
//             )}
//           </div>
//           &nbsp;
//           {/* <Button
//             className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
//             onClick={onImageRemoveAll}
//           >
//             Remove all images
//           </Button> */}
//           {imageList.map((image, index) => (
//             <div key={index} className="image-item">
//               <div className="flex justify-center">
//                 <img
//                   src={image['data_url']}
//                   alt=""
//                   className="w-full rounded-md -mt-10 h-36"
//                 />
//               </div>

//               <div className="flex justify-between items-center mt-2">
//                 <Button
//                   className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//                   onClick={() => onImageUpdate(index)}
//                 >
//                   <UpdateIcon />
//                 </Button>
//                 <Button
//                   className="py-2 px-4  bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
//                   onClick={() => onImageRemove(index)}
//                 >
//                   <Trash className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </ImageUploading>
//   );
// };

// export default ImageUploader;

import React from 'react';
import ImageUploading from 'react-images-uploading';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { UpdateIcon } from '@radix-ui/react-icons';
import { Edit, LucideDelete, Trash } from 'lucide-react';
import Image from 'next/image';

const ImageUploader = ({
  images,
  onChange,
  maxNumber,
  dataURLKey,
  title,
  desc,
}: any) => {
  return (
    <ImageUploading
      // multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey={dataURLKey}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
        errors,
      }) => (
        <div className="w-full p-3 bg-white rounded-md shadow-md upload__image-wrapper">
          <Label className="text-base md:text-lg xl:text-xl flex   ">
            {title}
          </Label>
          <Label className=" text-gray-300 text-xs md:text-sm xl:text-base ">
            {desc}
          </Label>
          <div className="my-3">
            {imageList.length < 1 && (
              <Button
                type="button"
                className={`w-full py-2 px-4 border border-dashed bg-transparent hover:bg-slate-100 border-gray-400 rounded-md transition-colors ${
                  isDragging ? 'border-red-500 text-red-500' : 'text-gray-700'
                }`}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </Button>
            )}
          </div>
          &nbsp;
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <div className="flex justify-center">
                <Image
                  src={image['data_url']}
                  alt=""
                  className="w-full rounded-md  h-36"
                  width={200}
                  height={200}
                />
              </div>

              <div className="flex justify-between items-center mt-1">
                <Button
                  className="py-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => onImageUpdate(index)}
                >
                  <UpdateIcon />
                </Button>
                <Button
                  className="py-1 px-4  bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => onImageRemove(index)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
