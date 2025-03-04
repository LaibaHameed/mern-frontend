'use client';

import { useForm } from 'react-hook-form';
import InputField from '../shared/InputField';
import SubmitButton from '../shared/buttons/SubmitButton';
import NumberField from '../shared/NumberField';
import TextareaField from '../shared/TextareaField';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from '@/schemas/ProductSchema';

const AddProductForm = () => {
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(ProductSchema),
        defaultValues: {
            name: '',
            price: '',
            description: '',
            code: '',
            quantity: '',
            tax: '',
            categories: [],
            colors: [],
            tags: [],
            brand: ''
        },
    });

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        reset();
    };

    return (
        <div className='flex-center w-full md:px-24 sm:px-10'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white px-10 py-12 shadow-md w-full rounded-3xl my-10"
            >
                <h2 className="text-xl font-semibold text-left mb-5">Add Product</h2>

                <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                        label="Product Name"
                        placeholder="Enter Product Name"
                        control={control}
                        name="name"
                    />
                    <InputField
                        label="Product Code"
                        placeholder="Add Product Code"
                        control={control}
                        name="code"
                    />
                    <NumberField
                        label="Price"
                        placeholder="Enter Product Price"
                        control={control}
                        name="price"
                    />
                    <NumberField
                        label="Shipping Tax"
                        placeholder="Add Product Shipping Tax"
                        control={control}
                        name="tax"
                    />
                    <NumberField
                        label="Quantity"
                        placeholder="Add Product Quantity"
                        control={control}
                        name="quantity"
                    />
                    <InputField
                        label="Colors"
                        placeholder="Enter colors (comma-separated)"
                        control={control}
                        name="colors"
                    />
                    <InputField
                        label="Categories"
                        placeholder="Enter Product Categories (comma-separated)"
                        control={control}
                        name="categories"
                    />
                    <InputField
                        label="Brand"
                        placeholder="Brand of Product"
                        control={control}
                        name="brand"
                    />
                    <TextareaField
                        label="Product Description"
                        placeholder="Add Product Description"
                        control={control}
                        name="description"
                    />
                    
                    <TextareaField
                        label="Tags"
                        placeholder="Enter tags (comma-separated)"
                        control={control}
                        name="tags"
                    />

                    <div className="col-span-2 flex justify-end">
                        <SubmitButton buttonText="Add Product" styles="w-40 mt-3" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProductForm;
