import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';

const ImageSlider = ({ images = [], setMainImage, mainImage }) => {
    return (
        <div className="container max-w-xl">
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 4 },
                    640: { slidesPerView: 7 },
                    1024: { slidesPerView: 7 },
                }}
            >
                {images.length ? (
                    images.map((img) => (
                        <SwiperSlide key={img.id}>
                            <Image
                                src={img.path}
                                alt={`Thumbnail ${img.id}`}
                                width={100}
                                height={100}
                                className={`w-20 h-20 object-cover shadow-md cursor-pointer border-2 animate ${mainImage === img.path ? "border-primary" : "border-gray-100"
                                    }`}
                                onClick={() => setMainImage(img.path)}
                            />
                        </SwiperSlide>
                    ))
                ) : <p className="text-center text-gray-500">No images available</p>}
            </Swiper>
        </div>
    )
}

export default ImageSlider