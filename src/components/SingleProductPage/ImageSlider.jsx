import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <SwiperSlide key={img}>
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                width={100}
                                height={100}
                                className={`w-20 h-20 object-cover shadow-md cursor-pointer border-2 
                                    ${mainImage === img ? "border-primary" : "border-gray-100"}`}
                                onClick={() => setMainImage(img)}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-3">No images available</p>
                )}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
