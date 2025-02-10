import React from 'react'
import TopSection from './TopSection/page'
import Container from '../shared/Container'
import AllFilters from './Filters/page'
import ProductsList from './ProductsList'

const MainContent = () => {
  return (
    <div className='flex-center mx-6 my-24'>
      <Container>
        <TopSection />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="col-span-2 md:col-span-3 order-first md:order-last">
            <ProductsList />
          </div>

          <div className="col-span-2 md:col-span-1 order-last md:order-first">
            <AllFilters />
          </div>

        </div>
      </Container>
    </div>
  )
}

export default MainContent
