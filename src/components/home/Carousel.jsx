'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import {useGetBannersQuery} from '@/redux/slices/user/usersApi';
import Loader from '@/components/shared/common/Loader';

const Carousel = () => {
  const {data, isLoading, isError} = useGetBannersQuery({limit: 6, page: 1});

  const banners = data?.body?.banners ?? [];

  if (isLoading) return <Loader />;

  return (
    <section className='relative bg-cover bg-center bg-no-repeat'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        loop={true}
        speed={1000}
        className='w-full h-screen'
      >
        {banners.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className=' relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out'>
              <Image
                src={slide.imageUrl}
                alt={`Slide ${slide._id}`}
                width={1920}
                height={1080}
                className='w-full h-screen object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
