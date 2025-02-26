'use client';

import {useForm} from 'react-hook-form';
import InputField from '@/components/shared/InputField';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '@/schemas/authSchema';
import SubmitButton from '../shared/buttons/SubmitButton';
import PasswordField from '../shared/PasswordField';
import {useLoginUserMutation} from '@/redux/slices/user/usersApi';
import {AUTH_ROUTES} from '@/utils/PATHS';
import Link from 'next/link';

const LoginForm = () => {
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {email: '', password: ''},
  });

  const [loginUser, {isLoading}] = useLoginUserMutation();

  const onSubmit = async (data) => {
    await loginUser({email: data.email, password: data.password});
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-10 py-12 shadow-md w-full md:w-[500px] rounded-3xl"
    >
      <h2 className="text-xl font-semibold text-left mb-5">Dashboard Login</h2>
      <div className="flex flex-col gap-3">
        <InputField
          label="Email"
          placeholder="Enter your email"
          control={control}
          name="email"
        />
        <PasswordField
          label="Password"
          placeholder="Enter your password"
          control={control}
          name="password"
        />
        <SubmitButton buttonText="Login" styles="w-full" loading={isLoading} />
        <p className="text-sm mt-6">
          Forgot Password ?{' '}
          <Link
            href={AUTH_ROUTES.forgotPassword}
            className="underline text-primary"
          >
            Click Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
