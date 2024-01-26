'use client';
import TestForm from '@/components/FORM/testForm';
import { Button } from '@/components/ui/button';
import Upload from '@/components/upload/uploadComp';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ImageUploading from 'react-images-uploading';

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="mt-10 container">
      <TestForm/>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="images"
          control={control}
          defaultValue={[]}
          rules={{
            validate: (value) =>
              value.length > 0 || 'PLZ Upload at Least One Image',
          }}
          render={({ field }) => (
            <>
              <Upload
                maxNumber={1}
                {...field}
                title="Birth Certificate"
                desc="(For Kids And Grade 1 only)"
              />
              {errors.images && (
                <p className="text-red-400">{errors?.images?.message}</p>
              )}
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form> */}
      {/* upload without validation or form */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center ">
        <div className="">
          <Upload
            maxNumber={1}
            title="Birth Certificate"
            desc="(For Kids And Grade 1 only)"
          />
        </div>
        <div className="">
          <Upload
            maxNumber={1}
            title="Family National Id"
            desc="(Father ,Mother ,Student)"
          />
        </div>

        <div className="">
          <Upload
            maxNumber={1}
            title="4*6 Cm Photograph"
            desc="(For Kids And Grade 1 only)"
          />
        </div>

        <div className="">
          <Upload
            maxNumber={6}
            title="Student Immuniazation"
            desc="(Kindergration Only)"
          />
        </div>
        <div className="  ">
          <Upload
            maxNumber={1}
            title="Medical Report"
            desc="(Visual & Hearing)"
          />
        </div>
        <div className="  ">
          <Upload maxNumber={1} title="Disease Free Certificate" desc="()" />
        </div>
      </div> */}
    </div>
  );
}
