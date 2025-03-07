'use client';

import ProductTable from '@/components/dashboard/ProductTable';
import TopSection from '@/components/dashboard/TopSection';

const Products = () => {


  return (
    <div>
      <div className="flex-center flex-col text-black gap-6">
        <TopSection/>
        <ProductTable/>
      </div>
    </div>
  );
};

export default Products;
