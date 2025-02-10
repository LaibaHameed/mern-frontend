import React from 'react'
import TopSection from './TopSection/page'
import Container from '../shared/Container'
import AllFilters from './Filters/page'

const MainContent = () => {
  return (
    <div className='flex-center mx-6 my-24'>
      <Container>
        <TopSection />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-1">
            <AllFilters/>
          </div>

          <div className="col-span-1 md:col-span-3">
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MainContent