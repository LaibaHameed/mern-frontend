import React from 'react'
import Search from './Search'
import Sorting from './Sorting'

const TopSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="col-span-1 md:col-span-1">
        <Search />
      </div>

      <div className="col-span-1 md:col-span-3">
        <Sorting />
      </div>
    </div>
  )
}

export default TopSection
