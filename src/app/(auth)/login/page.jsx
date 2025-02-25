'use client';
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/authSchema";
import { useLoginUserMutation } from "@/app/api/auth/usersApi";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  const router = useRouter()
  const [loginUser, { isLoading, error }] = useLoginUserMutation()


  const onSubmit = async (data) => {
    try {
      await loginUser({ email: data.email, password: data.password }).unwrap();
      router.push("/dashboard");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-96 rounded-3xl" >
        <h2 className="text-xl font-semibold text-left">Welcome back to Botanical</h2>
        <p className="text-sm">Don&apos;t have an account <Link href={'/register'} className="text-primary underline">Sign up</Link></p>

        <InputField label="Email address" type="email" name="email" />
        <InputField label="Password" type="password" name="password" />

        <div className="flex-center flex-col mt-8">
          {error && <p className="text-red-500 text-sm mb-4">{error.data?.message || "Login failed"} </p>}
          <button
            type="submit"
            className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover cursor-pointer flex-center"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : "Login"}

          </button>
          <p className="text-sm mt-6">Forgot Password ? <Link href={'/forgotPassword'} className="underline text-primary">Click Here</Link></p>
        </div>

      </form>
    </FormProvider>
  )
}

export default Login