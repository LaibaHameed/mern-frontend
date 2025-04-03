'use client';
import ProductImage from './ProductImage';
import Loader from '../shared/common/Loader';
import Container from '../shared/common/Container';
import {IoCloudOfflineOutline} from 'react-icons/io5';
import ProductDetails from './ProductDetails/ProductDetails';
import {useGetProductByIdQuery} from '@/redux/slices/product/productsApi';
import Breadcrumb from '../shared/common/Breadcrumb';
import ProductTabs from './ProductTabs/ProductTabs';

const SingleProductPage = ({productId}) => {
  const {data, isLoading, error} = useGetProductByIdQuery(productId);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="py-20 flex-center gap-2">
        {' '}
        <IoCloudOfflineOutline /> Product not found.
      </p>
    );

  const product = data.body.product;

  return (
    <>
      <div className="sm:mx-12 mx-6">
        <Breadcrumb product={product} />
      </div>
      <div className="flex-center sm:mx-12 mx-6 my-5">
        <Container>
          <div className="md:mx-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <ProductImage product={product} />
              <ProductDetails product={product} />
            </div>
            <div className="w-full mt-10">
            <ProductTabs product={product} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleProductPage;
