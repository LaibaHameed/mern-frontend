'use client';

import ThemeButton from "../buttons/ThemeButton";

const ConfirmationModal = ({ message, onCancel, onConfirm, confirmText, cancelText, isLoading, styles }) => {
    return (
        <div className="fixed inset-0  bg-[rgba(0,0,0,0.51)] flex flex-center z-50">
            <div className="top-48 left-2/5 bg-opacity-50">
                <div className="bg-white px-12 py-8 shadow-2xl w-sm">
                    <p className="pb-6">{message}</p>
                    <div className="flex justify-end gap-3 mt-1">
                        <ThemeButton buttonText={cancelText} styles="bg-secondary hover:bg-gray-700 px-4 py-2 text-sm" handleClick={onCancel} />
                        <ThemeButton buttonText={confirmText} styles={`${styles} bg-error hover:bg-error-hover px-4 py-2 text-sm`} handleClick={onConfirm} disabled={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
