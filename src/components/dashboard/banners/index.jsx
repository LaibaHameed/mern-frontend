'use client';

import TopSection from '@/components/shared/TableComponents/TopSection';
import {DASHBOARD_ROUTES} from '@/utils/PATHS';
import {useRouter} from 'next/navigation';
import BannersTable from '@/components/dashboard/banners/BannersTable';

const BannersList = () => {
  const router = useRouter();

  const onClickButton = () => router.push(DASHBOARD_ROUTES.banners.addBanner);

  return (
    <div className='flex-center flex-col text-black gap-6'>
      <TopSection
        title='Banners'
        onClickButton={onClickButton}
        buttonText='Add Banner'
      />
      <BannersTable />
    </div>
  );
};

export default BannersList;
