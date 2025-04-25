'use client';

import { useState } from 'react';
import { FaCheck, FaRegCircleCheck, FaXmark } from "react-icons/fa6";
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import ConfirmationModal from '@/components/shared/common/ConfirmationModal';
import FeedbackModal from '@/components/shared/common/FeedbackModal';
import { useDeleteFeedbackMutation, useUpdateFeedbackStatusMutation } from '@/redux/slices/user/usersApi';

const FeedbackRow = ({ feedback }) => {
  const feedbackId = feedback._id;
  const [feedbackStatus, setFeedbackStatus] = useState(feedback.isApproved);

  const [updateFeedbackStatus, { isLoading: isUpdating }] = useUpdateFeedbackStatusMutation();
  const [deleteFeedback, { isLoading: isDeleting }] = useDeleteFeedbackMutation();
    
  const [modals, setModals] = useState({
    view: false,
    delete: false,
    approve: false
  });

  const handleViewFeedback = () => setModals(prev => ({ ...prev, view: true }));
  const handleDeleteConfirm = () => setModals(prev => ({ ...prev, delete: true }));
  const handleApprovalConfirm = () => setModals(prev => ({ ...prev, approve: true }));
  

  const handleDelete = async () => {
    await deleteFeedback(feedbackId);
    setModals(prev => ({ ...prev, delete: false, view: false }));
  };



  const handleApproval = async () => {
    await updateFeedbackStatus({
      feedbackId,
      data: { isApproved: true }
    }).unwrap();
    setFeedbackStatus(true);
    setModals(prev => ({ ...prev, approve: false }));
  };

  return (
    <>
      <tr key={feedbackId} className='border-b border-gray-300'>
        <td className='px-4 py-2 text-sm'>{feedback.name}</td>
        <td className='px-4 py-2 text-sm'>{feedback.email}</td>
        <td className='px-4 py-2 text-sm'>
          {feedbackStatus ? 'Approved' : 'Need Approval'}
        </td>
        <td className="p-4 flex gap-3">
          {feedbackStatus ? (
            <span><FaRegCircleCheck className="text-primary" size={25} title="Feedback Approved" /></span>
          ) : (
            <span className="flex items-center gap-3">
              <ThemeButton
                buttonText={<FaCheck size={15} />}
                styles={'text-white bg-primary hover:bg-primary-hover'}
                handleClick={handleApprovalConfirm}
              />
              <ThemeButton
                buttonText={<FaXmark size={15} />}
                styles={'text-white bg-error hover:bg-error-hover'}
                handleClick={handleDeleteConfirm}
              />
            </span>
          )}
        </td>

        <td className='p-4'>
          <button
            onClick={handleViewFeedback}
            className="underline text-sm hover:text-primary animate cursor-pointer text-secondary">
            View Feedback
          </button>
        </td>
      </tr>

      {modals.delete && (
        <ConfirmationModal
          message={`Are you sure you want to delete this feedback?`}
          onCancel={() => setModals(prev => ({ ...prev, delete: false }))}
          onConfirm={handleDelete}
          confirmText='Delete'
          cancelText='Cancel'
          isLoading={isDeleting}
        />
      )}

      {modals.approve && (
        <ConfirmationModal
          message={`Are you sure you want to Approve this feedback?`}
          onCancel={() => setModals(prev => ({ ...prev, approve: false }))}
          onConfirm={handleApproval}
          confirmText='Approve'
          cancelText='Cancel'
          isLoading={isUpdating}
          styles={'bg-primary hover:bg-primary-hover'}
        />
      )}

      {modals.view && (
        <FeedbackModal
          feedback={feedback}
          onClose={() => setModals(prev => ({ ...prev, view: false }))}
        />
      )}
    </>
  );
};

export default FeedbackRow;
