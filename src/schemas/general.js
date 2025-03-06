import * as yup from 'yup';
import {emailSchema} from './authSchema';
import {validate} from '@/utils/validateUtils';

export const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: emailSchema,
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

export const validateContactReq = (data) => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: emailSchema,
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
  });

  return validate(schema, data);
};
