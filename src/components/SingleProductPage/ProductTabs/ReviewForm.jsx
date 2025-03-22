import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useParams} from 'next/navigation';
import SubmitButton from '@/components/shared/buttons/SubmitButton';
import Ratings from '@/components/shared/common/Ratings';
import InputField from '@/components/shared/inputs/InputField';
import TextareaField from '@/components/shared/inputs/TextareaField';
import {useAddRatingMutation} from '@/redux/slices/product/productsApi';
import {ratingValidationSchema} from '@/schemas/ratingsSchema';
import {FaTimes} from 'react-icons/fa';

const ReviewForm = ({setShowReviewForm}) => {
  const {productId} = useParams();
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: {errors},
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

  const [addRating, {isLoading}] = useAddRatingMutation();

  const formValues = watch();

  const onSubmit = async (data) => {
    const finalData = {...data, productId};
    await addRating({data: finalData});
    reset();
    setShowReviewForm(false);
  };

  return (
    <>
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
          <label className="text-sm font-semibold text-secondary py-1">
            Ratings
          </label>
          <Ratings
            rating={formValues.rating}
            setRating={(event) => {
              setValue('rating', event);
              clearErrors('rating');
            }}
          />
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
        <SubmitButton buttonText="Submit" loading={isLoading} />
      </form>
    </>
  );
};

export default ReviewForm;
