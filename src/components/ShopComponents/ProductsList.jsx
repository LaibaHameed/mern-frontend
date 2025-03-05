'use client';
import Products from '@/data/Products';
import ProductCard from '../shared/common/ProductCard';
import usePagination from '@/hooks/usePagination';

const ProductsList = () => {
  const productsArray = Object.values(Products);
  const itemsPerPage = 12;
  const {currentItems, loadMore, hasMore} = usePagination(
    productsArray,
    itemsPerPage
  );

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {currentItems.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>

      <div className="w-full flex-center">
        {hasMore ? (
          <button
            onClick={loadMore}
            className="mt-6 px-7 py-3 text-sm bg-primary text-white rounded-full hover:bg-primary-hover animate"
          >
            Load More
          </button>
        ) : (
          <p className="text-secondary">No more products....</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
