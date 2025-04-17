import { IoClose } from 'react-icons/io5';

const FeedbackModal = ({ feedback, onClose }) => {
    return (
        <div>
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.51)] flex-center z-50">
                <div className="bg-white w-[90%] md:w-[600px] max-h-[80vh] overflow-y-auto shadow-xl p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
                    >
                        <IoClose size={22} />
                    </button>
                    <h2 className="text-xl font-semibold mb-8 mt-4 text-center">{feedback.name}&#39;s Feedback </h2>

                    <div className="space-y-2 text-sm text-gray-700">
                        <p><strong>Order ID:</strong> {feedback._id}</p>
                        <p><strong>Customer Name:</strong> {feedback.name}</p>
                        <p><strong>Email:</strong> {feedback.email}</p>
                        <p><strong>Designation:</strong> {feedback.designation}</p>
                        <p><strong>Message:</strong> {feedback.message}</p>
                        <p><strong>Posted At:</strong> {new Date(feedback.createdAt).toLocaleString('en-GB', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                        })}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackModal