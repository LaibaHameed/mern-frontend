import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";

const ProductTabs = ({product}) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="py-12">
            <div className="flex-center tracking-tighter">
                {/* Description Tab */}
                <h1
                    className={`group relative sm:text-4xl text-xl font-semibold font-serif my-4 tracking-tighter cursor-pointer sm:mx-6 mx-2 transition-colors duration-500 ${activeTab === "description" ? "text-primary" : "text-secondary"
                        }`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                    <span
                        className={`absolute left-1/2 bottom-[-8px] w-0 h-[2px] bg-primary transition-all duration-500 ease-out transform -translate-x-1/2 ${activeTab === "description" ? "w-full left-1/2 -translate-x-1/2" : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                            }`}
                    ></span>
                </h1>

                {/* Reviews Tab */}
                <h1
                    className={`group relative sm:text-4xl text-xl font-semibold font-serif my-4 tracking-tighter cursor-pointer sm:mx-6 mx-2 transition-colors duration-500 ${activeTab === "reviews" ? "text-primary" : "text-secondary"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews ({product.reviews || 0})
                    <span
                        className={`absolute left-1/2 bottom-[-8px] w-0 h-[2px] bg-primary transition-all duration-500 ease-out transform -translate-x-1/2 ${activeTab === "reviews" ? "w-full left-1/2 -translate-x-1/2" : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                            }`}
                    ></span>
                </h1>
            </div>

            <div className="my-12">
                {activeTab === "description" ? <Description /> : <Reviews />}
            </div>
        </div>
    );
};

export default ProductTabs;
