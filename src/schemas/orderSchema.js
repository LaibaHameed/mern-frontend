import * as yup from 'yup';
import {PAYMENT_OPTIONS} from '@/constants/general';
import {validate} from '@/utils/validateUtils';

export const createOrderSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  contact: yup
    .string()
    .matches(
      /^\+\d{1,3}\d{9,12}$/,
      'Contact must be in international format, e.g., +923XXXXXXXXX'
    )
    .required('Contact is required'),
  address: yup
    .string()
    .min(5, 'Address must be at least 5 characters long')
    .required('Address is required'),
  paymentMethod: yup
    .string()
    .oneOf(
      PAYMENT_OPTIONS.map((option) => option.value),
      'Please select payment method'
    )
    .required('Please select payment method'),
});

export const validateCreateOrderReq = (data) => {
  const schema = yup.object().shape({
    products: yup.array().required('Products array is required'),
    totalPrice: yup
      .number()
      .required('Total price is required')
      .positive('Total price must be greater than zero'),
    customerName: yup
      .string()
      .required('Customer name is required')
      .min(3, 'Customer name must be at least 3 characters long'),
    customerEmail: yup
      .string()
      .required('Customer email is required')
      .email('Invalid email format'),
    customerPhoneNo: yup
      .string()
      .matches(
        /^\+\d{1,3}\d{9,12}$/,
        'Contact must be in international format, e.g., +923XXXXXXXXX'
      )
      .required('Contact is required'),
    customerAddress: yup
      .string()
      .required('Address is required')
      .min(5, 'Address must be at least 5 characters long'),
  });

  return validate(schema, data);
};
