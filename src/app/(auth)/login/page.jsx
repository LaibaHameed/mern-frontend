'use client';
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/authSchema";
import { useCallApiMutation } from "@/redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";

const Login = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { name: "", password: "" },
  })

  const router = useRouter()
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.token)
  const [callApi, {isLoading, error}] = useCallApiMutation();

  const onSubmit = async (data) => {
    const response = await callApi({
      url: '/api/auth/login',
      method: 'POST',
      payload: data,
    }).unwrap();
    if(response.accessToken){
      dispatch(setCredentials({user: response.user, token: response.accessToken}))
    }
    if (response.error) {
      console.error("Login failed:", response.error);
    } else {
      console.log("Login successful:", response.data);
    }
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

        <div className="flex-center flex-col mt-8">
        {error && <p className="text-red-500 text-sm mb-4">{error.data?.message || "Login failed"}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="min-w-48 bg-primary text-white py-2 rounded-full hover:bg-primary-hover cursor-pointer"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="text-sm mt-6">Forgot Password ? <Link href={'/forgotPassword'} className="underline text-primary">Click Here</Link></p>
        </div>

      </form>
    </FormProvider>
  )
}

export default Login