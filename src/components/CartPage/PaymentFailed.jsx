'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import ThemeButton from '../shared/buttons/ThemeButton';
import Container from '../shared/common/Container';
import {PUBLIC_ROUTES} from '@/utils/PATHS';

const PaymentFailed = () => {
  const router = useRouter();

  return (
    <div className="flex-center w-full">
      <Container>
        <div className="min-h-[700px] flex-center">
          <div className="flex flex-col items-center gap-6 w-[400px]">
            <Image
              src="/assets/order-failed.png"
              alt="order"
              width={200}
              height={200}
            />
            <p className="text-secondary font-bold text-[20px] text-center">
              Payment failed due to unknown issues. Please try again from cart
            </p>
            <ThemeButton
              buttonText="Go Back To Cart"
              styles="bg-primary hover:bg-primary-hover "
              handleClick={() => router.push(PUBLIC_ROUTES.cart)}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentFailed;
