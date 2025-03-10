'use client';

import {useForm} from 'react-hook-form';
import InputField from '../shared/inputs/InputField';
import TextareaField from '../shared/inputs/TextareaField';
import SubmitButton from '../shared/buttons/SubmitButton';
import Container from '../shared/common/Container';
import {yupResolver} from '@hookform/resolvers/yup';
import {contactSchema} from '@/schemas/general';
import {useContactSubmissionMutation} from '@/redux/slices/user/usersApi';

const Contact = () => {
  const {control, handleSubmit, reset} = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
  });

  const [submitMutation, {isLoading}] = useContactSubmissionMutation();

  const onSubmit = async (data) => {
    await submitMutation({data});
    reset();
  };

  return (
    <div className="flex-center w-full">
      <Container>
        <div className="flex-center w-full md:px-24 sm:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-10 py-12 shadow-md w-full rounded-3xl my-10"
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
                styles="w-40 mt-3"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
