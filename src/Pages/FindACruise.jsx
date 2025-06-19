import React, { useState, useRef, useEffect } from "react";
import cruisesJson from "../assets/all_cruises.json";
import { useNavigate, useLocation } from "react-router-dom";

// ---- ПОРТЫ ПО КАТЕГОРИЯМ ----
const PORTS_NA = [
  "Baltimore, Maryland", "Boston, Massachusetts", "Cape Liberty (New York), New Jersey",
  "Fort Lauderdale, Florida", "Galveston, Texas", "Los Angeles, California", "Miami, Florida",
  "New Orleans, Louisiana", "Oahu (Honolulu), Hawaii", "Orlando (Port Canaveral), Florida",
  "San Diego, California", "Seattle, Washington", "Seward, Alaska", "Tampa, Florida",
  "Vancouver, British Columbia",
];
const PORTS_EU = [
  "Athens (Piraeus), Greece", "Barcelona, Spain", "Ravenna (Venice), Italy",
  "Rome (Civitavecchia), Italy", "Southampton, England",
];
const PORTS_AU = ["Brisbane, Australia", "Sydney, Australia"];
const PORTS_LATIN = ["Cartagena, Colombia", "Colón, Panama", "San Juan, Puerto Rico"];
const PORTS_ASIA = [
  "Hong Kong, China", "Shanghai (Baoshan), China", "Singapore, Singapore", "Tokyo (Yokohama), Japan",
];

const NIGHTS = [
  { label: "2 - 5", range: [2, 5] }, { label: "6 - 8", range: [6, 8] },
  { label: "9 - 11", range: [9, 11] }, { label: "12+", range: [12, 99] },
];

const SHIPS = [
  "Adventure of the Seas", "Allure of the Seas", "Anthem of the Seas", "Brilliance of the Seas",
  "Enchantment of the Seas", "Explorer of the Seas", "Freedom of the Seas", "Grandeur of the Seas",
  "Harmony of the Seas", "Icon of the Seas", "Independence of the Seas", "Jewel of the Seas",
  "Legend of the Seas", "Liberty of the Seas", "Mariner of the Seas", "Navigator of the Seas",
  "Oasis of the Seas", "Odyssey of the Seas", "Ovation of the Seas", "Quantum of the Seas",
  "Radiance of the Seas", "Rhapsody of the Seas", "Serenade of the Seas", "Spectrum of the Seas",
  "Star of the Seas", "Symphony of the Seas", "Utopia of the Seas", "Vision of the Seas",
  "Voyager of the Seas", "Wonder of the Seas",
];

// --- СОРТИРОВКИ ---
const SORTS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price lowest to highest" },
  { value: "price-desc", label: "Price highest to lowest" },
  { value: "nights-asc", label: "Number of nights low to high" },
  { value: "nights-desc", label: "Number of nights high to low" },
];

