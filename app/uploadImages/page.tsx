'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

export default function App() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App bg-gray-200 min-h-screen flex items-center justify-center">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }: any) => (
          <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
            <div className="mb-6">
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
            {imageList.length > 0 && (
              <Button
                className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                onClick={onImageRemoveAll}
              >
                Remove all images
              </Button>
            )}

            <div className="mt-6">
              {imageList.map((image: any, index: any) => (
                <div key={index} className="mb-4">
                  <img
                    src={image['data_url']}
                    alt=""
                    className="w-full rounded-md"
                  />
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
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
