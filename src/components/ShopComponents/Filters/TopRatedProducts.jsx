"use client";
import { BEST_SELLER } from "@/constants/general";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopRatedProducts = () => {
  return (
    <div className="py-4 bg-white w-full">
      <h3 className="font-semibold mb-6 text-secondary uppercase">Top Rated </h3>
      
      {BEST_SELLER.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} className="space-y-4 cursor-pointer">
          <div className="flex items-start gap-4 mb-2 hover:shadow-xl animate">
            <Image width={75} height={75} src={product.image} alt={product.title} className="object-cover" />
            <div>
              <h4 className="text-sm font-light text-secondary tracking-wider">{product.title}</h4>
              <p className="text-secondary font-semibold py-2 font-serif">{product.price}.00 $</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopRatedProducts;
