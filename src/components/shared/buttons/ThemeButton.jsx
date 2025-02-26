import React from 'react';

const ThemeButton = ({buttonText, loading = false, styles, handleClick}) => {
  return (
    <button
      className={`btn border-none bg-primary text-white h-[38px] rounded-md hover:bg-primary-hover cursor-pointer flex-center ${styles}`}
      onClick={handleClick}
    >
      {!loading ? (
        buttonText
      ) : (
        <span className="loading loading-dots loading-sm"></span>
      )}
    </button>
  );
};

export default ThemeButton;
