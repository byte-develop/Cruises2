import React, { useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import cruisesJson from "../assets/all_cruises.json";

function CruiseDetails() {
  const { cruiseId } = useParams();
  const location = useLocation();
  const cruise = location.state?.cruise;

  const fallbackCruise =
    cruise ||
    Object.values(cruisesJson)[cruiseId] ||
    Object.values(cruisesJson).find((c) => String(c.id) === cruiseId);

  // --- Состояния для фильтров ---
  const [filterOpen, setFilterOpen] = useState(null); // "date" | "guests" | "room" | null
  const [selectedDate, setSelectedDate] = useState(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomPrice, setSelectedPrice] = useState(null);

  const [selectedDateT, setSelectedDateT] = useState(null);
  const [selectedRoomT, setSelectedRoomT] = useState(null);

  if (!fallbackCruise) {
    return <div>Cruise not found</div>;
  }

  // Для примера выбор дат/отелей
  const dateEntries = fallbackCruise.dates
    ? Object.entries(fallbackCruise.dates)
    : [];
  const hotelEntries = fallbackCruise.hotels
    ? Object.entries(fallbackCruise.hotels)
    : [];

  return (
    <div className="w-full flex flex-col items-center bg-[#F9FAFB]">
      {/* --- HERO BLOCK --- */}
      <div
        style={{
          background: `url(/assets/${fallbackCruise.photo_full})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        alt={fallbackCruise.name}
        className={`
          w-full max-w-[1440px] h-[420px] md:h-[700px] relative flex flex-col items-center justify-end
          transition-all
        `}
      >
        {/* --- Градиенты --- */}
        <div
          className="w-full h-full bottom-0 left-0 absolute"
          style={{
            background:
              "linear-gradient(0deg, rgba(2,29,73,0.75) 0%, rgba(2,29,73,0.1) 70%, rgba(2,29,73,0) 100%)",
          }}
        ></div>
        <div
          className="w-full h-full bottom-0 left-0 absolute"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,29,73,0.50) 0%, rgba(2,29,73,0.1) 25%, rgba(2,29,73,0) 100%)",
          }}
        ></div>

        {/* --- БЛОК ФИЛЬТРОВ --- */}
        <div
          className={`
            w-[95vw] max-w-[1300px] z-50 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[60%] md:translate-y-[50%]
            px-2 md:px-[24px] flex flex-col transition-all duration-300 bg-white filters_blok rounded-[20px] shadow-2xl max-sm:hidden
          `}
          style={{
            height: filterOpen ? 420 : 114,
            overflow: "hidden",
          }}
        >
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center h-[114px] gap-3 md:gap-0">
            <button
              className="w-full md:w-[260px] h-[60px] md:h-[76px] rounded-[8px] hover:bg-[#E4ECF9] transition text-left px-4 flex items-center"
              onClick={() =>
                setFilterOpen(filterOpen === "date" ? null : "date")
              }
            >
              <p className="text-[#1240B5] truncate">
                {selectedDateT ? `${selectedDateT}` : "Departure date"}
              </p>
            </button>
            <button
              className="w-full md:w-[260px] h-[60px] md:h-[76px] rounded-[8px] hover:bg-[#E4ECF9] transition text-left px-4 flex items-center"
              onClick={() =>
                setFilterOpen(filterOpen === "guests" ? null : "guests")
              }
            >
              <p className="text-[#1240B5]">Number of guests</p>
            </button>
            <button
              className="w-full md:w-[260px] h-[60px] md:h-[76px] rounded-[8px] hover:bg-[#E4ECF9] transition text-left px-4 flex items-center"
              onClick={() =>
                setFilterOpen(filterOpen === "room" ? null : "room")
              }
            >
              <p className="text-[#1240B5] truncate">
                {selectedRoomT ? `${selectedRoomT}` : "Select room type"}
              </p>
            </button>
            <div className="flex flex-col w-full md:w-auto items-start md:items-center mt-3 md:mt-0">
              <p className="text-[12px] text-[#506D94]">Starting from:</p>
              <p className="text-[#010C1D] text-[20px]">
                $1,420
                <span className="text-[16px]">/person*</span>
              </p>
              <p className="text-[12px] text-[#010C1D]">$2,840 Total/Room</p>
              <p className="text-[#506D94] text-[12px]">
                *Taxes & fees included
              </p>
            </div>
            <Link
              to={"/pay"}
              state={{
                cruise: fallbackCruise,
                guests: guests,
                date: selectedDateT,
                room: selectedRoomT,
              }}
              className="w-full md:w-[126px] h-[50px] md:h-[64px] bg-[#FFB500] rounded-full flex items-center justify-center text-[14px] text-[#021D49] mt-3 md:mt-0"
            >
              Secure your room
            </Link>
          </div>

          {/* --- ВЫЕЗЖАЮЩЕЕ СОДЕРЖИМОЕ --- */}
          <div className="flex-1 overflow-auto w-full px-1">
            {filterOpen === "date" && (
              <div className="py-6 flex flex-col gap-3 w-full">
                {dateEntries.map(([key, d]) => (
                  <button
                    key={key}
                    className={`w-full flex px-5 justify-between rounded-[8px] items-center py-3 mb-1
                      ${
                        selectedDate === key
                          ? "border-[#005EDC] bg-[#021d49] text-white"
                          : "border-[#CDCFD1] hover:bg-[#f7faff] bg-[#F1F6FF]"
                      }`}
                    onClick={() => (
                      setSelectedDate(key), setSelectedDateT(d.date_full)
                    )}
                  >
                    <span className="text-sm">{d.date_full}</span>
                    <span className="font-bold text-lg">${d.price}</span>
                  </button>
                ))}
              </div>
            )}
            {filterOpen === "guests" && (
              <div className="py-6 flex gap-6 flex-col md:flex-row items-center">
                <div className="flex items-center gap-4">
                  <span className="font-[PB]">Adults</span>
                  <button
                    className="w-10 h-10 rounded-[8px] border text-xl"
                    onClick={() =>
                      setGuests((g) => ({
                        ...g,
                        adults: Math.max(1, g.adults - 1),
                      }))
                    }
                  >
                    -
                  </button>
                  <span>{guests.adults}</span>
                  <button
                    className="w-10 h-10 rounded-[8px] border text-xl"
                    onClick={() =>
                      setGuests((g) => ({ ...g, adults: g.adults + 1 }))
                    }
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-[PB] flex flex-col">
                    Children{" "}
                    <p className="text-[12px] font-[PR] text-[#506D94]">
                      Ages 12 and under
                    </p>
                  </span>
                  <button
                    className="w-10 h-10 rounded-[8px] border text-xl"
                    onClick={() =>
                      setGuests((g) => ({
                        ...g,
                        children: Math.max(0, g.children - 1),
                      }))
                    }
                  >
                    -
                  </button>
                  <span>{guests.children}</span>
                  <button
                    className="w-10 h-10 rounded-[8px] border text-xl"
                    onClick={() =>
                      setGuests((g) => ({ ...g, children: g.children + 1 }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            {filterOpen === "room" && (
              <div className="py-6 flex gap-4 flex-wrap w-full justify-center md:justify-start">
                {hotelEntries.map(([key, h]) => {
                  // Найти подходящий stateroom class по названию
                  const stateroomClasses =
                    fallbackCruise.ship_info?.stateroom_classes || {};
                  const stateroom = Object.values(stateroomClasses).find(
                    (s) => s.name === h.name
                  );
                  // Если есть картинки, берем первую
                  const img = stateroom?.images
                    ? Object.values(stateroom.images)[0]
                    : null;

                  return (
                    <button
                      key={key}
                      className={`group border px-0 pb-4 pt-0 rounded-2xl w-full max-w-[260px] flex flex-col items-center bg-white shadow transition-all duration-200
                        ${
                          selectedRoom === key
                            ? "border-[#005EDC] ring-2 ring-[#005EDC] bg-[#e5efff]"
                            : "border-[#CDCFD1] hover:bg-[#f7faff]"
                        }`}
                      onClick={() => (
                        setSelectedRoom(key),
                        setSelectedRoomT(h.name),
                        setSelectedPrice(h.price)
                      )}
                    >
                      <div className="w-full h-[120px] md:h-[140px] overflow-hidden rounded-t-2xl bg-[#f1f6ff] mb-3">
                        {img ? (
                          <img
                            src={`/assets/${img}`}
                            alt={h.name}
                            className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-[#b6bdd7]">
                            No photo
                          </div>
                        )}
                      </div>
                      <span className="font-bold text-lg text-[#061556]">
                        {h.name}
                      </span>
                      <span className="text-sm text-[#384378] mb-1">
                        {h.sleeps}
                      </span>
                      <ul className="text-xs text-[#4A4A4A] mb-1 flex flex-col gap-1 list-disc list-inside w-full px-4">
                        {h["1_text"] && <li>{h["1_text"]}</li>}
                        {h["2_text"] && <li>{h["2_text"]}</li>}
                        {h["3_text"] && <li>{h["3_text"]}</li>}
                      </ul>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* --- /БЛОК ФИЛЬТРОВ --- */}

        <Link
          to="/find-a-cruise"
          className="flex items-center absolute left-4 md:left-[70px] top-8 md:top-[40px] gap-4 text-white font-[PB] text-[14px]"
        >
          <img src="../public/arrow.svg" alt="" /> Find a Cruise
        </Link>
        <div className="w-[95vw] max-w-[1300px] mb-20 z-10 tracking-[-0.1px] px-2">
          <p className="text-white z-10 font-[K] text-[36px] md:text-[86px] leading-[40px] md:leading-[96px] uppercase">
            {fallbackCruise.name}
          </p>
          <p className="text-white font-[PB] mt-2 md:mt-[10px] text-[15px] md:text-[22px]">
            {fallbackCruise.nights} Nights · {fallbackCruise.roundtrip_from} ·{" "}
            {fallbackCruise.name_ship}
          </p>
        </div>
      </div>
      {/* --- /HERO BLOCK --- */}

      {/* --- ITINERARY & OVERVIEW --- */}
      <div className="bg-[#F1F6FF] pt-10 md:pt-[100px] w-full max-w-[1440px] px-2 md:px-[80px] flex flex-col md:flex-row justify-start gap-8 md:gap-[65px] items-start pb-12 md:pb-[60px]">
        {/* ITINERARY */}
        <div className="bg-[#E4ECF9] w-full md:min-w-[330px] md:w-[330px] h-[420px] md:h-[590px] rounded-[8px] p-4 md:p-[20px] flex flex-col items-start mb-8 md:mb-0">
          <p className="font-[PB] text-[#010C1D] text-[22px] md:text-[27px]">
            Itinerary
          </p>
          <div className="mt-[8px] w-full h-[1px] bg-[#061556] opacity-20"></div>

          <div className="mt-[16px] w-full h-[56px] md:h-[72px] rounded-[8px] flex items-center justify-start bg-[#061556] p-[10px] md:p-[13px]">
            <p className="text-[16px] md:text-[20px] text-white font-[PB]">
              Cruise Overview
            </p>
          </div>
          <div
            className="w-full overflow-y-auto hide-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maxHeight: 370,
            }}
          >
            {cruise.itinerary.points.slice(1).map((point, idx) => (
              <div
                key={idx}
                className="mt-[12px] md:mt-[16px] w-full rounded-[8px] flex items-center justify-start gap-2 bg-[#F1F6FF] p-[8px] md:p-[10px]"
              >
                <div className="flex flex-col items-center font-[PB] text-[13px] text-[#010C1D] ml-[3px] min-w-[40px]">
                  <p>Day</p>
                  <p>{point.day}</p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[#315788] text-[13px] md:text-[14px]">
                    {point.date}
                  </p>
                  <p className="text-[16px] md:text-[18px] leading-[20px] md:leading-[24px] mt-0.5">
                    {point.name}
                  </p>
                  {point.time && point.time !== "null" && (
                    <p className="text-[13px] md:text-[14px] text-[#315788] mt-0.5">
                      {point.time}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="flex-1 w-full">
          <p className="text-[#010C1D] font-[K] text-[30px] md:text-[72px] uppercase">
            Cruise Overview
          </p>
          <img
            src={`/assets/${cruise.gallery_photos[1]}`}
            alt=""
            className="w-full rounded-[8px] mb-3"
          />
          <p className="mt-4 md:mt-[40px] text-[#315788] text-[16px] md:text-[20px] font-[PR]">
            Spend {fallbackCruise.nights} nights of adventure during your cruise
            on {fallbackCruise.name_ship}. It all begins when you sail from{" "}
            {fallbackCruise.roundtrip_from} and the Royal Caribbean
            award-winning private island, {fallbackCruise.name}. Max out
            memories during your unforgettable vacation.
          </p>
          <div className="flex items-center w-full overflow-x-auto hide-scrollbar mt-4 md:mt-[40px] gap-3">
            {Object.values(cruise.gallery_photos || {})
              .slice(1)
              .map((photo, idx) =>
                photo ? (
                  <img
                    key={idx}
                    src={`/assets/${photo}`}
                    alt={`Ship photo ${idx + 2}`}
                    className="h-[160px] md:h-[300px] rounded-[8px] object-cover"
                  />
                ) : null
              )}
          </div>
        </div>
      </div>

      {/* --- SHIP SECTION --- */}
      <div className="w-full max-w-[1440px] mt-10 md:mt-20 px-2 md:pl-24">
        <p className="text-[#315788] text-[14px] font-[PB]">Your ship:</p>
        <p className="text-[#010C1D] font-[K] text-[30px] md:text-[72px] uppercase mt-4 md:mt-[25px]">
          {fallbackCruise.name_ship}
        </p>
        <div className="mt-4 md:mt-[40px] flex w-full overflow-x-auto gap-4 pb-4">
          <img
            src={`/assets/${fallbackCruise.gallery_1}`}
            alt=""
            className="w-[65vw] sm:w-[38vw] md:w-[30vw] rounded-[8px] object-cover"
          />
          <img
            src={`/assets/${fallbackCruise.gallery_2}`}
            alt=""
            className="w-[65vw] sm:w-[38vw] md:w-[30vw] rounded-[8px] object-cover"
          />
          <img
            src={`/assets/${fallbackCruise.gallery_3}`}
            alt=""
            className="w-[65vw] sm:w-[38vw] md:w-[30vw] rounded-[8px] object-cover"
          />
        </div>
        <img
          src="../public/photo1.svg"
          className="mt-10 md:mt-20 pb-16 md:pb-20 w-full max-w-[600px]"
          alt=""
        />
      </div>

      <div className="fixed bottom-0 w-full h-[125px] bg-white shadow-2xl flex items-center justify-between px-3">
        <div className="flex flex-col w-full md:w-auto items-start md:items-center mt-3 md:mt-0">
          <p className="text-[12px] text-[#506D94]">Starting from:</p>
          <p className="text-[#010C1D] text-[20px]">
            $1,420
            <span className="text-[16px]">/person*</span>
          </p>
          <p className="text-[12px] text-[#010C1D]">$2,840 Total/Room</p>
          <p className="text-[#506D94] text-[12px]">*Taxes & fees included</p>
        </div>
        <Link
          to={"/pay"}
          state={{
            cruise: fallbackCruise,
            guests: guests,
            date: selectedDateT,
            room: selectedRoomT,
          }}
          className="w-full md:w-[126px] h-[50px] md:h-[64px] bg-[#FFB500] rounded-full flex items-center justify-center text-[14px] text-[#021D49] mt-3 md:mt-0"
        >
          Secure your room
        </Link>
      </div>
    </div>
  );
}

export default CruiseDetails;
