'use client'
import { useState } from 'react';
import { SORTING_OPRIONS } from '@/constants/general';

const SortingOptions = ({ setSortOption }) => {
    const [selectedOption, setSelectedOption] = useState('default');

    const handleSortChange = (value) => {
        setSelectedOption(value);
        setSortOption(value); 
    };

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
                            checked={selectedOption === option.value}
                            onChange={() => handleSortChange(option.value)}
                            className="accent-primary"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </>
    );
};

export default SortingOptions;
