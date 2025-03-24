import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import SubmitButton from '@/components/shared/buttons/SubmitButton';
import Ratings from '@/components/shared/common/Ratings';
import InputField from '@/components/shared/inputs/InputField';
import TextareaField from '@/components/shared/inputs/TextareaField';
import { useAddRatingMutation } from '@/redux/slices/product/productsApi';
import { ratingValidationSchema } from '@/schemas/ratingsSchema';
import { FaTimes } from 'react-icons/fa';

const ReviewForm = ({ setShowReviewForm }) => {
  const { productId } = useParams();
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(ratingValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: 0,
      message: '',
    },
  });

  const [addRating, { isLoading }] = useAddRatingMutation();

  const formValues = watch();

  const onSubmit = async (data) => {
    const finalData = { ...data, productId };
    await addRating({ data: finalData });
    reset();
    setShowReviewForm(false);
  };

  return (
    <div className='w-xl shadow-lg border-[1px] border-gray-300 rounded-[4px] p-5 mt-5'>
      <div className="w-full flex justify-end">
        <FaTimes
          onClick={() => {
            setShowReviewForm(false);
            reset();
          }}
          className="cursor-pointer"
        />
      </div>
      <form
        className="w-full flex flex-col gap-4 pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className='flex'>
            <label className="text-sm font-semibold text-secondary py-1 mr-6">
              Give Rating
            </label>
            <Ratings
              rating={formValues.rating}
              maxWidth={120}
              setRating={(event) => {
                setValue('rating', event);
                clearErrors('rating');
              }}
            />
          </div>
          {errors['rating'] && (
            <p className="text-xs relative text-error">
              {errors['rating'].message}
            </p>
          )}
        </div>
        <InputField
          control={control}
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
        />
        <InputField
          control={control}
          label="Email"
          name="email"
          placeholder="Enter your email"
        />
        <TextareaField
          control={control}
          label="Message"
          name="message"
          placeholder="Enter your feedback message"
        />
        <SubmitButton buttonText="Submit" loading={isLoading} styles={'rounded-full w-fit py-3 px-7'} />
      </form>
    </div>
  );
};

export default ReviewForm;
