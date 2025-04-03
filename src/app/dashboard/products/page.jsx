'use client';
import Container from '@/components/shared/common/Container';
import ProductsPage from '../../../components/dashboard/products/ProductsPage';

const Products = () => {
  return (
    <div className='flex-center w-full'>
      <Container>
        <ProductsPage />
      </Container>
    </div>
  );
};

export default Products;
