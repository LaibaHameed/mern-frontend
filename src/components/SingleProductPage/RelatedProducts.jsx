import React from 'react';
import ProductCard from '../shared/common/ProductCard';
import {BEST_SELLER} from '@/constants/general';

const RelatedProducts = () => {
  return (
    <div className="flex-center flex-col">
      <h1 className="md:text-4xl text-2xl font-semibold font-serif my-4  text-secondary">
        Related products
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {BEST_SELLER.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
