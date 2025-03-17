import Contact from '@/components/contact';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';

const page = () => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
