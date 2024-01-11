import React from 'react';
import ImageUploading from 'react-images-uploading';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

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
      multiple
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
      }) => (
        <div className="w-full p-6 bg-white rounded-md shadow-md upload__image-wrapper">
          <Label className="text-base md:text-lg xl:text-xl flex   ">
            {title}
          </Label>
          <Label className=" text-gray-300 text-xs md:text-sm xl:text-base ">
            {desc}
          </Label>
          <div className="my-6">
            <Button
              className={`w-full py-2 px-4 border border-dashed bg-transparent hover:bg-slate-100 border-gray-400 rounded-md transition-colors ${
                isDragging ? 'border-red-500 text-red-500' : 'text-gray-700'
              }`}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
          </div>
          &nbsp;
          <Button
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            onClick={onImageRemoveAll}
          >
            Remove all images
          </Button>
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <div className="flex justify-center">
                <img
                  src={image['data_url']}
                  alt=""
                  className="w-full rounded-md h-48 "
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <Button
                  className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </Button>
                <Button
                  className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => onImageRemove(index)}
                >
                  Remove
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
