'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PhoneComponent from '@/components/phone-component';
import PhoneTwoComponent from '@/components/phone2-component';

const formSchema = z
  .object({
    nationality: z.enum(['saudi arabia', 'egypt', 'korean']),
    phone: z.string().min(1, { message: 'Please enter phone' }),
    //   .min(8, { message: 'Must be between 8 to 16 characters!' })
    //   .max(16, { message: 'Must be between 8 to 16 characters!' }),
  })
  .refine(
    (data) => {
      if (data.nationality === 'saudi arabia') {
        console.log('data.phone.length', data.phone.length);
        return data.phone.length == 12;
      }
      return true;
    },
    { message: 'Must be 12 characters', path: ['phone'] }
  )
  .refine(
    (data) => {
      if (data.nationality === 'egypt') {
        return data.phone.length == 12;
      }
      return true;
    },
    { message: 'Must be 12 charactersre', path: ['phone'] }
  );

const TestForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="w-1/2 mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-5  shadow-sm "
        >
          <div className="mb-4">
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <FormLabel className="block text-sm font-medium leading-6 ">
                    Nationality
                  </FormLabel>
                  <FormControl className="bg-slate-500 ">
                    <>
                      <select
                        defaultValue=""
                        id="nationality"
                        {...field}
                        // autoComplete="nationality-name"
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
          <div className="mb-4">
            {/* <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-primary-color">phone</FormLabel>
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}

            /> */}
            <FormLabel className="text-primary-color">Phone</FormLabel>
            {/* <PhoneComponent control={form.control} /> */}
            <PhoneTwoComponent control={form.control} />
          </div>

          <Button
            type="submit"
            className="w-full !text-white rounded-lg shadow-md border-2 border-primary-color border-solid text-secondary-color bg-primary-color text-base md:text-xl font-semibold duration-300 "
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TestForm;
