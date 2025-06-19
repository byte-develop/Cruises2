import React from "react";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[600px] bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url(../public/d1.svg)] bg-center bg-cover"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="max-w-[1440px] w-full px-4 relative">
            <img src="../public/beat.png" className="w-[650px]" alt="" />

            <div className="mb-6">
              <h3 className="font-[PB] text-white text-[22px] uppercase tracking-[2px] mb-2">
                Up to $800 off
              </h3>
              <p className="font-[PB] text-white text-[22px] uppercase tracking-[2px]">
                + Save an additional $50 on South Florida getaway sailings
              </p>
            </div>

            <Link
              to="/find-a-cruise"
              className="inline-flex items-center justify-center w-[155px] h-[40px] bg-[#FDBB11] text-[#002859] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6a610] transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <div className="w-full py-16 flex justify-center">
        <div className="max-w-[1440px] w-full px-4 text-center">
          <h1 className="font-[K] text-[#15264C] text-[58px] leading-[70px] uppercase mb-6">
            THE BEST CRUISE DEALS & SPECIAL OFFERS
          </h1>
          <p className="font-[PR] text-[#15264C] text-[18px] leading-[27px] max-w-[1253px] mx-auto">
            The best vacation of your life starts here. Score incredible offers
            and last-minute deals on thrilling weekend getaways to the tropics,
            weeklong Euro discoveries, bucket list adventures in Alaska — and
            more. All onboard the world's boldest ships.
          </p>
        </div>
      </div>

      {/* Cruise Deals Grid */}
      <div className="w-full flex justify-center mb-16">
        <div className="max-w-[1440px] w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Weekend Getaways */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url(../public/d11.svg)] bg-center bg-cover"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  PERFECT DAY AT COCOCAY
                </p>
                <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                  WEEKEND GETAWAYS
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase mb-6">
                  $299
                </div>
                <Link
                  to="/find-a-cruise"
                  className="inline-flex items-center justify-center w-[131px] h-[39px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Caribbean Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url(../public/d22.svg)] bg-center bg-cover"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  7 NIGHT
                </p>
                <h3 className="font-[K] text-[42px] leading-[46px] uppercase mb-4">
                  CARIBBEAN CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase mb-6">
                  $476
                </div>
                <Link
                  to="/find-a-cruise"
                  className="inline-flex items-center justify-center w-[131px] h-[39px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Europe Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url(../public/d13.svg)] bg-center bg-cover"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  2025
                </p>
                <h3 className="font-[K] text-[41px] leading-[46px] uppercase mb-4">
                  EUROPE CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase mb-6">
                  $553
                </div>
                <Link
                  to="/find-a-cruise"
                  className="inline-flex items-center justify-center w-[131px] h-[39px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Alaska Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url(../public/d14.svg)] bg-center bg-cover"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  2025
                </p>
                <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                  ALASKA CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase mb-6">
                  $660
                </div>
                <Link
                  to="/find-a-cruise"
                  className="inline-flex items-center justify-center w-[131px] h-[39px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Kids Sail Free Banner */}
          <div className="relative w-full h-[254px] rounded-[5px] overflow-hidden mb-16">
            <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d2.svg)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className="font-[K] text-[64px] leading-[68px] uppercase mb-4">
                KIDS SAIL FREE
              </h2>
              <Link
                to="/find-a-cruise"
                className="inline-flex items-center justify-center w-[131px] h-[38px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bold Short Getaways Section */}
      <div className="w-full bg-[url(../public/d3.svg)] bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#15264C] opacity-50"></div>
        <div className="relative w-full py-16 flex justify-center">
          <div className="max-w-[1440px] w-full px-4 text-center text-white">
            <h2 className="font-[K] text-[43px] leading-[55px] uppercase tracking-[2px] mb-6">
              Bold Short Getaways Ahead
            </h2>
            <p className="font-[PR] text-[18px] leading-[27px] mb-12 max-w-[1264px] mx-auto">
              Shake up your short getaway or your weekend plans to a bolder
              adventure. Max out every minute without maxing out your vacay days
              — on tropical treks to sun- kissed shores from Galveston or the
              Sunshine State.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bahamas & Perfect Day */}
              <div className="relative w-full h-[439px] rounded-[5px] overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url(../public/d41.svg)] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                  <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                    BAHAMAS & PERFECT DAY
                  </p>
                  <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                    WEEKEND GETAWAYS
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <div className="font-[K] text-[42px] leading-[46px] uppercase mb-6">
                    $293
                  </div>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center w-[131px] h-[38px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Sail from Florida */}
              <div className="relative w-full h-[439px] rounded-[5px] overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url(../public/d42.svg)] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                  <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                    SAIL FROM FLORIDA
                  </p>
                  <h3 className="font-[K] text-[42px] leading-[46px] uppercase mb-4">
                    CARIBBEAN CRUISES
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <div className="font-[K] text-[42px] leading-[46px] uppercase mb-6">
                    $293
                  </div>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center w-[131px] h-[38px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Sail from Galveston */}
              <div className="relative w-full h-[439px] rounded-[5px] overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url(../public/d43.svg)] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                  <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                    SAIL FROM GALVESTON
                  </p>
                  <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                    WESTERN CARIBBEAN
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <div className="font-[K] text-[41px] leading-[46px] uppercase mb-6">
                    $458
                  </div>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center w-[131px] h-[38px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Sail from California */}
              <div className="relative w-full h-[439px] rounded-[5px] overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url(../public/d44.svg)] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                  <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                    SAIL FROM CALIFORNIA
                  </p>
                  <h3 className="font-[K] text-[41px] leading-[46px] uppercase mb-4">
                    MEXICO CRUISES
                  </h3>
                  <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                    STARTING FROM
                  </p>
                  <div className="font-[K] text-[41px] leading-[46px] uppercase mb-6">
                    $246
                  </div>
                  <Link
                    to="/find-a-cruise"
                    className="inline-flex items-center justify-center w-[131px] h-[38px] bg-[#F9C700] border border-[#F9C700] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#e6b300] transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Up to $800 off Section */}
      <div className="w-full flex justify-center mb-8 mt-16">
        <div className="max-w-[1440px] w-full px-4">
          <div className="mb-6">
            <h2 className="font-[K] text-[#15264C] text-[54px] leading-[60px] uppercase mb-2">
              UP TO $800 OFF
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[20px] leading-[24px]">
              Plus save an additional $50 on South Florida getaway sailings
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-[#CDCFD1] mb-8">
            <div className="flex gap-8">
              <div className="pb-4 border-b-2 border-[#005EDC]">
                <span className="font-[PB] text-[#005EDC] text-[16px] uppercase tracking-[-0.32px]">
                  Weekend Getaways
                </span>
              </div>
              <div className="pb-4">
                <span className="font-[PB] text-[#4A4A4A] opacity-75 text-[16px] uppercase tracking-[-0.32px]">
                  Sail from Florida
                </span>
              </div>
              <div className="pb-4">
                <span className="font-[PB] text-[#4A4A4A] opacity-75 text-[16px] uppercase tracking-[-0.32px]">
                  Sail to Mexico
                </span>
              </div>
              <div className="pb-4">
                <span className="font-[PB] text-[#4A4A4A] opacity-75 text-[16px] uppercase tracking-[-0.32px]">
                  Sail to Europe
                </span>
              </div>
              <div className="pb-4">
                <span className="font-[PB] text-[#4A4A4A] opacity-75 text-[16px] uppercase tracking-[-0.32px]">
                  Sail to Alaska
                </span>
              </div>
              <div className="pb-4">
                <span className="font-[PB] text-[#4A4A4A] opacity-75 text-[16px] uppercase tracking-[-0.32px]">
                  Holiday Cruises
                </span>
              </div>
            </div>
          </div>

          {/* Cruise Cards Container */}
          <div className="overflow-x-auto">
            <div className="flex gap-6 min-w-max">
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
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

              {/* Additional cards would continue here... */}

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
            </div>
          </div>
        </div>
      </div>

      {/* Vacation Financing Section */}
      <div className="w-full bg-[#BFE1DF] py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-[1333px]">
            <h2 className="font-[K] text-[#15264C] text-[37px] leading-[46px] uppercase mb-4">
              Vacation Financing
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] mb-12 max-w-[732px]">
              Booking a cruise has never been easier with flexible payment
              methods and payment options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-[77px] h-[77px] bg-cover bg-center bg-[url(../public/d61.svg)] rounded-[5px] flex-shrink-0"></div>
                <div>
                  <h3 className="font-[PB] text-[#15264C] text-[24px] leading-[36px] mb-2">
                    Tons of Options
                  </h3>
                  <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px]">
                    Choose from options like Affirm, gift cards and more when
                    booking your cruise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[77px] h-[77px] bg-cover bg-center bg-[url(../public/d61.svg)] rounded-[5px] flex-shrink-0"></div>
                <div>
                  <h3 className="font-[PB] text-[#15264C] text-[24px] leading-[36px] mb-2">
                    Pay Over Time
                  </h3>
                  <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px]">
                    Pay in full today or place a deposit and pay little by
                    little. The choice is yours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[77px] h-[77px] bg-cover bg-center bg-[url(../public/d61.svg)] rounded-[5px] flex-shrink-0"></div>
                <div>
                  <h3 className="font-[PB] text-[#15264C] text-[24px] leading-[36px] mb-2">
                    No Late Fees
                  </h3>
                  <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px]">
                    Affirm or scheduled payments won't charge you late fees,
                    hidden fees, compound interest, or penalties of any
                    kind—ever.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/faq"
              className="inline-flex items-center justify-center w-[314px] h-[43px] border border-[#15264C] text-[#15264C] text-[14px] font-[PR] uppercase tracking-[2px] rounded-[3px] hover:bg-[#15264C] hover:text-white transition-colors"
            >
              Explore All Finance Options
            </Link>
          </div>
        </div>
      </div>

      {/* Great Cruises Near Me Section */}
      <div className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[K] text-[#15264C] text-[43px] leading-[53px] uppercase mb-6">
              GREAT CRUISES NEAR ME
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] max-w-[1116px] mx-auto">
              You don't have to travel far for an incredible vacation. Cruise
              from a port near you to top-rated vacation destinations in the
              tropics and beyond. No matter where in the world you're sailing
              from, you'll find plenty of deals on epic itineraries sailing
              right from your backyard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Florida */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d71.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES FROM
                </p>
                <h3 className="font-[K] text-[42px] leading-[46px] uppercase mb-4">
                  FLORIDA
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase">
                  $157
                </div>
              </div>
            </div>

            {/* Texas */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d72.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES FROM
                </p>
                <h3 className="font-[K] text-[45px] leading-[46px] uppercase mb-4">
                  TEXAS
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase">
                  $458
                </div>
              </div>
            </div>

            {/* Cape Liberty */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d73.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES FROM
                </p>
                <h3 className="font-[K] text-[44px] leading-[46px] uppercase mb-4">
                  CAPE LIBERTY
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase">
                  $538
                </div>
              </div>
            </div>

            {/* West Coast */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d74.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES FROM
                </p>
                <h3 className="font-[K] text-[45px] leading-[46px] uppercase mb-4">
                  WEST COAST
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase">
                  $391
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Cruise Destinations Section */}
      <div className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-[K] text-[#15264C] text-[43px] leading-[53px] uppercase mb-6">
              TOP CRUISE DESTINATIONS
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] max-w-[1104px]">
              Chase sun-kissed shores and emerald rainforests in top Caribbean
              destinations, like The Bahamas, the ABC Islands, and Mexico's
              Yucatan Peninsula. Or go wild beneath the midnight sun on journeys
              that take you to Alaska's most awe-inspiring fjords and national
              parks. No matter where you choose to wander, adventure is always
              just a click away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* The Bahamas */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d81.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES TO
                </p>
                <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                  THE BAHAMAS
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase">
                  $299
                </div>
              </div>
            </div>

            {/* The Caribbean */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d82.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES TO
                </p>
                <h3 className="font-[K] text-[43px] leading-[46px] uppercase mb-4">
                  THE CARIBBEAN
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase">
                  $92
                </div>
              </div>
            </div>

            {/* Mexico */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d83.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES TO
                </p>
                <h3 className="font-[K] text-[41px] leading-[46px] uppercase mb-4">
                  MEXICO
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase">
                  $313
                </div>
              </div>
            </div>

            {/* Alaska */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d84.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <p className="font-[PR] text-[24px] uppercase tracking-[2px] mb-2">
                  CRUISES TO
                </p>
                <h3 className="font-[K] text-[45px] leading-[46px] uppercase mb-4">
                  ALASKA
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase">
                  $660
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Cruise Deals Section */}
      <div className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-[K] text-[#15264C] text-[43px] leading-[53px] uppercase mb-6">
              AMAZING SEASONAL CRUISE DEALS
            </h2>
            <p className="font-[PR] text-[#4A4A4A] text-[18px] leading-[27px] max-w-[1132px]">
              No matter what time of year it is, a cruise with Royal Caribbean
              is always a great idea. Set sail on unforgettable spring and
              summer vacations the whole family will love, or get away on fall
              and winter escapes to the world's most captivating destinations
              with seasonal savings on all your favorite cruises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Spring Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d85.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[41px] leading-[46px] uppercase mb-4">
                  SPRING CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase">
                  $246
                </div>
              </div>
            </div>

            {/* Summer Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d86.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[41px] leading-[46px] uppercase mb-4">
                  SUMMER CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase">
                  $246
                </div>
              </div>
            </div>

            {/* Fall Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d87.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[42px] leading-[46px] uppercase mb-4">
                  FALL CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[42px] leading-[46px] uppercase">
                  $157
                </div>
              </div>
            </div>

            {/* Winter Cruises */}
            <div className="relative w-full h-[366px] rounded-[5px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/d88.svg)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="font-[K] text-[42px] leading-[46px] uppercase mb-4">
                  WINTER CRUISES
                </h3>
                <p className="font-[PR] text-[14px] uppercase tracking-[2px] mb-2">
                  STARTING FROM
                </p>
                <div className="font-[K] text-[41px] leading-[46px] uppercase">
                  $246
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Royal Caribbean Cruise Deals Guide */}
      <div className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="font-[K] text-[#15264C] text-[37px] leading-[46px] uppercase mb-8">
            Royal Caribbean Cruise Deals Guide
          </h2>

          <div className="space-y-6 text-[#4A4A4A] font-[PR] text-[18px] leading-[27px]">
            <p>
              When it comes to planning the ultimate getaway, there are so many
              reasons why cruise vacations rank among the most popular travel
              options. First of all, they're completely stress-free. On a cruise
              vacation, all the planning is taken care of by the cruise line —
              from the destinations you sail to and the shore excursions
              available at each port, to a full range of entertainment and
              activities happening onboard every day. If you're not a planner,
              or if the only things you're looking to focus on during your
              getaway is savoring great food, relaxing, and soaking up the
              sights, cruise vacations are the way to go. A cruise vacation is
              also a great option if you're traveling with the whole family,
              especially when you opt for a Royal Caribbean cruise. All of the
              ships in this cruise line's fleet offer family-friendly
              experiences for guests of all ages. Even little ones will find
              plenty of ways to play with spaces and activities designed for
              tots to tweens. One of the top reasons savvy travelers love
              cruising, though, is because of the incredible value it offers.
              With Royal Caribbean, your cruise fare includes access to most of
              the ship's attractions, select dining venues and all of the
              entertainment onboard. If you want to make your experience even
              more all-inclusive, you can opt for beverage and specialty dining
              packages that cover drinks and dinner at some of the most
              exclusive restaurants in the fleet. On top of all that, the cruise
              line presents frequent limited-time offers and seasonal sales,
              making it easy to score big savings when booking your vacation.
            </p>

            <h3 className="font-[PB] text-[18px] pt-6">
              I'm ready to start planning my cruise — how can I score the best
              deals?
            </h3>
            <p>
              Whether you're looking to book a short getaway or a longer
              adventure to far-flung destinations, Royal Caribbean makes it easy
              to save big on everything from your cruise fare to special
              experiences onboard and onshore. The first step to making sure you
              get the best deals is to join the cruise line's email list. Once
              you've signed up, you'll receive regular updates on all the latest
              offers, like deals by destination
              , kids sail free promotions and flash sales. The savings don't end
              when you book your cruise, though. Once you've made a reservation,
              you'll also receive notifications about special offers for onboard
              experiences — like discounts on beverage and specialty dining
              packages, shore excursions, spa services, and more via <span
                className="text-[#005EDC] hover:underline"
              >
                My Royal Cruise
              </span>
              .
            </p>

            <h3 className="font-[PB] text-[18px] pt-6">
              Does it pay to plan ahead, or should I wait until the last minute?
            </h3>
            <p>
              It's an age-old question — does the early bird really get the
              worm, or are there perks to taking a "wait-and-see" approach? If
              you're booking a cruise vacation, you'll find there are benefits
              to both strategies.{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                Planning ahead is a great way to score big savings
              </span>
              , as Royal Caribbean often runs early saver deals to guests
              booking well in advance. It's also pretty safe to assume prices
              usually go up as availability goes down the closer you get to your
              sail date, so booking ahead is a surefire way to lock in a great
              rate. That said, booking a cruise at the last minute can also
              yield some unexpected savings — but only if the itinerary you're
              interested in hasn't sold out yet.
            </p>

            <p>
              If you can be flexible when it comes to your travel dates, you'll
              have your pick of unbeatable savings. Popular vacation dates —
              like the{" "}
              <span  className="text-[#005EDC] hover:underline">
                holidays
              </span>
              ,{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                spring break
              </span>
              ,{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                summer vacation
              </span>{" "}
              and{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                week long cruises
              </span>{" "}
              — sometimes see the highest prices (though you might get lucky
              with a seasonal sale). If you have the flexibility to travel
              during the shoulder season or off season, you'll likely enjoy big
              savings on{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                popular stateroom categories
              </span>
              , like Balconies and even Suites. The deals don't only apply to
              your cruise fare, though. Once you've booked your vacation, you
              could easily unlock discounts and specials on add-ons, including{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                beverage and dining packages
              </span>
              , Voom® high speed internet, shore excursions, and amazing
              experiences not included in your cruise fare — like a day of
              pampering at Vitality
              <span className="text-[15px] align-super">SM</span> Spa, a
              behind-the-scenes tour of the ship's galley followed by brunch,
              VIP seating at shows, and much more.
            </p>

            <h3 className="font-[PB] text-[18px] pt-6">
              How can I maximize the value of my cruise vacation?
            </h3>
            <p>
              There are plenty of ways to get more bang for your buck when you
              sail on a Royal Caribbean cruise. Every ship in the fleet offers a
              range of delicious{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                complimentary dining options
              </span>
              , but you can dig into even more crave-worthy flavor by purchasing
              a{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                Specialty Dining Package
              </span>{" "}
              for less ahead of your cruise. Add a{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                Specialty Beverage Package
              </span>{" "}
              — which includes unlimited alcoholic beverages, soda, and more —
              and your experience is as close to all-inclusive as it gets. And
              with so many complimentary shows and attractions onboard, you can
              easily fill every sea day without spending a single dollar extra.
            </p>

            <p>
              Royal Caribbean also offers deals based on{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                departure ports
              </span>{" "}
              and destinations, so if you're a flexible traveler looking for
              great savings, you can plan your next vacation around which
              itineraries are on sale. Just check your email or visit
              RoyalCaribbean.com/cruise-deals to stay up to date on promotions,
              sales and special offers. You can even browse sailings and deals
              by homeport, destination and season, so you can rest assured
              you're getting the best possible deal no matter when or where in
              the world you choose to set sail.
            </p>

            <p>
              Ready to start planning your next getaway? Start exploring{" "}
              <span
                className="text-[#005EDC] hover:underline"
              >
                cruise deals
              </span>{" "}
              now.
            </p>
          </div>
        </div>
      </div>

      {/* Explore More Section */}
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

export default Deals;
