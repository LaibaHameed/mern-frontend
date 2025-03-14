import SingleProductPage from '@/components/SingleProductPage/SingleProductPage';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';
import React from 'react';

const ProductDetailPage = async ({params}) => {
  const { productId } = await params;
   
  return (
    <>
      <Header />
      <Breadcrumb title="New Product" />
      <SingleProductPage productId={productId}  />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
