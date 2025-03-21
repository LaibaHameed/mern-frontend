import {Controller} from 'react-hook-form';

const RadioInputField = ({label, name, control, options}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="flex flex-col relative">
          <label className="text-sm font-semibold text-secondary py-1">
            {label}
          </label>
          <div className="flex flex-wrap gap-4">
            {options.map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  className={`border-[1px] border-secondary w-4 h-4 cursor-pointer ${
                    error ? 'outline-error border-error' : 'outline-primary'
                  }`}
                />
                <span className="text-sm text-secondary">{option.label}</span>
              </label>
            ))}
          </div>
          {error && <p className="text-xs text-error">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default RadioInputField;
