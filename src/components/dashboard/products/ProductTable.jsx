import { IoCloudOfflineOutline } from "react-icons/io5";
import { useTablePagination } from "@/hooks/useTablePagination";
import { useGetProductsQuery } from "@/redux/slices/product/productsApi";
import { PRODUCT_HEADER } from "@/constants/general";
import ProductRow from "./ProductRow";
import Loader from "@/components/shared/common/Loader";
import Table from "@/components/shared/TableComponents/Table";
import Pagination from "@/components/shared/TableComponents/Pagination";

const ProductTable = ({ searchQuery }) => {
    const { page, limit, nextPage, prevPage } = useTablePagination();
    const { data, isLoading, isError } = useGetProductsQuery({ limit, page, search: searchQuery });

    const products = data?.body?.products ?? [];
    const totalPages = data?.body?.pagination?.totalPages ?? 1;

    if (isLoading) return <Loader/>
    if (isError) return <p className="py-10 flex-center gap-2">Error loading products.</p>;
    if (products.length === 0) return <p className="py-10 flex-center gap-2"><IoCloudOfflineOutline /> No products available...</p>;

    return (
        <div className="w-full">
            <div className="w-full overflow-x-auto px-4">
                <Table headers={PRODUCT_HEADER}>
                    {products.map((product) => (
                        <ProductRow key={product._id} product={product} />
                    ))}
                </Table>

                <Pagination page={page} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />
            </div>
        </div>
    );
};

export default ProductTable;
