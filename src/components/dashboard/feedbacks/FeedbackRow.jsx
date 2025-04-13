'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import {FaRegEdit} from 'react-icons/fa';
import {MdOutlineDeleteForever} from 'react-icons/md';
import {DASHBOARD_ROUTES} from '@/utils/PATHS';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import ConfirmationModal from '@/components/shared/common/ConfirmationModal';
import {useRouter} from 'next/navigation';
import {useDeleteFeedbackMutation} from '@/redux/slices/user/usersApi';
import {FaCheck} from 'react-icons/fa6';

const FeedbackRow = ({feedback}) => {
  const feedbackId = feedback._id;
  const [deleteFeedback, {isLoading: isDeleting}] = useDeleteFeedbackMutation();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleDeleteConfirm = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    await deleteFeedback(feedbackId);
    setShowModal(false);
  };
  const handleApproval = () =>
    router.push(DASHBOARD_ROUTES.products.editProduct({feedbackId}));

  return (
    <>
      <tr key={feedbackId} className='border-b border-gray-300'>
        <td className='px-4 py-2 text-sm'>{feedback.name}</td>
        <td className='px-4 py-2 text-sm'>{feedback.email}</td>
        <td className='px-4 py-2 text-sm'>
          {feedback.isApproved ? 'Approved' : 'Need Approval'}
        </td>
        <td className='px-4 py-2'>
          <div className='flex items-center gap-3'>
            {/* Edit Button */}
            <div className='relative group'>
              <ThemeButton
                buttonText={<FaCheck size={20} />}
                styles={'text-white bg-primary hover:bg-primary-hover'}
                handleClick={handleApproval}
              />
              <span className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 animate'>
                Approve
              </span>
            </div>

            {/* Delete Button */}
            <div className='relative group'>
              <ThemeButton
                buttonText={<MdOutlineDeleteForever size={20} />}
                styles={'text-white bg-error hover:bg-error-hover'}
                handleClick={handleDeleteConfirm}
              />
              <span className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 animate'>
                Delete
              </span>
            </div>
          </div>
        </td>
      </tr>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <ConfirmationModal
          message={`Are you sure you want to delete this feedback?`}
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
          confirmText='Delete'
          cancelText='Cancel'
          isLoading={isDeleting}
        />
      )}
    </>
  );
};

export default FeedbackRow;
