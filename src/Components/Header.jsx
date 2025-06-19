import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const MAIN_MENU = [
  { label: "Find a Cruise", submenu: "find" },
  { label: "Cruise Deals", link: "/deals" },
  { label: "Cruise Ships", submenu: "ships" },
  { label: "Destinations", submenu: "dest" },
  { label: "FAQ", link: "/faq" },
  { label: "Weekend Cruises", link: "/weekend" },
];

const FIND_MENU = [
  { label: "Back to Main Menu", back: true },
  { label: "Search Cruises", link: "/find-a-cruise" },
  { label: "Cruise Deals", link: "#" },
  { label: "Weekend Cruises", link: "/weekend" },
  { label: "Last Minute Cruises", link: "/last-minute-cruises" },
];

const SHIPS_MENU = [
  { label: "Back to Main Menu", back: true },
  { label: "All Cruise Ship", link: "/ships" },
  { label: "Desk Plans", link: "/plans" },
  { label: "Cruise Rooms", link: "/cruise-rooms" },
];

const DEST_MENU = [
  { label: "Back to Main Menu", back: true },
  { label: "All Cruise Destinations", link: "/destinations" },
  { label: "Caribbean Cruises", link: "/find-a-cruise" },
  { label: "Bahamas Cruises", link: "/find-a-cruise" },
  { label: "Alaska Cruises", link: "/find-a-cruise" },
  { label: "European Cruises", link: "/find-a-cruise" },
  { label: "Mediterranean Cruises", link: "/find-a-cruise" },
];

