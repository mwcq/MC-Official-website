import React from "react";

export default function Feature() {
  return (
    <div className=" h-screen w-screen bg-[rgb(15,23,42)] flex gap-20 text-white px-3">
      <div className="  w-full h-full">
        <h1 className=" text-5xl font-bold  my-10">动态事件和天气</h1>
        <p>月相和天气影响环境，例如商店关闭或秘密拍卖等事件。</p>
        <div className=" mt-5 w-full relative">
          <video
            src="/video/box6.mp4"
            className=" h-full w-full"
            autoPlay
            loop
            muted
          ></video>
          <img
            src="/images/box6.png"
            className=" absolute -bottom-10 right-0 object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="  w-full h-full">
        <h1 className=" text-5xl font-bold  my-10">独特的沉浸体验</h1>
        <p>
          与有趣的角色对话，在世界中的课程上收集硬币，晚上听鸟儿和蟋蟀的声音。
        </p>
        <div className="mt-5">
          <video
            src="/video/box7.mp4"
            className=" w-full h-full"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
}
