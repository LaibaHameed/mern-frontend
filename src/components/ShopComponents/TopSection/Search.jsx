'use client'
import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { FiX } from 'react-icons/fi'

const Search = () => {
  const [query, setQuery] = useState('')

  return (
    <div className="relative flex-center w-full max-w-sm px-3 py-2 bg-white border-2 border-gray-100">

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Product..."
        className="w-full bg-transparent outline-none text-gray-600 border-none text-sm"
      />

      <div className='flex-center gap-1'>
        {query && (
          <button onClick={() => setQuery('')} className="">
            <FiX className="text-gray-500 hover:text-secondary cursor-pointer" size={20} />
          </button>
        )}
        <button>
          <GoSearch className="text-gray-500 hover:text-secondary cursor-pointer" size={20} />
        </button>
      </div>

    </div>
  )
}

export default Search
