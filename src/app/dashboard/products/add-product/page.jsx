import AddProductForm from '@/components/dashboard/products/AddProductForm';
import Container from '@/components/shared/common/Container';
import React from 'react';

const AddProduct = () => {
  return (
    <div className="flex-center w-full">
      <Container>
        <AddProductForm/>
      </Container>
    </div>
  );
};

export default AddProduct;
