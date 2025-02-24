import { validate } from '@/utils/validateUtils';
import * as yup from 'yup';

const emailSchema = yup
  .string()
  .email()
  .required('Email is required')
  .test('email', 'Email is not valid', (value) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
  });

const passwordSchema = yup
  .string()
  .required('Password is required')
  .min(
    8,
    'Must contain at least 8 characters and at least 1 uppercase letter'
  )
  .matches(
    /[A-Z]/,
    'Must contain at least 8 characters and at least 1 uppercase letter'
  );

export const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const forgotPasswordSchema = yup.object({
  email: emailSchema,
});

// API schemas

const commonAuthSchema = {
  email: emailSchema,
  password: passwordSchema,
};

export const validateCreateUserReq = (user) => {
  const schema = yup.object().shape({
    name: yup.string().min(1).max(255).required('Name is required'),
    ...commonAuthSchema,
  });

  return validate(schema, user);
};

export const validateLoginReq = (user) => {
  const schema = yup.object().shape({
    ...commonAuthSchema,
  });

  return validate(schema, user);
};
