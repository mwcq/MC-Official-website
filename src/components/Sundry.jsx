import React from "react";

const lists = [
  { name: "物品和配方" },
  { name: "世界地图" },
  { name: "兽类图鉴" },
  { name: "指南" },
  { name: "船只" },
  { name: "目标" },
];

export default function Sundry() {
  return (
    <div className="  h-screen bg-[rgb(2,6,23)] px-5 py-10 flex flex-col">
      <h1 className=" text-6xl text-white">探索我们的宇宙</h1>
      <p className=" text-lg text-white">查看所有物品、配方、世界地图等！</p>
      <div className="grid grid-cols-2 gap-10 h-full mt-5">
        {lists.map((item, index) => (
          <div
            className="flex items-center justify-center bg-[rgb(2,132,199)]  border-l-[rgb(65,163,213)] border-t-[rgb(65,163,213)] border-r-[rgb(2,94,141)] border-b-[rgb(2,94,141)] text-white font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:scale-105 transition-all duration-150 relative overflow-hidden group"
            key={index}
            style={{ borderWidth: "4px" }}
          >
            <span className="text-xl">{item.name}</span>
            <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
          </div>
        ))}
      </div>
      <div className=" mt-5 mx-auto">
        <button className="px-6 py-4 bg-[rgb(250,204,21)] border-2 border-l-[rgb(251,217,80)] border-t-[rgb(251,217,80)] border-r-[rgb(153,86,23)] border-b-[rgb(153,86,23)] text-[rgb(69,26,3)] font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:translate-y-0.5 transition-all duration-150 relative overflow-hidden group">
          <span className="relative z-10">抢先体验</span>
          <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
}
