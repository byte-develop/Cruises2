import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#203559] text-white">
      {/* Terms and Conditions Link */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex items-center h-[42px] border-b border-white/10">
          <p
            href="#"
            className="text-white text-sm font-normal leading-[16.8px] underline hover:no-underline"
            style={{
              fontFamily:
                "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            *Please see all applicable Terms &amp; Conditions for Promotions
            here.
          </p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] py-6">
        <div className="flex justify-center items-center gap-[70px] max-w-[630px] mx-auto">
          {/* Award Badge 1 */}
          <div className="flex justify-center items-center w-[152px] h-[52px]">
            <img src="../public/f1.svg" alt="" />
          </div>

          {/* Award Badge 2 */}
          <div className="flex justify-center items-center w-[152px] h-[52px]">
            <img src="../public/f2.svg" alt="" />
          </div>

          {/* Award Badge 3 */}
          <div className="flex justify-center items-center w-[186px] h-[52px]">
            <img src="../public/f3.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Find a Cruise Column */}
          <div>
            <h3
              className="text-white text-lg font-normal leading-[21.6px] tracking-[2px] uppercase mb-6"
              style={{
                fontFamily:
                  "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Find a Cruise
            </h3>
            <div className="space-y-1">
              {[
                "Last Minute Cruises",
                "Weekend Cruises",
                "Black Friday & Cyber Monday",
                "Holiday Cruises",
                "2025-2026 Cruises",
                "Cruising Guides",
                "Largest Cruise Ships",
                "Family Vacations",
                "Cruise Ports Near Me",
                "Royal Weddings",
                "Themed Cruises",
                "Group Travel",
                "Accessibility Onboard",
                "View Brochures",
                "Meetings, Incentives & Charters",
                "Certified Vacation Planner",
                "Locate a Travel Advisor",
                "Royal Caribbean Blog",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white text-sm font-normal leading-[31px] hover:underline"
                  style={{
                    fontFamily:
                      "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations Column */}
          <div>
            <h3
              className="text-white text-lg font-normal leading-[21.6px] tracking-[2px] uppercase mb-6"
              style={{
                fontFamily:
                  "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Destinations
            </h3>
            <div className="space-y-1">
              {[
                "Perfect Day at CocoCay",
                "Royal Destinations",
                "Caribbean Cruises",
                "Bahamas Cruises",
                "Alaska Cruises",
                "Mediterranean Cruises",
                "European Cruises",
                "Hawaii Cruises",
                "Greece & Greek Isles",
                "Mexico Cruises",
                "Bermuda Cruises",
                "New England Cruises",
                "Italy Cruises",
                "Baltic Cruises",
                "Canada Cruises",
                "Asia Cruises",
                "Florida Cruises",
                "Texas Cruises",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white text-sm font-normal leading-[31px] hover:underline"
                  style={{
                    fontFamily:
                      "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Ports Column */}
          <div>
            <h3
              className="text-white text-lg font-normal leading-[21.6px] tracking-[2px] uppercase mb-6"
              style={{
                fontFamily:
                  "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Popular Ports
            </h3>
            <div className="space-y-1">
              {[
                "Miami, Florida",
                "Galveston, Texas",
                "New York, New York",
                "Baltimore, Maryland",
                "Orlando, Florida",
                "Tampa, Florida",
                "Fort Lauderdale, Florida",
                "New Orleans, Louisiana",
                "San Juan, Puerto Rico",
                "Boston, Massachusetts",
                "Los Angeles, California",
                "Barcelona, Spain",
                "Singapore, Singapore",
                "Seattle, Washington",
                "Rome, Italy",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white text-sm font-normal leading-[31px] hover:underline"
                  style={{
                    fontFamily:
                      "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Plan A Cruise Column */}
          <div>
            <h3
              className="text-white text-lg font-normal leading-[21.6px] tracking-[2px] uppercase mb-6"
              style={{
                fontFamily:
                  "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Plan A Cruise
            </h3>
            <div className="space-y-1">
              {[
                "Update Guest Information",
                "Make a Payment",
                "Redeem Cruise Credit",
                "Cruise Planner",
                "Book a Flight",
                "Book a Hotel",
                "Crown & Anchor Society",
                "Contact Us",
                "Transportation",
                "Travel Protection",
                "Required Travel Documents",
                "Royal Gifts",
                "Gift Cards",
                "Royal Caribbean Visa Signature® Card",
                "CruisingPower.com",
                "Royal Caribbean App",
                "Do Not Sell/Share My Personal Information",
                "Cookie Preferences",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white text-sm font-normal leading-[31px] hover:underline"
                  style={{
                    fontFamily:
                      "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center py-4">
        <p
          className="text-white text-sm font-normal leading-[16.8px]"
          style={{
            fontFamily:
              "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          © 2025 Royal Caribbean International
        </p>
      </div>

      {/* Legal Links */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex flex-wrap justify-center items-center gap-2 py-4">
          {[
            "Cruise Contract",
            "About Us",
            "Privacy",
            "Terms of Use",
            "Careers",
            "Modern Slavery Statement",
            "Safety & Security",
            "Bill of Rights",
            "Travel Updates",
            "Press Room",
            "Unsolicited Ideas Policy",
          ].map((item, index) => (
            <React.Fragment key={index}>
              <a
                href="#"
                className="text-white text-sm font-normal leading-[16.8px] text-center hover:underline px-4"
                style={{
                  fontFamily:
                    "Proxima Nova, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                {item}
              </a>
              {index < 10 && <div className="w-px h-4 bg-white/40"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Company Brands Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] py-12">
          {/* Top Border Lines */}
          <div className="flex justify-center mb-8">
            <div className="w-[739px] h-px bg-white/40"></div>
          </div>

          {/* Royal Caribbean Group Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-[245px] h-[100px] flex items-center justify-center">
              <img src="../public/rcg.svg" alt="" />
            </div>
          </div>

          {/* Bottom Border Lines */}
          <div className="flex justify-center mb-8">
            <div className="w-[739px] h-px bg-white/40"></div>
          </div>

          {/* Brand Logos */}
          <div className="flex justify-center items-center gap-8">
            {/* Royal Caribbean Logo */}
            <div className="w-[179px] h-[72px] flex items-center justify-center">
              <img src="../public/logo1.svg" alt="" />
            </div>

            {/* Celebrity Cruises Logo */}
            <div className="w-[206px] h-[72px] flex items-center justify-center">
              <img src="../public/logo2.svg" alt="" />

            </div>

            {/* Silversea Logo */}
            <div className="w-[206px] h-[72px] flex items-center justify-center">
              <img src="../public/logo3.svg" alt="" />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
