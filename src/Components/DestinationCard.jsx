import React from "react";

const DestinationCard = ({
  image,
  title,
  size = "medium",
  className = "",
  isBlurred = false,
}) => {
  const sizeClasses = {
    small: "w-[280px] h-[244px]",
    medium: "w-[366px] h-[206px]",
    large: "w-[420px] h-[210px]",
    tall: "w-[280px] h-[498px]",
    wide: "w-[860px] h-[244px]",
    hero: "w-[494px] h-[278px]",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} flex-shrink-0 rounded-[5px] overflow-hidden ${className}`}
    >
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-[#CDCFD1]" />

      {/* Image (placeholder for now since we don't have actual images) */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 ${isBlurred ? "blur-[10px]" : ""}`}
        style={{
          background: image
            ? `url(${image})`
            : "linear-gradient(135deg, #3B82F6, #1E40AF)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent opacity-45" />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h3 className="text-white text-center font-['K'] font-normal uppercase leading-tight px-4 text-[38px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default DestinationCard;
