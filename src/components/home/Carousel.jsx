'use client';

import {FaArrowRight} from 'react-icons/fa';
import {ROOT_ROUTE} from '@/utils/PATHS';
import SLIDES from '@/constants/general';
import Link from 'next/link';
import Container from '../shared/common/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{clickable: true}}
        loop={true}
        speed={1000}
        className="w-full h-auto"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className=" relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
              style={{backgroundImage: `url(${slide.image})`}}
            >
              <Container>
                <div className="relative mx-auto max-w-screen-xl py-32 lg:mx-6 lg:flex lg:h-screen lg:items-center">
                  <div className="max-w-xxl text-secondary text-left">
                    <h2 className="text-md lg:text-2xl md:text-xl sm:text-lg font-serif font-bold text-secondary mb-6 uppercase">
                      <span className="text-green-800 font-extrabold mr-1">
                        |
                      </span>
                      Welcome to Botanical
                    </h2>
                    <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold font-serif mb-2">
                      {slide.title}
                    </h1>
                    <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold font-serif">
                      {slide.title2}
                    </h1>

                    <p className="mt-6 max-w-xl text-xs sm:text-sm/relaxed text-secondary">
                      {slide.description}
                    </p>

                    <div className="mt-14 flex flex-wrap gap-4 text-center">
                      <Link
                        href={ROOT_ROUTE}
                        className="rounded-full bg-primary px-7 py-2 tracking-wider md:px-10 md:py-4 md:text-md md:font-semibold text-white shadow hover:bg-primary-hover focus:outline-none sm:w-auto flex-center gap-2 animate"
                      >
                        {slide.buttonText1} <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
