import Image from 'next/image';
import {useState, useEffect} from 'react';
import ImageSlider from './ImageSlider';

const ProductImage = ({product}) => {
  const [mainImage, setMainImage] = useState(product?.imageUrls?.[0] || null);

  useEffect(() => {
    setMainImage(product?.imageUrls?.[0] || null);
  }, [product]);

  return (
    <div className="w-full flex flex-col items-center">
      {mainImage && (
        <div className="relative w-full  h-[500px] overflow-hidden mb-2 shadow-md border-gray-200 rounded-md">
          <Image
            fill
            src={mainImage}
            alt={product?.name || 'Product image'}
            className="object-cover"
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
    </div>
  );
};

export default ProductImage;
