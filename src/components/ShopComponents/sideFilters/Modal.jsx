'use client'
import { FiX } from 'react-icons/fi';
import SortingOptions from './SortingOptions';

const Modal = ({setIsModalOpen, setSortOption}) => {
    return (
        <div className="fixed inset-0 flex-center z-50">
            <div className="bg-white p-6 rounded-lg w-4/5 max-w-md h-[400px] overflow-y-auto scrollbar-hide shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                        onClick={() => setIsModalOpen(false)}
                    >
                        <FiX size={25} />
                    </button>
                </div>

                <div className="max-h-[350px] overflow-y-auto scrollbar-hide px-4">
                    <SortingOptions setSortOption={setSortOption} />
                </div>
            </div>
        </div>
    )
}

export default Modal