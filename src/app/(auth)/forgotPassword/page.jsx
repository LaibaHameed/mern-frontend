'use client';
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "@/schemas/yupSchema";

const ForgotPassword = () => {
    const methods = useForm({
        resolver: yupResolver(forgotPasswordSchema),
        defaultValues: { email: "" },
    });

    const router = useRouter();

    const onSubmit = (data) => {
        console.log("User Data:", data);
        router.push('/')
    };

    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-96 rounded-xl">
            <h2 className="text-2xl font-semibold text-left">Forgot Password?</h2>
            <p className="text-sm">Remember your password ? <Link href={'/login'} className="text-primary underline">Login</Link></p>

            <InputField label="Email address" type="email" name="email" />

            <div className="flex-center">
                <button
                    type="submit"
                    className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover mt-6 cursor-pointer"
                >
                    Reset Password
                </button>
            </div>
        </form>
        </FormProvider>
    )
}

export default ForgotPassword