import React from "react";

export default function Introduce({
  props: {
    title,
    desc,
    video,
    img,
    button = null,
    occupation = null,
    occupationBg = null,
    bgColor = null,
    mode = null, // 'left' or 'right'
  },
}) {
  return (
    <div
      className={` h-3/4 flex justify-center items-center py-10 gap-20 text-white`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
    >
      {mode === "left" ? (
        <>
          <div className="flex-1 h-full mx-5 flex justify-center items-center ">
            <div className="h-full w-full relative ">
              <video
                className=" absolute top-5 left-auto w-full h-5/6 object-cover rounded"
                src={video}
                loop
                autoPlay
                muted
              ></video>
              <img
                src={img}
                className=" h-full w-full absolute -bottom-5 left-0"
                alt=""
              />
            </div>
          </div>
          <div className=" flex-1 flex flex-col justify-center h-full mx-5">
            <h1 className="text-4xl xl:text-6xl font-bold">{title}</h1>
            <p className=" mt-4 font-bold text-lg">{desc}</p>
            {occupation && (
              <span
                className="mt-3 rounded p-3 "
                style={{ backgroundColor: `rgb(${occupationBg})` }}
              >
                {occupation}
              </span>
            )}
            {button && (
              <div className=" mt-5">
                <button className="px-6 py-4 bg-[rgb(250,204,21)] border-2 border-l-[rgb(251,217,80)] border-t-[rgb(251,217,80)] border-r-[rgb(153,86,23)] border-b-[rgb(153,86,23)] text-[rgb(69,26,3)] font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:translate-y-0.5 transition-all duration-150 relative overflow-hidden group">
                  <span className="relative z-10">{button}</span>
                  <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className=" flex-1 flex flex-col justify-center h-full mx-5">
            <h1 className="text-4xl xl:text-6xl font-bold">{title}</h1>
            <p className=" mt-4 font-bold text-lg">{desc}</p>
            {occupation && (
              <span
                className="mt-3 rounded p-3 "
                style={{ backgroundColor: `rgb(${occupationBg})` }}
              >
                {occupation}
              </span>
            )}
            {button && (
              <div className=" mt-5">
                <button className="px-6 py-4 bg-[rgb(250,204,21)] border-2 border-l-[rgb(251,217,80)] border-t-[rgb(251,217,80)] border-r-[rgb(153,86,23)] border-b-[rgb(153,86,23)] text-[rgb(69,26,3)] font-semibold rounded shadow-[0_4px_0_rgb(0,0,0,0.25)] hover:shadow-[0_2px_0_rgb(0,0,0,0.25)] hover:translate-y-0.5 transition-all duration-150 relative overflow-hidden group">
                  <span className="relative z-10">{button}</span>
                  <span className="absolute inset-0 bg-white opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
                </button>
              </div>
            )}
          </div>
          <div className="flex-1 h-full mx-5 flex justify-center items-center ">
            <div className="h-full w-full relative ">
              <video
                className=" absolute top-5 left-auto w-full h-5/6 object-cover rounded"
                src={video}
                loop
                autoPlay
                muted
              ></video>
              <img
                src={img}
                className=" h-full w-full absolute -bottom-5 left-0"
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
