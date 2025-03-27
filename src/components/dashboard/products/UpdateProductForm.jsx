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
import { FaTimes } from 'react-icons/fa';

const UpdateProductForm = () => {
    const { id: productId } = useParams();
    const router = useRouter();

    const { data: product, isLoading } = useGetProductByIdQuery(productId);
    const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

    const [imageItems, setImageItems] = useState([]);
    const [removedImages, setRemovedImages] = useState([]);

    const { control, handleSubmit, reset, watch, setValue, setError } = useForm({
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
            const filteredImages = productData.imageUrls?.filter(img => !removedImages.includes(img)) || [];

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

            setImageItems(filteredImages.map(url => ({ url }))); 
        }
    }, [product, reset, removedImages]);

    const productImages = watch('productImages');

    useEffect(() => {
        if (productImages && productImages.length > 0) {
            const newFiles = Array.from(productImages);

            const uniqueFiles = newFiles.filter(
                (file) => !imageItems.some((item) => item.file?.name === file.name)
            );

            const newItems = uniqueFiles.map((file) => ({
                file,
                preview: URL.createObjectURL(file), 
            }));

            setImageItems((prevItems) => [...prevItems, ...newItems]);

            return () => newItems.forEach((item) => item.preview && URL.revokeObjectURL(item.preview));
        }
    }, [productImages]);

    const removeImage = (index) => {
        const removedItem = imageItems[index];

        setImageItems((prevItems) => prevItems.filter((_, i) => i !== index));

        if (removedItem.url && product?.body?.product?.imageUrls?.includes(removedItem.url)) {
            setRemovedImages((prev) => [...prev, removedItem.url]);
        }
    };

    const onSubmit = async (data) => {
        const formData = new FormData();

        if (imageItems.length === 0) {
            setError("productImages", {
                type: "manual",
                message: "At least one image is required!",
            });
            return;
        }

        const imageUrls = imageItems.filter(item => item.url).map(item => item.url);
        const filesToUpload = imageItems.filter(item => item.file).map(item => item.file);

        formData.append("data", JSON.stringify({ ...data, imageUrls, removedImages }));
        filesToUpload.forEach((file) => formData.append("files", file));

        await updateProduct({ productId, data: formData });
        router.push(DASHBOARD_ROUTES.products.all);
    };

    return (
        <div className="flex-center w-full md:px-24 sm:px-10">
            <form key={product?._id || 'emptyForm'} onSubmit={handleSubmit(onSubmit)} className="bg-white px-10 py-12 shadow-md w-full my-10">
                <h2 className="text-xl text-secondary font-semibold text-left mb-5">Update Product</h2>

                {isLoading ? (
                    <Loader />
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

                        {imageItems.length > 0 && (
                            <div className="col-span-2 flex flex-wrap gap-2 mt-4">
                                {imageItems.map((item, index) => (
                                    <div key={index} className="relative w-[150px] h-[150px] border overflow-hidden">
                                        <img src={item.preview || item.url} alt={`preview-${index}`} className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-2 right-2 shadow-lg bg-white h-5 w-5 flex-center"
                                        >
                                            <FaTimes className="text-secondary" size={14} />
                                        </button>
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