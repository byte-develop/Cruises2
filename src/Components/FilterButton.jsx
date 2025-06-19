import React from "react";

const FilterButton = ({ label, isActive = false, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center h-[20px] px-[6px] py-[1px] 
        bg-white border-b-2 transition-colors duration-200
        ${
          isActive
            ? "border-[#005EDC] text-[#005EDC]"
            : "border-transparent text-[#005EDC] hover:border-[#005EDC]/50"
        }
        ${className}
      `}
    >
      <span className="font-['PR'] text-[14px] leading-[17px] tracking-[2px] uppercase">
        {label}
      </span>
    </button>
  );
};

export default FilterButton;
