import {validate} from '@/utils/validateUtils';
import * as yup from 'yup';

export const validationFeedbackSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  designation: yup.string().required('Designation is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters long')
    .max(500, 'Message cannot exceed 500 characters'),
});

export const validateFeedbackReq = (data) => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    designation: yup.string().required('Designation is required'),
    message: yup
      .string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters long')
      .max(500, 'Message cannot exceed 500 characters'),
  });

  return validate(schema, data);
};
