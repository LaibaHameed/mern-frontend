import CartPage from '@/components/CartPage/page';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';
import React from 'react';

const Cart = () => {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <CartPage />
      <Footer />
    </div>
  );
};

export default Cart;
