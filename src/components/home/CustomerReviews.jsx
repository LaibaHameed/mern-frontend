'use client';
import { CUSTOMER_REVIEWS } from '@/constants/general';
import React from 'react';
import Container from '../shared/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 flex-center">
      <Container>
        <div className="py-20">
          <div className="flex-center flex-col md:px-20 sm:px-10 md:py-10">
            <h1 className="sm:text-4xl text-2xl font-semibold font-serif my-4 tracking-tighter">
              What Say Client
            </h1>
            <span className="text-6xl font-serif text-gray-600 md:mt-6">“</span>

            {/* Swiper Slider */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              speed={1000}
              className="w-full max-w-3xl h-auto"
            >
              {CUSTOMER_REVIEWS.map((review) => (
                <SwiperSlide key={review.id} className="text-center">
                  <p className="text-sm sm:text-lg mx-12 sm:font-normal text-gray-500 font-serif font-thin tracking-wide">
                    {review.review}
                  </p>
                  <h2 className="text-xl font-bold text-gray-600 mt-6 mb-3">{review.name}</h2>
                  <p className="text-gray-500 mb-12">{review.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
