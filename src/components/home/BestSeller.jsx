import { BEST_SELLER } from '@/constants/general'
import Image from 'next/image'
import React from 'react'
import ProductCard from '../reuseableComponents/ProductCard'

const BestSeller = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold font-serif my-4 tracking-tighter">Best seller</h1>
                <Image src="/assets/HeadingImg.png" width={350} height={100} alt="Heading" />
                <p className="m-5 text-gray-600 text-center">
                    There are many variations of passages of lorem ipsum available
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-24 sm:px-12 my-6">
                    {
                        BEST_SELLER.map((item)=>(
                            <ProductCard key={item.id} product={item} />
                        ))
                    }
                </div>
            </div>
    </>
  )
}

export default BestSeller