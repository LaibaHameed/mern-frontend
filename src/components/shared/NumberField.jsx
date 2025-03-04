import { Controller } from 'react-hook-form';

const NumberField = ({ label, placeholder, name, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
                <div className="flex flex-col relative">
                    <label htmlFor={label} className="text-sm font-semibold text-secondary py-1">
                        {label}
                    </label>
                    <input
                        type="number"
                        min="0" 
                        {...field}
                        value={value ?? ''} 
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            onChange(val < 0 ? 0 : val); 
                        }}
                        className={`w-full p-2 text-sm bg-transparent ${error ? 'outline-error border-error' : 'outline-primary border'
                            }`}
                        placeholder={placeholder}
                        id={label}
                    />
                    {error && <p className="text-xs relative text-error">{error.message}</p>}
                </div>
            )}
        />
    );
};

export default NumberField;
