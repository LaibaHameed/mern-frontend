import * as yup from 'yup';

export const ProductSchema = yup.object({
    name: yup.string().required('Name is required'),

    price: yup.number()
        .typeError('Price must be a number')
        .min(0, 'Price cannot be negative')
        .required('Price is required'),

    description: yup.string().required('Description is required'),

    code: yup.string().required('Product Code is required'),

    quantity: yup.number()
        .typeError('Quantity must be a number')
        .min(0, 'Quantity cannot be negative')
        .required('Quantity is required'),

    tax: yup.number()
        .typeError('Shipping Tax must be a number')
        .min(0, 'Shipping Tax cannot be negative')
        .required('Shipping Tax is required'),

    categories: yup
        .array()
        .of(yup.string().trim().required('Each category is required'))
        .transform((value, originalValue) => {
            if (typeof originalValue === 'string') {
                return originalValue
                    .split(',')
                    .map(category => category.trim())
                    .filter(Boolean);
            }
        })
        .required('Categories are required'),

    colors: yup
        .array()
        .of(yup.string().trim().required('Each color is required'))
        .transform((value, originalValue) => {
            if (typeof originalValue === 'string') {
                return originalValue
                    .split(',')
                    .map(color => color.trim())
                    .filter(Boolean);
            }
        })
        .required('Colors are required'),

    tags: yup
        .array()
        .of(yup.string().trim().required('Each tag is required'))
        .transform((value, originalValue) => {
            if (typeof originalValue === 'string') {
                return originalValue
                    .split(',')
                    .map(tag => tag.trim())
                    .filter(Boolean);
            }
        })
        .required('Tags are required'),

    brand: yup.string().required('Brand is required'),
});
