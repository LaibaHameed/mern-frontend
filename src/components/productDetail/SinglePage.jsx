'use client'
import React, { useState } from 'react'
import Container from '../shared/Container'
import Products from '@/data/Products'; 
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import ImageSlider from './ImageSlider';

const SinglePage = ({ productName = "Pellentesque aliquet" }) => {
  const product = Products[productName]; 
  const [mainImage, setMainImage] = useState(product.images[0].path);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className='flex-center sm:mx-12 mx-6'>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-24">
          <ProductImage mainImage={mainImage} productName={product.name} />
          <ProductDetails product={product}/>
        </div>
        <ImageSlider images={product.images} setMainImage={setMainImage} mainImage={mainImage} />
      </Container>
    </div>
  )
}

export default SinglePage;
