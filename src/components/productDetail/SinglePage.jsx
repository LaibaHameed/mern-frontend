'use client'
import React, { useState } from 'react'
import Container from '../shared/Container'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Products from '@/data/Products'; 
import ProductDetails from './ProductDetails';

const SinglePage = ({ productName = "Pellentesque aliquet" }) => {
  const product = Products[productName]; 
  const [mainImage, setMainImage] = useState(product.images[0]);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className='flex-center sm:mx-12'>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-24">

          {/* Left: Product Image */}
          <div className="w-full">
            <img src={mainImage} alt={product.name} className="w-full h-auto" />
          </div>
          <ProductDetails/>
        </div>

        {/* Image Slider */}
        <div className="container mx-auto my-10">
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 2 }, 
              640: { slidesPerView: 3 }, 
              1024: { slidesPerView: 6 }, 
            }}
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-40 object-cover shadow-md cursor-pointer border-2 animate ${mainImage === img ? "border-primary" : "border-gray-300"
                    }`}
                  onClick={() => setMainImage(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default SinglePage;
