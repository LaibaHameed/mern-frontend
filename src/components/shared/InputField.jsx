import {Controller} from 'react-hook-form';

const InputField = ({label, placeholder, name, control}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="flex flex-col relative">
          <label
            htmlFor={label}
            className="text-sm font-semibold text-secondary py-1"
          >
            {label}
          </label>
          <input
            {...field}
            className={`w-full p-2 text-sm  bg-transparent ${
              error ? 'outline-error border-error' : 'outline-primary border'
            }`}
            placeholder={placeholder}
            id={name}
          />
          {error && (
            <p className="text-xs relative text-error">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default InputField;
