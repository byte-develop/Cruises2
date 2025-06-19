import React from "react";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center bg-[url(../public/r1.svg)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-normal uppercase tracking-[2px] mb-4"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            STATEROOMS & SUITES
          </h2>
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-normal uppercase leading-tight"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            ALL FOR ONE AND ROOM FOR ALL
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-xl md:text-2xl font-normal uppercase tracking-[2px] text-blue-900 mb-4"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            Top-notch amenities
          </h2>
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-normal uppercase text-blue-900 leading-tight mb-8"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            Spacious Accommodations
          </h1>
          <p
            className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            Our staterooms are designed with every type of guest in mind.
            Whether you're sailing with your significant other, your family, a
            group of friends, or traveling solo — we've got the perfect room to
            accommodate your party and budget. Take your pick from Interior or
            Ocean View rooms, Balcony staterooms, or spacious Suites. You can
            even connect rooms allowing you to stay together with extended
            family or friends. The options are endless, and the comfort is
            always guaranteed.
          </p>
        </div>

        {/* Stateroom Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Interior Staterooms */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr1.svg)] rounded-t-lg"></div>
            <div className="p-6">
              <h3
                className="text-2xl font-normal text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Interior Staterooms
              </h3>
              <p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Our Interior staterooms include a wide array of amenities for
                your whole family to enjoy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-3"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <path
                      d="M2.0593 5.41016L2.0293 20.0202"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.4796 19.7891L1.63965 19.7991"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M1.64941 5.67969L6.22941 5.72969"
                      stroke="currentColor"
                    />
                    <path
                      d="M16.1299 20.1595V15.6895"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.5498 16.0293L5.58984 16.0393"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M5.80957 5.35938V16.3794"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Size:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 340 sq. ft.
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-7 text-gray-600 mr-3"
                    viewBox="0 0 25 28"
                    fill="none"
                  >
                    <path
                      d="M13.0281 7.91167C14.4702 7.91167 15.6392 6.74264 15.6392 5.30056C15.6392 3.85849 14.4702 2.68945 13.0281 2.68945C11.586 2.68945 10.417 3.85849 10.417 5.30056C10.417 6.74264 11.586 7.91167 13.0281 7.91167Z"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M7.69462 16.8556C7.69462 16.8556 6.90295 8.92507 11.8752 8.34174C15.9863 7.86952 16.8057 9.23063 16.8057 9.23063C16.8057 9.23063 18.3752 10.3556 18.3752 16.8417"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M10.0975 13.4531C10.0975 13.4531 9.50031 23.6753 12.667 25.5503C12.667 25.5503 16.5836 28.467 15.917 13.4531"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Occupancy:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 6 guests
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ocean View Staterooms */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr2.svg)] rounded-t-lg"></div>
            <div className="p-6">
              <h3
                className="text-2xl font-normal text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Ocean View Staterooms
              </h3>
              <p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Savor the seaside and snapshots of landscapes from shore to
                shore.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-3"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <path
                      d="M2.0593 5.41016L2.0293 20.0202"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.4796 19.7891L1.63965 19.7991"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M1.64941 5.67969L6.22941 5.72969"
                      stroke="currentColor"
                    />
                    <path
                      d="M16.1299 20.1595V15.6895"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.5498 16.0293L5.58984 16.0393"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M5.80957 5.35938V16.3794"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Size:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 354 sq. ft.
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-7 text-gray-600 mr-3"
                    viewBox="0 0 25 28"
                    fill="none"
                  >
                    <path
                      d="M13.0281 7.91167C14.4702 7.91167 15.6392 6.74264 15.6392 5.30056C15.6392 3.85849 14.4702 2.68945 13.0281 2.68945C11.586 2.68945 10.417 3.85849 10.417 5.30056C10.417 6.74264 11.586 7.91167 13.0281 7.91167Z"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M7.69462 16.8556C7.69462 16.8556 6.90295 8.92507 11.8752 8.34174C15.9863 7.86952 16.8057 9.23063 16.8057 9.23063C16.8057 9.23063 18.3752 10.3556 18.3752 16.8417"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M10.0975 13.4531C10.0975 13.4531 9.50031 23.6753 12.667 25.5503C12.667 25.5503 16.5836 28.467 15.917 13.4531"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Occupancy:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 8 guests
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Balcony Staterooms */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr3.svg)] rounded-t-lg"></div>
            <div className="p-6">
              <h3
                className="text-2xl font-normal text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Balcony Staterooms
              </h3>
              <p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Claim your slice of paradise with balcony views just outside
                your door.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-3"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <path
                      d="M2.0593 5.41016L2.0293 20.0202"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.4796 19.7891L1.63965 19.7991"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M1.64941 5.67969L6.22941 5.72969"
                      stroke="currentColor"
                    />
                    <path
                      d="M16.1299 20.1595V15.6895"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.5498 16.0293L5.58984 16.0393"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M5.80957 5.35938V16.3794"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Size:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 298 sq. ft.
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-7 text-gray-600 mr-3"
                    viewBox="0 0 25 28"
                    fill="none"
                  >
                    <path
                      d="M13.0281 7.91167C14.4702 7.91167 15.6392 6.74264 15.6392 5.30056C15.6392 3.85849 14.4702 2.68945 13.0281 2.68945C11.586 2.68945 10.417 3.85849 10.417 5.30056C10.417 6.74264 11.586 7.91167 13.0281 7.91167Z"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M7.69462 16.8556C7.69462 16.8556 6.90295 8.92507 11.8752 8.34174C15.9863 7.86952 16.8057 9.23063 16.8057 9.23063C16.8057 9.23063 18.3752 10.3556 18.3752 16.8417"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M10.0975 13.4531C10.0975 13.4531 9.50031 23.6753 12.667 25.5503C12.667 25.5503 16.5836 28.467 15.917 13.4531"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Occupancy:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 8 guests
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Suite Staterooms */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr4.svg)] rounded-t-lg"></div>
            <div className="p-6">
              <h3
                className="text-2xl font-normal text-gray-600 mb-4"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Suite Staterooms
              </h3>
              <p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Enjoy expansive accommodations that take luxury to the next
                level.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-3"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <path
                      d="M2.0593 5.41016L2.0293 20.0202"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.4796 19.7891L1.63965 19.7991"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M1.64941 5.67969L6.22941 5.72969"
                      stroke="currentColor"
                    />
                    <path
                      d="M16.1299 20.1595V15.6895"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M16.5498 16.0293L5.58984 16.0393"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                    <path
                      d="M5.80957 5.35938V16.3794"
                      stroke="currentColor"
                      strokeWidth="0.85"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Size:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 2766 sq. ft.
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-7 text-gray-600 mr-3"
                    viewBox="0 0 25 28"
                    fill="none"
                  >
                    <path
                      d="M13.0281 7.91167C14.4702 7.91167 15.6392 6.74264 15.6392 5.30056C15.6392 3.85849 14.4702 2.68945 13.0281 2.68945C11.586 2.68945 10.417 3.85849 10.417 5.30056C10.417 6.74264 11.586 7.91167 13.0281 7.91167Z"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M7.69462 16.8556C7.69462 16.8556 6.90295 8.92507 11.8752 8.34174C15.9863 7.86952 16.8057 9.23063 16.8057 9.23063C16.8057 9.23063 18.3752 10.3556 18.3752 16.8417"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                    <path
                      d="M10.0975 13.4531C10.0975 13.4531 9.50031 23.6753 12.667 25.5503C12.667 25.5503 16.5836 28.467 15.917 13.4531"
                      stroke="currentColor"
                      strokeWidth="1.04167"
                    />
                  </svg>
                  <span
                    className="text-sm font-bold text-gray-600 uppercase tracking-[2px]"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Occupancy:
                  </span>
                  <span
                    className="text-sm text-gray-600 uppercase tracking-[2px] ml-1"
                    style={{ fontFamily: "Proxima Nova, sans-serif" }}
                  >
                    Up to 9 guests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mb-20">
          <h2
            className="text-2xl font-bold text-gray-600 mb-8"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Dedicated stateroom attendant
              </p>
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Daily cleaning service
              </p>
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Exclusive bedding collection
              </p>
            </div>
            <div className="space-y-4">
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Stateroom climate control
              </p>
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Ample closet and storage
              </p>
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                In-room HD-TV
              </p>
            </div>
            <div className="space-y-4">
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                In-room safe for valuables
              </p>
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Hair dryer
              </p>
              <p
                className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
                style={{ fontFamily: "Proxima Nova, sans-serif" }}
              >
                Deluxe toiletries: shampoo, conditioner & body wash
              </p>
            </div>
          </div>
          <p
            className="text-sm font-normal text-gray-600 uppercase tracking-[2px] mt-8"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            AND MUCH MORE…
          </p>
        </div>

        {/* Upgrade Services Section */}
        <div className="mb-20">
          <h2
            className="text-2xl font-bold text-gray-600 mb-8"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            Upgrade: Valuable Services With Additional Charges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <p
              className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Enhanced room service
            </p>
            <p
              className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Voom High-Speed Wifi
            </p>
            <p
              className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Laundry & dry-cleaning
            </p>
            <p
              className="text-sm font-normal text-gray-600 uppercase tracking-[2px]"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Movies on-demand
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Suite Class Banner */}
      <section className="h-[621px] bg-cover bg-center bg-[url(../public/rrb.svg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Room to Unwind Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-normal uppercase text-blue-900 leading-tight mb-8"
            style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
          >
            ROOM TO UNWIND
          </h1>
          <p
            className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed"
            style={{ fontFamily: "Proxima Nova, sans-serif" }}
          >
            There's so much to do each day and night. But somewhere in between
            it all, you'll want to relax, unwind, and enjoy some "me time." When
            choosing your ideal cruise ship stateroom, first consider how much
            space you need, and which amenities are most important to you. We've
            broken it down to help you decide which stateroom fits your vacation
            needs.
          </p>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Family Staterooms */}
          <div>
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr11.svg)] rounded-lg mb-6"></div>
            <h3
              className="text-xl font-bold text-gray-600 uppercase tracking-[2px] mb-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              FAMILY STATEROOMS
            </h3>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              When traveling with your family, space is always on your mind. A
              cozy Interior Room is our most budget-friendly option, and we
              offer Spacious Interiors, along with connecting rooms to
              accommodate larger families. The range of ultra-spacious cruise
              rooms across categories spans all the way up to our new Ultimate
              Family Townhouse — three stories that elevate the way you stay and
              play.
            </p>
          </div>

          {/* Stateroom for Couples */}
          <div>
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr12.svg)]  rounded-lg mb-6"></div>
            <h3
              className="text-xl font-bold text-gray-600 uppercase tracking-[2px] mb-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              STATEROOM FOR COUPLES
            </h3>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              If you're planning a getaway for you and a special someone, we've
              got a range of cruise suites to serve as a romantic backdrop. A
              private balcony, luxurious bedding and in-suite dining are just a
              few of the upgraded amenities you'll enjoy. And if it's extra
              pampering you seek, be sure to save time for a relaxing service at{" "}
              <a href="#" className="text-blue-600 underline">
                Vitality Spa℠
              </a>
              .
            </p>
          </div>

          {/* Spacious Rooms for Groups */}
          <div>
            <div className="h-80 bg-cover bg-center bg-[url(../public/rr13.svg)] rounded-lg mb-6"></div>
            <h3
              className="text-xl font-bold text-gray-600 uppercase tracking-[2px] mb-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              SPACIOUS ROOMS FOR GROUPS
            </h3>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Looking for the perfect stateroom for you and your crew? When
              traveling with a group of friends, there are many options to
              choose from. Each category has options that offer maximum space to
              spread out. From Spacious Interior rooms to Ultra Spacious Ocean
              View rooms, to our top of the line Villa Suite with four bedrooms.
            </p>
          </div>
        </div>
      </section>

      {/* Accessible Staterooms Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-xl md:text-2xl font-normal uppercase tracking-[2px] text-blue-900 mb-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Accessible staterooms
            </h2>
            <h1
              className="text-3xl md:text-4xl font-normal uppercase text-blue-900 leading-tight mb-8"
              style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
            >
              OUR GUESTS ARE ALWAYS OUR PRIORITY
            </h1>
            <p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              All our ships have staterooms designed to accommodate guests with
              mobility disabilities and other disabilities that require the
              features of an accessible stateroom. Accessible staterooms range
              from 159 square feet to 298 square feet, and offer a five-foot
              turning radius in sleeping areas, plus bathrooms and sitting areas
              for easy maneuverability.
            </p>
            <a
              href="#"
              className="text-lg text-blue-600 hover:underline"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              EXPLORE ACCESSIBLE OPTIONS
            </a>
          </div>
          <div className="h-80 bg-cover bg-center bg-[url(../public/rr21.svg)] rounded-lg"></div>
        </div>
      </section>

      {/* Royal Up Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-80 bg-cover bg-center bg-[url(../public/rr22.svg)] rounded-lg"></div>
          <div>
            <h2
              className="text-xl md:text-2xl font-normal uppercase tracking-[2px] text-blue-900 mb-4"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Royal Up
            </h2>
            <h1
              className="text-3xl md:text-4xl font-normal uppercase text-blue-900 leading-tight mb-8"
              style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
            >
              BID YOUR WAY TO A CRUISE UPGRADE
            </h1>
            <p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              Scoring a fantastic upgrade is easy! Simply browse through
              stateroom options and select the amount you're willing to pay the
              upgrade. Then, you'll be notified via email if your bid was
              accepted. From Ocean View and Balcony staterooms to the most
              expansive suites at sea, the possibilities are endless.
            </p>
            <a
              href="#"
              className="text-lg text-blue-600 hover:underline"
              style={{ fontFamily: "Proxima Nova, sans-serif" }}
            >
              EXPLORE ROYAL UP
            </a>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1
          className="text-3xl md:text-4xl font-normal uppercase text-blue-900 leading-tight mb-12"
          style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
        >
          EXPLORE MORE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Royal Up */}
          <div className="relative h-52 bg-cover bg-center bg-[url(../public/rr31.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <h3
                className="text-3xl font-normal uppercase text-white leading-tight"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                ROYAL UP
              </h3>
            </div>
          </div>

          {/* Ultimate Family Suite */}
          <div className="relative h-52 bg-cover bg-center bg-[url(../public/rr32.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <h3
                className="text-3xl font-normal uppercase text-white leading-tight"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                ULTIMATE FAMILY SUITE
              </h3>
            </div>
          </div>

          {/* Royal Suite Class */}
          <div className="relative h-52 bg-cover bg-center bg-[url(../public/rr33.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <h3
                className="text-3xl font-normal uppercase text-white leading-tight"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                ROYAL SUITE CLASS
              </h3>
            </div>
          </div>

          {/* Deck Plans */}
          <div className="relative h-52 bg-cover bg-center bg-[url(../public/rr34.svg)] rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <h3
                className="text-3xl font-normal uppercase text-white leading-tight"
                style={{ fontFamily: "Kapra Neue Pro, sans-serif" }}
              >
                DECK PLANS
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
