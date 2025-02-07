import React, { useState }  from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Products from '@/data/Products'; 
import ProductQuantity from './ProductQuantity';

const ProductDetails = ({ productName = "Pellentesque aliquet" }) => {
    const product = Products[productName];

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    return (
        <div>
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
                <ProductQuantity/>

                {/* Additional Info */}
                <p className="text-sm text-gray-500"><span>Categories:</span> {product.categories.join(", ")}</p>
                <p className="text-sm text-gray-500"><span>Tags:</span> {product.tags.join(", ")}</p>
                <p className="text-sm text-gray-500 "><span>Brand:</span> {product.brand}</p>
            </div>
        </div>
    )
}

export default ProductDetails