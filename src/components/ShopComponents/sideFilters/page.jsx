'use client'
import { useState } from 'react';
import { FiFilter } from "react-icons/fi";
import TableSearch from '@/components/shared/TableComponents/TableSearch';
import SortingOptions from './SortingOptions';
import Modal from './Modal';

const SideFilters = ({ setSearchQuery, setSortOption, totalProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 my-2">
        <div className='flex items-center justify-between w-full'>
          {/* Search Input */}
          <div className='sm:w-full w-[270px]'>
            <TableSearch setSearchQuery={setSearchQuery} />
          </div>

          {/* Apply Filter Button (Visible on below md screens ) */}
          <button
            className="md:hidden px-4 py-2 text-sm bg-primary hover:bg-primary-hover text-white rounded-full animate"
            onClick={() => setIsModalOpen(true)}
          >
            <FiFilter size={20} />
          </button>
        </div>

        {/* Sorting Options */}
        <p className="text-gray-600 font-light text-xs sm:text-sm">Showing 1–9 of {totalProducts} results</p>
        <div className="hidden lg:block w-full">
          <SortingOptions setSortOption={setSortOption} />
        </div>
      </div>

      {/* Modal for Filters (Only in Mobile View) */}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} setSortOption={setSortOption} />}
    </>
  );
};

export default SideFilters;
