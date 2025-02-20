"use client";
import React, { useState } from "react";

const PriceFilter = () => {
  const [maxPrice, setMaxPrice] = useState(70);
  const maxLimit = 70;

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxLimit) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="py-4 bg-white w-full">
      <h3 className=" font-semibold mb-3 text-secondary">FILTER BY PRICE</h3>

      <div className="relative w-full h-8 flex items-center">
        <div className="absolute h-1 w-full bg-gray-300 rounded-full"></div>

        <div
          className="absolute h-1 bg-primary rounded-full"
          style={{
            width: `${(maxPrice / maxLimit) * 100}%`,
          }}
        ></div>

        <input
          type="range"
          min={0}  // Explicitly set min to 0
          max={maxLimit}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto border-none"  
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-secondary text-sm">
          $0 to ${maxPrice}
        </span>
        <button className="bg-primary text-white px-6 py-1.5 rounded-full text-sm hover:bg-primary-hover animate uppercase">
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;