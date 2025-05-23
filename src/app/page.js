import AboutInfo from '@/components/home/AboutInfo';
import BestSeller from '@/components/home/BestSeller';
import Carousel from '@/components/home/Carousel';
import CustomerReviews from '@/components/home/CustomerReviews';
import Feedback from '@/components/home/Feedback';
import NewArrival from '@/components/home/NewArrival';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutInfo />
      <NewArrival />
      {/* <BestSeller /> */}
      <CustomerReviews />
      <Feedback />
      <Footer />
    </>
  );
}
