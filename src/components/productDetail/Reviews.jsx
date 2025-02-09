import React from "react";

const Reviews = () => {
    return (
        <div className="bg-white  p-6 mx-auto">

            {/* Review 1 */}
            <div className="pb-4 mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                        <p className="font-semibold text-gray-700">John Doe</p>
                        <p className="text-sm text-gray-500">Jan 5, 2025</p>
                    </div>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                    "Great product! The quality is amazing, and the delivery was super fast."
                </p>
            </div>

            {/* Review 2 */}
            <div className="pb-4 mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                        <p className="font-semibold text-gray-700">Jane Smith</p>
                        <p className="text-sm text-gray-500">Dec 22, 2024</p>
                    </div>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                    "Loved it! Would definitely recommend to others. Five stars!"
                </p>
            </div>

            {/* Add Review Button */}
            <button className=" cursor-pointer mt-4 bg-primary text-white py-3 px-7 rounded-full hover:bg-opacity-90 animate hover:bg-primary-hover">
                Add a Review
            </button>
        </div>
    );
};

export default Reviews;
