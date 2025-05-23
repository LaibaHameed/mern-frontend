const ThemeButton = ({ buttonText, loading = false, styles, handleClick, disabled = false }) => {
  return (
    <button
      className={`flex-center gap-3 px-4 py-2 text-white animate capitalize ${styles} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleClick}
      disabled={disabled || loading}
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
