import React, { useState } from "react";
import ShipCard from "../Components/ShipCard";
import FilterButton from "../Components/FilterButton";

const Plans = () => {
  const [activeFilter, setActiveFilter] = useState("ALL SHIPS");

  // Updated: Each ship can belong to multiple classes
  const ships = [
    { name: "ADVENTURE OF THE SEAS", image: "../public/p1.svg", classes: [] },
    { name: "ALLURE OF THE SEAS", image: "../public/p2.svg", classes: ["OASIS CLASS"] },
    { name: "ANTHEM OF THE SEAS", image: "../public/p3.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "BRILLIANCE OF THE SEAS", image: "../public/p4.svg", classes: [] },
    { name: "ENCHANTMENT OF THE SEAS", image: "../public/p5.svg", classes: [] },
    { name: "EXPLORER OF THE SEAS", image: "../public/p6.svg", classes: [] },
    { name: "FREEDOM OF THE SEAS", image: "../public/p7.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "GRANDEUR OF THE SEAS", image: "../public/p8.svg", classes: [] },
    { name: "HARMONY OF THE SEAS", image: "../public/p9.svg", classes: ["OASIS CLASS"] },
    { name: "ICON OF THE SEAS", image: "../public/p10.svg", classes: ["ICON CLASS"] },
    { name: "INDEPENDENCE OF THE SEAS", image: "../public/p11.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "JEWEL OF THE SEAS", image: "../public/p12.svg", classes: [] },
    { name: "LEGEND OF THE SEAS", image: "../public/p13.svg", classes: ["ICON CLASS"] },
    { name: "LIBERTY OF THE SEAS", image: "../public/p14.svg", classes: [] },
    { name: "MARINER OF THE SEAS", image: "../public/p15.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "NAVIGATOR OF THE SEAS", image: "../public/p16.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "OASIS OF THE SEAS", image: "../public/p17.svg", classes: ["OASIS CLASS"] },
    { name: "ODYSSEY OF THE SEAS", image: "../public/p18.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "OVATION OF THE SEAS", image: "../public/p19.svg", classes: [] },
    { name: "QUANTUM OF THE SEAS", image: "../public/p20.svg", classes: [] },
    { name: "RADIANCE OF THE SEAS", image: "../public/p21.svg", classes: [] },
    { name: "RHAPSODY OF THE SEAS", image: "../public/p22.svg", classes: [] },
    { name: "SERENADE OF THE SEAS", image: "../public/p23.svg", classes: [] },
    { name: "SPECTRUM OF THE SEAS", image: "../public/p24.svg", classes: [] },
    { name: "STAR OF THE SEAS", image: "../public/p25.svg", classes: ["ICON CLASS"] },
    { name: "SYMPHONY OF THE SEAS", image: "../public/p26.svg", classes: ["OASIS CLASS"] },
    { name: "UTOPIA OF THE SEAS", image: "../public/p27.svg", classes: ["OASIS CLASS"] },
    { name: "VISION OF THE SEAS", image: "../public/p28.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "VOYAGER OF THE SEAS", image: "../public/p293.svg", classes: ["ROYAL AMPLIFIED"] },
    { name: "WONDER OF THE SEAS", image: "../public/p30.svg", classes: ["OASIS CLASS"] },
  ];

  // This makes sure "ALL SHIPS" shows all, but filter by class for others
  const filterOptions = [
    "ALL SHIPS",
    "ICON CLASS",
    "OASIS CLASS",
    "ROYAL AMPLIFIED",
  ];

  const filteredShips =
    activeFilter === "ALL SHIPS"
      ? ships
      : ships.filter((ship) => ship.classes.includes(activeFilter));

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700"
            style={{
              backgroundImage:
                "url('../public/p111.svg",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-36" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="text-center">
            <h2 className="font-['PR'] font-light text-[20px] md:text-[29px] leading-[36px] tracking-[2px] mb-4">
              GET TO KNOW YOUR SHIP
            </h2>
            <h1 className="font-['RR'] text-[36px] md:text-[55px] leading-[56px] md:leading-[76px] tracking-[2px]">
              DECK PLANS
            </h1>
          </div>
        </div>
      </div>

      {/* Filter Navigation */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 md:gap-6">
            {filterOptions.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className="mb-2"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ships Grid */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredShips.map((ship, index) => (
            <ShipCard
              key={`${ship.name}-${index}`}
              shipName={ship.name}
              image={ship.image}
              className="w-full"
            />
          ))}
        </div>
      </div>
      <div className="h-12" />
    </div>
  );
};

export default Plans;