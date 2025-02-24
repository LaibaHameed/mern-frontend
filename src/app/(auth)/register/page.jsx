'use client';

import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/components/shared/InputField";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/schemas/authSchema";
import { useCallApiMutation } from "@/redux/slices/apiSlice";

const Register = () => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const router = useRouter()
  const [callApi, { isLoading, error }] = useCallApiMutation();

  const onSubmit = async (data) => {
    const response = await callApi({
      url: '/api/auth/register',
      method: 'POST',
      payload: data
    })
    if (response.error) {
      console.error('Registration Error:', response.error.data);
      return
    }
    console.log('User Registered Successfully:', response.data);
    console.log("User Data:", data);
    router.push('/login')
  };


  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-white px-10 py-12 shadow-md w-96 rounded-3xl"
      >
        <h2 className="text-2xl font-semibold text-left">Sign Up to Botanical</h2>
        <p className="text-sm">create free account or <Link href={'/login'} className="text-primary underline">Login</Link></p>

        <InputField label="Username" type="text" name="name" />
        <InputField label="Email address" type="email" name="email" />
        <InputField label="Password" type="password" name="password" />

        <div className="flex-center flex-col mt-8">
          {error && <p className="text-red-500 mb-4 text-sm">{error.data?.message || "Account Registration failed"}</p>}

          <button
            type="submit"
            className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover cursor-pointer"
          >
            {isLoading ? "Signing up..." : "Register"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Register;
