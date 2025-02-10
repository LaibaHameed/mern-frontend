import { PRODUCT_CATEGORIES } from '@/constants/general';
import React from 'react';


const ProductCategories = () => {
  return (
    <div className="bg-white py-4">
      <h3 className="font-semibold mb-3 text-secondary uppercase">PRODUCT CATEGORIES</h3>
      <ul className="space-y-2">
        {PRODUCT_CATEGORIES.map((category) => (
          <li key={category.name} className="flex justify-between text-secondary hover:text-primary cursor-pointer font-light text-sm py-2">
            <span>{category.name}</span>
            <span>({category.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
