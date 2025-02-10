"use client";
import { BEST_SELLER } from "@/constants/general";
import Image from "next/image";
import React from "react";


const TopRatedProducts = () => {
  return (
    <div className="py-4 bg-white w-full">
      <h3 className="font-semibold mb-6 text-secondary uppercase">Top Rated </h3>
      
      <div className="space-y-4 cursor-pointer">
        {BEST_SELLER.map((product) => (
          <div key={product.id} className="flex items-start gap-4 mb-2 hover:shadow-xl animate">
            <Image width={75} height={75} src={product.image} alt={product.title} className=" object-cover " />
            <div>
              <h4 className="text-sm font-light text-secondary tracking-wider">{product.title}</h4>
              <p className=" text-secondary font-semibold py-2 font-serif">{product.price}.00 $</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
