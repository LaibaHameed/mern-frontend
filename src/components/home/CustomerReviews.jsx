'use client'
import { CUSTOMER_REVIEWS } from '@/constants/general';
import React from 'react';
import useSlider from '@/hooks/useSlider';
import Container from '../shared/Container';

const CustomerReviews = () => {
    const { currentSlide } = useSlider({ dataLength: CUSTOMER_REVIEWS.length });

    return (
        <div className='flex items-center justify-center'>
            <Container>
                <div className='bg-gray-100 sm:py-20 my-20 py-10 lg:m-24 mx-12'>
                    <div className='flex flex-col items-center justify-center md:px-20 sm:px-10 md:py-10'>
                        <h1 className='sm:text-4xl text-2xl font-semibold font-serif my-4 tracking-tighter'>What Say Client</h1>
                        <span className='text-6xl font-serif text-gray-600 mt-6'>“</span>
                        <div className='lg:mx-20 flex flex-col items-center justify-center'>
                            <p className='text-center text-sm sm:font-normal mx-10 text-gray-500 font-serif font-thin tracking-wide'>
                                {CUSTOMER_REVIEWS[currentSlide].review}
                            </p>
                            <h2 className='text-xl font-bold text-gray-600 mt-12'>{CUSTOMER_REVIEWS[currentSlide].name}</h2>
                            <p className='text-gray-500 my-2'>{CUSTOMER_REVIEWS[currentSlide].title}</p>
                        </div>

                        {/* Dots for indicating slides */}
                        <div className='flex mt-6 space-x-2'>
                            {CUSTOMER_REVIEWS.map((customer) => (
                                <div
                                    key={customer.name}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${CUSTOMER_REVIEWS[currentSlide].name === customer.name ? 'bg-green-500 scale-125' : 'bg-gray-400'
                                        }`}
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
