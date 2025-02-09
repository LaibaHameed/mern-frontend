import SinglePage from '@/components/productDetail/SinglePage'
import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'

const ProductDetailPage = ({ params }) => {
  return (
    <div>
          <Breadcrumb/>
          <SinglePage/>
    </div>
  )
}

export default ProductDetailPage