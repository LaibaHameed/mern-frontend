'use client'
import React, { useState } from 'react'
import Container from '../shared/Container'
import Products from '@/data/Products';
import ProductImage from './ProductImage';
import ImageSlider from './ImageSlider';
import RelatedProducts from './RelatedProducts';
import ProductTabs from './ProductTabs/ProductTabs';
import ProductDetails from './ProductDetails/ProductDetails';

const SingleProductPage = ({ productName = "Pellentesque aliquet" }) => {
  const product = Products[productName];

  if (!product) return <p>Product not found.</p>;

  const [mainImage, setMainImage] = useState(product?.images?.[0]?.path || '');

  return (
    <div className='flex-center sm:mx-12 mx-6'>
      <Container>
        <div className='md:mx-6'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-24">
            <ProductImage mainImage={mainImage} productName={product.name} images={product.images || []} setMainImage={setMainImage} />
            <ProductDetails product={product} />
          </div>
          <ProductTabs product={product} />
          <RelatedProducts />
        </div>
      </Container>
    </div>
  );
};


export default SingleProductPage;
