import React from "react";

const UltimateDestinationCard = ({
  image,
  logo,
  buttonText = "EXPLORE MORE",
  className = "",
}) => {
  return (
    <div className={`relative w-[366px] h-[206px] flex-shrink-0 ${className}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent opacity-40 rounded-[5px]" />

      {/* Main container */}
      <div className="relative w-full h-full flex justify-center items-center rounded-[5px] overflow-hidden">
        {/* Figure container */}
        <div className="absolute inset-0 rounded-[5px] overflow-hidden">
          {/* Background placeholder */}
          <div className="absolute inset-0 bg-[#CDCFD1]" />

          {/* Image placeholder */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400"
            style={{
              background: image
                ? `url(${image})`
                : "linear-gradient(135deg, #3B82F6, #06B6D4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Logo container positioned above the card */}
      <div className="absolute -top-[115px] left-1/2 -translate-x-1/2 w-[326px] h-[115px] flex justify-center items-center px-[48.87px]">
        {logo ? (
          <img
            src={logo}
            alt="Destination logo"
            className="w-[228px] h-[115px] object-contain"
          />
        ) : (
          <div className="w-[228px] h-[115px] bg-white/20 rounded flex items-center justify-center">
            <span className="text-white font-['K'] text-lg">Logo</span>
          </div>
        )}
      </div>

      {/* Button positioned below the card */}
      <div className="absolute -bottom-[45px] left-1/2 -translate-x-1/2">
        <button className="bg-[#005EDC] border border-[#005EDC] rounded-[3px] px-[21px] py-[10px] hover:bg-[#004BB8] transition-colors">
          <span className="text-white font-['PR'] text-[14px] tracking-[2px] uppercase leading-[16.8px]">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default UltimateDestinationCard;
