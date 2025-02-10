import React from 'react'
import ProductCategories from './ProductCategories'
import PriceFilter from './PriceFilter'
import TopRatedProducts from './TopRatedProducts'
import ProductTags from './ProductTags'

const AllFilters = () => {
  return (
    <div className='sm:grid grid-cols-2 gap-6 md:grid-cols-1'>
      <ProductCategories/>
      <PriceFilter/>
      <TopRatedProducts/>
      <ProductTags/>
    </div>
  )
}

export default AllFilters