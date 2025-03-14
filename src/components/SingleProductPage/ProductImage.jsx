import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';

const ProductImage = ({ product }) => {
    const [mainImage, setMainImage] = useState(product?.imageUrls?.[0] || null);

    useEffect(() => {
        setMainImage(product?.imageUrls?.[0] || null);
    }, [product]);

    return (
        <div className="w-full flex-center flex-col">
            {mainImage && (
                <Image 
                    width={400} 
                    height={100} 
                    src={mainImage || '/assets/bestSeller1.jpg'} 
                    alt={product?.name || 'Product image'} 
                    className="w-xl"
                />
            )}
            {mainImage && (
                <ImageSlider images={product?.imageUrls || []} setMainImage={setMainImage} mainImage={mainImage} />
            )}
        </div>
    );
};

export default ProductImage;
