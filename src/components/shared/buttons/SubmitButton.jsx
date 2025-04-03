import React from 'react';

const SubmitButton = ({buttonText, loading = false, styles}) => {
  return (
    <button
      className={`btn border-none bg-primary text-white h-[38px] hover:bg-primary-hover cursor-pointer flex-center ${styles} disabled:bg-primary/50`}
      type='submit'
    >
      {!loading ? (
        buttonText
      ) : (
        <span className='loading loading-dots loading-sm'></span>
      )}
    </button>
  );
};

export default SubmitButton;
