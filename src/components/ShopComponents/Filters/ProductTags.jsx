"use client";
import { PRODUCT_TAGS } from "@/constants/general";
import React from "react";


const ProductTags = () => {
  return (
    <div className="py-4 bg-white w-full">
      <h3 className=" font-semibold mb-6 text-secondary uppercase">Product Tags</h3>

      <div className="flex flex-wrap gap-2">
        {PRODUCT_TAGS.map((tag) => (
          <button
            key={tag.id}
            className="text-sm px-4 py-1.5 mb-0.5 font-light border border-gray-300 rounded-full hover:bg-primary-hover animate cursor-pointer hover:text-white "
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
