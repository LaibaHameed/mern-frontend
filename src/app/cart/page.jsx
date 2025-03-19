import CartPage from '@/components/CartPage';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';

const Cart = () => {
  return (
    <div>
      <Header />
      <Breadcrumb/>
      <CartPage />
      <Footer />
    </div>
  );
};

export default Cart;
