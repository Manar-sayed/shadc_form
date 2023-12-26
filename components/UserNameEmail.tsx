'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const UserNameEmail = (props: any) => {
  const { data, handleChange } = props;

  const formSchema = z.object({
    email: z.string().email({
      message: "`${t('email-error-message')}`",
    }),

    name: z.string().min(5, {
      message: "`${t('name-error-message')}`",
    }),
    phone: z.string().min(5, {
      message: "`${t('phone-error-message')}`",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
    },
  });

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className=" " id="form1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10  w-[100%] sm:w-[550px] md:w-auto  "
        >
          {/* Form 2 */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                {/* <FormLabel>Name</FormLabel> */}
                <FormControl>
                  <Input
                    placeholder={"t('name-placeholder')"}
                    {...field}
                    className="mt-10  p-4 h-14 placeholder:text-black text-sm md:text-lg font-normal capitalize"
                  />
                </FormControl>
                {/* message for error */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="bg-transparent">
                <FormControl>
                  <Input
                    placeholder={"t('email-placeholder')"}
                    {...field}
                    className=" p-4 w-full h-14 placeholder:text-black text-sm md:text-lg font-normal capitalize "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" grid grid-cols-2 gap-10 w-full ">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  {/* <FormLabel>Phone</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder={"t('phone-placeholder')"}
                      {...field}
                      className="p-4 h-14 placeholder:text-black text-sm md:text-lg font-normal capitalize "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <center>
            <div>
              <Button
                type="submit"
                className="w-[40%] bg-green-400 
                    hover:border hover:border-green-400 
                    hover:bg-transparent hover:text-green-400"
              >
                {"t('btn-form')"}
              </Button>
            </div>
          </center>
        </form>
      </Form>
    </div>
  );
};

export default UserNameEmail;
