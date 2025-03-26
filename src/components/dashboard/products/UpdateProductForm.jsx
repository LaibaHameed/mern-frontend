'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '@/schemas/ProductSchema';
import { useGetProductByIdQuery, useUpdateProductMutation } from '@/redux/slices/product/productsApi';
import InputField from '@/components/shared/inputs/InputField';
import NumberField from '@/components/shared/inputs/NumberField';
import TextareaField from '@/components/shared/inputs/TextareaField';
import FileInputField from '@/components/shared/inputs/FileInputField';
import SubmitButton from '@/components/shared/buttons/SubmitButton';
import SwitchInput from '@/components/shared/inputs/SwitchInput';
import { DASHBOARD_ROUTES } from '@/utils/PATHS';
import Loader from '@/components/shared/common/Loader';

const UpdateProductForm = () => {
    const { id: productId  } = useParams();
    const router = useRouter();

    const { data: product, isLoading } = useGetProductByIdQuery(productId);
    const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
    const [imagePreviews, setImagePreviews] = useState([]);

    const { control, handleSubmit, reset, watch, setValue } = useForm({
        resolver: yupResolver(productSchema),
        defaultValues: { 
            name: '',
            price: '',
            description: '',
            code: '',
            tax: '',
            color: '',
            brand: '',
            isOutOfStock: false,
            productImages: [],
        },
    });

    useEffect(() => {
        if (product && product.body && product.body.product) {
            const productData = product.body.product; 
            reset({
                name: productData.name || '',
                price: productData.price || '',
                description: productData.description || '',
                code: productData.code || '',
                tax: productData.tax || '',
                color: productData.color || '',
                brand: productData.brand || '',
                isOutOfStock: productData.isOutOfStock ?? false,
                productImages: [], 
            });
            setImagePreviews(productData?.imageUrls?.map((img) => img) || []);
        }
    }, [product, reset]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('data', JSON.stringify({ ...data, productImages: undefined }));

        if (data.productImages) {
            data.productImages.forEach((file) => formData.append('files', file));
        }

        await updateProduct({ productId, data: formData });
        router.push(DASHBOARD_ROUTES.products.all)
    };

    return (
        <div className="flex-center w-full md:px-24 sm:px-10">
            <form key={product?._id || 'emptyForm'} onSubmit={handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-full my-10">
                <h2 className="text-xl text-secondary font-semibold text-left mb-5">Update Product</h2>

                {isLoading ? (
                    <Loader/>
                ) : (
                    <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <InputField label="Product Name" control={control} name="name" />
                        </div>
                        <InputField label="Product Code" control={control} name="code" />
                        <NumberField label="Price" control={control} name="price" />
                        <NumberField label="Shipping Tax" control={control} name="tax" />
                        <InputField label="Color" control={control} name="color" />
                        <InputField label="Brand" control={control} name="brand" />
                        <SwitchInput label="Is Product Out of Stock?" control={control} name="isOutOfStock" />
                        <div className="col-span-2">
                            <TextareaField label="Product Description" control={control} name="description" />
                        </div>
                        <div className="col-span-2">
                            <FileInputField label="Product Images" control={control} name="productImages" multiple />
                        </div>

                        {imagePreviews.length > 0 && (
                            <div className="col-span-2 flex flex-wrap gap-2 mt-4">
                                {imagePreviews.map((src, index) => (
                                    <div key={index} className="relative w-[150px] h-[150px] border overflow-hidden">
                                        <img src={src} alt={`preview-${index}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="col-span-2 flex justify-end">
                            <SubmitButton loading={isUpdating} buttonText="Update Product" styles="w-40 mt-3" />
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default UpdateProductForm;