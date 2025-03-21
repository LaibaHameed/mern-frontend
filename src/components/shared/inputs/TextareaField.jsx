import {Controller} from 'react-hook-form';

const TextareaField = ({label, placeholder, name, control}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="flex flex-col relative">
          <label
            htmlFor={name}
            className="text-sm font-semibold text-secondary py-1"
          >
            {label}
          </label>
          <textarea
            {...field}
            className={`w-full p-2 outline-none border-[1px] border-secondary text-sm bg-transparent resize-none ${
              error ? 'outline-error border-error' : 'outline-primary border'
            }`}
            placeholder={placeholder}
            id={name}
            rows={4} // Adjust rows based on UI preference
          />
          {error && (
            <p className="text-xs relative text-error">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default TextareaField;
