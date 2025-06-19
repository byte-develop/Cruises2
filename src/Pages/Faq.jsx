import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div>
      <div className="w-full bg-[url(../public/faq.jpg)] h-[400px] bg-cover bg-center flex flex-col items-center justify-center">
        <p className="text-[1.8rem] text-white">FREQUENTLY ASKED</p>
        <p
          className="text-[4.75rem] font-[K] text-white"
        >
          QUESTIONS
        </p>
      </div>

      <div className="w-full mt-[40px] flex justify-center">
        <div className="w-[1300px] flex flex-col mb-[100px]">
          <p
            className="text-[#15264c] text-[3rem] font-[K]"
          >
            VIEW POPULAR TOPICS
          </p>
          <p className="text-[#4a4a4a]">
            Have a question? Don’t be shy. We’re here help you make the most of
            your adventure. Find answers to our most frequently asked questions
            below.
          </p>

          <div className="w-full flex items-center justify-between mt-14">
            <Link to={"/faq/boarding-requirements"} className="flex items-center gap-3 cursor-pointer">
              <img src="../faq1.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Boarding Requirements
              </p>
            </Link>

            <Link to={'/faq/travel-documents'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq2.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Travel Documents
              </p>
            </Link>

            <Link to={'/faq/beverage-package'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq3.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Beverage Packages
              </p>
            </Link>
          </div>

          <div className="w-full flex items-center justify-between mt-5">
            <Link to={'/faq/check-in'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq4.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Check-In
              </p>
            </Link>

            <Link to={'/faq/transportation-embarkation-pier'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq6.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Embarkation & Transportation
              </p>
            </Link>

            <Link to={'/faq/onboard-internet-device-service'} className="flex items-center gap-3  cursor-pointer" >
              <img src="../faq9.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Onboard Internet
              </p>
            </Link>
          </div>

          <div className="w-full flex items-center justify-between mt-5">
            <Link to={'/reservation-payment-cancellation-policy'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq20.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem]  w-[300px] font-[PB] text-[#005edc] underline">
                Payment & Cancellation Policies
              </p>
            </Link>

            <Link to={'/packing-luggage-tags'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq11.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem]  w-[300px] font-[PB] text-[#005edc] underline">
                Luggage, Dress Code & Packing
              </p>
            </Link>

            <Link to={'/directions-cruise-port'} className="flex items-center gap-3  cursor-pointer">
              <img src="../faq12.png" className="w-[60px] h-[60px]" alt="" />
              <p className="text-[1.2rem] w-[300px] font-[PB] text-[#005edc] underline">
                Terminal Location & Directions
              </p>
            </Link>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Faq;
