"use client";
import { FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const InputField = ({ label, type, name, register, errors, validation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = (type === "password") && (showPassword ? "text" : type);

    return (
        <div className="relative mt-6">
            <label className="block text-gray-700 text-sm">{label}</label>
            <div className="relative">
                <input
                    {...register(name, validation)}
                    type={inputType}
                    className={`w-full p-2 border rounded-md my-1 text-sm outline-primary pr-10 ${errors[name] ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {/* Error Icon & Error Msg*/}
                {errors[name] && (
                    <>
                        <span className="absolute right-10 top-3 text-red-500">
                            <FiAlertCircle />
                        </span>
                        <p className="text-red-500 text-xs">{errors[name].message}</p>
                    </>
                )}
                {/* Eye Icon for Password Fields */}
                {type === "password" && (
                    <span
                        className="absolute right-3 top-3 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputField;
