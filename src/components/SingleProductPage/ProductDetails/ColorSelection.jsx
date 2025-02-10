import React from 'react';

const ColorSelection = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <div className="space-x-5 flex my-5 items-center">
            <p>Color:</p>
            <div className="flex space-x-3">
                {colors.map((color) => (
                    <label key={color} className="cursor-pointer">
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                            className="hidden"
                        />
                        <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${color === "red" ? "bg-red-500" : color === "blue" ? "bg-blue-500" : "bg-green-500"
                                } ${selectedColor === color ? `border-${color}-500 scale-110` : "border-gray-100"}`}
                        ></div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ColorSelection;
