'use client';

import { FaCheck, FaRegCircleCheck, FaRegCircleXmark, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import OrderModal from '@/components/shared/common/OrderModal';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";
import { useUpdateOrderStatusMutation } from "@/redux/slices/order/ordersApi";

const OrderRow = ({ order }) => {
    const [updateOrderStatus] = useUpdateOrderStatusMutation();

    const [orderStatus, setOrderStatus] = useState(order.orderStatus);
    const [showModal, setShowModal] = useState(false);
    const [showCompleteModal, setShowCompleteModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleViewDetails = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCompleteConfirm = () => {
        setShowCompleteModal(true);
    };
    const handleCancelConfirm = () => {
        setShowCancelModal(true);
    };

    const handleCompleteOrder = async () => {
        await updateOrderStatus({
            orderId: order._id,
            data: { orderStatus: 'completed' },
        }).unwrap();
        setOrderStatus('completed');
        setShowCompleteModal(false);

    };

    const handleCancelOrder = async () => {
        await updateOrderStatus({
            orderId: order._id,
            data: { orderStatus: 'cancelled' },
        }).unwrap();
        setOrderStatus('cancelled');
        setShowCancelModal(false);
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
                        {order.orderStatus}
                    </span>
                </td>
                <td className="p-4 flex gap-3">
                    {orderStatus === 'completed' ? (
                        <span className="px-10"><FaRegCircleCheck className="text-primary" size={25} title="Order Completed" /></span>
                    ) : orderStatus === 'cancelled' ? (
                        <span className="px-10"><FaRegCircleXmark className="text-error" size={25} title="Order Cancelled" /></span>
                    ) : (
                        <div className="flex items-center gap-3">
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
                        </div>
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

            {showModal && (
                <OrderModal order={order} onClose={handleCloseModal} />
            )}

            {/* Complete Confirmation Modal */}
            {showCompleteModal && (
                <ConfirmationModal
                    message={`Are you sure you want to Complete ${order.customerName}'s Order?`}
                    onCancel={() => setShowCompleteModal(false)}
                    onConfirm={handleCompleteOrder}
                    confirmText="Complete Order"
                    cancelText="Cancel"
                    styles = {'bg-primary hover:bg-primary-hover'}
                />
            )}
            {/* Cancel Confirmation Modal */}
            {showCancelModal && (
                <ConfirmationModal
                    message={`Are you sure you want to cancel ${order.customerName}'s order?`}
                    onCancel={() => setShowCancelModal(false)}
                    onConfirm={handleCancelOrder}
                    confirmText="Cancel order"
                    cancelText="No"
                />
            )}
        </>
    );
};

export default OrderRow;
