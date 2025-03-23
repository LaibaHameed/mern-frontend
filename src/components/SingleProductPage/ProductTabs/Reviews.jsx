import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import { getMonthYearDate } from '@/utils/dateUtils';

const Reviews = ({ ratings }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="bg-white px-6 mx-auto flex-center flex-col">
      <div className='w-full'>
        {ratings.length > 0 ? (
          <>
            {ratings.map((rating) => (
              <div className="pb-4 mb-4" key={rating._id}>
                <div className="flex items-center space-x-3">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-primary text-white w-10 rounded-full">
                      <span className="text-lg">{rating.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">{rating.name}</p>
                    <p className="text-sm text-gray-500">
                      {getMonthYearDate({ date: rating.createdAt })}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-5">"{rating.message}"</p>
              </div>
            ))}
          </>
        ) : (
          <p className="text-secondary sm:text-lg text-sm mb-6">
            Currently, this product has no reviews
          </p>
        )}
      </div>

      <button
        onClick={() => setShowReviewForm(true)}
        className="text-sm cursor-pointer mt-4 bg-primary text-white py-3 px-7 rounded-full hover:bg-opacity-90 animate hover:bg-primary-hover"
      >
        Add a Review
      </button>

      {showReviewForm && (
        <div className="w-full flex justify-center">
          <ReviewForm setShowReviewForm={setShowReviewForm} />
        </div>
      )}
    </div>
  );
};

export default Reviews;
