import React from "react";

const ShipCard = ({ image, shipName, alt, className = "" }) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      {/* Ship Image */}
      <div className="w-full h-[300px] bg-[#CDCFD1] border border-[#CDCFD1] rounded-[5px] overflow-hidden mb-4 relative">
        {image ? (
          <img
            src={image}
            alt={
              alt || `The deck plans for ${shipName}, Royal Caribbean Cruises`
            }
            className="w-full h-full object-cove object-centerr transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <div className="text-white text-lg font-['PR'] opacity-70">
              Deck Plan
            </div>
          </div>
        )}
      </div>

      {/* Ship Name */}
      <h3 className="text-[#4A4A4A] font-['PB'] text-[22px] leading-[22px] tracking-[2px] uppercase mb-4">
        {shipName}
      </h3>

      {/* Explore Link */}
      <button className="text-[#005EDC] font-['PR'] text-[14px] leading-[14px] tracking-[2px] uppercase transition-colors duration-200 hover:text-[#003A8C]">
        EXPLORE DECK PLANS
      </button>
    </div>
  );
};

export default ShipCard;
