'use client';

import {useForm} from 'react-hook-form';
import InputField from '@/components/shared/inputs/InputField';
// import {yupResolver} from '@hookform/resolvers/yup';
// import {loginSchema} from '@/schemas/authSchema';
import SubmitButton from '../shared/buttons/SubmitButton';
// import {useLoginUserMutation} from '@/redux/slices/user/usersApi';
import {AUTH_ROUTES} from '@/utils/PATHS';
import Link from 'next/link';

const ForgotPasswordForm = () => {
  const {control, handleSubmit} = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: {email: ''},
  });

  //   const [loginUser, {isLoading}] = useLoginUserMutation();

  const onSubmit = async (data) => {
    // await loginUser({email: data.email, password: data.password});
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
        <SubmitButton
          buttonText="Send Email"
          styles="w-full"
          //   loading={isLoading}
        />
        <p className="text-sm mt-6">
          Remember your password ?{' '}
          <Link href={AUTH_ROUTES.login} className="underline text-primary">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