const getMenu = (menu) => {
  switch (menu) {
    case "find":
      return FIND_MENU;
    case "ships":
      return SHIPS_MENU;
    case "dest":
      return DEST_MENU;
    default:
      return MAIN_MENU;
  }
};

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [burgerVisible, setBurgerVisible] = useState(false); // Controls mount/unmount for animation
  const [currentMenu, setCurrentMenu] = useState("main");
  const [animState, setAnimState] = useState("closed"); // 'opening' | 'open' | 'closing' | 'closed'
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Start open animation
  const openBurger = () => {
    setBurgerVisible(true);
    setCurrentMenu("main");
    setTimeout(() => setAnimState("opening"), 10); // next tick for animation
  };

  // Start close animation
  const closeBurger = () => {
    setAnimState("closing");
  };

  // Handle the end of the closing animation
  useEffect(() => {
    if (animState === "closing") {
      const timeout = setTimeout(() => {
        setBurgerVisible(false);
        setAnimState("closed");
      }, 300); // match duration of CSS transition
      return () => clearTimeout(timeout);
    } else if (animState === "opening") {
      setBurgerOpen(true);
      setAnimState("open");
    } else if (animState === "closed") {
      setBurgerOpen(false);
    }
  }, [animState]);

  // Esc to close burger
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") closeBurger();
    };
    if (burgerVisible) window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [burgerVisible]);

  // Prevent scroll when burger is open
  useEffect(() => {
    if (burgerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [burgerVisible]);

  // Esc to close search
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    if (searchOpen) window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [searchOpen]);

  // Focus input when open
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleMenuClick = (item) => {
    if (item.back) {
      setCurrentMenu("main");
    } else if (item.submenu) {
      setCurrentMenu(item.submenu);
    } else if (item.link) {
      closeBurger();
      if (item.link.startsWith("/")) {
        window.location.href = item.link;
      } else if (item.link !== "#") {
        window.location.href = item.link;
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setSearchOpen(false);
      setSearchValue("");
      navigate(
        `/find-a-cruise?search=${encodeURIComponent(searchValue.trim())}`
      );
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="w-full h-[64px] md:h-[80px] bg-[#0C214D] flex justify-center z-10 relative">
        <div className="w-full max-w-[1300px] h-full flex items-center justify-between px-4 md:px-0">
          {/* Left: burger, logo, desktop nav */}
          <div className="flex items-center gap-2 md:gap-[48px] w-full justify-between md:justify-start">
            {/* BURGER BUTTON always visible */}
            <button
              onClick={openBurger}
              aria-label="Open menu"
              className="mr-2"
            >
              <img
                src="../public/burger.svg"
                alt=""
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </button>
            {/* LOGO */}
            <Link to="/">
              <img
                src="../public/logo.svg"
                alt=""
                className="h-[32px] md:h-[40px]"
                style={{ minWidth: 90 }}
              />
            </Link>
            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-[32px] lg:gap-[70px]">
              <Link
                to="/find-a-cruise"
                className="uppercase text-white font-[PR] text-[13px] lg:text-[14px] tracking-[2px]"
              >
                FIND A CRUISE
              </Link>
              <Link
                to="/deals"
                className="uppercase text-white font-[PR] text-[13px] lg:text-[14px] tracking-[2px]"
              >
                DEALS
              </Link>
              <Link
                to="/ships"
                className="uppercase text-white font-[PR] text-[13px] lg:text-[14px] tracking-[2px]"
              >
                SHIPS
              </Link>
              <Link
                to="/destinations"
                className="uppercase text-white font-[PR] text-[13px] lg:text-[14px] tracking-[2px]"
              >
                DESTINATIONS
              </Link>

            </div>
              <div className="relative min-w-[36px] md:hidden" style={{ minWidth: 36 }}>
                {!searchOpen ? (
                  <button
                    onClick={() => setSearchOpen(true)}
                    aria-label="Search"
                    className="z-20 relative flex items-center justify-center w-[36px] h-[36px]"
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="../public/lupa.svg"
                      alt=""
                      className="w-[40px] h-[40px] md:w-[28px] md:h-[28px]"
                    />
                  </button>
                ) : (
                  <form
                    className="flex items-center gap-2 animate-fadeIn rounded-[4px] px-2 py-1 bg-[#162d54]"
                    style={{ minWidth: 160, maxWidth: 320 }}
                    onSubmit={handleSearchSubmit}
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="flex-1 text-[15px] md:text-[16px] text-white outline-none border-none bg-transparent font-[PR] px-2 py-[6px]"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onBlur={() => setSearchOpen(false)}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="p-0 m-0 bg-transparent border-none outline-none"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      tabIndex={-1}
                    >
                      <img
                        src="../public/lupa.svg"
                        alt="Search"
                        style={{ width: 28, height: 28 }}
                      />
                    </button>
                  </form>
                )}
                <style>{`
              .animate-fadeIn {
                animation: fadeIn .2s;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px);}
                to { opacity: 1; transform: none;}
              }
            `}</style>
              </div>
          </div>
          {/* SEARCH BUTTON & FIELD */}
          <div className="relative min-w-[36px] hidden md:block" style={{ minWidth: 36 }}>
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="z-20 relative flex items-center justify-center w-[36px] h-[36px]"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src="../public/lupa.svg"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </button>
            ) : (
              <form
                className="flex items-center gap-2 animate-fadeIn rounded-[4px] px-2 py-1 bg-[#162d54]"
                style={{ minWidth: 160, maxWidth: 320 }}
                onSubmit={handleSearchSubmit}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  className="flex-1 text-[15px] md:text-[16px] text-white outline-none border-none bg-transparent font-[PR] px-2 py-[6px]"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onBlur={() => setSearchOpen(false)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-0 m-0 bg-transparent border-none outline-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  tabIndex={-1}
                >
                  <img
                    src="../public/lupa.svg"
                    alt="Search"
                    style={{ width: 28, height: 28 }}
                  />
                </button>
              </form>
            )}
            <style>{`
              .animate-fadeIn {
                animation: fadeIn .2s;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px);}
                to { opacity: 1; transform: none;}
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* BURGER MENU OVERLAY WITH ANIMATION */}
      {burgerVisible && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            animState === "opening" || animState === "open"
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          } `}
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={closeBurger}
        >
          <div
            className={`fixed top-0 left-0 h-full w-[88vw] max-w-[350px] bg-white shadow-lg flex flex-col z-50
              transition-transform duration-300
              ${
                animState === "opening" || animState === "open"
                  ? "translate-x-0"
                  : "-translate-x-full"
              }
            `}
            style={{ willChange: "transform" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-6 border-[#EAEAEA]">
              <img
                src="../public/logo.svg"
                alt="Logo"
                className="h-[28px] md:h-[36px]"
              />
              <button
                onClick={closeBurger}
                className="text-[34px] md:text-[40px] text-[#005edc] font-[PR]"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="flex-1 flex flex-col p-6 gap-2">
              {getMenu(currentMenu).map((item, idx) =>
                item.link && item.link.startsWith("/") ? (
                  <Link
                    to={item.link}
                    key={idx}
                    className={`text-[20px] md:text-[22px] font-[PR] text-[#005edc] py-2 px-2 rounded hover:bg-[#F5F6F7] transition text-left`}
                    onClick={closeBurger}
                  >
                    {item.label}
                  </Link>
                ) : item.back ? (
                  <button
                    key={idx}
                    className={`text-[20px] md:text-[22px] text-[#005edc] font-[PR] py-2 flex items-center px-2 rounded hover:bg-[#F5F6F7] transition text-left`}
                    onClick={() => handleMenuClick(item)}
                  >
                    <img
                      src="../public/arrow_right.svg"
                      alt=""
                      className="mr-4"
                      style={{ transform: "rotate(180deg)" }}
                    />
                    {item.label}
                  </button>
                ) : (
                  <button
                    key={idx}
                    className={`text-[20px] md:text-[22px] text-[#005edc] font-[PR] py-2 flex justify-between px-2 rounded hover:bg-[#F5F6F7] transition text-left`}
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.label}
                    {item.submenu ? (
                      <img
                        src="../public/arrow_right.svg"
                        alt=""
                        className="ml-4"
                      />
                    ) : null}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
