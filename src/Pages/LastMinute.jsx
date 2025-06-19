import React, { useState } from "react";
import { Link } from "react-router-dom";
import DestinationSlider from "../Components/DestinationSlider";

const LastMinute = () => {
  const [activeTab, setActiveTab] = useState("Weekend Cruises");

  const navigationTabs = [
    "Weekend Cruises",
    "Cruises from Florida",
    "7N Sailings",
    "Gulf Coast",
    "Cruises From California",
    "Cruises from NYC",
    "Oasis Class",
    "Holiday Cruises",
  ];

  const cruiseDeals = [
    {
      id: 1,
      image: "/arrivals-plaza-perfect-day.jpg",
      title: "3 Night Bahamas & Perfect Day Cruise",
      price: "$491",
      location: "Miami, Florida",
      ship: "Wonder of the Seas",
      dates: "76 dates",
    },
    {
      id: 2,
      image: "/puerto-plata-dominican-republic.jpg",
      title: "4 Night Eastern Caribbean Cruise",
      price: "$665",
      location: "Miami, Florida",
      ship: "Symphony of the Seas",
      dates: "1 date",
    },
    {
      id: 3,
      image: "/tulum-god-of-wind-temple.jpg",
      title: "4 Night Western Caribbean Cruise",
      price: "$645",
      location: "Miami, Florida",
      ship: "Symphony of the Seas",
      dates: "1 date",
    },
    {
      id: 4,
      image: "/italy-naples-positano.jpg",
      title: "3 Night Western Mediterranean Cruise",
      price: "$1,131",
      location: "Rome (Civitavecchia), Italy",
      ship: "Legend of the Seas",
      dates: "1 date",
    },
    {
      id: 5,
      image: "/aerial-view-cabana-beach.jpg",
      title: "3 Night Bahamas & Perfect Day Cruise",
      price: "$573",
      location: "Miami, Florida",
      ship: "Allure of the Seas",
      dates: "4 dates",
    },
  ];

  const locationCards = [
    {
      title: "FLORIDA",
      price: "$200",
      image: "../public/l1.svg",
      bgColor: "bg-blue-600",
    },
    {
      title: "TEXAS",
      price: "$500",
      image: "../public/l2.svg",
      bgColor: "bg-blue-600",
    },
    {
      title: "CAPE LIBERTY",
      price: "$613",
      image: "../public/l3.svg",
      bgColor: "bg-blue-600",
    },
    {
      title: "WEST COAST",
      price: "$393",
      image: "../public/l4.svg",
      bgColor: "bg-blue-600",
    },
  ];

  const destinationCards = [
    {
      title: "THE BAHAMAS",
      price: "$370",
      image: "../public/l5.svg",
    },
    {
      title: "THE CARIBBEAN",
      price: "$157",
      image: "../public/l6.svg",
    },
    {
      title: "MEXICO",
      price: "$386",
      image: "../public/l7.svg",
    },
    {
      title: "ALASKA",
      price: "$660",
      image: "../public/l8.svg",
    },
  ];

  const bucketListCards = [
    {
      title: "PERFECT DAY AT COCOCAY",
      price: "$370",
      image: "../public/l9.svg",
    },
    {
      title: "CARIBBEAN CRUISES",
      price: "$157",
      image: "../public/l10.svg",
    },
    {
      title: "JAMAICA CRUISES",
      price: "$575",
      image: "../public/l11.svg",
    },
    {
      title: "COZUMEL & CANCUN",
      price: "$386",
      image: "../public/l12.svg",
    },
  ];

  const exploreMoreCards = [
    {
      title: "CRUISE DEALS",
      image: "/weekend-cruise-getaway-friends.jpg",
    },
    {
      title: "FIND A CRUISE",
      image: "/aerial-view-sea-town-astoria.jpg",
    },
    {
      title: "PERFECT DAY AT COCOCAY",
      image: "/perfect-day-coco-cay-island-aerial.jpg",
    },
    {
      title: "WEEKEND GETAWAYS NEAR ME",
      image: "/woman-admiring-vacation-cruise.jpg",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <img
          src="../public/lastmin.svg"
          alt="Last Minute Cruises Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <h2 className="font-[PR] text-white text-[27px] uppercase tracking-[2px] mb-2">
                SCORE BIG SAVINGS ON
              </h2>
              <h1 className="font-[K] text-white text-[85px] leading-[96px] uppercase mb-4">
                LAST MINUTE CRUISES
              </h1>
              <p className="font-[PB] text-white text-[22px] uppercase tracking-[2px] mb-8">
                Seas the day with an impromptu vacay
              </p>
              <Link
                to="/find-a-cruise"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#FDBB11] text-[#006] font-[PR] text-[14px] uppercase tracking-[2px] rounded-sm hover:bg-[#e6a710] transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-[K] text-[#15264C] text-[54px] leading-[60px] uppercase mb-4">
            SAIL LAST MINUTE DEALS FROM YOUR BACKYARD
          </h2>
          <p className="font-[PR] text-[#4A4A4A] text-[20px] leading-[24px] max-w-5xl mx-auto">
            Ditch the everyday. Score a last minute cruise deal on that
            gamechanging getaway you've been eyeing — because adventure is
            always a good idea.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-200">
          {navigationTabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 font-[PB] text-[16px] transition-colors ${
                activeTab === tab
                  ? "text-[#005EDC] border-b-3 border-[#005EDC]"
                  : "text-[#4A4A4A]/75 hover:text-[#005EDC]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cruise Cards Container */}
        <div className="overflow-x-auto">
          <DestinationSlider>
            {/* Cruise Card 1 */}
            <div className="flex-shrink-0 w-[310px] bg-white rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[174px] bg-[#F2F4F5] rounded-t-[5px]"></div>
              <div className="p-6">
                <h4 className="font-[PB] text-[#15264C] text-[20px] leading-[22px] mb-4">
                  3 Night Bahamas & Perfect Day Cruise
                </h4>
                <p className="font-serif text-[#4A4A4A] text-[14px] mb-2">
                  Starting from*
                </p>
                <p className="font-[PB] text-[#15264C] text-[24px] leading-[29px] mb-4">
                  $552/person
                </p>
                <p className="font-[PR] text-[#4A4A4A] text-[12px] mb-4">
                  Taxes & fees included*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6991 6.60601C12.6991 6.86074 12.5317 7.50989 12.0848 8.54858C11.6703 9.51179 11.107 10.6084 10.5285 11.6585C10.4629 11.7777 10.3972 11.896 10.3316 12.0131C9.95993 12.6777 9.01339 12.6776 8.6412 12.0134C8.57137 11.8888 8.5013 11.7628 8.43126 11.6358C7.84965 10.5814 7.28314 9.48199 6.86619 8.52021C6.65762 8.03909 6.49605 7.61421 6.38882 7.26095C6.27542 6.88738 6.25 6.68052 6.25 6.60601C6.25 5.21375 7.57643 3.7793 9.50667 3.7793C11.4229 3.7793 12.6991 5.14235 12.6991 6.60601ZM14.1991 6.60601C14.1991 8.34146 11.7288 12.6764 10.365 14.9376C10.3459 14.9692 10.327 15.0005 10.3084 15.0313C9.93056 15.6558 9.04163 15.6553 8.66414 15.0306C8.64555 14.9998 8.62673 14.9686 8.60769 14.937C7.23853 12.6647 4.75 8.30139 4.75 6.60601C4.75 4.26725 6.87122 2.2793 9.50667 2.2793C12.1421 2.2793 14.1991 4.20878 14.1991 6.60601ZM7.88371 7.01903C7.88371 7.93055 8.6046 8.64674 9.5221 8.64674C10.4396 8.64674 11.1605 7.86544 11.1605 7.01903C11.1605 6.10751 10.4396 5.39132 9.5221 5.39132C8.6046 5.39132 7.88371 6.10751 7.88371 7.01903Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Orlando (Port Canaveral), Florida
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M16.5672 14.4383C16.3299 14.2282 15.953 14.2343 15.7246 14.4539C15.4292 14.7386 14.9063 14.7382 14.611 14.4543C14.5211 14.3675 14.4233 14.2916 14.3198 14.2239C14.3493 12.3578 14.7519 11.6139 15.5992 10.062C15.7504 9.78465 15.9142 9.4852 16.0897 9.15277L16.2901 8.7739C16.3669 8.62851 16.3711 8.45969 16.3018 8.31127C16.2325 8.16285 16.0963 8.05001 15.9296 8.00271L13.6527 7.35607L13.6532 4.77602C13.6532 4.62977 13.5905 4.48916 13.4791 4.38543C13.3672 4.28215 13.2155 4.22356 13.0578 4.22356L9.84559 4.22312V2.83133C9.84559 2.52624 9.57924 2.2793 9.25015 2.2793C8.92107 2.2793 8.65472 2.52667 8.65472 2.83133V4.22312L5.443 4.22269C5.28525 4.22269 5.13358 4.28084 5.0217 4.38457C4.91029 4.48829 4.84709 4.6289 4.84709 4.77515V7.3552L2.5702 8.0014C2.40355 8.04871 2.26733 8.16155 2.19805 8.30953C2.12877 8.45796 2.13298 8.62678 2.20975 8.77216L2.40964 9.15103C2.58518 9.48347 2.74855 9.78248 2.89928 10.0594C3.74609 11.6122 4.14914 12.3565 4.17816 14.2243C4.07518 14.2916 3.97781 14.3671 3.8884 14.4535C3.59349 14.739 3.06967 14.739 2.77523 14.4535C2.54679 14.2334 2.16996 14.2274 1.9331 14.4379C1.69576 14.6492 1.68828 14.999 1.91578 15.219C2.29027 15.5801 2.79302 15.7793 3.33182 15.7793C3.87061 15.7793 4.37336 15.5801 4.74785 15.2186C5.04276 14.9339 5.56611 14.9335 5.86102 15.219C6.23551 15.5801 6.73827 15.7793 7.27706 15.7793C7.81586 15.7793 8.31908 15.5801 8.6931 15.219C8.98848 14.9343 9.51136 14.9348 9.80674 15.2186C10.1812 15.5801 10.684 15.7793 11.2228 15.7793C11.7611 15.7793 12.2643 15.5801 12.6383 15.2186C12.9342 14.9335 13.4566 14.9335 13.7515 15.219C14.1265 15.5801 14.6292 15.7793 15.1676 15.7793C15.7059 15.7793 16.2091 15.5801 16.5836 15.219C16.8116 14.9994 16.8045 14.6496 16.5672 14.4383Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Utopia of the Seas
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/cruise-details"
                    className="font-[PB] text-[#005EDC] text-[14px] hover:underline"
                  >
                    View 91 dates
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="#005EDC"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cruise Card 2 */}
            <div className="flex-shrink-0 w-[310px] bg-white rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[174px] bg-[#F2F4F5] rounded-t-[5px]"></div>
              <div className="p-6">
                <h4 className="font-[PB] text-[#15264C] text-[20px] leading-[22px] mb-4">
                  4 Night Bahamas & Perfect Day Cruise
                </h4>
                <p className="font-serif text-[#4A4A4A] text-[14px] mb-2">
                  Starting from*
                </p>
                <p className="font-[PB] text-[#15264C] text-[24px] leading-[29px] mb-4">
                  $469/person
                </p>
                <p className="font-[PR] text-[#4A4A4A] text-[12px] mb-4">
                  Taxes & fees included*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6991 6.60601C12.6991 6.86074 12.5317 7.50989 12.0848 8.54858C11.6703 9.51179 11.107 10.6084 10.5285 11.6585C10.4629 11.7777 10.3972 11.896 10.3316 12.0131C9.95993 12.6777 9.01339 12.6776 8.6412 12.0134C8.57137 11.8888 8.5013 11.7628 8.43126 11.6358C7.84965 10.5814 7.28314 9.48199 6.86619 8.52021C6.65762 8.03909 6.49605 7.61421 6.38882 7.26095C6.27542 6.88738 6.25 6.68052 6.25 6.60601C6.25 5.21375 7.57643 3.7793 9.50667 3.7793C11.4229 3.7793 12.6991 5.14235 12.6991 6.60601ZM14.1991 6.60601C14.1991 8.34146 11.7288 12.6764 10.365 14.9376C10.3459 14.9692 10.327 15.0005 10.3084 15.0313C9.93056 15.6558 9.04163 15.6553 8.66414 15.0306C8.64555 14.9998 8.62673 14.9686 8.60769 14.937C7.23853 12.6647 4.75 8.30139 4.75 6.60601C4.75 4.26725 6.87122 2.2793 9.50667 2.2793C12.1421 2.2793 14.1991 4.20878 14.1991 6.60601ZM7.88371 7.01903C7.88371 7.93055 8.6046 8.64674 9.5221 8.64674C10.4396 8.64674 11.1605 7.86544 11.1605 7.01903C11.1605 6.10751 10.4396 5.39132 9.5221 5.39132C8.6046 5.39132 7.88371 6.10751 7.88371 7.01903Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Miami, Florida
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M16.5672 14.4383C16.3299 14.2282 15.953 14.2343 15.7246 14.4539C15.4292 14.7386 14.9063 14.7382 14.611 14.4543C14.5211 14.3675 14.4233 14.2916 14.3198 14.2239C14.3493 12.3578 14.7519 11.6139 15.5992 10.062C15.7504 9.78465 15.9142 9.4852 16.0897 9.15277L16.2901 8.7739C16.3669 8.62851 16.3711 8.45969 16.3018 8.31127C16.2325 8.16285 16.0963 8.05001 15.9296 8.00271L13.6527 7.35607L13.6532 4.77602C13.6532 4.62977 13.5905 4.48916 13.4791 4.38543C13.3672 4.28215 13.2155 4.22356 13.0578 4.22356L9.84559 4.22312V2.83133C9.84559 2.52624 9.57924 2.2793 9.25015 2.2793C8.92107 2.2793 8.65472 2.52667 8.65472 2.83133V4.22312L5.443 4.22269C5.28525 4.22269 5.13358 4.28084 5.0217 4.38457C4.91029 4.48829 4.84709 4.6289 4.84709 4.77515V7.3552L2.5702 8.0014C2.40355 8.04871 2.26733 8.16155 2.19805 8.30953C2.12877 8.45796 2.13298 8.62678 2.20975 8.77216L2.40964 9.15103C2.58518 9.48347 2.74855 9.78248 2.89928 10.0594C3.74609 11.6122 4.14914 12.3565 4.17816 14.2243C4.07518 14.2916 3.97781 14.3671 3.8884 14.4535C3.59349 14.739 3.06967 14.739 2.77523 14.4535C2.54679 14.2334 2.16996 14.2274 1.9331 14.4379C1.69576 14.6492 1.68828 14.999 1.91578 15.219C2.29027 15.5801 2.79302 15.7793 3.33182 15.7793C3.87061 15.7793 4.37336 15.5801 4.74785 15.2186C5.04276 14.9339 5.56611 14.9335 5.86102 15.219C6.23551 15.5801 6.73827 15.7793 7.27706 15.7793C7.81586 15.7793 8.31908 15.5801 8.6931 15.219C8.98848 14.9343 9.51136 14.9348 9.80674 15.2186C10.1812 15.5801 10.684 15.7793 11.2228 15.7793C11.7611 15.7793 12.2643 15.5801 12.6383 15.2186C12.9342 14.9335 13.4566 14.9335 13.7515 15.219C14.1265 15.5801 14.6292 15.7793 15.1676 15.7793C15.7059 15.7793 16.2091 15.5801 16.5836 15.219C16.8116 14.9994 16.8045 14.6496 16.5672 14.4383Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Wonder of the Seas
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/cruise-details"
                    className="font-[PB] text-[#005EDC] text-[14px] hover:underline"
                  >
                    View 81 dates
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="#005EDC"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cruise Card 3 */}
            <div className="flex-shrink-0 w-[310px] bg-white rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[174px] bg-[#F2F4F5] rounded-t-[5px]"></div>
              <div className="p-6">
                <h4 className="font-[PB] text-[#15264C] text-[20px] leading-[22px] mb-4">
                  5 Night Eastern Caribbean Cruise
                </h4>
                <p className="font-serif text-[#4A4A4A] text-[14px] mb-2">
                  Starting from*
                </p>
                <p className="font-[PB] text-[#15264C] text-[23px] leading-[29px] mb-4">
                  $343/person
                </p>
                <p className="font-[PR] text-[#4A4A4A] text-[12px] mb-4">
                  Taxes & fees included*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6991 6.60601C12.6991 6.86074 12.5317 7.50989 12.0848 8.54858C11.6703 9.51179 11.107 10.6084 10.5285 11.6585C10.4629 11.7777 10.3972 11.896 10.3316 12.0131C9.95993 12.6777 9.01339 12.6776 8.6412 12.0134C8.57137 11.8888 8.5013 11.7628 8.43126 11.6358C7.84965 10.5814 7.28314 9.48199 6.86619 8.52021C6.65762 8.03909 6.49605 7.61421 6.38882 7.26095C6.27542 6.88738 6.25 6.68052 6.25 6.60601C6.25 5.21375 7.57643 3.7793 9.50667 3.7793C11.4229 3.7793 12.6991 5.14235 12.6991 6.60601ZM14.1991 6.60601C14.1991 8.34146 11.7288 12.6764 10.365 14.9376C10.3459 14.9692 10.327 15.0005 10.3084 15.0313C9.93056 15.6558 9.04163 15.6553 8.66414 15.0306C8.64555 14.9998 8.62673 14.9686 8.60769 14.937C7.23853 12.6647 4.75 8.30139 4.75 6.60601C4.75 4.26725 6.87122 2.2793 9.50667 2.2793C12.1421 2.2793 14.1991 4.20878 14.1991 6.60601ZM7.88371 7.01903C7.88371 7.93055 8.6046 8.64674 9.5221 8.64674C10.4396 8.64674 11.1605 7.86544 11.1605 7.01903C11.1605 6.10751 10.4396 5.39132 9.5221 5.39132C8.6046 5.39132 7.88371 6.10751 7.88371 7.01903Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Miami, Florida
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M16.5672 14.4383C16.3299 14.2282 15.953 14.2343 15.7246 14.4539C15.4292 14.7386 14.9063 14.7382 14.611 14.4543C14.5211 14.3675 14.4233 14.2916 14.3198 14.2239C14.3493 12.3578 14.7519 11.6139 15.5992 10.062C15.7504 9.78465 15.9142 9.4852 16.0897 9.15277L16.2901 8.7739C16.3669 8.62851 16.3711 8.45969 16.3018 8.31127C16.2325 8.16285 16.0963 8.05001 15.9296 8.00271L13.6527 7.35607L13.6532 4.77602C13.6532 4.62977 13.5905 4.48916 13.4791 4.38543C13.3672 4.28215 13.2155 4.22356 13.0578 4.22356L9.84559 4.22312V2.83133C9.84559 2.52624 9.57924 2.2793 9.25015 2.2793C8.92107 2.2793 8.65472 2.52667 8.65472 2.83133V4.22312L5.443 4.22269C5.28525 4.22269 5.13358 4.28084 5.0217 4.38457C4.91029 4.48829 4.84709 4.6289 4.84709 4.77515V7.3552L2.5702 8.0014C2.40355 8.04871 2.26733 8.16155 2.19805 8.30953C2.12877 8.45796 2.13298 8.62678 2.20975 8.77216L2.40964 9.15103C2.58518 9.48347 2.74855 9.78248 2.89928 10.0594C3.74609 11.6122 4.14914 12.3565 4.17816 14.2243C4.07518 14.2916 3.97781 14.3671 3.8884 14.4535C3.59349 14.739 3.06967 14.739 2.77523 14.4535C2.54679 14.2334 2.16996 14.2274 1.9331 14.4379C1.69576 14.6492 1.68828 14.999 1.91578 15.219C2.29027 15.5801 2.79302 15.7793 3.33182 15.7793C3.87061 15.7793 4.37336 15.5801 4.74785 15.2186C5.04276 14.9339 5.56611 14.9335 5.86102 15.219C6.23551 15.5801 6.73827 15.7793 7.27706 15.7793C7.81586 15.7793 8.31908 15.5801 8.6931 15.219C8.98848 14.9343 9.51136 14.9348 9.80674 15.2186C10.1812 15.5801 10.684 15.7793 11.2228 15.7793C11.7611 15.7793 12.2643 15.5801 12.6383 15.2186C12.9342 14.9335 13.4566 14.9335 13.7515 15.219C14.1265 15.5801 14.6292 15.7793 15.1676 15.7793C15.7059 15.7793 16.2091 15.5801 16.5836 15.219C16.8116 14.9994 16.8045 14.6496 16.5672 14.4383Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Freedom of the Seas
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/cruise-details"
                    className="font-[PB] text-[#005EDC] text-[14px] hover:underline"
                  >
                    View 23 dates
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="#005EDC"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cruise Card 3 */}
            <div className="flex-shrink-0 w-[310px] bg-white rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[174px] bg-[#F2F4F5] rounded-t-[5px]"></div>
              <div className="p-6">
                <h4 className="font-[PB] text-[#15264C] text-[20px] leading-[22px] mb-4">
                  5 Night Eastern Caribbean Cruise
                </h4>
                <p className="font-serif text-[#4A4A4A] text-[14px] mb-2">
                  Starting from*
                </p>
                <p className="font-[PB] text-[#15264C] text-[23px] leading-[29px] mb-4">
                  $343/person
                </p>
                <p className="font-[PR] text-[#4A4A4A] text-[12px] mb-4">
                  Taxes & fees included*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6991 6.60601C12.6991 6.86074 12.5317 7.50989 12.0848 8.54858C11.6703 9.51179 11.107 10.6084 10.5285 11.6585C10.4629 11.7777 10.3972 11.896 10.3316 12.0131C9.95993 12.6777 9.01339 12.6776 8.6412 12.0134C8.57137 11.8888 8.5013 11.7628 8.43126 11.6358C7.84965 10.5814 7.28314 9.48199 6.86619 8.52021C6.65762 8.03909 6.49605 7.61421 6.38882 7.26095C6.27542 6.88738 6.25 6.68052 6.25 6.60601C6.25 5.21375 7.57643 3.7793 9.50667 3.7793C11.4229 3.7793 12.6991 5.14235 12.6991 6.60601ZM14.1991 6.60601C14.1991 8.34146 11.7288 12.6764 10.365 14.9376C10.3459 14.9692 10.327 15.0005 10.3084 15.0313C9.93056 15.6558 9.04163 15.6553 8.66414 15.0306C8.64555 14.9998 8.62673 14.9686 8.60769 14.937C7.23853 12.6647 4.75 8.30139 4.75 6.60601C4.75 4.26725 6.87122 2.2793 9.50667 2.2793C12.1421 2.2793 14.1991 4.20878 14.1991 6.60601ZM7.88371 7.01903C7.88371 7.93055 8.6046 8.64674 9.5221 8.64674C10.4396 8.64674 11.1605 7.86544 11.1605 7.01903C11.1605 6.10751 10.4396 5.39132 9.5221 5.39132C8.6046 5.39132 7.88371 6.10751 7.88371 7.01903Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Miami, Florida
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M16.5672 14.4383C16.3299 14.2282 15.953 14.2343 15.7246 14.4539C15.4292 14.7386 14.9063 14.7382 14.611 14.4543C14.5211 14.3675 14.4233 14.2916 14.3198 14.2239C14.3493 12.3578 14.7519 11.6139 15.5992 10.062C15.7504 9.78465 15.9142 9.4852 16.0897 9.15277L16.2901 8.7739C16.3669 8.62851 16.3711 8.45969 16.3018 8.31127C16.2325 8.16285 16.0963 8.05001 15.9296 8.00271L13.6527 7.35607L13.6532 4.77602C13.6532 4.62977 13.5905 4.48916 13.4791 4.38543C13.3672 4.28215 13.2155 4.22356 13.0578 4.22356L9.84559 4.22312V2.83133C9.84559 2.52624 9.57924 2.2793 9.25015 2.2793C8.92107 2.2793 8.65472 2.52667 8.65472 2.83133V4.22312L5.443 4.22269C5.28525 4.22269 5.13358 4.28084 5.0217 4.38457C4.91029 4.48829 4.84709 4.6289 4.84709 4.77515V7.3552L2.5702 8.0014C2.40355 8.04871 2.26733 8.16155 2.19805 8.30953C2.12877 8.45796 2.13298 8.62678 2.20975 8.77216L2.40964 9.15103C2.58518 9.48347 2.74855 9.78248 2.89928 10.0594C3.74609 11.6122 4.14914 12.3565 4.17816 14.2243C4.07518 14.2916 3.97781 14.3671 3.8884 14.4535C3.59349 14.739 3.06967 14.739 2.77523 14.4535C2.54679 14.2334 2.16996 14.2274 1.9331 14.4379C1.69576 14.6492 1.68828 14.999 1.91578 15.219C2.29027 15.5801 2.79302 15.7793 3.33182 15.7793C3.87061 15.7793 4.37336 15.5801 4.74785 15.2186C5.04276 14.9339 5.56611 14.9335 5.86102 15.219C6.23551 15.5801 6.73827 15.7793 7.27706 15.7793C7.81586 15.7793 8.31908 15.5801 8.6931 15.219C8.98848 14.9343 9.51136 14.9348 9.80674 15.2186C10.1812 15.5801 10.684 15.7793 11.2228 15.7793C11.7611 15.7793 12.2643 15.5801 12.6383 15.2186C12.9342 14.9335 13.4566 14.9335 13.7515 15.219C14.1265 15.5801 14.6292 15.7793 15.1676 15.7793C15.7059 15.7793 16.2091 15.5801 16.5836 15.219C16.8116 14.9994 16.8045 14.6496 16.5672 14.4383Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Freedom of the Seas
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/cruise-details"
                    className="font-[PB] text-[#005EDC] text-[14px] hover:underline"
                  >
                    View 23 dates
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="#005EDC"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cruise Card 3 */}
            <div className="flex-shrink-0 w-[310px] bg-white rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[174px] bg-[#F2F4F5] rounded-t-[5px]"></div>
              <div className="p-6">
                <h4 className="font-[PB] text-[#15264C] text-[20px] leading-[22px] mb-4">
                  5 Night Eastern Caribbean Cruise
                </h4>
                <p className="font-serif text-[#4A4A4A] text-[14px] mb-2">
                  Starting from*
                </p>
                <p className="font-[PB] text-[#15264C] text-[23px] leading-[29px] mb-4">
                  $343/person
                </p>
                <p className="font-[PR] text-[#4A4A4A] text-[12px] mb-4">
                  Taxes & fees included*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6991 6.60601C12.6991 6.86074 12.5317 7.50989 12.0848 8.54858C11.6703 9.51179 11.107 10.6084 10.5285 11.6585C10.4629 11.7777 10.3972 11.896 10.3316 12.0131C9.95993 12.6777 9.01339 12.6776 8.6412 12.0134C8.57137 11.8888 8.5013 11.7628 8.43126 11.6358C7.84965 10.5814 7.28314 9.48199 6.86619 8.52021C6.65762 8.03909 6.49605 7.61421 6.38882 7.26095C6.27542 6.88738 6.25 6.68052 6.25 6.60601C6.25 5.21375 7.57643 3.7793 9.50667 3.7793C11.4229 3.7793 12.6991 5.14235 12.6991 6.60601ZM14.1991 6.60601C14.1991 8.34146 11.7288 12.6764 10.365 14.9376C10.3459 14.9692 10.327 15.0005 10.3084 15.0313C9.93056 15.6558 9.04163 15.6553 8.66414 15.0306C8.64555 14.9998 8.62673 14.9686 8.60769 14.937C7.23853 12.6647 4.75 8.30139 4.75 6.60601C4.75 4.26725 6.87122 2.2793 9.50667 2.2793C12.1421 2.2793 14.1991 4.20878 14.1991 6.60601ZM7.88371 7.01903C7.88371 7.93055 8.6046 8.64674 9.5221 8.64674C10.4396 8.64674 11.1605 7.86544 11.1605 7.01903C11.1605 6.10751 10.4396 5.39132 9.5221 5.39132C8.6046 5.39132 7.88371 6.10751 7.88371 7.01903Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Miami, Florida
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M16.5672 14.4383C16.3299 14.2282 15.953 14.2343 15.7246 14.4539C15.4292 14.7386 14.9063 14.7382 14.611 14.4543C14.5211 14.3675 14.4233 14.2916 14.3198 14.2239C14.3493 12.3578 14.7519 11.6139 15.5992 10.062C15.7504 9.78465 15.9142 9.4852 16.0897 9.15277L16.2901 8.7739C16.3669 8.62851 16.3711 8.45969 16.3018 8.31127C16.2325 8.16285 16.0963 8.05001 15.9296 8.00271L13.6527 7.35607L13.6532 4.77602C13.6532 4.62977 13.5905 4.48916 13.4791 4.38543C13.3672 4.28215 13.2155 4.22356 13.0578 4.22356L9.84559 4.22312V2.83133C9.84559 2.52624 9.57924 2.2793 9.25015 2.2793C8.92107 2.2793 8.65472 2.52667 8.65472 2.83133V4.22312L5.443 4.22269C5.28525 4.22269 5.13358 4.28084 5.0217 4.38457C4.91029 4.48829 4.84709 4.6289 4.84709 4.77515V7.3552L2.5702 8.0014C2.40355 8.04871 2.26733 8.16155 2.19805 8.30953C2.12877 8.45796 2.13298 8.62678 2.20975 8.77216L2.40964 9.15103C2.58518 9.48347 2.74855 9.78248 2.89928 10.0594C3.74609 11.6122 4.14914 12.3565 4.17816 14.2243C4.07518 14.2916 3.97781 14.3671 3.8884 14.4535C3.59349 14.739 3.06967 14.739 2.77523 14.4535C2.54679 14.2334 2.16996 14.2274 1.9331 14.4379C1.69576 14.6492 1.68828 14.999 1.91578 15.219C2.29027 15.5801 2.79302 15.7793 3.33182 15.7793C3.87061 15.7793 4.37336 15.5801 4.74785 15.2186C5.04276 14.9339 5.56611 14.9335 5.86102 15.219C6.23551 15.5801 6.73827 15.7793 7.27706 15.7793C7.81586 15.7793 8.31908 15.5801 8.6931 15.219C8.98848 14.9343 9.51136 14.9348 9.80674 15.2186C10.1812 15.5801 10.684 15.7793 11.2228 15.7793C11.7611 15.7793 12.2643 15.5801 12.6383 15.2186C12.9342 14.9335 13.4566 14.9335 13.7515 15.219C14.1265 15.5801 14.6292 15.7793 15.1676 15.7793C15.7059 15.7793 16.2091 15.5801 16.5836 15.219C16.8116 14.9994 16.8045 14.6496 16.5672 14.4383Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Freedom of the Seas
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/cruise-details"
                    className="font-[PB] text-[#005EDC] text-[14px] hover:underline"
                  >
                    View 23 dates
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="#005EDC"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cruise Card 3 */}
            <div className="flex-shrink-0 w-[310px] bg-white rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[174px] bg-[#F2F4F5] rounded-t-[5px]"></div>
              <div className="p-6">
                <h4 className="font-[PB] text-[#15264C] text-[20px] leading-[22px] mb-4">
                  5 Night Eastern Caribbean Cruise
                </h4>
                <p className="font-serif text-[#4A4A4A] text-[14px] mb-2">
                  Starting from*
                </p>
                <p className="font-[PB] text-[#15264C] text-[23px] leading-[29px] mb-4">
                  $343/person
                </p>
                <p className="font-[PR] text-[#4A4A4A] text-[12px] mb-4">
                  Taxes & fees included*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6991 6.60601C12.6991 6.86074 12.5317 7.50989 12.0848 8.54858C11.6703 9.51179 11.107 10.6084 10.5285 11.6585C10.4629 11.7777 10.3972 11.896 10.3316 12.0131C9.95993 12.6777 9.01339 12.6776 8.6412 12.0134C8.57137 11.8888 8.5013 11.7628 8.43126 11.6358C7.84965 10.5814 7.28314 9.48199 6.86619 8.52021C6.65762 8.03909 6.49605 7.61421 6.38882 7.26095C6.27542 6.88738 6.25 6.68052 6.25 6.60601C6.25 5.21375 7.57643 3.7793 9.50667 3.7793C11.4229 3.7793 12.6991 5.14235 12.6991 6.60601ZM14.1991 6.60601C14.1991 8.34146 11.7288 12.6764 10.365 14.9376C10.3459 14.9692 10.327 15.0005 10.3084 15.0313C9.93056 15.6558 9.04163 15.6553 8.66414 15.0306C8.64555 14.9998 8.62673 14.9686 8.60769 14.937C7.23853 12.6647 4.75 8.30139 4.75 6.60601C4.75 4.26725 6.87122 2.2793 9.50667 2.2793C12.1421 2.2793 14.1991 4.20878 14.1991 6.60601ZM7.88371 7.01903C7.88371 7.93055 8.6046 8.64674 9.5221 8.64674C10.4396 8.64674 11.1605 7.86544 11.1605 7.01903C11.1605 6.10751 10.4396 5.39132 9.5221 5.39132C8.6046 5.39132 7.88371 6.10751 7.88371 7.01903Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Miami, Florida
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M16.5672 14.4383C16.3299 14.2282 15.953 14.2343 15.7246 14.4539C15.4292 14.7386 14.9063 14.7382 14.611 14.4543C14.5211 14.3675 14.4233 14.2916 14.3198 14.2239C14.3493 12.3578 14.7519 11.6139 15.5992 10.062C15.7504 9.78465 15.9142 9.4852 16.0897 9.15277L16.2901 8.7739C16.3669 8.62851 16.3711 8.45969 16.3018 8.31127C16.2325 8.16285 16.0963 8.05001 15.9296 8.00271L13.6527 7.35607L13.6532 4.77602C13.6532 4.62977 13.5905 4.48916 13.4791 4.38543C13.3672 4.28215 13.2155 4.22356 13.0578 4.22356L9.84559 4.22312V2.83133C9.84559 2.52624 9.57924 2.2793 9.25015 2.2793C8.92107 2.2793 8.65472 2.52667 8.65472 2.83133V4.22312L5.443 4.22269C5.28525 4.22269 5.13358 4.28084 5.0217 4.38457C4.91029 4.48829 4.84709 4.6289 4.84709 4.77515V7.3552L2.5702 8.0014C2.40355 8.04871 2.26733 8.16155 2.19805 8.30953C2.12877 8.45796 2.13298 8.62678 2.20975 8.77216L2.40964 9.15103C2.58518 9.48347 2.74855 9.78248 2.89928 10.0594C3.74609 11.6122 4.14914 12.3565 4.17816 14.2243C4.07518 14.2916 3.97781 14.3671 3.8884 14.4535C3.59349 14.739 3.06967 14.739 2.77523 14.4535C2.54679 14.2334 2.16996 14.2274 1.9331 14.4379C1.69576 14.6492 1.68828 14.999 1.91578 15.219C2.29027 15.5801 2.79302 15.7793 3.33182 15.7793C3.87061 15.7793 4.37336 15.5801 4.74785 15.2186C5.04276 14.9339 5.56611 14.9335 5.86102 15.219C6.23551 15.5801 6.73827 15.7793 7.27706 15.7793C7.81586 15.7793 8.31908 15.5801 8.6931 15.219C8.98848 14.9343 9.51136 14.9348 9.80674 15.2186C10.1812 15.5801 10.684 15.7793 11.2228 15.7793C11.7611 15.7793 12.2643 15.5801 12.6383 15.2186C12.9342 14.9335 13.4566 14.9335 13.7515 15.219C14.1265 15.5801 14.6292 15.7793 15.1676 15.7793C15.7059 15.7793 16.2091 15.5801 16.5836 15.219C16.8116 14.9994 16.8045 14.6496 16.5672 14.4383Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </div>
                  <span className="font-[PR] text-[#4A4A4A] text-[12px]">
                    Freedom of the Seas
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/cruise-details"
                    className="font-[PB] text-[#005EDC] text-[14px] hover:underline"
                  >
                    View 23 dates
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="#005EDC"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* View All Card */}
            <div className="flex-shrink-0 w-[310px] h-[420px] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(0,0,0,0.2)] bg-[#005EDC] rounded-[5px] shadow-[0_1px_8px_rgba(0,0,0,0.2)] flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="font-[PB] text-[31px] leading-[39px] mb-8">
                  113 Itineraries
                  <br />
                  in this category
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <Link
                    to="/find-a-cruise"
                    className="font-[PB] text-[14px] hover:underline"
                  >
                    View all
                  </Link>
                  <svg width="7" height="12" viewBox="0 0 8 13" fill="none">
                    <path
                      d="M1.25 11.5293L6.25 6.5293L1.25 1.5293"
                      stroke="white"
                      strokeWidth="1.368"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </DestinationSlider>
        </div>
      </div>

      {/* Cruise From Close to Home Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[K] text-[#15264C] text-[56px] leading-[70px] uppercase mb-4">
              CRUISE FROM CLOSE TO HOME
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] max-w-6xl mx-auto">
              With our bold last minute cruise deals, there's never been a
              better time – or price – to enjoy an epic adventure. Make every
              moment count with a quick getaway to some of the world's most
              incredible destinations — all sailing from a port near you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationCards.map((location, index) => (
              <div
                key={index}
                className="relative h-[366px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img
                  src={`${location.image}`}
                  alt={`Cruises from ${location.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white p-6">
                  <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                    CRUISES FROM
                  </p>
                  <h3 className="font-[K] text-[42px] leading-[46px] uppercase mb-4">
                    {location.title}
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <p className="font-[K] text-[42px] leading-[46px] uppercase mb-6">
                    {location.price}
                  </p>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#F9C700] text-[#15264C] font-[PR] text-[14px] uppercase tracking-[2px] rounded-sm hover:bg-[#e6b800] transition-colors"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Must-See Destinations Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[K] text-[#15264C] text-[56px] leading-[70px] uppercase mb-4">
              MUST-SEE DESTINATIONS
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] max-w-6xl mx-auto">
              Amp up your vacation with limited time deals on amazing bucket
              list adventures. Island hop throughout the Caribbean's
              world-famous beaches. Venture into Baja wine country in Mexico. Or
              kayak along gigantic glaciers and dramatic fjords in Alaska.
              Breathtaking destinations around the globe are yours for the
              taking on these last minute cruises, right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinationCards.map((destination, index) => (
              <div
                key={index}
                className="relative h-[366px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img
                  src={destination.image}
                  alt={`Cruises to ${destination.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white p-6">
                  <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                    CRUISES TO
                  </p>
                  <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                    {destination.title}
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <p className="font-[K] text-[41px] leading-[46px] uppercase mb-6">
                    {destination.price}
                  </p>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#F9C700] text-[#15264C] font-[PR] text-[14px] uppercase tracking-[2px] rounded-sm hover:bg-[#e6b800] transition-colors"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getaway CTA Section */}
      <div className="relative h-[621px] overflow-hidden">
        <img
          src="/girl-floating-on-tube.jpg"
          alt="You deserve a getaway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[url(../public/l.svg)] z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white">
          <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
            YOU DESERVE A GETAWAY
          </p>
          <h2 className="font-[K] text-[43px] leading-[46px] uppercase mb-8">
            EXPLORE OUR CRUISE DEALS
          </h2>
          <Link
            to="/find-a-cruise"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#F9C700] text-[#15264C] font-[PR] text-[14px] uppercase tracking-[2px] rounded-sm hover:bg-[#e6b800] transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Bucket List Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[K] text-[#15264C] text-[58px] leading-[70px] uppercase mb-4">
              YOUR VACATION BUCKET LIST WON'T CHECK ITSELF
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] max-w-5xl mx-auto">
              Ditch the everyday. Score a last minute cruise deal on that
              gamechanging getaway you've been eyeing — because adventure is
              always a good idea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bucketListCards.map((item, index) => (
              <div
                key={index}
                className="relative h-[366px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white p-6">
                  <h3 className="font-[K] text-[44px] leading-[46px] uppercase mb-4">
                    {item.title}
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <p className="font-[K] text-[43px] leading-[46px] uppercase mb-6">
                    {item.price}
                  </p>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#F9C700] text-[#15264C] font-[PR] text-[14px] uppercase tracking-[2px] rounded-sm hover:bg-[#e6b800] transition-colors"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="font-[K] text-[#15264C] text-[42px] leading-[53px] uppercase mb-12">
            EXPLORE MORE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vacation Financing */}
            <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d91.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[42px] leading-[46px] uppercase">
                  VACATION FINANCING
                </h3>
              </div>
            </div>

            {/* Find a Cruise */}
            <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d92.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[42px] leading-[46px] uppercase">
                  FIND A CRUISE
                </h3>
              </div>
            </div>

            {/* Last Minute Cruises */}
            <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d93.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[43px] leading-[46px] uppercase">
                  LAST MINUTE CRUISES
                </h3>
              </div>
            </div>

            {/* Weekend Getaways */}
            <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d94.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[43px] leading-[46px] uppercase">
                  WEEKEND GETAWAYS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMinute;
