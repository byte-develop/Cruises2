import React from "react";
import { Link } from "react-router-dom";

const Weekend = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('../public/weekend.svg')`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0, 0, 0, .15)" }}
          ></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-[27px] font-normal tracking-[2px] uppercase">
            A BOLDER WAY TO GETAWAY
          </h2>
          <h1 className="text-[84px] font-normal uppercase leading-[96px] mb-12 font-[K]">
            SHORT WEEKEND CRUISES
          </h1>
          <button className="bg-[#FDBB11] text-[#006] px-8 py-3 rounded text-sm font-normal tracking-[2px] uppercase font-proxima">
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-[54px] font-normal uppercase leading-[60px] text-[#15264C] mb-6 font-[K]">
            up to $800 off
          </h2>
          <p className="text-xl text-[#4A4A4A] font-proxima">
            Plus save an additional $50 on South Florida getaway sailings
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-gray-200">
          <div className="pb-2 border-b-2 border-[#005EDC]">
            <span className="text-[#005EDC] font-bold text-base font-proxima">
              Cruise from Los Angeles
            </span>
          </div>
          <div className="pb-2">
            <span className="text-[#4A4A4A] opacity-75 font-bold text-base font-proxima">
              Cruise from San Diego
            </span>
          </div>
          <div className="pb-2">
            <span className="text-[#4A4A4A] opacity-75 font-bold text-base font-proxima">
              Cruise from Port Canaveral
            </span>
          </div>
          <div className="pb-2">
            <span className="text-[#4A4A4A] opacity-75 font-bold text-base font-proxima">
              Cruise from Miami
            </span>
          </div>
          <div className="pb-2">
            <span className="text-[#4A4A4A] opacity-75 font-bold text-base font-proxima">
              Cruise from Galveston
            </span>
          </div>
        </div>

        {/* Cruise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {/* Cruise Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[174px] bg-[#F2F4F5] flex items-center justify-center">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#15264C] mb-4 leading-tight font-proxima">
                4 Night Catalina & Ensenada Cruise
              </h3>
              <p className="text-sm text-[#4A4A4A] mb-2 font-times">
                Starting from*
              </p>
              <p className="text-2xl font-bold text-[#15264C] mb-2 font-proxima">
                $444/person
              </p>
              <p className="text-xs text-[#4A4A4A] mb-4 font-proxima">
                Taxes & fees included*
              </p>

              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-[#4A4A4A]"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6991 6.57671C12.6991 6.83144 12.5317 7.48059 12.0848 8.51928C11.6703 9.48249 11.107 10.5791 10.5285 11.6292C10.4629 11.7484 10.3972 11.8667 10.3316 11.9838C9.95993 12.6484 9.01339 12.6483 8.6412 11.9841C8.57137 11.8595 8.5013 11.7335 8.43126 11.6065C7.84965 10.5521 7.28314 9.45269 6.86619 8.49091C6.65762 8.00979 6.49605 7.58491 6.38882 7.23165C6.27542 6.85808 6.25 6.65122 6.25 6.57671C6.25 5.18445 7.57643 3.75 9.50667 3.75C11.4229 3.75 12.6991 5.11305 12.6991 6.57671Z"
                  />
                </svg>
                <span className="text-xs text-[#4A4A4A] font-proxima">
                  Los Angeles, California
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-[#4A4A4A]"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M16.5672 14.409C16.3299 14.1989 15.953 14.205 15.7246 14.4246C15.4292 14.7093 14.9063 14.7089 14.611 14.425C14.5211 14.3382 14.4233 14.2623 14.3198 14.1946C14.3493 12.3285 14.7519 11.5846 15.5992 10.0327C15.7504 9.75535 15.9142 9.4559 16.0897 9.12347L16.2901 8.7446C16.3669 8.59921 16.3711 8.43039 16.3018 8.28197C16.2325 8.13355 16.0963 8.02071 15.9296 7.97341L13.6527 7.32677L13.6532 4.74672C13.6532 4.60047 13.5905 4.45986 13.4791 4.35613C13.3672 4.25285 13.2155 4.19426 13.0578 4.19426L9.84559 4.19382V2.80203C9.84559 2.49694 9.57924 2.25 9.25015 2.25C8.92107 2.25 8.65472 2.49737 8.65472 2.80203V4.19382L5.443 4.19339C5.28525 4.19339 5.13358 4.25154 5.0217 4.35527C4.91029 4.45899 4.84709 4.5996 4.84709 4.74585V7.3259L2.5702 7.9721C2.40355 8.01941 2.26733 8.13225 2.19805 8.28023C2.12877 8.42866 2.13298 8.59748 2.20975 8.74286L2.40964 9.12173C2.58518 9.45417 2.74855 9.75318 2.89928 10.0301C3.74609 11.5829 4.14914 12.3272 4.17816 14.195C4.07518 14.2623 3.97781 14.3378 3.8884 14.4242C3.59349 14.7097 3.06967 14.7097 2.77523 14.4242C2.54679 14.2041 2.16996 14.1981 1.9331 14.4086C1.69576 14.6199 1.68828 14.9697 1.91578 15.1897C2.29027 15.5508 2.79302 15.75 3.33182 15.75C3.87061 15.75 4.37336 15.5508 4.74785 15.1893C5.04276 14.9046 5.56611 14.9042 5.86102 15.1897C6.23551 15.5508 6.73827 15.75 7.27706 15.75C7.81586 15.75 8.31908 15.5508 8.6931 15.1897C8.98848 14.905 9.51136 14.9055 9.80674 15.1893C10.1812 15.5508 10.684 15.75 11.2228 15.75C11.7611 15.75 12.2643 15.5508 12.6383 15.1893C12.9342 14.9042 13.4566 14.9042 13.7515 15.1897C14.1265 15.5508 14.6292 15.75 15.1676 15.75C15.7059 15.75 16.2091 15.5508 16.5836 15.1897C16.8116 14.9701 16.8045 14.6203 16.5672 14.409Z" />
                </svg>
                <span className="text-xs text-[#4A4A4A] font-proxima">
                  Ovation of the Seas
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#005EDC] font-proxima">
                  View 21 dates
                </span>
                <svg
                  className="w-3 h-3 text-[#005EDC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 8 13"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.368}
                    d="M1.25 11.5L6.25 6.5L1.25 1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Cruise Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[174px] bg-[#F2F4F5] flex items-center justify-center">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#15264C] mb-4 leading-tight font-proxima">
                5 Night Cabo Overnight Cruise
              </h3>
              <p className="text-sm text-[#4A4A4A] mb-2 font-times">
                Starting from*
              </p>
              <p className="text-2xl font-bold text-[#15264C] mb-2 font-proxima">
                $416/person
              </p>
              <p className="text-xs text-[#4A4A4A] mb-4 font-proxima">
                Taxes & fees included*
              </p>

              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-[#4A4A4A]"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6991 6.57671C12.6991 6.83144 12.5317 7.48059 12.0848 8.51928C11.6703 9.48249 11.107 10.5791 10.5285 11.6292C10.4629 11.7484 10.3972 11.8667 10.3316 11.9838C9.95993 12.6484 9.01339 12.6483 8.6412 11.9841C8.57137 11.8595 8.5013 11.7335 8.43126 11.6065C7.84965 10.5521 7.28314 9.45269 6.86619 8.49091C6.65762 8.00979 6.49605 7.58491 6.38882 7.23165C6.27542 6.85808 6.25 6.65122 6.25 6.57671C6.25 5.18445 7.57643 3.75 9.50667 3.75C11.4229 3.75 12.6991 5.11305 12.6991 6.57671Z"
                  />
                </svg>
                <span className="text-xs text-[#4A4A4A] font-proxima">
                  Los Angeles, California
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-[#4A4A4A]"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M16.5672 14.409C16.3299 14.1989 15.953 14.205 15.7246 14.4246C15.4292 14.7093 14.9063 14.7089 14.611 14.425C14.5211 14.3382 14.4233 14.2623 14.3198 14.1946C14.3493 12.3285 14.7519 11.5846 15.5992 10.0327C15.7504 9.75535 15.9142 9.4559 16.0897 9.12347L16.2901 8.7446C16.3669 8.59921 16.3711 8.43039 16.3018 8.28197C16.2325 8.13355 16.0963 8.02071 15.9296 7.97341L13.6527 7.32677L13.6532 4.74672C13.6532 4.60047 13.5905 4.45986 13.4791 4.35613C13.3672 4.25285 13.2155 4.19426 13.0578 4.19426L9.84559 4.19382V2.80203C9.84559 2.49694 9.57924 2.25 9.25015 2.25C8.92107 2.25 8.65472 2.49737 8.65472 2.80203V4.19382L5.443 4.19339C5.28525 4.19339 5.13358 4.25154 5.0217 4.35527C4.91029 4.45899 4.84709 4.5996 4.84709 4.74585V7.3259L2.5702 7.9721C2.40355 8.01941 2.26733 8.13225 2.19805 8.28023C2.12877 8.42866 2.13298 8.59748 2.20975 8.74286L2.40964 9.12173C2.58518 9.45417 2.74855 9.75318 2.89928 10.0301C3.74609 11.5829 4.14914 12.3272 4.17816 14.195C4.07518 14.2623 3.97781 14.3378 3.8884 14.4242C3.59349 14.7097 3.06967 14.7097 2.77523 14.4242C2.54679 14.2041 2.16996 14.1981 1.9331 14.4086C1.69576 14.6199 1.68828 14.9697 1.91578 15.1897C2.29027 15.5508 2.79302 15.75 3.33182 15.75C3.87061 15.75 4.37336 15.5508 4.74785 15.1893C5.04276 14.9046 5.56611 14.9042 5.86102 15.1897C6.23551 15.5508 6.73827 15.75 7.27706 15.75C7.81586 15.75 8.31908 15.5508 8.6931 15.1897C8.98848 14.905 9.51136 14.9055 9.80674 15.1893C10.1812 15.5508 10.684 15.75 11.2228 15.75C11.7611 15.75 12.2643 15.5508 12.6383 15.1893C12.9342 14.9042 13.4566 14.9042 13.7515 15.1897C14.1265 15.5508 14.6292 15.75 15.1676 15.75C15.7059 15.75 16.2091 15.5508 16.5836 15.1897C16.8116 14.9701 16.8045 14.6203 16.5672 14.409Z" />
                </svg>
                <span className="text-xs text-[#4A4A4A] font-proxima">
                  Navigator of the Seas
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#005EDC] font-proxima">
                  View 2 dates
                </span>
                <svg
                  className="w-3 h-3 text-[#005EDC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 8 13"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.368}
                    d="M1.25 11.5L6.25 6.5L1.25 1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Cruise Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[174px] bg-[#F2F4F5] flex items-center justify-center">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#15264C] mb-4 leading-tight font-proxima">
                5 Night Cabo Overnight Cruise
              </h3>
              <p className="text-sm text-[#4A4A4A] mb-2 font-times">
                Starting from*
              </p>
              <p className="text-2xl font-bold text-[#15264C] mb-2 font-proxima">
                $400/person
              </p>
              <p className="text-xs text-[#4A4A4A] mb-4 font-proxima">
                Taxes & fees included*
              </p>

              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-[#4A4A4A]"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6991 6.57671C12.6991 6.83144 12.5317 7.48059 12.0848 8.51928C11.6703 9.48249 11.107 10.5791 10.5285 11.6292C10.4629 11.7484 10.3972 11.8667 10.3316 11.9838C9.95993 12.6484 9.01339 12.6483 8.6412 11.9841C8.57137 11.8595 8.5013 11.7335 8.43126 11.6065C7.84965 10.5521 7.28314 9.45269 6.86619 8.49091C6.65762 8.00979 6.49605 7.58491 6.38882 7.23165C6.27542 6.85808 6.25 6.65122 6.25 6.57671C6.25 5.18445 7.57643 3.75 9.50667 3.75C11.4229 3.75 12.6991 5.11305 12.6991 6.57671Z"
                  />
                </svg>
                <span className="text-xs text-[#4A4A4A] font-proxima">
                  Los Angeles, California
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-[#4A4A4A]"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M16.5672 14.409C16.3299 14.1989 15.953 14.205 15.7246 14.4246C15.4292 14.7093 14.9063 14.7089 14.611 14.425C14.5211 14.3382 14.4233 14.2623 14.3198 14.1946C14.3493 12.3285 14.7519 11.5846 15.5992 10.0327C15.7504 9.75535 15.9142 9.4559 16.0897 9.12347L16.2901 8.7446C16.3669 8.59921 16.3711 8.43039 16.3018 8.28197C16.2325 8.13355 16.0963 8.02071 15.9296 7.97341L13.6527 7.32677L13.6532 4.74672C13.6532 4.60047 13.5905 4.45986 13.4791 4.35613C13.3672 4.25285 13.2155 4.19426 13.0578 4.19426L9.84559 4.19382V2.80203C9.84559 2.49694 9.57924 2.25 9.25015 2.25C8.92107 2.25 8.65472 2.49737 8.65472 2.80203V4.19382L5.443 4.19339C5.28525 4.19339 5.13358 4.25154 5.0217 4.35527C4.91029 4.45899 4.84709 4.5996 4.84709 4.74585V7.3259L2.5702 7.9721C2.40355 8.01941 2.26733 8.13225 2.19805 8.28023C2.12877 8.42866 2.13298 8.59748 2.20975 8.74286L2.40964 9.12173C2.58518 9.45417 2.74855 9.75318 2.89928 10.0301C3.74609 11.5829 4.14914 12.3272 4.17816 14.195C4.07518 14.2623 3.97781 14.3378 3.8884 14.4242C3.59349 14.7097 3.06967 14.7097 2.77523 14.4242C2.54679 14.2041 2.16996 14.1981 1.9331 14.4086C1.69576 14.6199 1.68828 14.9697 1.91578 15.1897C2.29027 15.5508 2.79302 15.75 3.33182 15.75C3.87061 15.75 4.37336 15.5508 4.74785 15.1893C5.04276 14.9046 5.56611 14.9042 5.86102 15.1897C6.23551 15.5508 6.73827 15.75 7.27706 15.75C7.81586 15.75 8.31908 15.5508 8.6931 15.1897C8.98848 14.905 9.51136 14.9055 9.80674 15.1893C10.1812 15.5508 10.684 15.75 11.2228 15.75C11.7611 15.75 12.2643 15.5508 12.6383 15.1893C12.9342 14.9042 13.4566 14.9042 13.7515 15.1897C14.1265 15.5508 14.6292 15.75 15.1676 15.75C15.7059 15.75 16.2091 15.5508 16.5836 15.1897C16.8116 14.9701 16.8045 14.6203 16.5672 14.409Z" />
                </svg>
                <span className="text-xs text-[#4A4A4A] font-proxima">
                  Ovation of the Seas
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#005EDC] font-proxima">
                  View 5 dates
                </span>
                <svg
                  className="w-3 h-3 text-[#005EDC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 8 13"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.368}
                    d="M1.25 11.5L6.25 6.5L1.25 1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* More Cruises Card */}
          <div className="bg-gradient-to-br from-white/20 via-black/20 to-black bg-[#005EDC] rounded-lg shadow-lg overflow-hidden text-white">
            <div className="p-8 h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-[31px] font-normal leading-[39px] mb-8 font-proxima">
                17 Itineraries in this category
              </h3>
              <div className="mt-auto flex items-center gap-2">
                <span className="text-sm font-bold font-proxima">View all</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 8 13"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.368}
                    d="M1.25 11.5L6.25 6.5L1.25 1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Short Getaway Deals Section */}
      <section className="py-16 px-4">
        <h2 className="text-[58px] font-normal uppercase leading-[70px] text-[#15264C] text-center mb-16 max-w-4xl mx-auto font-[K]">
          BEST SHORT GETAWAY DEALS TO YOUR FAVORITE DESTINATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Perfect Day Card */}
          <div className="relative rounded-lg overflow-hidden h-[439px]">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
            <div className="absolute w-full h-full bg-[url(../public/w1.svg)] bg-center bg-cover"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white text-center">
              <h3 className="text-[44px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                PERFECT DAY AT COCOCAY
              </h3>
              <p className="text-sm font-normal tracking-[2px] uppercase mb-2 font-proxima">
                STARTING FROM
              </p>
              <p className="text-[42px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                $299
              </p>
              <Link className="bg-[#F9C700] text-[#15264C] px-5 py-2 rounded text-sm font-normal tracking-[2px] uppercase font-proxima">
                Book Now
              </Link>
            </div>
          </div>

          {/* Caribbean Cruises Card */}
          <div className="relative rounded-lg overflow-hidden h-[439px]">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
            <div className="absolute w-full h-full bg-[url(../public/w2.svg)] bg-center bg-cover"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white text-center">
              <h3 className="text-[42px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                CARIBBEAN CRUISES
              </h3>
              <p className="text-sm font-normal tracking-[2px] uppercase mb-2 font-proxima">
                STARTING FROM
              </p>
              <p className="text-[42px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                $293
              </p>
              <Link className="bg-[#F9C700] text-[#15264C] px-5 py-2 rounded text-sm font-normal tracking-[2px] uppercase font-proxima">
                Book Now
              </Link>
            </div>
          </div>

          {/* Cancun & Cozumel Card */}
          <div className="relative rounded-lg overflow-hidden h-[439px]">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
            <div className="absolute w-full h-full bg-[url(../public/w3.svg)] bg-center bg-cover"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white text-center">
              <h3 className="text-[43px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                CANCUN & COZUMEL
              </h3>
              <p className="text-sm font-normal tracking-[2px] uppercase mb-2 font-proxima">
                STARTING FROM
              </p>
              <p className="text-[42px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                $313
              </p>
              <Link className="bg-[#F9C700] text-[#15264C] px-5 py-2 rounded text-sm font-normal tracking-[2px] uppercase font-proxima">
                Book Now
              </Link>
            </div>
          </div>

          {/* Ensenada Cruises Card */}
          <div className="relative rounded-lg overflow-hidden h-[439px]">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
            <div className="absolute w-full h-full bg-[url(../public/w4.svg)] bg-center bg-cover"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white text-center">
              <h3 className="text-[42px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                ENSENADA CRUISES
              </h3>
              <p className="text-sm font-normal tracking-[2px] uppercase mb-2 font-proxima">
                STARTING FROM
              </p>
              <p className="text-[42px] font-normal uppercase leading-[46px] mb-4 font-[K]">
                $200
              </p>
              <Link className="bg-[#F9C700] text-[#15264C] px-5 py-2 rounded text-sm font-normal tracking-[2px] uppercase font-proxima">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Perfect Short Getaway Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-[58px] font-normal uppercase leading-[70px] text-[#15264C] text-center mb-8 font-[K]">
          PLAN YOUR PERFECT SHORT GETAWAY
        </h2>
        <p className="text-lg text-[#4A4A4A] text-center max-w-4xl mx-auto mb-16 font-proxima">
          Our quick weekend getaway cruises are bar-raising adventures designed
          to change the way you vacation. For a slightly longer vacation, a 4 to
          5 night cruise provides an ideal balance of adventure and relaxation.
          Whether you're into action-packed thrills or beachside chill, you're
          just one click away from relaxation mode.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Get On Island Time */}
          <div>
            <div className="h-[278px] bg-[url(../public/w11.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              GET ON ISLAND TIME
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
                Caribbean vacation charm is the order of the day in The Bahamas, where you'll find
              pristine beaches and calypso beats down every street. And at the
              newly revamped Perfect Day at CocoCay, a Royal Caribbean® private
              destination, you're in for game changing ways to chill and
              record-breaking thrills, like the tallest water slide in the
              Caribbean. Soak up all the adventure on 2, 3 or 4-night cruise
              sailing from Miami Fort Lauderdale, or Port Canaveral (Orlando).
            </p>
          </div>

          {/* All Inclusive Pass */}
          <div>
            <div className="h-[278px] bg-[url(../public/12.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              ALL INCLUSIVE PASS TO PARADISE
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
              Beach days hit next level at the first of its kind Royal Beach
              Club℠ Paradise Island. Here, exclusive meets all-inclusive. From
              your first water taxi ride to your last drink at the swim up bar,
              each mouthwatering bite and everything in between, it's all
              complimentary with your day pass. Your ultimate beach day debuts
              in Nassau, Bahamas December 2025.
            </p>
          </div>

          {/* Marvels of Mexico */}
          <div>
            <div className="h-[278px] bg-[url(../public/13.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              MARVELS OF MEXICO
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
              Soak up Baja vibes in Catalina Island. Indulge in traditional Mexican flavors and spices in Ensenada, home of the fish taco. Or jump into the emerald waters of Cabo
              San Lucas. Travel back in time as you roam thousand-year-old Maya
              temples in Cozumel. Discover the laid-back port of La Paz, the capital of Baja
              California. There are plenty of weekend cruises sailing from San Diego, Los Angeles or Florida.
            </p>
          </div>
        </div>
      </section>


      {/* Wow Worthy Weekends Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[22px] font-normal tracking-[2px] uppercase text-[#15264C] mb-4 font-proxima">
              ALL THE FUN
            </p>
            <h2 className="text-[58px] font-normal uppercase leading-[70px] text-[#15264C] mb-8 font-[K]">
              WOW WORTHY WEEKENDS
            </h2>
            <p className="text-lg text-black leading-relaxed mb-8 font-proxima">
              Double down on daring and dial short escapes all the way up. The
              world's boldest ships are here to win the weekend — Oasis Class
              stunners Utopia℠ and Wonder of the Seas® come decked out with
              endless experiences for every vacationer. Amp up the adrenaline on
              the twisting, turning, shriek inducing waterslide trio The Perfect
              Storm℠. Catch the ultimate break on the FlowRider® surf
              simulator. Serve an epic ace on the pickleball courts and conquer
              the rock-climbing wall for a breathtaking view of the world as you
              wander. Feast on a smorgasbord for the senses, sampling
              crave-worthy bites for every appetite. A weekend this big only
              happens on ships this bold.
            </p>
          </div>
          <div className="h-[423px] bg-gray-300 rounded-lg"></div>
        </div>
      </section>

      {/* Three Different States Section */}
      <section className="border-t border-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[58px] font-normal uppercase leading-[70px] text-[#15264C] text-center mb-8 font-[K]">
            THREE DIFFERENT STATES. ONE STATE OF MIND
          </h2>
          <p className="text-lg text-[#4A4A4A] text-center max-w-5xl mx-auto mb-16 font-proxima">
            Weekend cruises are easy to grab and they sail from every coast.
            Visit the top weekend destinations conveniently with home ports
            across three states — sunny Florida, Lone Star-studded Texas and
            golden California.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Florida */}
            <div>
              <div className="h-[278px] bg-[url(../public/w21.svg)] bg-cover bg-center rounded-lg mb-6"></div>
              <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
                sunshine state sensations
              </h3>
              <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
                Four convenient home ports make Florida the undisputed cruising
                capital of the world. Depart from sultry Miami or tropical Fort Lauderdale. Venture to the Gulf Coast and sail from Tampa. Or blast off on a weekend cruise from Port Canaveral.
              </p>
            </div>

            {/* Texas */}
            <div>
              <div className="h-[278px] bg-[url(../public/w22.svg)] bg-cover bg-center rounded-lg mb-6"></div>
              <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
                IT'S BIGGER IN TEXAS
              </h3>
              <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
                Start your adventure with some good old-fashioned southern
                hospitality in Galveston, Texas. Don't miss the city's must-see landmark buildings and bustling
                Pleasure Pier. Then board your ship and sail on a short cruise
                getaway to the beautiful shores of Mexico and the western
                Caribbean.
              </p>
            </div>

            {/* California */}
            <div>
              <div className="h-[278px] bg-[url(../public/w23.svg)] bg-cover bg-center rounded-lg mb-6"></div>
              <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
                california dreaming
              </h3>
              <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
                Choose from either Los Angeles or San Diegoto get your ultimate weekend getaway started. You're in for
                incredible sights on picture-perfect west coast shores — from
                the Old-World Mediterranean charm of Catalina Island to Baja gem
                Ensenada, energetic Cabo San Lucas and marvelous La Paz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Weekend Getaway Awaits Section */}
      <section className="relative h-[718px] bg-gray-300 max-sm:hidden">
        <div className="absolute inset-0 bg-[url(../public/w31.svg)] bg-cover bg-center w-full h-full"></div>
        <div className="absolute inset-0 " style={{background: 'rgba(21, 38, 76, .5)'}}></div>
        <div className="absolute inset-0 shadow-inner shadow-black/35"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-[59px] font-normal uppercase leading-[77px] mb-8 font-[K]">
                YOUR WEEKEND GETAWAY AWAITS
              </h2>
              <p className="text-lg leading-relaxed font-proxima">
                There are so many ways to enjoy your next weekend cruise
                vacation with our Oasis Class favorites like Wonder and Utopia
                of the Seas℠ or family favorites like Freedom, Independence and
                Liberty of the Seas℠.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Ship Cards */}
              <div className="relative h-[498px] bg-cover bg-center bg-[url(../public/w12.svg)] rounded-lg overflow-hidden">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="text-[29px] font-normal uppercase leading-[30px] font-[K]">
                    UTOPIA OF THE SEAS
                  </p>
                </div>
              </div>

              <div className="relative h-[498px] bg-cover bg-center bg-[url(../public/w13.svg)] rounded-lg overflow-hidden">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="text-[29px] font-normal uppercase leading-[30px] font-[K]">
                    WONDER OF THE SEAS
                  </p>
                </div>
              </div>

              <div className="relative h-[498px] bg-cover bg-center bg-[url(../public/w14.svg)] rounded-lg overflow-hidden">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="text-[29px] font-normal uppercase leading-[30px] font-[K]">
                    FREEDOM OF THE SEAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Is A Day Unlike Any Other Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-[58px] font-normal uppercase leading-[70px] text-[#15264C] mb-8 font-[K]">
          THIS IS A DAY UNLIKE ANY OTHER
        </h2>

        <p className="text-lg text-[#4A4A4A] leading-relaxed mb-16 font-proxima">
          Take memories to the max on short cruises to{" "}
          <a href="#" className="text-[#005EDC]">
            Perfect Day at CocoCay
          </a>{" "}
          — our award-winning private destination in The Bahamas, where you can
          dial up the adventure with record-breaking ways to thrill and chill.
          Plus, savor craveworthy flavors and sip specialty cocktails onboard
          and ashore on your short cruise getaway.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Rest With The Best */}
          <div>
            <div className="h-[366px] bg-[url(../public/w41.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              REST WITH THE BEST
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
              Trade workday woes for vacay whoa. Dive into Oasis Lagoon, the
              Caribbean's largest freshwater pool. Beach hop at Chill Island®, South Beach, Harbor Beach, and more. Relax in a cabana at Coco Beach Club® with an ocean-front infinity pool and Overwater Cabanas.
            </p>
          </div>

          {/* Bolder Dares */}
          <div>
            <div className="h-[366px] bg-[url(../public/w42.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              BOLDER DARES, ZERO CARES
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
              Choose your own adventure by shore, sky or sea. Start at Thrill Waterpark® to conquer the tallest waterslide in the Caribbean. Then zoom
              across the island on 1,600 feet of adrenaline-pumping zip line.
              Even the little adventurers in your family can get in on the
              excitement at Splashaway Bay℠.
            </p>
          </div>

          {/* Unbeatable Eats */}
          <div>
            <div className="h-[366px] bg-[url(../public/w43.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              UNBEATABLE EATS
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
              Everyone can find mouthwatering favorites at all-you-can-eat Chill
              Grill or Skipper's Grill — plus easy bites like the famous Shack
              Burger Snack Shack. At Hideaway Beach℠, get your pizza fix at Slice of Paradise℠. And indulge in gourmet
              goodness at Coco Beach Club® where delectable flavors are elevated to the max.
            </p>
          </div>

          {/* Raise The Bar */}
          <div>
            <div className="h-[366px] bg-[url(../public/w44.svg)] bg-center bg-cover rounded-lg mb-6"></div>
            <h3 className="text-[22px] font-bold tracking-[2px] uppercase text-[#4A4A4A] mb-4 font-proxima">
              IT'S TIME TO RAISE THE BAR
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-proxima">
              Jam to live music and settle into a rope swing seat at Captain
              Jack's℠. Toast to wow-worthy break time at the floating tiki bar
              at South Beach. Or let loose with your crew at the ultimate adults-only beach
              bash with DJ beats at Hideaway Beach℠.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Go Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[22px] font-normal tracking-[2px] uppercase text-[#15264C] mb-4 font-proxima">
            WHAT TO KNOW
          </p>
          <h2 className="text-[57px] font-normal uppercase leading-[70px] text-[#15264C] mb-8 font-[K]">
            BEFORE YOU GO
          </h2>

          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8 font-proxima">
            No matter which coast you're on, you don't need a lot of days off to
            enjoy a short weekend getaway. Snag our best weekend deals
            and level up a quick vacation getaway like never before. From
            laid-back beachside lounging to adrenaline-amping thrills — do it
            all along the tropics' most sought-after shores.
          </p>

          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8 font-proxima">
            Unwind on Cabo's world-famous beaches. Swim with stingrays in the turquoise waters
            of The Bahamas. Or brave the biggest wave pool
            in the Caribbean at our private destination, Perfect Day at CocoCay.
            Whether you sail from L.A., San Diego, Miami, Fort Lauderdale, Tampa or Orlando , you have more ways than ever to pack big adventures into a short
            weekend getaway — onboard the best and boldest ships in the world.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {/* Blog Card 1 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <div className="h-[158px] bg-[url(../public/w51.svg)] bg-center bg-cover"></div>
            <div className="p-4">
              <h3 className="text-base font-bold text-[#4A4A4A] mb-2 leading-tight font-proxima">
                Wonderful Weekend Getaways
              </h3>
              <p className="text-xs text-[#4A4A4A] uppercase mb-4 font-proxima">
                June 2, 2025
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4 font-times">
                The most relaxing vacation during a perfect weekend getaway.
                Don't leave home again without these tips in your back pocket!
              </p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <div className="h-[158px] bg-[url(../public/w52.svg)] bg-center bg-cover"></div>
            <div className="p-4">
              <h3 className="text-base font-bold text-[#4A4A4A] mb-2 leading-tight font-proxima">
                Insider Tips for Hideaway Beach | Royal Caribbean Cruises
              </h3>
              <p className="text-xs text-[#4A4A4A] uppercase mb-4 font-proxima">
                May 23, 2025
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4 font-times">
                Everything you need to know about Hideaway Beach — the newest
                Adult-Only addition to Perfect Day at CocoCay in The…
              </p>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <div className="h-[158px] bg-[url(../public/w53.svg)] bg-center bg-cover"></div>
            <div className="p-4">
              <h3 className="text-base font-bold text-[#4A4A4A] mb-2 leading-tight font-proxima">
                Best Restaurants at Perfect Day At CocoCay
              </h3>
              <p className="text-xs text-[#4A4A4A] uppercase mb-4 font-proxima">
                May 22, 2025
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4 font-times">
                Explore all the restaurants on the Perfect Day at CocoCay island
                and discover all the complimentary dining venues that offers lo…
              </p>
            </div>
          </div>

          {/* Blog Card 4 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <div className="h-[158px] bg-[url(../public/w54.svg)] bg-center bg-cover"></div>
            <div className="p-4">
              <h3 className="text-base font-bold text-[#4A4A4A] mb-2 leading-tight font-proxima">
                Perfect Day at CocoCay Cabanas: Prices & Insider Tips | Royal…
              </h3>
              <p className="text-xs text-[#4A4A4A] uppercase mb-4 font-proxima">
                May 22, 2025
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4 font-times">
                Explore insider tips and cabana prices for your visit to Perfect
                Day at CocoCay. Make the most of your vacation with our
                essential…
              </p>
            </div>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="border-t border-gray-300 pt-16">
          <h2 className="text-[42px] font-normal uppercase leading-[53px] text-[#15264C] mb-8 font-[K]">
            EXPLORE MORE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link className="relative rounded-lg overflow-hidden h-[206px]">
              <div className="absolute inset-0 bg-[url(../public/w61.svg)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <h3 className="text-[43px] font-normal uppercase leading-[46px] font-[K]">
                  7 night caribbean cruises
                </h3>
              </div>
            </Link>

            <Link className="relative rounded-lg overflow-hidden h-[206px]">
              <div className="absolute inset-0 bg-[url(../public/w62.svg)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <h3 className="text-[44px] font-normal uppercase leading-[46px] font-[K]">
                  perfect day at cococay
                </h3>
              </div>
            </Link>

            <Link className="relative rounded-lg overflow-hidden h-[206px]">
              <div className="absolute inset-0 bg-[url(../public/w63.svg)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <h3 className="text-[43px] font-normal uppercase leading-[46px] font-[K]">
                  last minute cruise deals
                </h3>
              </div>
            </Link>

            <Link className="relative rounded-lg overflow-hidden h-[206px]">
              <div className="absolute inset-0 bg-[url(../public/w64.svg)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <h3 className="text-[42px] font-normal uppercase leading-[46px] font-[K]">
                  WEEK LONG CRUISES
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weekend;
