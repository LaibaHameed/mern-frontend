import {useState} from 'react';
import {Controller} from 'react-hook-form';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';

const PasswordField = ({label, placeholder, name, control}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="flex flex-col relative">
          <label
            htmlFor={label}
            className="text-sm font-semibold text-secondary"
          >
            {label}
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            {...field}
            className={`w-full p-2 border rounded-md text-sm  bg-transparent ${
              error ? 'outline-error border-error' : 'outline-primary border'
            }`}
            placeholder={placeholder}
            id={label}
          />
          <span
            className="absolute right-3 top-[29px] cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOutline size={18} />
            ) : (
              <IoEyeOffOutline size={18} />
            )}
          </span>
          {error && (
            <p className="text-xs relative text-error">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default PasswordField;
