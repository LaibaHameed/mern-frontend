import {validate} from '@/utils/validateUtils';
import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup.string().required('Name is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .min(0, 'Price cannot be negative')
    .required('Price is required'),
  description: yup.string().required('Description is required'),
  code: yup.string().required('Product Code is required'),
  availableQty: yup
    .number()
    .typeError('Available Quantity must be a number')
    .min(0, 'Available Quantity cannot be negative')
    .required('Available Quantity is required'),
  tax: yup
    .number()
    .typeError('Shipping Tax must be a number')
    .min(0, 'Shipping Tax cannot be negative')
    .required('Shipping Tax is required'),
  color: yup.string().required('Color are required'),
  brand: yup.string().required('Brand is required'),
});

export const validateAddProductReq = (data) => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    price: yup
      .number()
      .typeError('Price must be a number')
      .min(0, 'Price cannot be negative')
      .required('Price is required'),
    description: yup.string().required('Description is required'),
    code: yup.string().required('Product Code is required'),
    availableQty: yup
      .number()
      .typeError('Available Quantity must be a number')
      .min(0, 'Available Quantity cannot be negative')
      .required('Available Quantity is required'),
    tax: yup
      .number()
      .typeError('Shipping Tax must be a number')
      .min(0, 'Shipping Tax cannot be negative')
      .required('Shipping Tax is required'),
    color: yup.string().required('Color are required'),
    brand: yup.string().required('Brand is required'),
  });

  return validate(schema, data);
};
