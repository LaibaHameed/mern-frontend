import { useRouter } from "next/navigation";
import { DASHBOARD_ROUTES } from "@/utils/PATHS";
import TopSection from "../../shared/TableComponents/TopSection";
import ProductTable from "./ProductTable";
import ThemeButton from "@/components/shared/buttons/ThemeButton";
import TableSearch from "@/components/shared/TableComponents/TableSearch";
import { useState } from "react";

const ProductsPage = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const onClickButton = () => router.push(DASHBOARD_ROUTES.products.addProduct);

    return (
        <div className="flex-center flex-col text-black gap-6">
            <TopSection
                title="Products"
                searchComponent={
                    <TableSearch setSearchQuery={setSearchQuery} />
                }
                buttonComponent={
                    <ThemeButton
                        buttonText="Add Product"
                        handleClick={onClickButton}
                        styles="bg-primary hover:bg-primary-hover text-sm py-2"
                    />
                }
            />
            <ProductTable searchQuery={searchQuery} />
        </div>
    );
};

export default ProductsPage;
