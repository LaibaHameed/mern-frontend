'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '@/schemas/ProductSchema';
import { useAddProductMutation } from '@/redux/slices/product/productsApi';
import { DASHBOARD_ROUTES } from '@/utils/PATHS';
import InputField from '@/components/shared/inputs/InputField';
import NumberField from '@/components/shared/inputs/NumberField';
import TextareaField from '@/components/shared/inputs/TextareaField';
import FileInputField from '@/components/shared/inputs/FileInputField';
import SubmitButton from '@/components/shared/buttons/SubmitButton';

const AddProductForm = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const router = useRouter();

  const [addProduct, { isLoading }] = useAddProductMutation();

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
      productImages: [],
    },
  });

  const productImages = watch('productImages');

  const removeImage = (index) => {
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));

    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setValue('productImages', updatedFiles);
  };

  useEffect(() => {
    if (productImages && productImages.length > 0) {
      const newFiles = Array.from(productImages);
      const uniqueFiles = newFiles.filter(
        (file) =>
          !selectedFiles.some((existingFile) => existingFile.name === file.name)
      );
      setSelectedFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
      const newPreviews = uniqueFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);

      return () => newPreviews.forEach((url) => URL.revokeObjectURL(url));
    } else {
      setImagePreviews([]);
      setSelectedFiles([]);
    }
  }, [productImages]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append(
      'data',
      JSON.stringify({ ...data, productImages: undefined })
    );

    data.productImages.forEach((file) => formData.append('files', file));

    await addProduct({ data: formData });
    reset();
    setImagePreviews([]);
    setSelectedFiles([]);
    router.push(DASHBOARD_ROUTES.products.all);
  };

  return (
    <div className="flex-center w-full md:px-24 sm:px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white px-10 py-12 shadow-md w-full my-10"
      >
        <h2 className="text-xl text-secondary font-semibold text-left mb-5">
          Add Product
        </h2>
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputField
              label="Product Name"
              placeholder="Enter Product Name"
              control={control}
              name="name"
            />
          </div>
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
          <InputField
            label="Color"
            placeholder="Enter color"
            control={control}
            name="color"
          />
          <InputField
            label="Brand"
            placeholder="Brand of Product"
            control={control}
            name="brand"
          />
          <div className="col-span-2">
            <TextareaField
              label="Product Description"
              placeholder="Add Product Description"
              control={control}
              name="description"
            />
          </div>
          <div className="col-span-2">
            <FileInputField
              label="Product Images"
              control={control}
              name="productImages"
              multiple={true}
            />
          </div>

          {imagePreviews.length > 0 && (
            <div className="col-span-2 flex flex-wrap gap-2 mt-4">
              {imagePreviews.map((src, index) => (
                <div
                  key={index}
                  className="relative w-[150px] h-[150px] border overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 shadow-lg bg-white h-5 w-5 flex-center"
                  >
                    <FaTimes className=" text-secondary" size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="col-span-2 flex justify-end">
            <SubmitButton
              loading={isLoading}
              buttonText="Add Product"
              styles="w-40 mt-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
