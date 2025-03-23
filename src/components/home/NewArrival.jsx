'use client';

import Image from 'next/image';
import ProductCard from '../shared/common/ProductCard';
import Container from '../shared/common/Container';
import {useGetProductsQuery} from '@/redux/slices/product/productsApi';
import Loader from '@/components/shared/common/Loader';

const NewArrival = () => {
  const {data, isLoading} = useGetProductsQuery({limit: 4, page: 1});

  const products = data?.body?.products ?? [];

  if (isLoading) return <Loader />;

  if (products.length > 0)
    return (
      <div className="flex-center sm:margin-lg margin-sm my-24">
        <Container>
          <div className="flex-center flex-col">
            <h1 className="text-4xl font-semibold font-serif my-4 tracking-tighter">
              New Arrival
            </h1>
            {/* <Image
              src="/assets/HeadingImg.png"
              width={350}
              height={100}
              alt="Heading"
            /> */}
            <p className="m-5 text-gray-600 text-center">
              There are many variations of passages of lorem ipsum available
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
              {products.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    );

  return null;
};

export default NewArrival;
