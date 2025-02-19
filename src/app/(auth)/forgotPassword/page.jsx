'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { redirect } from "next/navigation";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("User Data:", data);
        redirect('/')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-96 rounded-3xl">
            <h2 className="text-2xl font-semibold text-left">Forgot Password?</h2>
            <p className="text-sm">Remember your password ? <Link href={'/login'} className="text-primary underline">Login</Link></p>
            <InputField
                label="Email address"
                type="email"
                name="email"
                register={register}
                errors={errors}
                validation={{
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                }}
            />
            <div className="flex-center">
                <button
                    type="submit"
                    className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover mt-6"
                >
                    Reset Password
                </button>
            </div>
        </form>
    )
}

export default ForgotPassword