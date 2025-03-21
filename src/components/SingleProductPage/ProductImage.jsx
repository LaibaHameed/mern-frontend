import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';

const ProductImage = ({ product }) => {
    const [mainImage, setMainImage] = useState(product?.imageUrls?.[0] || null);

    useEffect(() => {
        setMainImage(product?.imageUrls?.[0]  || null);
    }, [product]);

    
    return (
        <div className="w-full flex flex-col items-center">
            {mainImage && (
                <div className="relative w-[550px] h-[500px] overflow-hidden ">
                    <Image 
                        fill
                        src={mainImage} 
                        alt={product?.name || 'Product image'} 
                        className="object-contain"
                    />
                </div>
            )}
            {mainImage && (
                <ImageSlider images={product?.imageUrls || []} setMainImage={setMainImage} mainImage={mainImage} />
            )}
        </div>
    );
};

export default ProductImage;
