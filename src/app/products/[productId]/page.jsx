import SingleProductPage from '@/components/SingleProductPage/SingleProductPage';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';
import React from 'react';

const ProductDetailPage = ({params}) => {
  return (
    <>
      <Header />
      <Breadcrumb title="New Product" />
      <SingleProductPage />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
