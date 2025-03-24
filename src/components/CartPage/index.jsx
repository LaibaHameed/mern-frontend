'use client';

import Container from '../shared/common/Container';
import CartTable from './CartTable';
import {useSelector} from 'react-redux';
import {getCartItems} from '@/redux/slices/product/productsSlice';
import {
  useCreateOrderMutation,
  useCreatePaymentCheckoutMutation,
} from '@/redux/slices/order/ordersApi';
import {useForm} from 'react-hook-form';
import InputField from '../shared/inputs/InputField';
import TextareaField from '../shared/inputs/TextareaField';
import SubmitButton from '../shared/buttons/SubmitButton';
import {yupResolver} from '@hookform/resolvers/yup';
import {createOrderSchema} from '@/schemas/orderSchema';
import RadioInputField from '../shared/inputs/RadioInputField';
import {PAYMENT_METHODS, PAYMENT_OPTIONS} from '@/constants/general';
import {useMemo} from 'react';
import {useRouter} from 'next/navigation';
import {PUBLIC_ROUTES} from '@/utils/PATHS';
import Image from 'next/image';

const CartPage = () => {
  const cartItems = useSelector(getCartItems);
  const router = useRouter();

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(createOrderSchema),
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      address: '',
      paymentMethod: '',
    },
  });
  const [createOrder, {isLoading: createOrderLoading}] =
    useCreateOrderMutation();

  const [createCheckoutPayment, {isLoading: checkoutLoading}] =
    useCreatePaymentCheckoutMutation();

  const totalPrice = useMemo(() => {
    const price = cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);

    return price;
  }, [cartItems]);

  const onSubmit = async (data) => {
    const finalData = {
      products: cartItems,
      totalPrice: Number(totalPrice),
      customerName: data.name,
      customerEmail: data.email,
      customerPhoneNo: data.contact,
      customerAddress: data.address,
      paymentMethod: data.paymentMethod,
    };

    if (data.paymentMethod === PAYMENT_METHODS.cod.value) {
      const response = await createOrder({data: finalData});
      if (response) router.push(PUBLIC_ROUTES.paymentSuccessful);
    } else {
      const response = await createCheckoutPayment({data: finalData});
      if (response) router.push(response.data.body.checkout_url);
      if (response.error) router.push(PUBLIC_ROUTES.paymentFailed);
    }
  };

  if (cartItems.length === 0)
    return (
      <div className="flex-center w-full h-[400px]">
        <Container>
          <div className="flex-center flex-col gap-4">
            <Image
              src="/assets/shopping.png"
              alt="empty cart"
              width={200}
              height={200}
            />
            <p className="text-secondary text-center sm:text-sm">
              You cart is empty. Please continue your shopping to add products
              in your cart
            </p>
          </div>
        </Container>
      </div>
    );

  return (
    <div className="flex-center  mx-6">
      <Container>
        <div className="flex flex-col gap-6 ">
          <div className="w-full">
            <CartTable cartItems={cartItems} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl'>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold mb-4 uppercase py-6 border-b border-gray-300">
                Order Details
              </h2>
              <InputField
                control={control}
                label="Name"
                name="name"
                placeholder="Enter your name"
              />
              <InputField
                control={control}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <InputField
                control={control}
                label="Contact"
                name="contact"
                placeholder="Enter your contact in +923132... format"
              />
              <TextareaField
                control={control}
                label="Permanent Address"
                name="address"
                placeholder="Enter your permanent address"
              />
              <RadioInputField
                label="Payment Method"
                name="paymentMethod"
                control={control}
                options={PAYMENT_OPTIONS}
              />
            </div>
            <div className=" w-full ">
              <h2 className="font-semibold mb-4 uppercase py-6 border-b border-gray-300">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between font-medium mb-6">
                <span>Subtotal:</span>
                <span>Rs. {totalPrice} </span>
              </div>

              {/* Checkout Button */}
              <SubmitButton
                styles="w-fit rounded-full px-12 mb-6 text-sm bg-secondary hover:bg-primary-hover text-white font-semibold uppercase block animate cursor-pointer"
                buttonText=" Proceed to Checkout"
                loading={createOrderLoading || checkoutLoading}
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
