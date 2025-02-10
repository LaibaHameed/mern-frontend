import React from 'react'

const ProductImage = ({ mainImage, productName }) => {
    return (
        <>
            <div className="w-full">
                <img src={mainImage} alt={productName} className="w-full h-auto" />
            </div>
        </>
    )
}

export default ProductImage