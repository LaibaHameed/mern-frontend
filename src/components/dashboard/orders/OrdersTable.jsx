import { IoCloudOfflineOutline } from 'react-icons/io5';
import { useGetOrdersQuery } from '@/redux/slices/order/ordersApi';
import { useTablePagination } from '@/hooks/useTablePagination';
import { ORDERS_HEADER } from '@/constants/general';
import OrderRow from './OrderRow';
import Loader from '@/components/shared/common/Loader';
import Table from '@/components/shared/TableComponents/Table';
import Pagination from '@/components/shared/TableComponents/Pagination';

const OrdersTable = ({ searchQuery }) => {
    const { page, limit, nextPage, prevPage } = useTablePagination();
    const { data, isLoading, isError } = useGetOrdersQuery({
        limit,
        page,
        search: searchQuery,
    });

    const orders = data?.body?.orders ?? [];
    const totalPages = data?.body?.pagination?.totalPages ?? 1;

    if (isLoading) return <Loader />;
    if (isError)
        return <p className='py-10 flex-center gap-2'>Error loading orders.</p>;
    if (orders.length === 0)
        return (
            <p className='py-10 flex-center gap-2'>
                <IoCloudOfflineOutline /> No orders available...
            </p>
        );

    return (
        <div className='w-full'>
            <div className='w-full overflow-x-auto px-4'>
                <Table headers={ORDERS_HEADER}>
                    {orders.map((order) => (
                        <OrderRow key={order._id} order={order} />
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

export default OrdersTable;
