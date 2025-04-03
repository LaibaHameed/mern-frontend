import {IoCloudOfflineOutline} from 'react-icons/io5';
import {useTablePagination} from '@/hooks/useTablePagination';
import {BANNER_HEADER} from '@/constants/general';
import Loader from '@/components/shared/common/Loader';
import Table from '@/components/shared/TableComponents/Table';
import Pagination from '@/components/shared/TableComponents/Pagination';
import {useGetBannersQuery} from '@/redux/slices/user/usersApi';
import BannerRow from '@/components/dashboard/banners/BannerRow';

const BannersTable = () => {
  const {page, limit, nextPage, prevPage} = useTablePagination();
  const {data, isLoading, isError} = useGetBannersQuery({limit, page});

  const banners = data?.body?.banners ?? [];
  const totalPages = data?.body?.pagination?.totalPages ?? 1;

  if (isLoading) return <Loader />;
  if (isError)
    return <p className='py-10 flex-center gap-2'>Error loading banners.</p>;
  if (banners.length === 0)
    return (
      <p className='py-10 flex-center gap-2'>
        <IoCloudOfflineOutline /> No banners available...
      </p>
    );

  return (
    <div className='w-full'>
      <div className='w-full overflow-x-auto px-4'>
        <Table headers={BANNER_HEADER}>
          {banners.map((banner) => (
            <BannerRow key={banner._id} banner={banner} />
          ))}
        </Table>

        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
};

export default BannersTable;
