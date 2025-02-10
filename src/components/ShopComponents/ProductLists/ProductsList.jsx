'use client'
import Products from '@/data/Products'
import React, { useState } from 'react'
import ProductCard from '../../shared/ProductCard'
import Pagination from './Pagination' 

const ProductsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const productsArray = Object.values(Products);
    const totalPages = Math.ceil(productsArray.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsArray.slice(indexOfFirstProduct, indexOfLastProduct);

    const goToPage = (page) => setCurrentPage(page);

    return (
        <div className='w-full'>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {currentProducts.map((product) => (
                    <ProductCard key={product.productId} product={product} />
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
        </div>
    )
}

export default ProductsList
