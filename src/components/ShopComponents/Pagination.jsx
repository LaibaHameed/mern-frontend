'use client'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
    return (
        <div className="flex-center space-x-2 mt-6">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 text-secondary border border-gray-300 rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200 cursor-pointer'}`}
            >
                <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={`px-3 py-1  text-secondary border border-gray-300 rounded-lg  font-serif ${currentPage === index + 1 ? 'bg-primary-hover text-white' : 'hover:bg-gray-200 cursor-pointer'}`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 text-secondary border border-gray-300 rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200 cursor-pointer'}`}
            >
                <FaChevronRight />
            </button>
        </div>
    )
}

export default Pagination
