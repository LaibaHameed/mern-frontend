'use client'
import React, { useState } from 'react'
import Container from '../shared/Container'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMinus } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { ROOT_ROUTE } from '@/utils/PATHS';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Products from '@/data/Products'; // Import Products object

const SinglePage = ({ productName = "Pellentesque aliquet" }) => {
  const product = Products[productName]; // Fetch the product dynamically

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
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

          {/* Right: Product Details */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <div className='flex space-x-2 items-center'>
              <span className="flex space-x-1 text-lg text-orange-500">
                {[...Array(5)].map((_, index) => (
                  index < Math.floor(product.rating) ? (
                    <IoIosStar key={index} />
                  ) : (
                    <IoIosStarOutline key={index} />
                  )
                ))}
              </span>
              <p className="text-gray-500 font-light">( {product.reviews || 0} customer reviews )</p>
            </div>
            <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
            <p className=" text-gray-500 my-5">{product.description}</p>

            <div className="text-sm space-y-1">
              <p><span className='text-gray-500 font-light mr-2'>Product Code:</span> {product.productCode}</p>
              <p><span className='text-gray-500 font-light mr-2'>Quantity:</span> {product.quantity} Items</p>
              <p><span className='text-gray-500 font-light mr-2'>Shipping tax:</span> {product.shippingTax}</p>
            </div>

            {/* Size Selection */}
            <div className="space-x-5 flex items-center my-5">
              <p>Size:</p>
              <div className="flex space-x-4">
                {product.sizes.map((size) => (
                  <label key={size} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                      className="form-radio text-primary "
                    />
                    <span className={`${selectedSize === size ? "text-primary font-semibold" : "text-gray-700"}`}>
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-x-5 flex my-5 items-center">
              <p>Color:</p>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <label key={color} className="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      className="hidden"
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${color === "red" ? "bg-red-500" : color === "blue" ? "bg-blue-500" : "bg-green-500"
                        } ${selectedColor === color ? `border-${color}-500 scale-110` : "border-gray-100"}`}
                    ></div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0 space-y-5 my-10'>
              <div className='flex items-center'>
                <button className='rounded-l-full py-3 px-4 text-secondary border border-primary text-2xl cursor-pointer'>
                  <IoMdAdd />
                </button>
                <p className='py-3 px-10 border text border-primary'>2</p>
                <button className='rounded-r-full py-3 px-4 text-secondary border border-primary text-2xl cursor-pointer'>
                  <HiOutlineMinus />
                </button>
              </div>
              <div className="flex flex-wrap gap-4 text-center">
                <Link
                  href={ROOT_ROUTE}
                  className="rounded-full bg-primary px-7 py-3 tracking-wider text-white shadow hover:bg-green-400 focus:outline-none sm:w-auto flex-center gap-2 animate"
                >
                  Add To Cart <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-gray-500"><span>Categories:</span> {product.categories.join(", ")}</p>
            <p className="text-sm text-gray-500"><span>Tags:</span> {product.tags.join(", ")}</p>
            <p className="text-sm text-gray-500 "><span>Brand:</span> {product.brand}</p>
          </div>
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
        x``
      </Container>
    </div>
  )
}

export default SinglePage;
