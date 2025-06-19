import React from "react";
import DestinationCard from "../Components/DestinationCard";
import DestinationSlider from "../Components/DestinationSlider";
import UltimateDestinationCard from "../Components/UltimateDestinationCard";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex justify-center items-center bg-[#CDCFD1] overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/dest1.svg)]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent opacity-40" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-white font-['PR'] text-[27px] tracking-[2px] uppercase mb-2">
            BEST VACATION
          </h2>
          <h1 className="text-white font-['K'] text-[83px] uppercase leading-[96px] max-w-[561px]">
            CRUISE DESTINATIONS
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-[77px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4 text-center">
          <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-4">
            This is Royal Caribbean
          </p>
          <h2 className="text-[#15264C] font-['K'] text-[58px] uppercase leading-[76.8px] mb-8 max-w-[743px] mx-auto">
            Explore More Than 300 Places to Visit
          </h2>

          {/* Navigation Section */}
          <section className="w-full py-[15px] bg-white">
            <div className="max-w-[1300px] mx-auto px-4">
              <nav className="flex flex-wrap justify-center gap-[30px] md:gap-[50px] lg:gap-[70px]">
                {[
                  "Caribbean & The Bahamas",
                  "Mexico",
                  "Alaska",
                  "Europe",
                  "Asia",
                  "South Pacific",
                  "North America",
                  "Specialty Cruises",
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={"/find-a-cruise"}
                    className="text-[#005EDC] font-['PR'] text-[14px] tracking-[2px] uppercase hover:underline"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </section>

          {/* Separator */}
          <div className="w-full max-w-[1523px] h-[1px] bg-[#CDCFD1] mx-auto my-8" />

          <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1521px] mx-auto">
            Cruises with Royal Caribbean® unlock some of the best and most
            iconic corners of the world. With us, there's no limit on adventure
            — whether you dream of island-hopping to beautiful beaches in the
            Caribbean and the South Pacific, exploring wild national parks in
            Alaska and northern Europe, soaking up ancient history and culture
            in the Mediterranean or immersing yourself in Asia's many exotic
            wonders. Choose from all kinds of globetrotting itineraries sailing
            to more than 300 awe-inspiring ports of call. No matter where you
            wander, you're in for a getaway unlike any other.
          </p>
        </div>
      </section>

      {/* Caribbean Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="mb-8">
            <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-2">
              CARIBBEAN & THE BAHAMAS
            </p>
            <h2 className="text-[#15264C] font-['K'] text-[58px] uppercase leading-[70.4px] mb-6">
              TROPIC LIKE IT'S HOT
            </h2>
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1465px]">
              If you're craving sun-kissed shores, nothing beats Caribbean
              cruises. Though best known for their beautiful beaches, Caribbean
              destinations offer much more than that — like bold cuisine,
              colorful colonial towns, and rich cultural traditions from all
              over the world.
            </p>
          </div>

          {/* Caribbean Destinations Grid */}
          <div className="w-full overflow-hidden">
            <DestinationSlider>
              <DestinationCard
                image={"../public/s11.jpg"}
                title="Caribbean"
                size="tall"
              />
              <div className="flex flex-col gap-[10px]">
                <DestinationCard
                  image={"../public/s12.avif"}
                  title="Bahamas"
                  size="wide"
                />
                <div className="flex gap-[10px]">
                  <DestinationCard
                    image={"../public/s13.avif"}
                    title="Bermuda"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s14.webp"}
                    title="Jamaica"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s15.avif"}
                    title="Puerto Rico"
                    size="small"
                  />
                </div>
              </div>
              <DestinationCard
                image={"../public/s16.webp"}
                title="Belize"
                size="tall"
              />
              <div className="flex flex-col gap-[10px]">
                <DestinationCard
                  image={"../public/s17.webp"}
                  title="Eastern Caribbean"
                  size="wide"
                />
                <div className="flex gap-[10px]">
                  <DestinationCard
                    image={"../public/s18.avif"}
                    title="Western Caribbean"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s19.jpg"}
                    title="Southern Caribbean"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s110.avif"}
                    title="Caribbean Ancient Ruins and Cities"
                    size="small"
                  />
                </div>
              </div>
              <DestinationCard
                title="Caribbean Rainforest and Parks"
                size="tall"
                image={"../public/s111.webp"}
              />
              <div className="flex flex-col gap-[10px]">
                <DestinationCard
                  title="Caribbean Beaches"
                  size="small"
                  image={"../public/s112.avif"}
                />
                <DestinationCard
                  title="Caribbean Wildlife Encounters"
                  size="small"
                  image={"../public/s113.avif"}
                />
              </div>
            </DestinationSlider>
          </div>
        </div>
      </section>

      {/* Ultimate Destinations Section */}
      <section className="w-full py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <h2 className="text-[#15264C] font-['K'] text-[57px] uppercase leading-[70.4px] mb-6">
            ULTIMATE DESTINATIONS BY ROYAL CARIBBEAN
          </h2>
          <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1509px] mb-12">
            Introducing a lineup of the world's best vacations with Ultimate
            Destinations℠ by Royal Caribbean — from record-breaking thrills to
            sun-soaked chill and your boldest beach days yet. Go for
            full-throttle family time at Perfect Day at CocoCay or the newly
            unveiled Perfect Day Mexico. Escape from it all at ultra-exclusive
            Royal Beach Destinations in Labadee and Lelepa — the first private
            cruise destination in the southern hemisphere. And if all-inclusive
            beach days are more your rhythm, kick back in style at Royal Beach
            Clubs in Cozumel and Paradise Island. The world's boldest adventures
            are calling your name.
          </p>

          {/* Ultimate Destinations Cards */}
          <div className="relative mb-12">
            <div className="w-full bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Vacation Financing */}
                <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/n1.svg)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <Link
                      to={"/find-a-cruise"}
                      className="bg-[#005EDC] border border-[#005EDC] rounded-[3px] px-[21px] py-[10px] hover:bg-[#004BB8] transition-colors"
                    >
                      <span className="text-white font-['PR'] text-[14px] tracking-[2px] uppercase leading-[16px]">
                        Explore More
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Find a Cruise */}
                <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/n2.svg)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <Link
                      to={"/find-a-cruise"}
                      className="bg-[#005EDC] border border-[#005EDC] rounded-[3px] px-[21px] py-[10px] hover:bg-[#004BB8] transition-colors"
                    >
                      <span className="text-white font-['PR'] text-[14px] tracking-[2px] uppercase leading-[16px]">
                        Explore More
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Last Minute Cruises */}
                <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/n3.svg)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <Link
                      to={"/find-a-cruise"}
                      className="bg-[#005EDC] border border-[#005EDC] rounded-[3px] px-[21px] py-[10px] hover:bg-[#004BB8] transition-colors"
                    >
                      <span className="text-white font-['PR'] text-[14px] tracking-[2px] uppercase leading-[16px]">
                        Explore More
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Weekend Getaways */}
                <div className="relative w-full h-[206px] rounded-[5px] overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center bg-[url(../public/n4.svg)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <Link
                      to={"/find-a-cruise"}
                      className="bg-[#005EDC] border border-[#005EDC] rounded-[3px] px-[21px] py-[10px] hover:bg-[#004BB8] transition-colors"
                    >
                      <span className="text-white font-['PR'] text-[14px] tracking-[2px] uppercase leading-[16px]">
                        Explore More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mexico Section */}
      <section className="w-full pb-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="mb-8">
            <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-2">
              MEXICO
            </p>
            <h2 className="text-[#15264C] font-['K'] text-[58px] uppercase leading-[70.4px] mb-6">
              MEMORY MAXING EAST TO WEST
            </h2>
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1518px]">
              From coast to coast, Mexico is packed with incredible landscapes,
              flavorful food, and rich, vibrant history. Head west to the
              Mexican Riviera to explore deserts, go wine tasting and kayak
              through epic rock formations. Or take on the Yucatán in the east
              and soak up the sun on some of the world's most beautiful beaches.
            </p>
          </div>

          <DestinationSlider>
            <DestinationCard
              image={"../public/s21.svg"}
              title="MEXICO"
              size="hero"
            />
            <DestinationCard
              image={"../public/s22.svg"}
              title="COZUMEL & CANCUN"
              size="hero"
            />
            <DestinationCard
              image={"../public/s23.svg"}
              title="Mexican Riviera"
              size="hero"
            />
          </DestinationSlider>
        </div>
      </section>

      {/* Alaska Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="mb-8">
            <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-2">
              ALASKA
            </p>
            <h2 className="text-[#15264C] font-['K'] text-[58px] uppercase leading-[70.4px] mb-6">
              DISCOVER THE LAST FRONTIER
            </h2>
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1488px]">
              A land of rugged mountains, coastal forests and diverse wildlife,
              Alaska is the ultimate cruise destination for intrepid explorers.
              Whether you're watching whales splash in the Pacific Ocean or
              gazing up at Hubbard Glacier, Alaska cruises are all about wild
              natural wonder.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <DestinationSlider>
              <DestinationCard
                image={"../public/s31.svg"}
                title="Alaska"
                size="tall"
              />
              <div className="flex flex-col gap-[10px]">
                <DestinationCard
                  image={"../public/s32.svg"}
                  title="Alaska Cruise Tours"
                  size="wide"
                />
                <div className="flex gap-[10px]">
                  <DestinationCard
                    image={"../public/s33.svg"}
                    title="Alaska Glacier"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s34.svg"}
                    title="Alaska Whale Watching and Wildlife"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s35.svg"}
                    title="Alaska Whale Watching and Wildlife"
                    size="small"
                  />
                </div>
              </div>
              <DestinationCard
                image={"../public/s35.svg"}
                title="Alaska National Parks"
                size="tall"
              />
            </DestinationSlider>
          </div>
        </div>
      </section>

      {/* Europe Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="mb-8">
            <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-2">
              EUROPE
            </p>
            <h2 className="text-[#15264C] font-['K'] text-[57px] uppercase leading-[70.4px] mb-6">
              HISTORICAL WONDERS AWAIT
            </h2>
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1494px]">
              Discover captivating natural beauty, rich history and culture on
              our European cruises — like Rome's ancient ruins, Russia's
              golden-domed churches and Norway's majestic fjords. With so many
              unique ports of call to explore, the opportunities to make
              memories are endless.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <DestinationSlider>
              <DestinationCard
                image={"../public/s41.avif"}
                title="Europe"
                size="tall"
              />
              <div className="flex flex-col gap-[10px]">
                <DestinationCard
                  image={"../public/s42.jpg"}
                  title="Mediterranean"
                  size="wide"
                />
                <div className="flex gap-[10px]">
                  <DestinationCard
                    title="Greece & the Greek Isles"
                    size="small"
                    image={"../public/s43.avif"}
                  />
                  <DestinationCard
                    image={"../public/s45.avif"}
                    title="Italy"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s44.webp"}
                    title="Croatia"
                    size="small"
                  />
                </div>
              </div>
              <DestinationCard
                image={"../public/s46.webp"}
                title="Spain, Portugal, and the Canary Islands"
                size="tall"
              />
              <div className="flex flex-col gap-[10px]">
                <DestinationCard
                  image={"../public/s47.webp"}
                  title="France"
                  size="wide"
                />
                <div className="flex gap-[10px]">
                  <DestinationCard
                    image={"../public/s48.avif"}
                    title="Baltic Sea and Scandinavia"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s49.avif"}
                    title="Norway"
                    size="small"
                  />
                  <DestinationCard
                    image={"../public/s410.jpg"}
                    title="British Isles"
                    size="small"
                  />
                </div>
              </div>
              <DestinationCard image={"../public/s411.webp"} title="Iceland" size="tall"  />
              <DestinationCard image={"../public/s412.webp"} title="Ireland" size="tall"  />
            </DestinationSlider>
          </div>
        </div>
      </section>

      {/* Asia Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="mb-8">
            <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-2">
              ASIA
            </p>
            <h2 className="text-[#15264C] font-['K'] text-[59px] uppercase leading-[70.4px] mb-6">
              GO ALL OUT IN THE FAR EAST
            </h2>
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1510px]">
              From its neon-lit cities to its secluded shrines, this region
              offers plenty of captivating culture and natural beauty. Set sail
              on an Asia cruise and see the Great Wall nestled among China's
              forested mountains, or kick back on one of Thailand's beautiful
              beaches.
            </p>
          </div>

          <DestinationSlider>
            <DestinationCard image={"../public/s51.svg"} title="ASIA" size="large" />
            <DestinationCard image={"../public/s52.svg"} title="THAILAND" size="large" />
            <DestinationCard image={"../public/s53.svg"} title="CHINA" size="large" />
            <DestinationCard image={"../public/s54.svg"} title="JAPAN" size="large" />
            <DestinationCard image={"../public/s55.webp"} title="Singapore" size="large" />
          </DestinationSlider>
        </div>
      </section>

      {/* South Pacific Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <h2 className="text-[#15264C] font-['K'] text-[42px] uppercase leading-[52.8px] mb-6">
            South Pacific
          </h2>
          <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1468px] mb-8">
            South Pacific cruises are the perfect way to embrace exotic island
            life. Dive with tropical fish in the Great Barrier Reef. Explore
            dramatic coastlines and emerald green jungles. And immerse yourself
            in the diverse cultures and untamed fauna that make each island so
            unique.
          </p>

          <DestinationSlider>
            <DestinationCard image={"../public/s61.svg"}  title="SOUTH PACIFIC CRUISES" size="large" />
            <DestinationCard image={"../public/s62.svg"}  title="AUSTRALIA" size="large" />
            <DestinationCard image={"../public/s63.svg"}  title="NEW ZEALAND" size="large" />
            <DestinationCard image={"../public/s64.svg"}  title="Vanautu & Fiji Cruises" size="large" />
          </DestinationSlider>
        </div>
      </section>

      {/* North America Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <h2 className="text-[#15264C] font-['K'] text-[42px] uppercase leading-[52.8px] mb-6">
            North America
          </h2>
          <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1499px] mb-8">
            From California's star-studded streets and Hawaii's idyllic islands,
            to the rugged coasts of Canada, New England and Nova Scotia, North
            America cruises unlock all kinds of unique ports across the
            continent and beyond.
          </p>

          <DestinationSlider>
            <DestinationCard image={"../public/s81.svg"} title="FLORIDA" size="large" />
            <DestinationCard image={"../public/s82.svg"} title="EAST COAST" size="large" />
            <DestinationCard image={"../public/s83.svg"} title="TEXAS" size="large" />
            <DestinationCard image={"../public/s84.svg"} title="CALIFORNIA" size="large" />
            <DestinationCard image={"../public/s85.webp"} title="CANADA" size="large" />
            <DestinationCard image={"../public/s86.avif"} title="NEW ENGLAND" size="large" />
            <DestinationCard image={"../public/s87.webp"} title="WEST COAST" size="large" />
            <DestinationCard image={"../public/s88.webp"} title="HAWAII" size="large" />
          </DestinationSlider>
        </div>
      </section>

      {/* Specialty Cruises Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <h2 className="text-[#15264C] font-['K'] text-[42px] uppercase leading-[52.8px] mb-6">
            SPECIALTY CRUISES SECTION
          </h2>
          <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1459px] mb-8">
            Transatlantic and transpacific sailings offer plenty of relaxing sea
            days and stops at must-visit cruise destinations. Go from colorful
            Caribbean towns to iconic European capitals, or explore bazaars,
            exotic isles and dense rainforests in regions like the Arabian Gulf,
            the South Pacific and Latin America.
          </p>

          <DestinationSlider>
            <DestinationCard image={"../public/s71.svg"}  title="ULTIMATE WORLD CRUISE" size="large" />
            <DestinationCard
            image={"../public/s72.svg"} 
              title="TRANSATLANTIC & TRANSPACIFIC"
              size="large"
            />
            <DestinationCard image={"../public/s73.svg"}  title="SOUTH AMERICA" size="large" />
            <DestinationCard image={"../public/s74.svg"}  title="ARABIAN GULF & NORTH AFRICA" size="large" />
            <DestinationCard image={"../public/s75.avif"}  title="PANAMA CANAL" size="large" />
          </DestinationSlider>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <p className="text-[#15264C] font-['PR'] text-[22px] tracking-[2px] uppercase mb-2">
            Discover More cruise destinations
          </p>
          <h2 className="text-[#15264C] font-['K'] text-[43px] uppercase leading-[52.8px] mb-6">
            SEE WHERE ELSE YOU CAN CRUISE TO
          </h2>
          <div className="mb-8">
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1485px] inline">
              Every destination has a unique story to tell — and with Royal
              Caribbean, getting there is part of the adventure. Not only are
              our ships filled with gamechanging ways to play and unwind — we
              offer{" "}
            </p>
            <span className="text-[#005EDC] font-['PR'] text-[18px] leading-[27px] hover:underline">
              unforgettable excursions
            </span>
            <p className="text-[#4A4A4A] font-['PR'] text-[18px] leading-[27px] max-w-[1513px] inline">
              {" "}
              that let you dive deeper into each destination's vibrant culture,
              natural wonders and local charm. Learn more about all the
              different regions we visit, each brimming with one-of-a-kind ports
              of call that cater to all kinds of travelers. Whether you're
              beach-hopping in the South Pacific, exploring ancient monasteries
              in Asia, scouting castles in Europe or cruising through
              glacier-dotted bays in Alaska — there's no bolder way to see the
              world.
            </p>
          </div>

          {/* Separator */}
          <div className="w-full max-w-[1523px] h-[1px] bg-[#CDCFD1] mx-auto my-12" />

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
      </section>
    </div>
  );
};

export default Destinations;
