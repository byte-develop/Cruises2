import React from "react";

export const BottomSheetModal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <div
        className="relative w-full bg-white rounded-t-2xl shadow-xl"
        style={{
          animation: "slideUpModal .3s",
          minHeight: 300,
          maxHeight: "80vh",
        }}
      >
        <button
          className="absolute right-6 top-6 text-2xl text-[#384378] hover:text-[#005EDC]"
          onClick={onClose}
        >
          ×
        </button>
        <div className="pt-10 px-8 pb-8 overflow-y-auto max-h-[calc(80vh-40px)]">
          {children}
        </div>
      </div>
      <style>
        {`
        @keyframes slideUpModal {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        `}
      </style>
    </div>
  );
};