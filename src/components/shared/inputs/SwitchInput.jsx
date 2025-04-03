import { Controller } from "react-hook-form";

const SwitchInput = ({ name, control, label }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <div className="flex flex-col relative">
                    <label className="text-sm font-semibold text-secondary py-2">
                        {label}
                    </label>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div
                            className={`relative w-12 h-6 rounded-full transition-colors animate ${value ? "bg-primary" : "bg-gray-300"
                                }`}
                            onClick={() => onChange(!value)}
                        >
                            <div
                                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${value ? "translate-x-6" : "translate-x-0.5"
                                    }`}
                            />
                        </div>
                    </div>
                    {error && <p className="text-xs text-error">{error.message}</p>}
                </div>
            )}
        />
    );
};

export default SwitchInput;