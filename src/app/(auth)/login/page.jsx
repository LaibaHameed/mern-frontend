'use client';
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/yupSchema";

const Login = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { name: "", password: "" },
  })

  const router = useRouter()

  const onSubmit = (data) => {
    console.log("User Data:", data);
    router.push('/')
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-96 rounded-3xl" >
        <h2 className="text-xl font-semibold text-left">Welcome back to Botanical</h2>
        <p className="text-sm">Don&apos;t have an account <Link href={'/register'} className="text-primary underline">Sign up</Link></p>

        <InputField label="Email address" type="email" name="email" />
        <InputField label="Password" type="password" name="password" />

        <div className="flex-center flex-col">
          <button
            type="submit"
            className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover mt-8 cursor-pointer"
          >
            Login
          </button>
          <p className="text-sm mt-6">Forgot Password ? <Link href={'/forgotPassword'} className="underline text-primary">Click Here</Link></p>
        </div>
        
      </form>
    </FormProvider>
  )
}

export default Login