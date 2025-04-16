'use client';

import Image from 'next/image';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/navigation';
import ThemeButton from '../shared/buttons/ThemeButton';
import Container from '../shared/common/Container';
import {PUBLIC_ROUTES} from '@/utils/PATHS';
import {actions as productActions} from '@/redux/slices/product/productsSlice';

const PaymentSuccessful = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.clearCartItems());
  }, [dispatch]);

  return (
    <div className="flex-center w-full">
      <Container>
        <div className="min-h-[700px] flex-center">
          <div className="flex flex-col items-center gap-6 w-[400px]">
            <Image
              src="/assets/order.png"
              alt="order"
              width={200}
              height={200}
            />
            <p className="text-secondary font-bold text-[20px] text-center">
              You order has been placed successfully. You will receive
              confirmation email for your order
            </p>
            <ThemeButton
              buttonText="Continue Shopping"
              styles="bg-primary hover:bg-primary-hover "
              handleClick={() => router.push(PUBLIC_ROUTES.home)}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSuccessful;
