import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full px-4 absolute z-10">
      <div className="">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="">
        <div className="flex gap-8 justify-center">
          <div className="group flex items-center cursor-pointer">
            <svg
              t="1726066370867"
              className="icon transition-colors duration-300 group-hover:fill-yellow-400"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1670"
              id="mx_n_1726066370868"
              width="32"
              height="32"
            >
              <path
                d="M920.528912 444.49616l-340.111125-340.114737a135.932464 135.932464 0 0 0-96.155899-39.758503L200.418112 64.662657h-0.018063C125.275769 64.662657 64.301413 125.40943 64.301413 200.548159v283.673992a136.091412 136.091412 0 0 0 39.881326 96.199248l340.230335 340.241173a136.022775 136.022775 0 0 0 192.369598 0l283.74624-283.76069c53.128139-53.131752 53.128139-139.277583 0-192.405722z m-45.209673 147.192436l-283.746241 283.760691a72.064544 72.064544 0 0 1-101.924964 0l-340.212273-340.241173A72.187367 72.187367 0 0 1 128.241582 484.218538V200.548159A72.021195 72.021195 0 0 1 200.396437 128.602826l283.843776-0.039737a71.887535 71.887535 0 0 1 50.935389 21.053294l340.114737 340.1039a72.104281 72.104281 0 0 1 0.0289 101.968313z"
                className="fill-current text-white group-hover:text-yellow-400"
                p-id="1671"
              ></path>
              <path
                d="M384.002258 255.999097c-70.69543 0-128.003161 57.307731-128.003161 128.003161S313.306828 511.998194 384.002258 511.998194s127.999548-57.307731 127.999548-127.999549S454.690463 255.999097 384.002258 255.999097z m45.296371 173.29592a64.059379 64.059379 0 1 1 18.759396-45.292759 63.640337 63.640337 0 0 1-18.763008 45.292759z"
                className="fill-current text-white group-hover:text-yellow-400"
                p-id="1672"
              ></path>
            </svg>
            <span className=" text-white ml-2 font-semibold text-xl group-hover:text-yellow-400">
              抢先体验
            </span>
          </div>
          <div className="group flex items-center cursor-pointer">
            <svg
              t="1726067355843"
              className="icon transition-colors duration-300 group-hover:fill-yellow-400"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2747"
              width="32"
              height="32"
            >
              <path
                className="fill-current text-white group-hover:text-yellow-400"
                d="M832 192v640H192V192h640m32-64H160c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V160c0-17.6-14.4-32-32-32zM768 640H576v64h192v-64zM512 512H256v192h256V512z m256 0H576v64h192v-64z m0-192H256v128h512V320z"
                p-id="2748"
              ></path>
            </svg>
            <span className=" text-white ml-2 font-semibold text-xl group-hover:text-yellow-400">
              新闻
            </span>
          </div>
          <div className="group flex items-center cursor-pointer">
            <svg
              t="1726067467544"
              className="icon transition-colors duration-300 group-hover:fill-yellow-400"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3830"
              width="32"
              height="32"
            >
              <path
                className="fill-current text-white group-hover:text-yellow-400"
                d="M554.666667 849.066667c-12.8 0-29.866667 4.266667-42.666667 4.266666-187.733333 0-341.333333-153.6-341.333333-341.333333 0-64 17.066667-123.733333 51.2-179.2l8.533333-12.8c25.6-42.666667 59.733333-76.8 102.4-102.4 42.666667-25.6 89.6-42.666667 140.8-46.933333h38.4c187.733333 0 341.333333 153.6 341.333333 341.333333 0 76.8-25.6 145.066667-64 200.533333l-4.266666 4.266667c-25.6 34.133333-59.733333 64-98.133334 89.6-42.666667 25.6-89.6 38.4-132.266666 42.666667zM507.733333 768v-85.333333l-64-93.866667 106.666667-106.666667 64 76.8h102.4l34.133333 34.133334c8.533333-25.6 12.8-51.2 12.8-81.066667 0-140.8-115.2-256-256-256-12.8 0-25.6 0-38.4 4.266667l-29.866666 29.866666L494.933333 341.333333l17.066667 115.2-85.333333 85.333334-145.066667-140.8C264.533333 435.2 256 469.333333 256 512c0 140.8 110.933333 256 251.733333 256z"
                fill="#444444"
                p-id="3831"
              ></path>
            </svg>
            <span className=" text-white ml-2 font-semibold text-xl group-hover:text-yellow-400">
              宇宙
            </span>
          </div>
        </div>
      </div>
      <div className=" transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer py-3 px-10 bg-[#4F46E5] rounded-sm border-[4px] border-l-[#7b74ec] border-t-[#7b74ec] border-r-[#3e37bc] border-b-[#3e37bc] ">
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
  );
}
