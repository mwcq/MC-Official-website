import React from "react";

export default function More() {
  return (
    <div className=" h-2/4 bg-[rgb(51,65,85)] flex flex-col items-center justify-center px-5">
      <h1 className=" font-bold text-6xl text-white">还有更多...</h1>
      <p className=" text-white text-2xl mt-6 text-center">
        体验你自己的船、银行，在实时商业和集市中进行交易，深入统计数据，参与每日任务，施展魔法，增强你的属性和等级，揭开秘密，挑战困难的障碍课程，并面对强大的Boss战。一个充满无限机会的世界在等着你。
      </p>
      <div className=" mt-5">
        <button className="px-6 py-4 bg-[rgb(250,204,21)] border-2 border-l-[rgb(251,217,80)] border-t-[rgb(251,217,80)] border-r-[rgb(153,86,23)] border-b-[rgb(153,86,23)] text-[rgb(69,26,3)] font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:translate-y-0.5 transition-all duration-150 relative overflow-hidden group">
          <span className="relative z-10">抢先体验</span>
          <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
}
