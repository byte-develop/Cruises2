import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Pay() {
  const location = useLocation();
  const cruise = location.state?.cruise;
  const date = location.state?.date;
  const guests = location.state?.guests;
  const room = location.state?.room;
  const [page, setPage] = useState("size");

  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);
  const [roomPhoto, setRoomPhoto] = useState(0);
  const [chosenRoom, setChosenRoom] = useState(null);
  const [guestForms, setGuestForms] = useState([]);
  const [activeGuest, setActiveGuest] = useState(0);
  const [diningPref, setDiningPref] = useState("");
  const [addGratuities, setAddGratuities] = useState(false);
  const [addTravelProtection, setAddTravelProtection] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setAdult(guests?.adults || 0);
    setChildren(guests?.children || 0);
  }, [guests]);

  useEffect(() => {
    if (page === "guest") {
      const totalGuests = (adult || 0) + (children || 0);
      setGuestForms(
        Array.from({ length: totalGuests }, () => ({
          firstName: "",
          lastName: "",
          gender: "",
          dob: "",
          citizenship: "",
          residenceCountry: "",
          residenceState: "",
          email: "",
          phone: "",
          crownNumber: "",
        }))
      );
      setActiveGuest(0);
    }
  }, [page, adult, children]);

  if (!cruise) {
    return <div>No cruise selected!</div>;
  }

  const getGuestLabel = (i) =>
    i < adult ? `Adult ${i + 1}` : `Child ${i + 1 - adult}`;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setGuestForms((forms) =>
      forms.map((form, idx) =>
        idx === activeGuest ? { ...form, [name]: value } : form
      )
    );
  };

  // Responsive: mobile = "sm", tablet = "md", desktop = "lg"
  // The main layout is a column on mobile, row on md+
  return (
    <>
      {/* Bottom Bar - fix for mobile and desktop */}
      <div className="fixed bottom-0 w-full h-[70px] md:h-[90px] bg-white shadow-2xl flex px-4 md:px-[270px] justify-between items-center z-50">
        {page === "size" && (
          <>
            <div className="hidden md:block"></div>
            <button
              onClick={() => setPage("room")}
              className="w-full md:w-[290px] h-[48px] md:h-[60px] rounded-[4px] bg-[#005EDC] font-[PB] text-white"
            >
              Continue to Room Selection
            </button>
          </>
        )}

        {page === "room" && (
          <>
            <div className="hidden md:block"></div>
            <p className="text-[#061556] text-xs md:text-base">
              Estimated total:{" "}
              <span className="font-[PB]">
                ${roomPrice * (children + adult)} USD
              </span>
            </p>
          </>
        )}

        {page === "guest" && (
          <>
            <div className="hidden md:block"></div>
            <button
              onClick={() => setPage("pref")}
              className="w-full md:w-[290px] h-[48px] md:h-[60px] rounded-[4px] bg-[#005EDC] font-[PB] text-white"
            >
              Continue to Preferences
            </button>
          </>
        )}

        {page === "pref" && (
          <>
            <div className="hidden md:block"></div>
            <button
              onClick={() => setPage("pay")}
              className="w-full md:w-[290px] h-[48px] md:h-[60px] rounded-[4px] bg-[#005EDC] font-[PB] text-white"
            >
              Review your Cruise
            </button>
          </>
        )}

        {page === "pay" && (
          <>
            <div className="hidden md:block"></div>
            <button
              onClick={() => setPage("pref")}
              className="w-full md:w-[290px] h-[48px] md:h-[60px] rounded-[4px] bg-[#005EDC] font-[PB] text-white"
            >
              Continue to Payment
            </button>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10 min-h-[100vh] justify-center pt-4 md:pt-0 pb-[90px]">
        {/* Left Side - Cruise Summary Card */}
        <div className="w-full max-w-[450px] md:w-[380px] h-auto md:h-full shadow-2xl flex flex-col rounded-xl mb-5 md:mb-0">
          <img
            src={`/public/assets/${cruise.photo}`}
            className="w-full h-[180px] object-cover object-center rounded-t-xl"
            alt=""
          />
          <div className="p-5 md:p-[40px] flex flex-col items-start gap-2">
            <p className="text-[#061556] font-[PB] text-[19px]">
              {cruise.name}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <p className="w-[85px] text-[13px] font-[PB] text-[#061556]">
                Leaving from
              </p>
              <p className="text-[13px] text-[#535455]">
                {cruise.roundtrip_from}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="w-[85px] text-[13px] font-[PB] text-[#061556]">
                Onboard
              </p>
              <p className="text-[13px] text-[#535455]">{cruise.name_ship}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="w-[85px] text-[13px] font-[PB] text-[#061556]">
                Dates
              </p>
              <p className="text-[13px] text-[#535455]">
                {date || cruise.dates[1]?.date_full}
              </p>
            </div>
            <p className="mt-[12px] md:mt-[20px] font-[PB] text-[17px] text-[#061556]">
              Room Selection
            </p>
            <div className="flex items-center gap-2 mt-2">
              <p className="w-[85px] text-[13px] font-[PB] text-[#061556]">
                Guests
              </p>
              <p className="text-[13px] text-[#535455]">{adult + children}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="w-[85px] text-[13px] font-[PB] text-[#061556]">
                Room type
              </p>
              <p className="text-[13px] text-[#535455]">
                {chosenRoom ? chosenRoom : room || "Interior"}
              </p>
            </div>
          </div>
        </div>
        {/* Right Side - Main content */}
        <div className="w-full max-w-[100vw] md:w-[1060px] h-auto md:h-full p-2 md:p-[40px]">
          {/* Steps */}
          <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-2 md:gap-0 mb-4">
            {[
              { label: "Party Size", key: "size" },
              { label: "Room Selection", key: "room" },
              { label: "Guest Info", key: "guest" },
              { label: "Preferences", key: "pref" },
              { label: "Review & Pay", key: "pay" },
            ].map((step, idx) => (
              <div
                key={step.key}
                className="flex flex-col items-start gap-2 flex-1 min-w-[60px]"
              >
                <div
                  className={`w-full md:w-[170px] h-[4px] rounded-full ${
                    page === step.key ? "bg-[#2C3E8B]" : "bg-[#D3D4D5]"
                  }`}
                  style={{ minWidth: 50 }}
                ></div>
                <p
                  className={`text-[13px] ${
                    page === step.key ? "text-[#2C3E8B]" : "text-[#8E8F90]"
                  } font-[PB]`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Page Contents */}
          {page === "size" && (
            <div className="w-full mt-2">
              <p className="font-[PB] text-[26px] md:text-[32px] text-[#061556]">
                Your Trip Starts Here
              </p>
              <p className="text-[18px] md:text-[22px] text-[#151617]">
                First, let's confirm the number of rooms and guests
              </p>
              <div className="w-full h-auto md:h-[300px] mt-4 md:mt-8 shadow-2xl bg-white p-5 md:p-8 rounded-xl flex flex-col gap-6">
                <p className="text-[18px] md:text-[22px] text-[#061556] font-[PB]">
                  Room Configuration
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex flex-col">
                      <p className="text-[#535455] font-[PB]">Adults</p>
                      <p className="text-[#535455] text-[12px]">Age 13+</p>
                    </div>
                    <div className="flex items-center justify-between w-[120px] md:w-[134px] h-[44px] md:h-[64px] rounded-[6px] bg-[#F7F8F9] px-3 md:px-4">
                      <button
                        onClick={() => setAdult(adult - 1)}
                        className="text-[32px] md:text-[40px] text-[#005EDC]"
                        disabled={adult === 0}
                      >
                        -
                      </button>
                      <p className="font-[PB] text-[22px] md:text-[30px] text-[#061556]">
                        {adult}
                      </p>
                      <button
                        onClick={() => setAdult(adult + 1)}
                        className="text-[32px] md:text-[40px] text-[#005EDC]"
                        disabled={adult === 4}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="flex flex-col">
                      <p className="text-[#535455] font-[PB]">Children</p>
                      <p className="text-[#535455] text-[12px]">Age 0-12</p>
                    </div>
                    <div className="flex items-center justify-between w-[120px] md:w-[134px] h-[44px] md:h-[64px] rounded-[6px] bg-[#F7F8F9] px-3 md:px-4">
                      <button
                        onClick={() => setChildren(children - 1)}
                        className="text-[32px] md:text-[40px] text-[#005EDC]"
                        disabled={children === 0}
                      >
                        -
                      </button>
                      <p className="font-[PB] text-[22px] md:text-[30px] text-[#061556]">
                        {children}
                      </p>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="text-[32px] md:text-[40px] text-[#005EDC]"
                        disabled={children === 4}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <p className="text-[13px] text-[#535455]">
                      Wheelchair accessible
                    </p>
                    <img src="../public/inv.svg" alt="" className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end max-sm:items-center">
                    <p className="text-[13px] md:text-[15px] text-[#535455] font-[PB]">
                      Starting from
                    </p>
                    <p className="mt-2 font-[K] text-[#061556] text-[28px] md:text-[48px]">
                      ${cruise.price}
                    </p>
                    <p className="text-[10px] md:text-[11px] text-[#061556]">
                      Avg USD/person*
                    </p>
                    <p className="text-[#061556] text-[10px] md:text-[11px]">
                      <span className="font-[PB]">
                        ${cruise.price * (children + adult)}
                      </span>{" "}
                      Total/Room
                    </p>
                    <p className="text-[10px] md:text-[11px] text-[#535455]">
                      Taxes & fees included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === "room" && (
            <div className="w-full mt-2">
              <p className="font-[PB] text-[26px] md:text-[32px] text-[#061556] mb-4 md:mb-6">
                Select your Suite room
              </p>
              <div className="h-[60vh] md:h-[600px] overflow-y-auto flex flex-col gap-y-3 md:gap-y-5 pr-1">
                {Object.entries(cruise.hotels || {}).map(
                  ([hotelKey, hotel]) => {
                    const stateroomClasses =
                      cruise.ship_info?.stateroom_classes || {};
                    const stateroom = Object.values(stateroomClasses).find(
                      (s) => s.name === hotel.name
                    );
                    const img = stateroom?.images
                      ? Object.values(stateroom.images)[0]
                      : null;
                    const price =
                      hotel.price || hotel["price"] || hotel["1_price"] || "-";

                    return (
                      <div
                        onClick={() => {
                          setRoomPrice(price);
                          setChosenRoom(hotel.name);
                          setPage("guest");
                          setRoomPhoto(img);
                        }}
                        key={hotelKey}
                        className={`flex flex-col md:flex-row bg-white rounded-2xl shadow cursor-pointer transition-all duration-200 w-full
              ${
                chosenRoom === hotel.name
                  ? "ring-2 ring-[#005EDC] bg-[#e5efff]"
                  : ""
              }
            `}
                      >
                        <img
                          src={img ? `/assets/${img}` : "/no-image.png"}
                          className="w-full md:w-[240px] h-[140px] md:h-full object-cover rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
                          alt={hotel.name}
                        />
                        <div className="flex flex-col md:flex-row justify-between w-full p-4 md:p-6 gap-3">
                          <div className="flex flex-col items-start gap-1 w-full md:w-[60%]">
                            <p className="text-base md:text-xl font-bold text-[#061556]">
                              {hotel.name}
                            </p>
                            {hotel["1_text"] && (
                              <p className="text-[#384378] text-xs md:text-base">
                                {hotel["1_text"]}
                              </p>
                            )}
                            {hotel["2_text"] && (
                              <p className="text-[#384378] text-xs md:text-base">
                                {hotel["2_text"]}
                              </p>
                            )}
                            {hotel["3_text"] && (
                              <p className="text-[#384378] text-xs md:text-base">
                                {hotel["3_text"]}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col items-end min-w-[120px]">
                            <p className="text-[11px] md:text-[15px] text-[#535455] font-[PB]">
                              Starting from
                            </p>
                            <p className="mt-1 md:mt-2 font-[K] text-[#061556] text-[22px] md:text-[36px]">
                              ${price}
                            </p>
                            <p className="text-[10px] md:text-[11px] text-[#061556]">
                              Avg USD/person*
                            </p>
                            <p className="text-[#061556] text-[10px] md:text-[11px]">
                              <span className="font-[PB]">
                                ${price * (children + adult)}
                              </span>{" "}
                              Total/Room
                            </p>
                            <p className="text-[10px] md:text-[11px] text-[#535455]">
                              Taxes & fees included
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {page === "guest" && (
            <div className="w-full mt-2">
              <p className="font-[PB] text-[26px] md:text-[32px] text-[#061556]">
                Who's traveling?
              </p>
              <p className="text-[18px] md:text-[22px] text-[#151617] mb-4 md:mb-6">
                The details you provide for all guests should match their
                government-issued photo IDs.
              </p>

              {/* Кнопки выбора гостя */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-7">
                {guestForms.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveGuest(i)}
                    className={`px-4 md:px-5 py-2 rounded-full text-[15px] md:text-[16px] font-semibold transition-all
                      ${
                        activeGuest === i
                          ? "bg-[#1240B5] text-white"
                          : "bg-[#E4ECF9] text-[#1240B5] hover:bg-[#d0e1f9]"
                      }
                    `}
                  >
                    {getGuestLabel(i)}
                  </button>
                ))}
              </div>

              {/* Форма для текущего гостя */}
              <form className="bg-white rounded-xl shadow-2xl p-4 md:p-8 flex flex-col gap-4 md:gap-5 w-full max-w-[600px]">
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">
                      First legal name
                    </label>
                    <input
                      type="text"
                      className="border px-3 py-2 rounded"
                      name="firstName"
                      value={guestForms[activeGuest]?.firstName || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">
                      Last legal name
                    </label>
                    <input
                      type="text"
                      className="border px-3 py-2 rounded"
                      name="lastName"
                      value={guestForms[activeGuest]?.lastName || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">Gender</label>
                    <select
                      name="gender"
                      className="border px-3 py-2 rounded"
                      value={guestForms[activeGuest]?.gender || ""}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">Date of birth</label>
                    <input
                      type="date"
                      className="border px-3 py-2 rounded"
                      name="dob"
                      value={guestForms[activeGuest]?.dob || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">Citizenship</label>
                    <input
                      type="text"
                      className="border px-3 py-2 rounded"
                      name="citizenship"
                      value={guestForms[activeGuest]?.citizenship || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">
                      Country/Region of residence
                    </label>
                    <input
                      type="text"
                      className="border px-3 py-2 rounded"
                      name="residenceCountry"
                      value={guestForms[activeGuest]?.residenceCountry || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">
                      State/Province of residence
                    </label>
                    <input
                      type="text"
                      className="border px-3 py-2 rounded"
                      name="residenceState"
                      value={guestForms[activeGuest]?.residenceState || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">Email address</label>
                    <input
                      type="email"
                      className="border px-3 py-2 rounded"
                      name="email"
                      value={guestForms[activeGuest]?.email || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-[#384378]">Phone number</label>
                    <input
                      type="tel"
                      className="border px-3 py-2 rounded"
                      name="phone"
                      value={guestForms[activeGuest]?.phone || ""}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-[#384378]">
                    Crown & Anchor number (optional)
                  </label>
                  <input
                    type="text"
                    className="border px-3 py-2 rounded"
                    name="crownNumber"
                    value={guestForms[activeGuest]?.crownNumber || ""}
                    onChange={handleFormChange}
                  />
                </div>
              </form>
            </div>
          )}

          {page === "pref" && (
            <div className="w-full mt-2">
              <p className="font-[PB] text-[26px] md:text-[32px] text-[#061556]">
                Enhance your experience
              </p>
              <p className="text-[18px] md:text-[22px] text-[#151617] mb-4 md:mb-6">
                Select your travel preferences now or after booking.
              </p>

              <div className="w-full p-4 md:p-10 h-[470px] md:h-[600px] border-[1px] border-[#D3D4D5] rounded-[10px] shadow-2xl overflow-y-scroll">
                <img
                  src="../public/pref1.svg"
                  className="w-full md:w-[900px]"
                  alt=""
                />
                <p className="text-[16px] md:text-[18px] font-[PB] text-[#061556] mt-[24px]">
                  Select your Dining Preferences
                </p>
                <p className="mb-4 text-xs md:text-base">
                  If you select Anytime Dining, you must reserve your dining
                  time in the pre-cruise planner after you've completed your
                  reservation.
                </p>
                <div className="flex flex-col gap-2 md:gap-3 mb-4 md:mb-8">
                  {[
                    { label: "Early: 5:00 PM", value: "early" },
                    { label: "Late: 7:30 PM", value: "late1" },
                    { label: "Late: 8:30 PM", value: "late2" },
                    {
                      label: "Anytime (from 6:00 PM to 9:00 PM)",
                      value: "anytime",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="dining"
                        value={option.value}
                        checked={diningPref === option.value}
                        onChange={() => setDiningPref(option.value)}
                        className="w-5 h-5"
                      />
                      <span className="text-[15px] md:text-[17px]">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 mb-4 md:mb-8">
                  <img
                    src="../public/pref2.svg"
                    className="w-full md:w-[900px]"
                    alt=""
                  />
                  <p className="text-[16px] md:text-[18px] font-[PB] text-[#061556] mt-5">
                    Pay Gratuities before your cruise
                  </p>
                  <p className="mb-2 text-xs md:text-base">
                    You can pre-pay gratuities now to show your appreciation for
                    24/7 service from your room attendants, culinary and service
                    staff. Or assign gratuities once onboard through your
                    SeaPass account.
                  </p>
                  <label className="flex items-center gap-3 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      checked={addGratuities}
                      onChange={() => setAddGratuities((g) => !g)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] md:text-[17px] font-[PB]">
                      Add gratuities{" "}
                      <span className="text-[#005EDC]">+$126</span>
                    </span>
                  </label>
                </div>
                <div className="mt-6 md:mt-8 mb-4 md:mb-8">
                  <img
                    src="../public/pref3.svg"
                    className="w-full md:w-[900px]"
                    alt=""
                  />
                  <p className="text-[16px] md:text-[18px] font-[PB] text-[#061556] mt-5">
                    Travel Protection{" "}
                    <span className="text-[#00a07a]">(Recommended)</span>
                  </p>
                  <p className="mb-2 text-xs md:text-base">
                    Add some peace of mind to your vacation with travel
                    protection. Your trip is protected no matter what life
                    throws your way.
                  </p>
                  <ul className="list-disc list-inside mb-2 text-xs md:text-[16px] text-[#384378]">
                    <li>
                      Cancel for any reason - Get up to 100% of your unused
                      prepaid trip costs.
                    </li>
                    <li>
                      Travel delay coverage - Have certain travel expenses
                      covered when you’re delayed.
                    </li>
                    <li>
                      Unexpected medical expenses - Receive reimbursement for
                      medical care and emergency medical transportation.
                    </li>
                    <li>
                      Luggage loss and 24/7 support - Up to $1,500 coverage for
                      lost, stolen, or damaged luggage and up to $500 for
                      replacement items when luggage is delayed.
                    </li>
                  </ul>
                  <label className="flex items-center gap-3 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      checked={addTravelProtection}
                      onChange={() => setAddTravelProtection((v) => !v)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] md:text-[17px] font-[PB]">
                      Add travel protection{" "}
                      <span className="text-[#005EDC]">+$358</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {page === "pay" && (
            <div className="w-full mt-2">
              <p className="font-[PB] text-[26px] md:text-[32px] text-[#061556]">
                Review your selections
              </p>
              <div className="w-full h-auto md:h-[400px] border-[1px] border-[#D3D4D5] max-sm:mt-5 rounded-[10px] shadow-2xl flex flex-col md:flex-row items-start">
                <div className="flex flex-col items-start">
                  <img
                    src={`/public/assets/${roomPhoto}`}
                    className="w-full min-w-[200px] md:min-w-[466px] h-[140px] max-sm:h-auto md:h-[214px] rounded-tl-[10px] object-cover"
                    alt=""
                  />
                  <div className="p-[10px] md:p-[20px]">
                    <p className="text-[#061556] font-[PB] text-[18px] md:text-[24px]">
                      {chosenRoom}
                    </p>
                    <p className="text-[#061556] font-[PB]">
                      Guests:{" "}
                      <span className="font-[PR]">{adult + children}</span>
                    </p>
                  </div>
                </div>
                <div className="p-[10px] md:p-[20px] w-full">
                  <div className="w-full items-center flex justify-between">
                    <p className="text-[#061556] font-[PB]">Cruise fare</p>
                    <p className="text-[#061556]">
                      ${roomPrice * (children + adult)}
                    </p>
                  </div>
                  <div className="w-full items-center flex justify-between mt-1">
                    <p className="text-[#061556] font-[PB]">Taxes and fees</p>
                    <p className="text-[#061556]">$131.10</p>
                  </div>
                  <div className="w-full h-[1px] bg-[#D3D4D5] mt-[16px] md:mt-[20px]"></div>
                  <div className="w-full items-center flex justify-between mt-[16px] md:mt-[20px]">
                    <p className="font-[PB]">Room Total</p>
                    <p className="font-[PB]">
                      ${(roomPrice * (children + adult) + 131.1).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Pay;
