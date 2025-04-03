'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import { FiX } from 'react-icons/fi';


const ProductImage = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.imageUrls?.[0] || null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   setMainImage(product?.imageUrls?.[0] || null);
  // }, [product]);

  return (
    <div className="w-full flex flex-col items-center">
      {mainImage && (
        <div
          className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-2 shadow-md border-gray-200 rounded-lg cursor-pointer"
          // onClick={() => setIsModalOpen(true)}
        >
          <Image
            fill
            src={mainImage}
            alt={product?.name || 'Product image'}
            className="object-contain"
          />
        </div>
      )}
      {mainImage && (
        <ImageSlider
          images={product?.imageUrls || []}
          setMainImage={setMainImage}
          mainImage={mainImage}
        />
      )}

      {/* {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative p-12 rounded-lg max-w-[90vw] max-h-[90vh]">
            <Image
              src={mainImage}
              alt={product?.name || 'Product image'}
              width={800} // Adjust as needed
              height={800} // Adjust as needed
              className="object-contain"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 cursor-pointer bg-primary text-white rounded-full p-2"
            >
              <FiX/>
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductImage;
