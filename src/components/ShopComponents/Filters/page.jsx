import React from 'react'
import ProductCategories from './ProductCategories'
import PriceFilter from './PriceFilter'
import TopRatedProducts from './TopRatedProducts'
import ProductTags from './ProductTags'

const AllFilters = () => {
  return (
    <div className='md:grid md:grid-cols-1 gap-6 pr-6'>
      <ProductCategories/>
      <PriceFilter/>
      <TopRatedProducts/>
      <ProductTags/>
    </div>
  )
}

export default AllFilters