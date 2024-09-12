import React from "react";

export default function Ready() {
  return (
    <div className=" h-screen bg-[rgb(255,214,155)] flex gap-20 justify-between items-center">
      <div className="flex-1 h-full flex items-center ml-5">
        <iframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=113118483055723&bvid=BV1Zd4BeAEy4&cid=25824788973&p=1"
          scrolling="no"
          border="0"
          frameBorder="no"
          framespacing="0"
          allowFullScreen="true"
          className=" h-2/3 w-full"
        ></iframe>
      </div>
      <div className=" flex-1 flex flex-col justify-center gap-5">
        <div className=" text-6xl font-semibold text-[rgb(69,26,3)]">
          准备好进入Minebox
        </div>
        <div className=" text-[rgb(120,53,15)]   text-xl">
          Minebox的核心是升级、收集资源和扩展你自己的岛屿的乐趣。从一个小块地开始你的旅程，将它变成一个宽敞的避风港，一块一块地打造你的王国。
          扬帆起航到未知的岛屿，勇敢面对群岛的危险。您的传奇冒险正在幕后准备中！
        </div>
        <div className=" m-auto">
          <button className="px-6 py-4 bg-[rgb(250,204,21)] border-2 border-l-[rgb(251,217,80)] border-t-[rgb(251,217,80)] border-r-[rgb(153,86,23)] border-b-[rgb(153,86,23)] text-[rgb(69,26,3)] font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:translate-y-0.5 transition-all duration-150 relative overflow-hidden group">
            <span className="relative z-10">开始冒险</span>
            <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
