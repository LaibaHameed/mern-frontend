import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';

const ImageSlider = ({ images, setMainImage, mainImage }) => {
    return (
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
                {images.map((img) => (
                    <SwiperSlide key={img.id}>
                        <Image
                            src={img.path}
                            alt={`Thumbnail ${img.id}`}
                            width={100}
                            height={100}
                            className={`w-full h-40 object-cover shadow-md cursor-pointer border-2 animate ${mainImage === img.path ? "border-primary" : "border-gray-300"
                                }`}
                            onClick={() => setMainImage(img.path)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageSlider