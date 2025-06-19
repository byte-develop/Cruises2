import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[650px] relative overflow-hidden">
      <video
        src="/homeVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      {/* Ваш контент поверх видео */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="w-[1300px] flex flex-col items-start">
          <img src="../public/beat.png" className="w-[650px]" alt="" />
          <p className="uppercase font-[PB] text-white text-[22px]">Up to $800 off</p>
          <p className="uppercase font-[PB] text-white text-[22px]">
            + Save an additional $50 on South Florida getaway sailings
          </p>
          <Link to={'/find-a-cruise'} className="flex items-center justify-center mt-[30px] w-[155px] h-[40px] rounded-[3px] bg-[#FDBB11] text-[14px] text-[#002859] uppercase">Shop Now</Link>


          <div className="w-full flex justify-center mt-12">
            <div className="w-[1100px] h-[110px] bg-[#F7F8F9] rounded-[4px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
