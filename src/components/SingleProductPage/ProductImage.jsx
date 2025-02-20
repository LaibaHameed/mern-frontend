import React from 'react'
import ImageSlider from './ImageSlider'
import Image from 'next/image'

const ProductImage = ({ mainImage, productName, setMainImage, images }) => {
    return (
        <>
            <div className="w-full flex-center flex-col">
                <Image width={400} height={100} src={mainImage} alt={productName} className="w-xl" />
                <ImageSlider images={images} setMainImage={setMainImage} mainImage={mainImage} />
            </div>
        </>
    )
}

export default ProductImage