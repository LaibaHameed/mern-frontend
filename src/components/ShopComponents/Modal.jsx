import React from 'react'
import AllFilters from './Filters/page';
import { FiX } from 'react-icons/fi';

const Modal = ({setIsModalOpen}) => {
    return (
        <div className="fixed inset-0 flex-center z-10">
            <div className="bg-white p-6 rounded-lg w-4/5 max-w-md h-[640px] overflow-y-auto scrollbar-hide shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                        onClick={() => setIsModalOpen(false)}
                    >
                        <FiX size={25} />
                    </button>
                </div>

                <div className="max-h-[540px] overflow-y-auto scrollbar-hide px-4">
                    <AllFilters />
                </div>
            </div>
        </div>
    )
}

export default Modal