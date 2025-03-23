'use client';

import { useForm } from 'react-hook-form';
import InputField from '../shared/inputs/InputField';
import TextareaField from '../shared/inputs/TextareaField';
import SubmitButton from '../shared/buttons/SubmitButton';
import Container from '../shared/common/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/schemas/general';
import { useContactSubmissionMutation } from '@/redux/slices/user/usersApi';
import Image from 'next/image';

const Contact = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
  });

  const [submitMutation, { isLoading }] = useContactSubmissionMutation();

  const onSubmit = async (data) => {
    await submitMutation({ data });
    reset();
  };

  return (
    <div className="flex-center sm:mx-6">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:justify-between md:gap-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white py-12 px-6 sm:px-12 shadow-lg mb-24 w-full rounded-lg sm:w-2xl"
          >
            <h2 className="text-xl text-secondary font-semibold text-left mb-5">
              Contact Form
            </h2>
            <InputField
              label="Name"
              placeholder="Enter your full name"
              control={control}
              name="name"
            />
            <InputField
              label="Email"
              placeholder="Enter your valid email"
              control={control}
              name="email"
            />
            <InputField
              label="Subject"
              placeholder="Enter color"
              control={control}
              name="subject"
            />
            <TextareaField
              label="Message"
              placeholder="Enter your message"
              control={control}
              name="message"
            />
            <div className="col-span-2 flex justify-start">
              <SubmitButton
                loading={isLoading}
                buttonText="Submit"
                styles="w-40 mt-3 w-fit rounded-full px-12 "
              />
            </div>
          </form>
          <div className="w-full md:w-1/3">
            <Image
              src="/assets/feedback.jpg"
              alt="feedback"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;


