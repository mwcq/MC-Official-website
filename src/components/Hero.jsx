import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className=" h-[110vh] w-full flex items-center justify-center">
      <video
        className="w-full absolute top-0 left-0 object-cover -z-50"
        autoPlay
        loop
        preload="none"
        muted
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col items-center z-10">
        <img
          src="/images/title_top.png"
          className=" object-contain"
          width={550}
          height={120}
          alt=""
        />
        <img
          src="/images/title_bottom.png"
          className=" object-contain"
          alt=""
          width={750}
          height={120}
        />
        <div className=" mt-5 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer py-3 px-10 bg-[#4F46E5] rounded-sm border-[4px] border-l-[#7b74ec] border-t-[#7b74ec] border-r-[#3e37bc] border-b-[#3e37bc] ">
          <div className="flex items-center justify-center ">
            <svg
              t="1726067943222"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5311"
              width="32"
              height="32"
            >
              <path
                d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                p-id="5312"
                fill="#ffffff"
              ></path>
            </svg>
            <span className=" text-white text-xl font-semibold">加入我们</span>
          </div>
        </div>
      </div>
    </div>
  );
}
