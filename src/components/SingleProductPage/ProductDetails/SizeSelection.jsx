import React from 'react';

const SizeSelection = ({ sizes, selectedSize, setSelectedSize }) => {
    return (
        <div className="space-x-5 flex items-center my-5">
            <p>Size:</p>
            <div className="flex space-x-4">
                {sizes.map((size) => (
                    <label key={size} className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="size"
                            value={size}
                            checked={selectedSize === size}
                            onChange={() => setSelectedSize(size)}
                            className="form-radio text-primary"
                        />
                        <span className={`${selectedSize === size ? "text-primary font-semibold" : "text-gray-700"}`}>
                            {size}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SizeSelection;
