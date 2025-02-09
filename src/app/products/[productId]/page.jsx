import SingleProductPage from '@/components/productDetail/SingleProductPage'
import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'

const ProductDetailPage = ({ params }) => {
  return (
    <div>
          <Breadcrumb/>
          <SingleProductPage/>
    </div>
  )
}

export default ProductDetailPage