'use client'
import { useState } from 'react';
import { SORTING_OPRIONS } from '@/constants/general';

const SortingOptions = ({ setSortOption, sortOption, setIsModalOpen }) => {

    const [selectedOption, setSelectedOption] = useState(sortOption);

    const handleSortChange = (value) => {
        setSelectedOption(value);
    };

    const applySorting = () => {
        setSortOption(selectedOption);
        if (setIsModalOpen) {
            setIsModalOpen(false);
        }
    }

    const ResetAllFilters = () => {
        setSortOption("default");
        setSelectedOption("default");
        if (setIsModalOpen) {
            setIsModalOpen(false);
        }
    }

    return (
        <>
            <h5 className="text-sm font-semibold text-secondary mt-2">Sort by:</h5>
            <div className="flex flex-col gap-2 bg-white py-2 w-full">
                {SORTING_OPRIONS.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer text-sm font-light">
                        <input
                            type="radio"
                            name="sortOption"
                            value={option.value}
                            checked={selectedOption === option?.value}
                            onChange={() => handleSortChange(option.value)}
                            className="accent-primary"
                            key={option.value} // Force re-render
                        />

                        {option.label}
                    </label>
                ))}
            </div>

            {/* Apply Button */}
            <button
                className="px-4 py-2 mt-4 bg-primary hover:bg-primary-hover text-white text-sm rounded-full animate cursor-pointer"
                onClick={applySorting}
            >
                Apply Filter
            </button>
            <button
                className="block px-4 py-2 mt-4 bg-primary hover:bg-primary-hover text-white text-sm rounded-full animate cursor-pointer"
                onClick={ResetAllFilters}
            >
                Reset All Filters
            </button>
        </>
    );
};

export default SortingOptions;
