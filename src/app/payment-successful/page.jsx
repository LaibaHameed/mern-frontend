import PaymentSuccessful from '@/components/CartPage/PaymentSuccessful';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';

const page = () => {
  return (
    <>
      <Header />
      <PaymentSuccessful />
      <Footer />
    </>
  );
};

export default page;
