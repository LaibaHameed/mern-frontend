'use client';

import Container from '../shared/common/Container';
import Image from 'next/image';
import InputField from '../shared/inputs/InputField';
import { useForm } from 'react-hook-form';
import TextareaField from '../shared/inputs/TextareaField';
import SubmitButton from '../shared/buttons/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationFeedbackSchema } from '@/schemas/feedbackSchema';
import { useFeedbackSubmissionMutation } from '@/redux/slices/user/usersApi';

const Feedback = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationFeedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      designation: '',
      message: '',
    },
  });

  const [submitFeedback, { isLoading }] = useFeedbackSubmissionMutation();

  const onSubmit = async (data) => {
    await submitFeedback({ data });
    reset();
  };

  return (
    <div className="flex-center sm:margin-lg margin-sm my-24">
      <Container>
        <h1 className="sm:text-4xl text-center text-2xl font-semibold font-serif mb-6 tracking-tighter">
          Share Your Thoughts
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/feedback.jpg"
              alt="feedback"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <form
            className="w-full md:w-1/2 flex flex-col gap-4 relative top-[-25px] rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <InputField
              control={control}
              label="Designation"
              name="designation"
              placeholder="Enter your designation"
            />
            <TextareaField
              control={control}
              label="Message"
              name="message"
              placeholder="Enter your feedback message"
            />
            <SubmitButton buttonText="Submit" loading={isLoading} styles={'w-fit rounded-full px-12 '} />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
