import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';
import MainContent from '@/components/ShopComponents/page';
import React from 'react';

const Shop = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Products" />
      <MainContent />
      <Footer />
    </>
  );
};

export default Shop;
