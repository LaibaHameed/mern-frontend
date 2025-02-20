'use client'
import React, { useState } from 'react';
import Search from './Search'
import Sorting from './Sorting'
import Modal from '../Modal';


const TopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1">

          <div className='flex items-start justify-between flex-col sm:flex-row sm:items-center w-full'>
            <Search />
            <button
              className="md:hidden px-7 py-3 text-sm bg-primary hover:bg-primary-hover text-white rounded-full mt-6 sm:mt-0 animate"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Filter
            </button>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3">
          <Sorting />
        </div>
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}/>
      )}
    </>

  )
}

export default TopSection
