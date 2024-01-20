import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Controller } from 'react-hook-form';
import { FormMessage } from './ui/form';
interface PhoneComponentProps {
  control: any;
  defaultValue?: string; // Add the defaultValue prop
}
const PhoneTwoComponent = ({ control, defaultValue }: PhoneComponentProps) => {
  return (
    <>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState }) => (
          <div className="div-dir">
            <PhoneInput
              value={value}
              onChange={onChange}
              country="sa"
              //   id="phoneInput"
              //
            />
            {fieldState.error && (
              <FormMessage>{fieldState.error.message}</FormMessage>
            )}
          </div>
        )}
      />
    </>
  );
};

export default PhoneTwoComponent;
