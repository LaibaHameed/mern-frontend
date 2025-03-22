'use client'
import { FiX } from 'react-icons/fi';
import SortingOptions from './SortingOptions';

const Modal = ({ setIsModalOpen, sortOption, setSortOption }) => {

    return (
        <div className="fixed inset-0 flex-center z-50">
            <div className="bg-white p-6 rounded-lg w-4/5 max-w-md h-[400px] overflow-y-auto scrollbar-hide shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-bold">Sort Products By:</h2>
                    <button onClick={() => setIsModalOpen(false)}>
                        <FiX size={25} />
                    </button>
                </div>

                <div className="max-h-[350px] overflow-y-auto scrollbar-hide px-4">
                    <SortingOptions
                        sortOption={sortOption}
                        setSortOption={setSortOption}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;