"use client"
import { IoCloudOfflineOutline } from "react-icons/io5";
import { useTablePagination } from '@/hooks/useTablePagination';
import { useGetProductsQuery } from "@/redux/slices/product/productsApi";
import { PRODUCT_HEADER } from "@/constants/general";
import ProductRow from "./ProductRow";
import Table from "@/components/shared/common/Table";
import ThemeButton from "@/components/shared/buttons/ThemeButton";

const ProductTable = () => {
    const { page, limit, nextPage, prevPage } = useTablePagination();
    const { data, isLoading, isError } = useGetProductsQuery({ limit, page });
    
    const products = data?.body?.products ?? [];
    const totalPages = data?.body?.pagination?.totalPages ?? 1


    if (isLoading) return <span className="loading loading-spinner loading-x text-black"></span>;
    if (isError) return <p className="py-10 flex-center gap-2">Error loading products.</p>;
    if (products.length === 0) return <p className="py-10 flex-center gap-2"><IoCloudOfflineOutline /> No products available...</p>


    return (
        <div className="w-full">
            <div className="w-full overflow-x-auto px-4">
                <Table headers={PRODUCT_HEADER}>
                    {products.map((product) => (
                        <ProductRow key={product._id} product={product} />
                    ))}
                </Table>

                <div className="flex-center my-12">
                    <ThemeButton buttonText='Previous' styles={'text-white bg-primary hover:bg-primary-hover text-sm'} handleClick={prevPage} disabled={page === 1} />
                    <span className="text-sm mx-12">Page {page} of {totalPages}</span>
                    <ThemeButton buttonText='Next' styles={'text-white bg-primary hover:bg-primary-hover text-sm'} handleClick={nextPage} disabled={page === totalPages} />
                </div>
            </div>
        </div >
    );
};

export default ProductTable;