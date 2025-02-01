'use client';
import {GALLERY_ITEMS, NEW_ARRIVAL} from '@/constants/general';
import Image from 'next/image';
import ProductCard from '../shared/ProductCard';
import Container from '../shared/Container';

const NewArrival = () => {
  return (
    <div className="flex-center">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold font-serif my-4 tracking-tighter">
            New Arrival
          </h1>
          <Image
            src="/assets/HeadingImg.png"
            width={350}
            height={100}
            alt="Heading"
          />
          <p className="m-5 text-gray-600 text-center">
            There are many variations of passages of lorem ipsum available
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  my-6">
            {NEW_ARRIVAL.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
