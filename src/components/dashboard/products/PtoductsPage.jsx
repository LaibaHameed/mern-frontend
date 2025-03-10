import { useRouter } from 'next/navigation';
import { DASHBOARD_ROUTES } from '@/utils/PATHS';
import TopSection from '../../shared/TableComponents/TopSection'
import ProductTable from './ProductTable'
import Search from '@/components/ShopComponents/TopSection/Search';
import ThemeButton from '@/components/shared/buttons/ThemeButton';


const PtoductsPage = () => {
    const router = useRouter();

    const onClickButton = () => router.push(DASHBOARD_ROUTES.products.addProduct);
    return (
        <div className="flex-center flex-col text-black gap-6">
            <TopSection
                title={'Products'}
                searchComponent={<Search/>}
                buttonComponent={
                    <ThemeButton
                        buttonText={'Add Product'}
                        handleClick={onClickButton}
                        styles={'bg-primary hover:bg-primary-hover text-sm py-2'}
                    />
                }
            />
            <ProductTable />
        </div>
    )
}

export default PtoductsPage