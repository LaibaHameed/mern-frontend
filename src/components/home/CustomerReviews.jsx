'use client';

import { useSelector, useDispatch } from 'react-redux';
import { nextReviewSlide, goToReviewSlide } from '@/lib/features/sliderSlice';
import { CUSTOMER_REVIEWS } from '@/constants/general';
import Container from '../shared/Container';
import useAutoSlider from '@/hooks/useAutoSlider'; 

const CustomerReviews = () => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.customerReviewSlide);

  useAutoSlider(nextReviewSlide);

  return (
    <div className="bg-gray-100 flex-center">
      <Container>
        <div className="py-20">
          <div className="flex-center flex-col md:px-20 sm:px-10 md:py-10">
            <h1 className="sm:text-4xl text-2xl font-semibold font-serif my-4 tracking-tighter">
              What Our Clients Say
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
              {CUSTOMER_REVIEWS.map((customer) => (
                <button
                  key={customer.name}
                  onClick={() => dispatch(goToReviewSlide(customer.id))}
                  className={`w-3 h-3 rounded-full animate focus:outline-none ${
                    currentSlide === customer.id ? 'bg-green-500 scale-125' : 'bg-gray-400'
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
