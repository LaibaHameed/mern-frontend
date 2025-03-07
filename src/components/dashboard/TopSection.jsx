import React from 'react'
import { useRouter } from 'next/navigation';
import ThemeButton from '../shared/buttons/ThemeButton'
import { DASHBOARD_ROUTES } from '@/utils/PATHS';
import Search from '../ShopComponents/TopSection/Search';

const TopSection = () => {
    const router = useRouter();

    const onClickButton = () => router.push(DASHBOARD_ROUTES.products.addProduct);
    return (
        <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-3'>
            <Search/>
            <ThemeButton
                buttonText={'Add Product'}
                handleClick={onClickButton}
                styles={'bg-primary hover:bg-primary-hover text-sm py-2'}
            />
        </div>
    )
}

export default TopSection