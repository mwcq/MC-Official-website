import React from "react";

export default function News() {
  return (
    <div className=" h-2/4 bg-[rgb(194,129,92)] flex flex-col  justify-center px-5">
      <div className=" text-[rgb(69,26,3)] text-6xl flex flex-col">
        群岛新闻
        <span className="text-[rgb(69,26,3)] text-xl font-semibold">
          QQ群中公布了很多消息，加入我们的QQ群：{" "}
          <a
            href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=PcwN7dH0OgCqeTQXeZK4kvW-tR3yR3WL&authKey=6sNBWe4oKpiMwUJpMgZFHOpa4XgwF9sI003pQ0FTG58SHw%2Fvv0upeGONeW3HInxt&noverify=0&group_code=136854020"
            className=" underline"
          >
            136854020
          </a>{" "}
          !
        </span>
      </div>
      <div className=" mx-auto mt-10">
        <button className="px-6 py-4 bg-[rgb(250,204,21)] border-2 border-l-[rgb(251,217,80)] border-t-[rgb(251,217,80)] border-r-[rgb(153,86,23)] border-b-[rgb(153,86,23)] text-[rgb(69,26,3)] font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:translate-y-0.5 transition-all duration-150 relative overflow-hidden group">
          <span className="relative z-10">更多新闻</span>
          <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
}
