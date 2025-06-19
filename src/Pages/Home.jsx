import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-[400px] md:h-[650px] relative overflow-hidden">
        <video
          src="/homeVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        {/* Контент поверх видео */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="w-full max-w-[95vw] md:w-[1300px] flex flex-col items-center md:items-start px-4">
            <img
              src="../public/beat.png"
              className="w-[220px] md:w-[650px] mb-2"
              alt=""
            />
            <p className="uppercase font-[PB] text-white text-[16px] md:text-[22px]">
              Up to $800 off
            </p>
            <p className="uppercase font-[PB] text-white text-[16px] md:text-[22px]">
              + Save an additional $50 on South Florida getaway sailings
            </p>
            <Link
              to={"/find-a-cruise"}
              className="flex items-center justify-center mt-4 md:mt-[30px] w-[140px] md:w-[155px] h-[38px] md:h-[40px] rounded-[3px] bg-[#FDBB11] text-[13px] md:text-[14px] text-[#002859] uppercase"
            >
              Shop Now
            </Link>

            {/* Search Widget */}
            <div className="max-sm:translate-y-[80%] absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 w-[98vw] max-w-[98vw] md:w-[1100px] h-auto md:h-[108px] bg-gray-100 p-2 md:p-[20px] rounded shadow-lg ">
              <div className="flex flex-col md:flex-row h-full items-center">
                {/* Cruising to */}
                <div className="flex-1 px-2 py-2 md:px-5 md:py-5 w-full">
                  <label
                    className="block text-black font-bold text-sm md:text-base mb-1 md:mb-2"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Cruising to
                  </label>
                  <div className="relative">
                    <button className="w-full bg-white border border-gray-200 rounded px-3 py-2 md:px-4 md:py-3 text-left text-blue-600 font-bold flex items-center justify-between">
                      <span>Anywhere</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Leaving from */}
                <div className="flex-1 px-2 py-2 md:px-5 md:py-5 w-full">
                  <label
                    className="block text-black font-bold text-sm md:text-base mb-1 md:mb-2"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Leaving from
                  </label>
                  <div className="relative">
                    <button className="w-full bg-white border border-gray-200 rounded px-3 py-2 md:px-4 md:py-3 text-left text-blue-600 font-bold flex items-center justify-between">
                      <span>Any port</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Leaving on */}
                <div className="flex-1 px-2 py-2 md:px-5 md:py-5 w-full">
                  <label
                    className="block text-black font-bold text-sm md:text-base mb-1 md:mb-2"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Leaving on
                  </label>
                  <div className="relative">
                    <button className="w-full bg-white border border-gray-200 rounded px-3 py-2 md:px-4 md:py-3 text-left text-blue-600 font-bold flex items-center justify-between">
                      <span>Any date</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Search Button */}
                <div className="flex items-center px-2 py-2 md:px-5 w-full md:w-auto">
                  <button
                    className="bg-blue-600 text-white w-full md:w-auto px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-blue-700 transition-colors"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Search cruises
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Deals Section */}
      <section className="py-16 px-4 md:px-8 w-[100vw] flex justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Weekend Getaways */}
          <div className="relative bg-cover bg-center bg-[url(../public/h1.svg)] rounded-lg overflow-hidden group cursor-pointer w-[365px] h-[365px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute h-full w-full text-white flex flex-col items-center justify-center">
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                PERFECT DAY AT COCOCAY
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                WEEKEND GETAWAYS
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $299
              </p>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded text-sm uppercase tracking-[2px] font-normal">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Caribbean Cruises */}
          <div className="relative bg-cover bg-center bg-[url(../public/h2.svg)] rounded-lg overflow-hidden group cursor-pointer w-[365px] h-[365px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute h-full w-full text-white flex flex-col items-center justify-center">
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                7 NIGHT
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                CARIBBEAN CRUISES
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $549
              </p>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded text-sm uppercase tracking-[2px] font-normal">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Cruises from California */}
          <div className="relative bg-cover bg-center bg-[url(../public/h3.svg)] rounded-lg overflow-hidden group cursor-pointer w-[365px] h-[365px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute h-full w-full text-white flex flex-col items-center justify-center">
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                CRUISES FROM
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                california
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $246
              </p>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded text-sm uppercase tracking-[2px] font-normal">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Cruises from Texas */}
          <div className="relative bg-cover bg-center bg-[url(../public/h4.svg)] rounded-lg overflow-hidden group cursor-pointer w-[365px] h-[365px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute h-full w-full text-white flex flex-col items-center justify-center">
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                CRUISES FROM
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                TEXAS
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $458
              </p>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded text-sm uppercase tracking-[2px] font-normal">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newest Ships Section */}
      <section className="relative h-[718px] bg-cover bg-center bg-[url(../public/hb.svg)] overflow-hidden max-sm:hidden">
        <div className="absolute inset-0 shadow-[inset_0_0_144px_72px_rgba(0,0,0,0.35)]"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="flex justify-center mx-auto px-4 w-full">
            <div className="flex items-center gap-8">
              {/* Left Side - Text Content */}
              <div className="text-white h-[330px] min-w-[350px]">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase leading-tight mb-8"
                  style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
                >
                  NEWEST. BOLDEST.
                  <br />
                  BEST.
                </h1>
                <p
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: "Proxima Nova, sans-serif" }}
                >
                  There are so many ways to conquer your
                  <br />
                  bucket list while we await the arrival of the
                  <br />
                  next Icon Class ship, Legend of the Seas℠.
                  <br />
                  From the game changing Oasis Class to the
                  <br />
                  Icon of Vacations℠, explore our newest, best
                  <br />
                  ships.
                </p>
              </div>

              {/* Right Side - Ships Grid */}
              <div className="flex items-center gap-3">
                {/* Ship Cards */}
                <div className="relative bg-cover bg-center bg-[url(../public/ss1.svg)] rounded-lg overflow-hidden min-w-[280px] h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 text-white text-center w-full flex items-center flex-col">
                    <h3 className="text-lg font-normal uppercase leading-tight mb-1 font-[K] text-[30px]">
                      STAR OF THE SEAS
                    </h3>
                    <p className="text-sm">PORT CANAVERAL</p>
                  </div>
                </div>

                <div className="relative bg-cover bg-center bg-[url(../public/ss2.svg)] rounded-lg overflow-hidden min-w-[280px] h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 text-white text-center w-full flex items-center flex-col">
                    <h3 className="text-lg font-normal uppercase leading-tight mb-1 font-[K] text-[30px]">
                      WONDER OF THE SEAS
                    </h3>
                    <p className="text-sm">MIAMI</p>
                  </div>
                </div>

                <div className="relative bg-cover bg-center bg-[url(../public/ss3.svg)] rounded-lg overflow-hidden min-w-[280px] h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 text-white text-center w-full flex items-center flex-col">
                    <h3 className="text-lg font-normal uppercase leading-tight mb-1 font-[K] text-[30px]">
                      LEGEND OF THE SEAS
                    </h3>
                    <p className="text-sm">FORT LAUDERDALE</p>
                  </div>
                </div>

                <div className="relative bg-cover bg-center bg-[url(../public/ss4.svg)] rounded-lg overflow-hidden min-w-[280px] h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 text-white text-center w-full flex items-center flex-col">
                    <h3 className="text-lg font-normal uppercase leading-tight mb-1 font-[K] text-[30px]">
                      UTOPIA OF THE SEAS
                    </h3>
                    <p className="text-sm">PORT CANAVERAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Up to $800 Off Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-normal uppercase text-blue-900 leading-tight mb-4"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            UP TO $800 OFF
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            Plus save an additional $50 on South Florida getaway sailings
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              className="text-blue-600 border-b-2 border-blue-600 pb-4 px-1 text-base font-bold"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Weekend Getaways
            </button>
            <button
              className="text-gray-400 pb-4 px-1 text-base font-bold hover:text-gray-600"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Sail from San Diego
            </button>
            <button
              className="text-gray-400 pb-4 px-1 text-base font-bold hover:text-gray-600"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Sail from LA
            </button>
            <button
              className="text-gray-400 pb-4 px-1 text-base font-bold hover:text-gray-600"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Sail from Florida
            </button>
            <button
              className="text-gray-400 pb-4 px-1 text-base font-bold hover:text-gray-600"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Sail to Europe
            </button>
            <button
              className="text-gray-400 pb-4 px-1 text-base font-bold hover:text-gray-600"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Sail to Alaska
            </button>
          </nav>
        </div>

        {/* Cruise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Cruise Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-44 bg-gray-200"></div>
            <div className="p-6">
              <h3
                className="text-xl font-bold text-blue-900 mb-4 leading-tight"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                4 Night Eastern Caribbean Cruise
              </h3>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Times New Roman, sans-serif" }}
              >
                Starting from*
              </p>
              <p
                className="text-2xl font-bold text-blue-900 mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                $293/person
              </p>
              <p
                className="text-xs text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Taxes & fees included*
              </p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Miami, Florida
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Freedom of the Seas
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-sm font-bold text-blue-600"
                  style={{ fontFamily: "Proxima Nova, sans-serif" }}
                >
                  View 29 dates
                </span>
                <svg
                  className="w-3 h-3 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Additional cruise cards would follow the same pattern */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-44 bg-gray-200"></div>
            <div className="p-6">
              <h3
                className="text-xl font-bold text-blue-900 mb-4 leading-tight"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                2 Night Perfect Day Getaway Cruise
              </h3>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Times New Roman, sans-serif" }}
              >
                Starting from*
              </p>
              <p
                className="text-2xl font-bold text-blue-900 mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                $299/person
              </p>
              <p
                className="text-xs text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Taxes & fees included*
              </p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fort Lauderdale, Florida
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Oasis of the Seas
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-sm font-bold text-blue-600"
                  style={{ fontFamily: "Proxima Nova, sans-serif" }}
                >
                  View 2 dates
                </span>
                <svg
                  className="w-3 h-3 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* More cruise cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-44 bg-gray-200"></div>
            <div className="p-6">
              <h3
                className="text-xl font-bold text-blue-900 mb-4 leading-tight"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                3 Night Bahamas & Perfect Day Cruise
              </h3>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Times New Roman, sans-serif" }}
              >
                Starting from*
              </p>
              <p
                className="text-2xl font-bold text-blue-900 mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                $303/person
              </p>
              <p
                className="text-xs text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Taxes & fees included*
              </p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fort Lauderdale, Florida
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Liberty of the Seas
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-sm font-bold text-blue-600"
                  style={{ fontFamily: "Proxima Nova, sans-serif" }}
                >
                  View 23 dates
                </span>
                <svg
                  className="w-3 h-3 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-44 bg-gray-200"></div>
            <div className="p-6">
              <h3
                className="text-xl font-bold text-blue-900 mb-4 leading-tight"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                3 Night Bahamas & Perfect Day Cruise
              </h3>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Times New Roman, sans-serif" }}
              >
                Starting from*
              </p>
              <p
                className="text-2xl font-bold text-blue-900 mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                $309/person
              </p>
              <p
                className="text-xs text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Taxes & fees included*
              </p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Miami, Florida
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Independence of the Seas
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-sm font-bold text-blue-600"
                  style={{ fontFamily: "Proxima Nova, sans-serif" }}
                >
                  View 1 date
                </span>
                <svg
                  className="w-3 h-3 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* View All Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg overflow-hidden text-white p-6 flex flex-col justify-center items-center text-center">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              113 Itineraries in this category
            </h3>
            <div className="mt-auto flex items-center">
              <span
                className="text-sm font-bold mr-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                View all
              </span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Ports Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-blue-900 leading-tight mb-8"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            POPULAR PORTS
          </h1>
          <p
            className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            You don't have to travel far for an incredible vacation. Cruise from
            a port near you to top-rated vacation destinations in the tropics
            and beyond. No matter where in the world you're sailing from, you'll
            find plenty of deals on epic itineraries sailing right from your
            backyard.
          </p>
        </div>

        {/* Popular Ports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* West Coast */}
          <div className="relative h-[752px] bg-cover bg-center bg-[url(../public/pp1.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute text-white text-center w-full h-full flex items-center justify-center flex-col">
              <p
                className="text-xl uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                CRUISES FROM
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                WEST COAST
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $246
              </p>
            </div>
          </div>

          {/* Florida */}
          <div className="relative h-[752px] bg-cover bg-center bg-[url(../public/pp2.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute text-white text-center w-full h-full flex items-center justify-center flex-col">
              <p
                className="text-xl uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                CRUISES FROM
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                FLORIDA
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $157
              </p>
            </div>
          </div>

          {/* Texas */}
          <div className="relative h-[752px] bg-cover bg-center bg-[url(../public/pp3.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute text-white text-center w-full h-full flex items-center justify-center flex-col">
              <p
                className="text-xl uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                CRUISES FROM
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                TEXAS
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $458
              </p>
            </div>
          </div>

          {/* Cape Liberty */}
          <div className="relative h-[752px] bg-cover bg-center bg-[url(../public/pp4.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute text-white text-center w-full h-full flex items-center justify-center flex-col">
              <p
                className="text-xl uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                CRUISES FROM
              </p>
              <h3
                className="text-3xl font-normal uppercase leading-tight mb-4"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                CAPE LIBERTY
              </h3>
              <p
                className="text-sm uppercase tracking-[2px] mb-2"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                STARTING FROM
              </p>
              <p
                className="text-4xl font-normal"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                $538
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Take Adventure Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-blue-900 leading-tight mb-8"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            TAKE ADVENTURE TO NEW HEIGHTS
          </h1>
          <p
            className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            Everyone deserves a vacation. You'll find endless opportunities to
            make the most of every moment — like game-changing activities,
            world-class dining, show-stopping entertainment, and plenty of ways
            to unwind in the sun
          </p>
        </div>

        {/* Destinations Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Caribbean - Large */}
          <div className="relative md:row-span-2 h-[498px] bg-cover bg-center bg-[url(../public/t1.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-2xl font-[K] uppercase">CARIBBEAN</h3>
            </div>
          </div>

          {/* Alaska - Large */}
          <div className="relative md:col-span-2 h-[244px]  bg-cover bg-center bg-[url(../public/t2.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-2xl font-[K] uppercase">ALASKA</h3>
            </div>
          </div>

          {/* Bahamas */}
          <div className="relative h-[244px]  bg-cover bg-center bg-[url(../public/t3.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-2xl font-[K]  uppercase">BAHAMAS</h3>
            </div>
          </div>

          {/* Mexico */}
          <div className="relative h-[244px]  bg-cover bg-center bg-[url(../public/t4.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-2xl font-[K]  uppercase">MEXICO</h3>
            </div>
          </div>

          {/* Southern Caribbean - Large */}
          <div className="relative md:col-span-2 h-[244px]  bg-cover bg-center bg-[url(../public/t5.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-2xl font-[K]  uppercase">
                SOUTHERN CARIBBEAN
              </h3>
            </div>
          </div>

          {/* Alaska Whale Watching */}
          <div className="relative h-[244px]  bg-cover bg-center bg-[url(../public/t6.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-xl font-[K] uppercase leading-tight">
                ALASKA WHALE WATCHING & WILDLIFE
              </h3>
            </div>
          </div>

          {/* Europe */}
          <div className="relative h-[244px]  bg-cover bg-center bg-[url(../public/t7.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute w-full h-full text-white flex items-center justify-center">
              <h3 className="text-2xl font-[K]  uppercase">EUROPE</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <h2
              className="text-xl uppercase tracking-[2px] text-blue-900 mr-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              THE MOST EXCITING CRUISE DESTINATIONS
            </h2>
          </div>
          <h1
            className="text-4xl md:text-5xl font-normal uppercase text-blue-900 leading-tight mb-8"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            AND AWARD-WINNING SHIPS
          </h1>
        </div>

        <div
          className="prose max-w-none text-gray-600 leading-relaxed space-y-6"
          style={{ fontFamily: "Proxima Nova, sans-serif" }}
        >
          <p>
            Unlock some of the most incredible{" "}
            <a href="#" className="text-blue-600 hover:underline">
              travel destinations
            </a>
            . Get on island time and unwind on some of the best beaches in the
            world, venture deep into the rainforests, and snorkel the most
            vibrant reefs on a Caribbean or{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Bahamas cruise getaway
            </a>{" "}
            with the whole family.
          </p>

          <p>
            Earn your wilderness badge as you cruise between the Alaska
            glaciers, pan for gold in prospecting towns, and trek across the
            rugged tundra on an{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Alaska vacation
            </a>
            . And savor a burst of flavors throughout culture-rich ports in the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Mediterranean
            </a>
            , the British Isles, Scandinavia and beyond on an unforgettable{" "}
            <a href="#" className="text-blue-600 hover:underline">
              cruise through Europe
            </a>
            . No matter where in the world you choose to wander, cruises can
            take you deep into top-rated cruise ports and off-the-beaten-path
            gems, so you can experience each one like a local.
          </p>

          <p>
            It all starts with the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              boldest cruise ships
            </a>{" "}
            at sea — and ours have won awards for everything from world class
            dining and spectacular entertainment, to record-setting onboard
            thrills and groundbreaking innovation. Whether you're traveling solo
            or vacationing with the whole extended family, you'll have all kinds
            of ahh-inducing{" "}
            <a href="#" className="text-blue-600 hover:underline">
              cruise rooms
            </a>{" "}
            to choose from, like affordable connecting staterooms that are
            perfect for groups, romantic rooms for couples craving rejuvenation
            and relaxation, and even a thrill-filled Ultimate Family Suite with
            a private game room and in-suite slide.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
