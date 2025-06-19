import React, { useRef, useState, useEffect } from "react";

// Универсальный горизонтальный слайдер с кастомными стрелками и нормальной реакцией на ресайз
const DestinationSlider = ({ children, className = "" }) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Проверка возможности скролла
  const checkScrollability = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    setCanScrollLeft(slider.scrollLeft > 1);
    setCanScrollRight(
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 1
    );
  };

  // Проверяем при монтировании, изменении детей и ресайзе окна
  useEffect(() => {
    checkScrollability();
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);
    // иногда скролл появляется чуть позже (например, картинки догружаются)
    const checkTimeout = setTimeout(checkScrollability, 400);

    return () => {
      slider.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
      clearTimeout(checkTimeout);
    };
  }, [children]);

  // Скролл влево/вправо
  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    // Скроллим на ширину одного "слайда" или на 80% видимой области, что больше
    const slideWidth = slider.firstChild?.clientWidth || 250;
    const scrollAmount = Math.max(slideWidth, slider.clientWidth * 0.8);
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left scroll button */}
      <button
        onClick={() => scroll("left")}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[37px] h-[44px] md:h-[210px] bg-white/90
          flex items-center justify-center hover:bg-white/95 transition-colors
          rounded-r-xl shadow
          ${canScrollLeft ? "" : "opacity-0 pointer-events-none"}
        `}
        aria-label="Scroll left"
        tabIndex={canScrollLeft ? 0 : -1}
        style={{ transition: "opacity 0.2s" }}
      >
        <svg width="7" height="12" viewBox="0 0 7 13" fill="none">
          <path
            d="M6 11.52L1 6.52L6 1.52"
            stroke="#005EDC"
            strokeWidth="1.368"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        className={`
          absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[37px] h-[44px] md:h-[210px] bg-white/90
          flex items-center justify-center hover:bg-white/95 transition-colors
          rounded-l-xl shadow
          ${canScrollRight ? "" : "opacity-0 pointer-events-none"}
        `}
        aria-label="Scroll right"
        tabIndex={canScrollRight ? 0 : -1}
        style={{ transition: "opacity 0.2s" }}
      >
        <svg width="7" height="12" viewBox="0 0 7 13" fill="none">
          <path
            d="M1 1.52L6 6.52L1 11.52"
            stroke="#005EDC"
            strokeWidth="1.368"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Scrollable content */}
      <div
        ref={sliderRef}
        className="flex gap-[10px] overflow-x-auto scrollbar-hide px-[37px]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default DestinationSlider;