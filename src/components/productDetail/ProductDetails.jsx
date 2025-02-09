import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import ProductQuantity from './ProductQuantity';
import SizeSelection from './SizeSelection';
import ColorSelection from './ColorSelection';

const ProductDetails = ({ product }) => {

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    return (
        <div>
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

                <SizeSelection sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                <ColorSelection colors={product.colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                <ProductQuantity />

                <p className="text-sm text-gray-500"><span>Categories:</span> {product.categories.join(", ")}</p>
                <p className="text-sm text-gray-500"><span>Tags:</span> {product.tags.join(", ")}</p>
                <p className="text-sm text-gray-500 "><span>Brand:</span> {product.brand}</p>
            </div>
        </div>
    )
}

export default ProductDetails