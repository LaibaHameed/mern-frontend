'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { redirect } from "next/navigation";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("User Data:", data);
    redirect('/')
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-96 rounded-3xl" >
      <h2 className="text-xl font-semibold text-left">Welcome back to Botanical</h2>
      <p className="text-sm">Dont have an account <Link href={'/register'} className="text-primary underline">Sign up</Link></p>

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

      <InputField
        label="Password"
        type="password"
        name="password"
        register={register}
        errors={errors}
        validation={{
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters" },
        }}
      />

      <div className="flex-center">
        <button
          type="submit"
          className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover mt-6"
        >
          Login
        </button>
      </div>


    </form>
  )
}

export default Login