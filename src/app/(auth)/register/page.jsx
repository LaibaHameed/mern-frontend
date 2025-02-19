'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { redirect } from "next/navigation";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    redirect('/login')
  };



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-10 py-12 shadow-md w-96 rounded-3xl"
    >
      <h2 className="text-2xl font-semibold text-left">Sign Up to Botanical</h2>
      <p className="text-sm">create free account or <Link href={'/login'} className="text-primary underline">Login</Link></p>

      <InputField
        label="Username"
        type="text"
        name="name"
        register={register}
        errors={errors}
        validation={{ required: "Name is required" }}
      />

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
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
