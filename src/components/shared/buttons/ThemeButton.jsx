import React from 'react';

const ThemeButton = ({buttonText, loading = false, styles, handleClick}) => {
  return (
    <button
      className={`flex-center gap-3 px-4 py-3 text-white rounded-lg cursor-pointer ${styles}`}
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
