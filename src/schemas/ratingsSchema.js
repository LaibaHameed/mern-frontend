import {validate} from '@/utils/validateUtils';
import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating can be at most 5'),
  message: yup
    .string()
    .required('Message is required')
    .min(5, 'Message must be at least 5 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

export const validateRatingReq = (data) => {
  const schema = yup.object().shape({
    productId: yup.string().required('Product ID is required'),
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters long')
      .max(50, 'Name must be at most 50 characters long'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    rating: yup
      .number()
      .required('Rating is required')
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating can be at most 5'),
    message: yup
      .string()
      .required('Message is required')
      .min(5, 'Message must be at least 5 characters long')
      .max(500, 'Message must be at most 500 characters long'),
  });

  return validate(schema, data);
};
