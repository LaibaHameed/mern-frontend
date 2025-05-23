import SingleProductPage from '@/components/SingleProductPage/SingleProductPage';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Breadcrumb from '@/components/shared/common/Breadcrumb';

const ProductDetailPage = async ({params}) => {
  const { productId } = await params;
   
  return (
    <>
      <Header />
      <SingleProductPage productId={productId}  />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
