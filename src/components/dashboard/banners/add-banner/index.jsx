'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useForm} from 'react-hook-form';
import SubmitButton from '@/components/shared/buttons/SubmitButton';
import FileInputField from '@/components/shared/inputs/FileInputField';
import {useAddBannerMutation} from '@/redux/slices/user/usersApi';
import {showToast} from '@/utils/toasts';

const DashboardBanners = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {control, handleSubmit, watch, reset} = useForm({
    defaultValues: {
      image: null,
    },
  });

  const [addBanner, {isLoading}] = useAddBannerMutation();

  const formValue = watch();

  useEffect(() => {
    if (formValue.image) {
      const imageUrl = URL.createObjectURL(formValue.image);
      setImagePreview(imageUrl);
    } else setImagePreview(null);

    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [formValue.image]);

  const onSubmit = async (data) => {
    if (!data.image) {
      showToast({type: 'error', message: 'Please select image'});
      return;
    }

    const formData = new FormData();
    formData.append('file', data.image);

    const res = await addBanner({data: formData});

    if (res) {
      setImagePreview(null);
      reset();
    }
  };

  return (
    <div className='flex-center w-full md:px-24 sm:px-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white px-10 py-12 shadow-md w-full rounded-3xl my-10'
      >
        <h2 className='text-xl text-secondary font-semibold text-left mb-5'>
          Add Banner
        </h2>
        <FileInputField label='Banner Image' control={control} name='image' />
        {imagePreview && (
          <Image
            width={400}
            height={400}
            src={imagePreview}
            alt='Preview'
            className='mt-4 w-full h-auto object-cover rounded-md'
          />
        )}
        <SubmitButton loading={isLoading} buttonText='Add' styles='w-40 mt-3' />
      </form>
    </div>
  );
};

export default DashboardBanners;
