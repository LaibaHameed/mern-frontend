'use client'
import { SORTING_OPRIONS } from '@/constants/general';
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Sorting = () => {
  const [sortOption, setSortOption] = useState('default')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col justify-between items-start sm:flex-row sm:items-center gap-2 relative w-full">
      <p className="text-gray-600 font-light text-sm sm:mb-0 mb-6">Showing 1–9 of 24 results</p>
      <div className='flex-center gap-1'>
        <h5 className='text-sm font-semibold text-gray-500'>Sort by :</h5>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white px-3 py-2 border border-gray-300 text-gray-800 cursor-pointer text-sm w-48 text-left font-light flex items-center justify-between"
          >
            {SORTING_OPRIONS.find((opt) => opt.value === sortOption)?.label}
            <IoMdArrowDropdown />
          </button>

          {isOpen && (
            <div className="absolute min-w-48 bg-white border border-gray-300 shadow-md overflow-hidden z-10">
              {SORTING_OPRIONS.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setSortOption(option.value)
                    setIsOpen(false)
                  }}
                  className={`px-3 py-2 cursor-pointer font-light text-sm transition 
                    ${sortOption === option.value ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sorting
