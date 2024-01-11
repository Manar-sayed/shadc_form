import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CalendarCheck2 } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import Upload from '../upload/uploadComp';
import ImageUploader from '../upload/uploadComp';

function ImageForm({ form, setImages }: any) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 ">Address</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Image Upload</p>
      <div className="mt-5 gap-6 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3">
        {/* birthCertificateimage */}
        <div>
          <FormField
            control={form.control}
            name="birthCertificateimage"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
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
        </div>

        {/* Family National Id */}
        <div>
          <FormField
            control={form.control}
            name="familyNationalId"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  familyNationalId
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('familyNationalId')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('familyNationalId', imageList);
                    }}
                    maxNumber={1}
                    title="Family National Id"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* 4*6 Cm Photograph */}
        <div>
          <FormField
            control={form.control}
            name="CmPhotograph"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  4*6CmPhotograph
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('CmPhotograph')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('CmPhotograph', imageList);
                    }}
                    maxNumber={1}
                    title="4*6 Cm Photograph"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Student Immuniazation */}
        <div>
          <FormField
            control={form.control}
            name="studentImmuniazation"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Student Immuniazation
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('studentImmuniazation')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('studentImmuniazation', imageList);
                    }}
                    maxNumber={1}
                    title="Student Immuniazation"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Medical Report */}
        <div>
          <FormField
            control={form.control}
            name="medicalReport"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Medical Report
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('medicalReport')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('medicalReport', imageList);
                    }}
                    maxNumber={1}
                    title="Medical Report"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Aramco ID */}
        <div>
          <FormField
            control={form.control}
            name="aramcoID"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Aramco ID
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('aramcoID')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('aramcoID', imageList);
                    }}
                    maxNumber={1}
                    title="Aramco ID"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Disease Free */}
        <div>
          <FormField
            control={form.control}
            name="diseaseFree"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormLabel className="block text-sm font-medium leading-6 ">
                  Disease Free
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    images={form.getValues('diseaseFree')}
                    onChange={(imageList: any, addUpdateIndex: any) => {
                      form.setValue('diseaseFree', imageList);
                    }}
                    maxNumber={1}
                    title="Disease Free"
                    desc="(For Kids And Grade 1 only)"
                    dataURLKey="data_url"
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

export default ImageForm;
