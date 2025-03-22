'use client'
import { useState } from 'react';
import { FiFilter } from "react-icons/fi";
import TableSearch from '@/components/shared/TableComponents/TableSearch';
import SortingOptions from './SortingOptions';
import Modal from './Modal';

const SideFilters = ({ setSearchQuery, sortOption, setSortOption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 my-2">
        <div className='flex items-center justify-between w-full'>
          <div className='sm:w-full w-[270px]'>
            <TableSearch setSearchQuery={setSearchQuery} />
          </div>

          <button
            className="md:hidden px-4 py-2 text-sm bg-primary hover:bg-primary-hover text-white rounded-full animate"
            onClick={() => setIsModalOpen(true)}
          >
            <FiFilter />
          </button>
        </div>

        <div className="hidden lg:block w-full">
          <SortingOptions
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      )}

    </>
  );
};

export default SideFilters;