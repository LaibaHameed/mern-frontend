'use client';

import {useRouter} from 'next/navigation';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import {DASHBOARD_ROUTES} from '@/utils/PATHS';

const Products = () => {
  const router = useRouter();

  const onClickButton = () => router.push(DASHBOARD_ROUTES.products.addProduct);

  return (
    <div>
      <div className="flex-center flex-col text-black gap-6">
        <ThemeButton
          buttonText={'Add Product'}
          handleClick={onClickButton}
          styles={'bg-primary hover:bg-primary-hover'}
        />
        All Products
      </div>
    </div>
  );
};

export default Products;
