import { IoClose } from 'react-icons/io5';

const OrderModal = ({ order, onClose }) => {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.51)] flex-center z-50">
            <div className="bg-white w-[90%] md:w-[600px] max-h-[80vh] overflow-y-auto shadow-xl p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
                >
                    <IoClose size={22} />
                </button>
                <h2 className="text-xl font-semibold mb-8 mt-4 text-center">Order Details</h2>

                <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <p><strong>Customer Name:</strong> {order.customerName}</p>
                    <p><strong>Email:</strong> {order.customerEmail}</p>
                    <p><strong>Phone:</strong> {order.customerPhoneNo}</p>
                    <p><strong>Address:</strong> {order.customerAddress}</p>
                    <p><strong>Status:</strong> {order.orderStatus}</p>
                    <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                    <p><strong>Total Price:</strong> Rs. {order.totalPrice}</p>
                    <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString('en-GB', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}</p>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold my-8 text-center">Ordered Products</h2>
                    <ul className="space-y-4 text-sm">
                        {order.products.map((product, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <img
                                    src={product.productId?.imageUrls?.[0]}
                                    alt={product.productId?.name}
                                    className="w-24 h-24 object-cover"
                                />
                                <div>
                                    <p className="font-medium capitalize">{product.productId?.name}</p>
                                    <p>Qty: {product.quantity}</p>
                                    <p>Price: Rs. {product.productId?.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default OrderModal;
