'use client';

import Image from 'next/image';
import {useState} from 'react';
import {MdOutlineDeleteForever} from 'react-icons/md';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import ConfirmationModal from '@/components/shared/common/ConfirmationModal';
import {useDeleteBannerMutation} from '@/redux/slices/user/usersApi';

const BannerRow = ({banner}) => {
  const [deleteBanner, {isLoading: isDeleting}] = useDeleteBannerMutation();
  const [showModal, setShowModal] = useState(false);

  const handleDeleteConfirm = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    await deleteBanner(banner._id);
    setShowModal(false);
  };

  return (
    <>
      <tr key={banner._id} className='border-b border-gray-300'>
        <td className='px-4 py-2'>
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <Image
                src={banner.imageUrl}
                alt={'banner image'}
                width={80}
                height={80}
              />
            </div>
          </div>
        </td>
        <td className='px-4 py-2'>
          <div className='flex items-center gap-3'>
            {/* Delete Button */}
            <ThemeButton
              buttonText={<MdOutlineDeleteForever size={20} />}
              styles={'text-white bg-error hover:bg-error-hover'}
              handleClick={handleDeleteConfirm}
            />
          </div>
        </td>
      </tr>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <ConfirmationModal
          message={`Are you sure you want to delete this banner?`}
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

export default BannerRow;
