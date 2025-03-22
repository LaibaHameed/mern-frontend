import { IoCloudOfflineOutline } from "react-icons/io5";
import { usePagination } from "@/hooks/usePagination";
import { useGetProductsQuery } from "@/redux/slices/product/productsApi";
import Loader from "../shared/common/Loader";
import ProductCard from "../shared/common/ProductCard";
import { DEFAULT_LIMIT } from "@/constants/general";


const ProductsList = ({ searchQuery, sortOption }) => {
  const productsPerPage = DEFAULT_LIMIT;
  const {
    allItems: products,
    shouldShowLoader,
    isFetching,
    isError,
    page,
    setPage,
    totalPages,    
  } = usePagination(useGetProductsQuery, searchQuery, sortOption, productsPerPage); 

  if (shouldShowLoader) return <Loader />;  
  if (isError) return <p className="py-10 flex-center gap-2">Error loading products.</p>;
  if (products.length === 0)
    return (
      <p className="py-10 flex-center gap-2">
        <IoCloudOfflineOutline /> No products available...
      </p>
    );

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 my-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {page >= totalPages && products.length > 0 && (
        <p className="text-center text-gray-500 mt-12">No more products....</p>
      )}

      {page < totalPages && (
        <div className="w-full flex-center">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isFetching}
            className="mt-6 px-7 py-3 text-sm bg-primary text-white rounded-full hover:bg-primary-hover animate cursor-pointer"
          >
            {isFetching ? (
              <span className="flex-center loading loading-spinner loading-x text-white"></span>
            ) : (
              "More Products"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;

