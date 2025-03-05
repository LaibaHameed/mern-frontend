import {Controller} from 'react-hook-form';

const FileInputField = ({label, name, control, multiple = false}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value, ...field}, fieldState: {error}}) => (
        <div className="flex flex-col relative">
          <label
            htmlFor={name}
            className="text-sm font-semibold text-secondary py-1"
          >
            {label}
          </label>
          <input
            {...field}
            type="file"
            id={name}
            multiple={multiple}
            onChange={(e) => {
              const files = multiple
                ? Array.from(e.target.files)
                : e.target.files[0];
              onChange(files);
            }}
            className={`w-full p-2 text-sm bg-transparent file:border-none file:mr-2 file:py-1 file:px-2 file:bg-primary file:text-white
              ${
                error ? 'outline-error border-error' : 'outline-primary border'
              }`}
          />
          {error && (
            <p className="text-xs relative text-error">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default FileInputField;
