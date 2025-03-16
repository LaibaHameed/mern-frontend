import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import ProductQuantity from './ProductQuantity';

const ProductDetails = ({ product }) => {
    if (!product) {
        return <p className='h-1/3 flex-center text-lg' >Product not found.</p>;
    }

    return (
        <div>
            <div className="space-y-4">
                <h2 className="md:text-3xl text-xl font-bold">{product.name}</h2>

                <div className="flex space-x-2 items-center">
                    <span className="flex space-x-1 text-lg text-orange-500">
                        {[...Array(5)].map((_, index) =>
                            index < Math.floor(0) ? (
                                <IoIosStar key={index} />
                            ) : (
                                <IoIosStarOutline key={index} />
                            )
                        )}
                    </span>
                    <p className="text-gray-500 font-light">(0 customer reviews)</p>
                </div>

                <p className="md:text-2xl text-xl font-semibold text-primary">
                    ${product.price.toFixed(2)}
                </p>

                <p className="text-gray-500 my-5">{product.description}</p>

                <div className="text-sm space-y-1">
                    <p>
                        <span className="text-gray-500 font-light mr-2">Product Code:</span>
                        {product.code}
                    </p>
                    <p>
                        <span className="text-gray-500 font-light mr-2">Quantity:</span>
                        {product.availableQty} Items
                    </p>
                    <p>
                        <span className="text-gray-500 font-light mr-2">Shipping tax:</span>
                        {product.tax}
                    </p>
                </div>

                <ProductQuantity />

                <p className="text-sm text-gray-500">
                    <span>Brand:</span> {product.brand}
                </p>
                <p className="text-sm text-gray-500">
                    <span>Color:</span> {product.color}
                </p>
            </div>
        </div>
    );
};

export default ProductDetails;