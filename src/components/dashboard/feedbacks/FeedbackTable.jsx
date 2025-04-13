import {IoCloudOfflineOutline} from 'react-icons/io5';
import {useTablePagination} from '@/hooks/useTablePagination';
import {FEEDBACK_HEADER} from '@/constants/general';
import FeedbackRow from './FeedbackRow';
import Loader from '@/components/shared/common/Loader';
import Table from '@/components/shared/TableComponents/Table';
import Pagination from '@/components/shared/TableComponents/Pagination';
import {useGetFeedbacksQuery} from '@/redux/slices/user/usersApi';

const FeedbackTable = ({searchQuery}) => {
  const {page, limit, nextPage, prevPage} = useTablePagination();
  const {data, isLoading, isError} = useGetFeedbacksQuery({
    limit,
    page,
    search: searchQuery,
  });

  const feedbacks = data?.body?.feedbacks ?? [];
  const totalPages = data?.body?.pagination?.totalPages ?? 1;

  if (isLoading) return <Loader />;
  if (isError)
    return <p className='py-10 flex-center gap-2'>Error loading feedbacks.</p>;
  if (feedbacks.length === 0)
    return (
      <p className='py-10 flex-center gap-2'>
        <IoCloudOfflineOutline /> No feedbacks available...
      </p>
    );

  return (
    <div className='w-full'>
      <div className='w-full overflow-x-auto px-4'>
        <Table headers={FEEDBACK_HEADER}>
          {feedbacks.map((feedback) => (
            <FeedbackRow key={feedback._id} feedback={feedback} />
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

export default FeedbackTable;
