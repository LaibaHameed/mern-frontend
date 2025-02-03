'use client';
import {CUSTOMER_REVIEWS} from '@/constants/general';
import React from 'react';
import useSlider from '@/hooks/useSlider';
import Container from '../shared/Container';

const CustomerReviews = () => {
  const { currentSlide, setCurrentSlide } = useSlider({ dataLength: CUSTOMER_REVIEWS.length });

  return (
    <div className="bg-gray-100 flex-center">
      <Container>
        <div className="py-20">
          <div className="flex-center flex-col md:px-20 sm:px-10 md:py-10">
            <h1 className="sm:text-4xl text-2xl font-semibold font-serif my-4 tracking-tighter">
              What Say Client
            </h1>
            <span className="text-6xl font-serif text-gray-600 md:mt-6">“</span>
            <div className="lg:mx-20 flex-center flex-col">
              <p className="text-center text-sm sm:font-normal h-20 text-gray-500 font-serif font-thin tracking-wide">
                {CUSTOMER_REVIEWS[currentSlide].review}
              </p>
              <h2 className="text-xl font-bold text-gray-600 mt-12">
                {CUSTOMER_REVIEWS[currentSlide].name}
              </h2>
              <p className="text-gray-500 my-2">
                {CUSTOMER_REVIEWS[currentSlide].title}
              </p>
            </div>

            {/* Dots for indicating slides */}
            <div className="flex mt-6 space-x-2">
              {CUSTOMER_REVIEWS.map((customer, index) => (
                <button
                  key={customer.name}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    currentSlide === index ? 'bg-green-500 scale-125' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to review by ${customer.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
