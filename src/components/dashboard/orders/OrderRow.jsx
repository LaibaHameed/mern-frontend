'use client';

import { FaCheck, FaRegCircleCheck, FaRegCircleXmark, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import OrderModal from '@/components/shared/common/OrderModal';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";
import { useUpdateOrderStatusMutation } from "@/redux/slices/order/ordersApi";

const OrderRow = ({ order }) => {
    
    const [updateOrderStatus, { isLoading: isUpdating }] = useUpdateOrderStatusMutation();
    const [orderStatus, setOrderStatus] = useState(order.orderStatus);

    const [modals, setModals] = useState({
        view: false,
        complete: false,
        cancel: false
    });

    const handleViewDetails = () => setModals(prev => ({ ...prev, view: true }));
    const handleCompleteConfirm = () => setModals(prev => ({ ...prev, complete: true }));
    const handleCancelConfirm = () => setModals(prev => ({ ...prev, cancel: true }));

    const handleCompleteOrder = async () => {
        await updateOrderStatus({
            orderId: order._id,
            data: { orderStatus: 'completed' },
        }).unwrap();
        setOrderStatus('completed');
        setModals(prev => ({ ...prev, complete: false }));
    };

    const handleCancelOrder = async () => {
        await updateOrderStatus({
            orderId: order._id,
            data: { orderStatus: 'cancelled' },
        }).unwrap();
        setOrderStatus('cancelled');
        setModals(prev => ({ ...prev, cancel: false }));
    };

    return (
        <>
            <tr className="border-b text-sm text-gray-700 hover:bg-gray-100 transition">
                <td className="p-4">{order.customerName}</td>
                <td className="">
                    {new Date(order.createdAt).toLocaleString('en-GB', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}
                </td>
                <td className="p-4">
                    <span
                        className={`${orderStatus === 'completed'
                            ? 'text-primary'
                            : orderStatus === 'pending'
                                ? 'text-yellow-500'
                                : orderStatus === 'cancelled'
                                    ? 'text-error'
                                    : 'text-secondary'
                            }`}
                    >
                        {orderStatus}
                    </span>
                </td>
                <td className="p-4 flex gap-3">
                    {orderStatus === 'completed' ? (
                        <span className="px-10"><FaRegCircleCheck className="text-primary" size={25} title="Order Completed" /></span>
                    ) : orderStatus === 'cancelled' ? (
                        <span className="px-10"><FaRegCircleXmark className="text-error" size={25} title="Order Cancelled" /></span>
                    ) : (
                        <span className="flex items-center gap-3">
                            <ThemeButton
                                buttonText={<FaCheck size={15} />}
                                styles={'text-white bg-primary hover:bg-primary-hover'}
                                handleClick={handleCompleteConfirm}
                            />
                            <ThemeButton
                                buttonText={<FaXmark size={15} />}
                                styles={'text-white bg-error hover:bg-error-hover'}
                                handleClick={handleCancelConfirm}
                            />
                        </span>
                    )}
                </td>

                <td className='p-4'>
                    <button
                        onClick={handleViewDetails}
                        className="underline text-sm hover:text-primary animate cursor-pointer text-secondary">
                        View Order
                    </button>
                </td>
            </tr>

            {modals.view && (
                <OrderModal order={order} onClose={() => setModals(prev => ({ ...prev, view: false }))} />
            )}

            {modals.complete && (
                <ConfirmationModal
                    message={`Are you sure you want to Complete ${order.customerName}'s Order?`}
                    onCancel={() => setModals(prev => ({ ...prev, complete: false }))}
                    onConfirm={handleCompleteOrder}
                    confirmText="Complete Order"
                    cancelText="Cancel"
                    styles={'bg-primary hover:bg-primary-hover'}
                    isLoading={isUpdating}
                />
            )}

            {modals.cancel && (
                <ConfirmationModal
                    message={`Are you sure you want to cancel ${order.customerName}'s order?`}
                    onCancel={() => setModals(prev => ({ ...prev, cancel: false }))}
                    onConfirm={handleCancelOrder}
                    confirmText="Cancel order"
                    cancelText="No"
                    isLoading={isUpdating}
                />
            )}
        </>
    );
};

export default OrderRow;
