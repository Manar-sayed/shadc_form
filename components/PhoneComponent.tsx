import React from 'react';
import { Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { FormMessage } from './ui/form';
function PhoneComponent({ control }: any) {
  return (
    <>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState }) => (
          <div className="div-dir">
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="SA"
              id="phoneInput"
              //
              className={`p-2 w-full border border-solid border-gray-200   rounded 
                 bg-white mb-2
              `}
            />
            {fieldState.error && (
              <FormMessage>{fieldState.error.message}</FormMessage>
            )}
          </div>
        )}
      />
    </>
  );
}

export default PhoneComponent;
