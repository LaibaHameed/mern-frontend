"use client"
import { IoCloudOfflineOutline } from "react-icons/io5";
import { useTablePagination } from '@/hooks/useTablePagination';
import { useGetProductsQuery } from "@/redux/slices/product/productsApi";
import Table from "../shared/common/Table";
import ProductRow from "./ProductRow";
import ThemeButton from "../shared/buttons/ThemeButton";
import { PRODUCT_HEADER } from "@/constants/general";

const ProductTable = () => {
    const { page, limit, nextPage, prevPage } = useTablePagination();
    const { data, isLoading, isError } = useGetProductsQuery({ limit, page });

    if (isLoading) return <span className="loading loading-spinner loading-x text-black"></span>;
    if (isError) return <p className="py-10 flex justify-center items-center gap-2">Error loading products.</p>;

    const products = data?.body?.products ?? [];
    const totalPages = data?.body?.pagination?.totalPages ?? 1;

    return (
        <div className="w-full">
            {products.length === 0 ? (
                <p className="py-10 flex justify-center items-center gap-2">
                    <IoCloudOfflineOutline /> No products available...
                </p>
            ) : (
                <div className="w-full overflow-x-auto">
                    <Table headers={PRODUCT_HEADER}>
                        {products.map((product) => (
                            <ProductRow key={product._id} product={product} />
                        ))}
                    </Table>

                    <div className="flex-center my-12">
                        <ThemeButton buttonText='Previous' styles={'text-white bg-primary hover:bg-primary-hover text-sm'} handleClick={prevPage} disabled={page === 1} />
                        <span className="text-sm mx-12">Page {page} of {totalPages}</span>
                        <ThemeButton buttonText='Next' styles={'text-white bg-primary hover:bg-primary-hover text-sm'} handleClick={nextPage}  disabled={page === totalPages} />
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default ProductTable;