function getPhotoUrl(photo) {
  if (!photo) return "";
  if (photo.startsWith("/")) return photo;
  return "/assets/" + photo.replace(/^\.\/|^\//, "");
}

const FindACruise = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const cruises = Object.values(cruisesJson);
  const navigate = useNavigate();
  const location = useLocation();

  const [modal, setModal] = useState(null); // 'port' | 'nights' | 'ship' | null
  const [selectedPort, setSelectedPort] = useState(null);
  const [selectedNights, setSelectedNights] = useState(null);
  const [selectedShip, setSelectedShip] = useState(null);

  // Сортировка
  const [sortBy, setSortBy] = useState(SORTS[0]);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef(null);

  // --- DATES MODAL ---
  const [datesModalCruise, setDatesModalCruise] = useState(null);

  // GET SEARCH QUERY FROM URL
  const params = new URLSearchParams(location.search);
  const searchParam = params.get("search")?.toLowerCase() || "";

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setSortDropdownOpen(false);
      }
    }
    if (sortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sortDropdownOpen]);

  // FILTERED & SORTED CRUISES WITH SEARCH
  const filteredCruises = cruises.filter((cruise) => {
    let portOk = !selectedPort || cruise.roundtrip_from === selectedPort;
    let nightsOk =
      !selectedNights ||
      (cruise.nights >= selectedNights.range[0] &&
        cruise.nights <= selectedNights.range[1]);
    let shipOk = !selectedShip || cruise.name_ship === selectedShip;
    let searchOk =
      !searchParam ||
      cruise.name?.toLowerCase().includes(searchParam) ||
      cruise.name_ship?.toLowerCase().includes(searchParam) ||
      cruise.roundtrip_from?.toLowerCase().includes(searchParam) ||
      cruise.visiting?.toLowerCase().includes(searchParam);
    return portOk && nightsOk && shipOk && searchOk;
  });

  // --- СОРТИРОВКА ---
  const sortedCruises = React.useMemo(() => {
    let arr = [...filteredCruises];
    switch (sortBy.value) {
      case "price-asc":
        arr.sort(
          (a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0)
        );
        break;
      case "price-desc":
        arr.sort(
          (a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0)
        );
        break;
      case "nights-asc":
        arr.sort((a, b) => (a.nights || 0) - (b.nights || 0));
        break;
      case "nights-desc":
        arr.sort((a, b) => (b.nights || 0) - (a.nights || 0));
        break;
      default:
        break; // recommended = no explicit sort
    }
    return arr;
  }, [filteredCruises, sortBy]);

  // HANDLERS
  const handleLoadMore = () => setVisibleCount((prev) => prev + 10);
  const handleViewItinerary = (cruise, idx) => {
    navigate(`/cruise/${cruise.id || idx}`, { state: { cruise } });
  };

  // MODAL filter toggles
  const handleSelectPort = (port) =>
    setSelectedPort(port === selectedPort ? null : port);
  const handleSelectNights = (nightsObj) =>
    setSelectedNights(nightsObj === selectedNights ? null : nightsObj);
  const handleSelectShip = (ship) =>
    setSelectedShip(ship === selectedShip ? null : ship);

  // BUTTON STYLES
  const filterBtnClass = (active) =>
    `py-3 px-4 rounded-[5px] font-[PB] flex items-center gap-3 transition-colors ${
      active
        ? "bg-[#005EDC] text-white"
        : "bg-[#EDEEF3] text-[#384378] hover:bg-[#D5D9E6]"
    }`;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) setModal(null);
  };

  // Remove search filter (remove from URL)
  const handleRemoveSearch = () => {
    params.delete("search");
    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });
  };

  // --- DATES MODAL COMPONENT ---
  const DatesModal = ({ cruise, onClose }) => {
    // Получаем список дат
    const dateEntries = cruise.dates ? Object.entries(cruise.dates) : [];
    // Получаем список отелей в виде массива с ключами
    const hotelEntries = cruise.hotels ? Object.entries(cruise.hotels) : [];

    // Первая дата по умолчанию
    const [selectedDateKey, setSelectedDateKey] = useState(
      dateEntries.length > 0 ? dateEntries[0][0] : null
    );

    // Выбранная дата (объект)
    const selectedDateObj = selectedDateKey
      ? cruise.dates[selectedDateKey]
      : null;

    if (!cruise) return null;

    return (
      <div
        className="modal-overlay fixed inset-0 z-[99] flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.40)" }}
        onClick={onClose}
      >
        <div
          className="relative bg-white shadow-2xl rounded-2xl w-full max-w-[850px] max-h-[90vh] overflow-y-auto flex flex-col animate-modalSlideIn
                      sm:rounded-2xl sm:w-[95vw] md:w-[850px] md:h-auto"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-10 text-[28px] w-10 h-10 flex items-center justify-center sm:top-2 sm:right-2"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <div className="p-6 sm:p-4">
            <p className="text-[22px] text-[#061556] font-[PB]">{cruise.nights} NIGHTS</p>
            <p className="text-[30px] font-[PR] text-[#061556]">{cruise.name}</p>
            <div className="mt-5 flex items-center gap-2">
              <img src="../public/shipIco.svg" className="w-6 h-6" alt="" />
              <p className="font-[PB] text-[#061556]">{cruise.name_ship}</p>
            </div>
            <div className="flex flex-col mt-4 gap-3">
              <p className="text-[#4A4A4A]">
                <span className="uppercase font-[PB] text-[#4A4A4A] mr-2">Roundtrip From:</span>
                {cruise.roundtrip_from}
              </p>
              <p className="text-[#4A4A4A]">
                <span className="uppercase font-[PB] text-[#4A4A4A] mr-2">Visiting:</span>
                {cruise.visiting}
              </p>
            </div>
            <p className="mt-4 text-[18px] text-[#061556]">{dateEntries.length} Available dates</p>
            <div className="dates_all mt-5 flex gap-2 overflow-x-auto pb-3">
              {dateEntries.map(([key, d]) => (
                <button
                  key={key}
                  className={`border min-w-[120px] min-h-[70px] items-center justify-center gap-2 rounded-lg flex flex-col transition-colors
                    ${selectedDateKey === key
                      ? "bg-[#005EDC] text-white"
                      : "border-[#7882B2] bg-[#F8F8F8] text-[#005EDC]"}`}
                  onClick={() => setSelectedDateKey(key)}
                >
                  <span className="text-md mt-1">{d.date}</span>
                  <span className="font-[PB] text-[18px]">${d.price}</span>
                </button>
              ))}
            </div>
            {selectedDateKey && (
              <div className="mt-3 overflow-y-auto max-h-[320px]">
                <p className="text-[#333333] mb-2">{selectedDateObj.date_full}</p>
                <div className="w-full mt-2 h-[1px] bg-[#C4C4C4]"></div>
                <div className="flex flex-wrap gap-4 justify-between mt-4">
                  {hotelEntries.map(([hKey, hotel]) => {
                    // Находим класс каюты по названию
                    const stateroomClass = cruise.ship_info?.stateroom_classes
                      ? Object.values(cruise.ship_info.stateroom_classes).find((s) => s.name === hotel.name)
                      : null;
                    // Берем первую картинку, если есть
                    const stateroomImg =
                      stateroomClass && stateroomClass.images
                        ? Object.values(stateroomClass.images)[0]
                        : null;

                    // Формируем имя поля для цены
                    const priceKey = `${selectedDateKey}_price`;
                    const price = hotel[priceKey];

                    return (
                      <div
                        key={hKey}
                        className="w-full sm:w-[320px] flex flex-col border-b border-[#CDCFD1] pb-3"
                      >
                        {stateroomImg && (
                          <img
                            src={`../public/assets/${stateroomImg}`}
                            alt={hotel.name}
                            className="w-full h-[96px] object-cover rounded mb-3"
                          />
                        )}
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-[PB] text-[#061556] text-[20px]">{hotel.name}</span>
                          <span className="font-[PR] text-[#005EDC] text-[28px]">${price}</span>
                        </div>
                        <span className="text-[#4A4A4A] text-sm mb-1">{hotel.sleeps}</span>
                        <ul className="text-[#4A4A4A] text-sm flex flex-col gap-1 mb-2 list-disc list-inside">
                          {hotel["1_text"] && <li>{hotel["1_text"]}</li>}
                          {hotel["2_text"] && <li>{hotel["2_text"]}</li>}
                          {hotel["3_text"] && <li>{hotel["3_text"]}</li>}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <style>
        {`
        .animate-modalSlideIn {animation: modalSlideIn .25s;}
        @keyframes modalSlideIn {from {transform: translateY(48px);opacity:0;} to {transform: none;opacity:1;}}
        `}
        </style>
      </div>
    );
  };

  // --- MODAL BASE (адаптивная) ---
  const ModalBase = ({ title, children, onOk }) => (
    <div
      className="modal-overlay fixed inset-0 z-[99] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.40)" }}
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto flex flex-col animate-modalSlideIn sm:w-[95vw]"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-10 text-[26px] w-9 h-9 flex items-center justify-center"
          onClick={() => setModal(null)}
          aria-label="Close"
        >
          ×
        </button>
        <div className="overflow-y-auto p-6 pt-10 w-full">{children}</div>
        <div className="min-h-[60px] w-full bg-[#edeef3] flex items-center justify-center rounded-b-2xl">
          <button
            onClick={() => {
              setModal(null);
              if (onOk) onOk();
            }}
            className="bg-[#005edc] cursor-pointer py-3 px-10 min-w-[64px] font-[PB] text-white rounded-[5px]"
          >
            See results
          </button>
        </div>
      </div>
    </div>
  );

const PortsModal = () => (
  <ModalBase title="Select Departure Port">
    <div className="w-full max-h-[90vh] p-2">
      <p className="w-full text-[18px] font-[PB] text-[#061556] mt-2">North America</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {PORTS_NA.map((port) => (
          <button
            key={port}
            className={`py-2 cursor-pointer px-3 rounded mb-1 text-left transition-colors text-[13px] text-[#384378] font-[PB] ${
              selectedPort === port
                ? "bg-[#384378] text-white rounded-full"
                : "border-[1px] border-[#384378] rounded-full"
            }`}
            onClick={() => handleSelectPort(port)}
          >
            {port}
          </button>
        ))}
      </div>
      <div className="w-full min-h-[1px] bg-black mt-4 mb-4 opacity-40"></div>
      <p className="w-full text-[18px] font-[PB] text-[#061556]">Europe</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {PORTS_EU.map((port) => (
          <button
            key={port}
            className={`py-2 px-3 rounded cursor-pointer mb-1 text-left transition-colors text-[13px] text-[#384378] font-[PB] ${
              selectedPort === port
                ? "bg-[#384378] text-white rounded-full"
                : "border-[1px] border-[#384378] rounded-full"
            }`}
            onClick={() => handleSelectPort(port)}
          >
            {port}
          </button>
        ))}
      </div>
      <div className="w-full min-h-[1px] bg-black mt-4 mb-4 opacity-40"></div>
      <p className="w-full text-[18px] font-[PB] text-[#061556]">Australia</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {PORTS_AU.map((port) => (
          <button
            key={port}
            className={`py-2 px-3 rounded cursor-pointer mb-1 text-left transition-colors text-[13px] text-[#384378] font-[PB] ${
              selectedPort === port
                ? "bg-[#384378] text-white rounded-full"
                : "border-[1px] border-[#384378] rounded-full"
            }`}
            onClick={() => handleSelectPort(port)}
          >
            {port}
          </button>
        ))}
      </div>
      <div className="w-full min-h-[1px] bg-black mt-4 mb-4 opacity-40"></div>
      <p className="w-full text-[18px] font-[PB] text-[#061556]">Latin America & Caribbean</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {PORTS_LATIN.map((port) => (
          <button
            key={port}
            className={`py-2 px-3 rounded cursor-pointer mb-1 text-left transition-colors text-[13px] text-[#384378] font-[PB] ${
              selectedPort === port
                ? "bg-[#384378] text-white rounded-full"
                : "border-[1px] border-[#384378] rounded-full"
            }`}
            onClick={() => handleSelectPort(port)}
          >
            {port}
          </button>
        ))}
      </div>
      <div className="w-full min-h-[1px] bg-black mt-4 mb-4 opacity-40"></div>
      <p className="w-full text-[18px] font-[PB] text-[#061556]">Asia & The Pacific</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {PORTS_ASIA.map((port) => (
          <button
            key={port}
            className={`py-2 px-3 rounded cursor-pointer mb-1 text-left transition-colors text-[13px] text-[#384378] font-[PB] ${
              selectedPort === port
                ? "bg-[#384378] text-white rounded-full"
                : "border-[1px] border-[#384378] rounded-full"
            }`}
            onClick={() => handleSelectPort(port)}
          >
            {port}
          </button>
        ))}
      </div>
    </div>
  </ModalBase>
);

  // --- MODAL NIGHTS ---
  const NightsModal = () => (
    <ModalBase title="Select Number of Nights">
      <p className="text-[18px] font-[PB] text-[#061556]">Length of cruise</p>
      <div className="w-full flex flex-wrap gap-3 mt-4">
        {NIGHTS.map((n) => (
          <button
            key={n.label}
            className={`py-2 px-6 cursor-pointer rounded-full text-[13px] font-[PB] transition-colors border-[1px] ${
              selectedNights === n
                ? "bg-[#384378] text-white border-[#384378]"
                : "border-[#384378] text-[#384378] bg-transparent hover:bg-[#edeef3]"
            }`}
            onClick={() => handleSelectNights(n)}
          >
            {n.label}
          </button>
        ))}
      </div>
    </ModalBase>
  );

  // --- MODAL SHIPS ---
  const ShipsModal = () => (
    <ModalBase title="Select Ship">
      <p className="text-[18px] font-[PB] text-[#061556]">All our ships</p>
      <div className="w-full flex flex-wrap gap-2 mt-4">
        {SHIPS.map((ship) => (
          <button
            key={ship}
            className={`py-2 px-5 cursor-pointer rounded-full text-[13px] font-[PB] mb-2 transition-colors border-[1px] ${
              selectedShip === ship
                ? "bg-[#384378] text-white border-[#384378]"
                : "border-[#384378] text-[#384378] bg-transparent hover:bg-[#edeef3]"
            }`}
            onClick={() => handleSelectShip(ship)}
          >
            {ship}
          </button>
        ))}
      </div>
    </ModalBase>
  );

  // ============= /МОДАЛЬНЫЕ ОКНА =============

  return (
    <div className="flex flex-col items-center w-full pb-16 bg-[#F5F6F7]">
      <p
        className="pt-10 uppercase font-[K] text-[60px] text-[#061556] max-sm:text-[32px] max-sm:pt-6"
      >
        Up to $700 off
      </p>
      <p className="text-[18px] text-[#494A4C] pb-12 max-sm:text-[14px] max-sm:pb-6 text-center">
        + Up to $200 Onboard Credit on Star & Icon
      </p>

      {/* FILTER BUTTONS + SEARCH FILTER */}
      <div className="flex items-center gap-2.5 max-sm:flex-wrap max-sm:gap-2 max-sm:mb-4">
        {/* SEARCH FILTER BUTTON */}
        {searchParam && (
          <button
            className="flex items-center gap-3 bg-[#e5efff] border border-[#005EDC] text-[#005EDC] font-[PB] rounded-[5px] px-4 py-3 transition hover:bg-[#dbe8f7] max-sm:px-2 max-sm:py-2 max-sm:text-[13px]"
            style={{
              maxWidth: 320,
              minWidth: 80,
            }}
          >
            <span
              className="truncate"
              title={searchParam}
              style={{ fontSize: 15 }}
            >
              {searchParam}
            </span>
            <span
              className="cursor-pointer ml-2"
              onClick={handleRemoveSearch}
              tabIndex={0}
              style={{
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                borderRadius: "50%",
                transition: "background 0.15s",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleRemoveSearch();
              }}
            >
              ×
            </span>
          </button>
        )}
        {/* Port */}
        <button
          className={filterBtnClass(!!selectedPort) + " max-sm:px-2 max-sm:py-2 max-sm:text-[13px]"}
          onClick={() => setModal("port")}
        >
          <p>{selectedPort ? selectedPort : "Departure Port"}</p>
          <img src="../public/arrow_down.svg" alt="" className="max-sm:w-4 max-sm:h-4" />
        </button>
        {/* Nights */}
        <button
          className={filterBtnClass(!!selectedNights) + " max-sm:px-2 max-sm:py-2 max-sm:text-[13px]"}
          onClick={() => setModal("nights")}
        >
          <p>{selectedNights ? selectedNights.label : "Number of nights"}</p>
          <img src="../public/arrow_down.svg" alt="" className="max-sm:w-4 max-sm:h-4" />
        </button>
        {/* Ship */}
        <button
          className={filterBtnClass(!!selectedShip) + " max-sm:px-2 max-sm:py-2 max-sm:text-[13px]"}
          onClick={() => setModal("ship")}
        >
          <p>{selectedShip ? selectedShip : "Ships"}</p>
          <img src="../public/arrow_down.svg" alt="" className="max-sm:w-4 max-sm:h-4" />
        </button>
      </div>

      {/* МОДАЛЬНЫЕ ОКНА */}
      {modal === "port" && <PortsModal />}
      {modal === "nights" && <NightsModal />}
      {modal === "ship" && <ShipsModal />}

      {/* RESULTS HEADER */}
      <div className="w-[1300px] flex justify-between mb-6 mt-6 px-10 max-sm:w-full max-sm:flex-col max-sm:px-0 max-sm:mb-3 max-sm:mt-3">
        <p className="text-[20px] font-[PB] text-[#061556] max-sm:text-[15px] max-sm:mb-1 px-2">
          Cruise Search Results ({sortedCruises.length})
        </p>

        {/* SORT DROPDOWN */}
        <div className="flex items-center gap-3 pr-2 max-sm:pr-0" ref={sortDropdownRef}>
          <p className="font-[PB] text-[#535455] max-sm:text-[13px] max-sm:pl-2">Sort by:</p>
          <div className="relative">
            <button
              type="button"
              className={`py-3 px-4 rounded-[5px] font-[PB] flex items-center gap-3 bg-[#EDEEF3] text-[#384378] hover:bg-[#D5D9E6] transition max-sm:px-2 max-sm:py-2 max-sm:text-[13px]`}
              onClick={() => setSortDropdownOpen((v) => !v)}
            >
              <p>{sortBy.label}</p>
              <img src="../public/arrow_down.svg" alt="" className="max-sm:w-4 max-sm:h-4" />
            </button>
            {sortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[270px] bg-white border border-[#EDEEF3] shadow-xl rounded-[5px] z-10 max-sm:w-[180px]">
                {SORTS.map((sortOpt) => (
                  <button
                    key={sortOpt.value}
                    className={`w-full text-left px-5 py-3 text-[15px] font-[PB] transition-colors rounded-[5px] ${
                      sortBy.value === sortOpt.value
                        ? "bg-[#005EDC] text-white"
                        : "hover:bg-[#F6F8FA] text-[#384378]"
                    } max-sm:px-3 max-sm:py-2 max-sm:text-[13px]`}
                    onClick={() => {
                      setSortBy(sortOpt);
                      setSortDropdownOpen(false);
                    }}
                  >
                    {sortOpt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CRUISES LIST */}
      <div className="w-full flex flex-col items-center gap-6 max-sm:gap-4">
        {sortedCruises.slice(0, visibleCount).map((cruise, idx) => (
          <div
            key={idx}
            className={`
              w-[1300px] h-[370px] rounded-[3px] bg-white flex items-center justify-between overflow-hidden mb-10 shadow
              max-sm:w-[90vw] max-sm:max-w-[420px] max-sm:h-auto max-sm:mb-3 max-sm:flex-col max-sm:rounded-2xl max-sm:overflow-visible
            `}
          >
            {/* IMAGE BLOCK */}
            <div
              className={`
                w-[50%] h-full bg-cover bg-center p-5 flex items-start justify-end flex-col relative
                max-sm:w-full max-sm:h-[170px] max-sm:p-0 max-sm:rounded-t-2xl
              `}
              style={{
                backgroundImage: `url(${getPhotoUrl(cruise.photo)})`,
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            >
              <div
                className="absolute h-full w-full bottom-0 left-0 rounded-t-2xl max-sm:rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 32%, rgba(0,0,0,0.7) 100%)",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              ></div>
              <div className="z-10 px-[10px] py-[5px] bg-white font-[PB] text-[#061556] max-sm:ml-3 max-sm:mt-2 max-sm:text-[13px] rounded-[6px] max-sm:absolute max-sm:top-3 max-sm:left-3">
                {cruise.nights} Nights
              </div>
              <p className="font-[PB] text-white text-[41px] tracking-[-0.8px] leading-[48px] z-10 mt-[10px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:ml-3 max-sm:mb-3 max-sm:absolute max-sm:bottom-2 max-sm:left-3 max-sm:right-3 max-sm:drop-shadow-lg">
                {cruise.name}
              </p>
            </div>
            {/* INFO BLOCK */}
            <div className={`
              w-[50%] flex flex-col p-6 h-full justify-between
              max-sm:w-full max-sm:p-4 max-sm:gap-0 max-sm:rounded-b-2xl max-sm:bg-white
            `}>
              <div>
                <p className="flex items-center gap-2 font-[PB] text-[#061556] text-[18px] tracking-[-0.3px] max-sm:text-[15px]">
                  <img
                    src="../public/ShipIco.svg"
                    className="w-[16px] h-[16px] max-sm:w-[14px] max-sm:h-[14px]"
                    alt=""
                  />
                  {cruise.name_ship}
                </p>
                <p className="mt-5 uppercase font-[PB] text-[#4A4A4A] max-sm:mt-2 max-sm:text-[13px]">
                  Roundtrip From:{" "}
                  <span className="font-[PR] normal-case">
                    {cruise.roundtrip_from}
                  </span>
                </p>
                <p className="mt-5 uppercase font-[PB] text-[#4A4A4A] leading-[19px] max-sm:mt-2 max-sm:text-[13px]">
                  Visiting:{" "}
                  <span className="font-[PR] normal-case">{cruise.visiting}</span>
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#CDCFD1] max-sm:my-2"></div>
              <div className="flex items-end justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-4">
                <div className="flex flex-col items-start">
                  <p className="font-[PB] text-[12px] text-[#4A4A4A] max-sm:text-[11px]">
                    AVG PER PERSON*
                  </p>
                  <div className="flex items-start mt-[5px]">
                    <p className="text-[21px] font-[K] text-[#061556] max-sm:text-[16px] ">$</p>
                    <p
                      className="text-[64px] font-[K] text-[#061556] leading-[55px] max-sm:text-[32px] max-sm:leading-[34px]"
                    >
                      {cruise.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center max-sm:w-full max-sm:flex-row max-sm:gap-2 max-sm:justify-end">
                  <div
                    className="w-[200px] h-[46px] rounded-[3px] bg-[#005EDC] flex items-center justify-center cursor-pointer max-sm:w-[120px] max-sm:h-[38px] max-sm:text-[15px]"
                    onClick={() => setDatesModalCruise(cruise)}
                  >
                    <p className="text-white font-[PB] max-sm:text-[13px]">
                      View {cruise.dates ? Object.keys(cruise.dates).length : 0}{" "}
                      dates
                    </p>
                  </div>
                  <div
                    className="w-[200px] h-[46px] rounded-[3px] border-[1px] border-[#384378] flex items-center justify-center mt-[10px] cursor-pointer max-sm:mt-0 max-sm:w-[120px] max-sm:h-[38px] max-sm:text-[15px]"
                    onClick={() => handleViewItinerary(cruise, idx)}
                  >
                    <p className="text-[#384378] font-[PB] max-sm:text-[13px]">View itinerary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < sortedCruises.length && (
        <button
          className="mt-6 w-[290px] h-[50px] bg-[#FEBD11] rounded-[3px] font-[PB] text-[#061556] hover:bg-[#d19d0d] transition max-sm:w-[90vw] max-sm:h-[42px] max-sm:text-[15px] max-sm:mt-3"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}

      {/* DATES MODAL */}
      {datesModalCruise && (
        <DatesModal
          cruise={datesModalCruise}
          onClose={() => setDatesModalCruise(null)}
        />
      )}
    </div>
  );
};

export default FindACruise;