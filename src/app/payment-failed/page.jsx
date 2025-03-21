import PaymentFailed from '@/components/CartPage/PaymentFailed';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';

const page = () => {
  return (
    <>
      <Header />
      <PaymentFailed />
      <Footer />
    </>
  );
};

export default page;
