import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Boxes = ({ name, src, title }) => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    document.body.style.overflow = popUp ? "hidden" : "";
  }, [popUp]);
  return (
    <div>
      <button
        onClick={() => setPopUp(true)}
        className="group static transition-all ease-in-out fade-in"
      >
        <div className="relative container z-10">
          <div
            className="flex gap-4 py-6 px-8 rounded-3xl h-32 w-80 lg:w-[275px] xl:w-[350px]
          items-center  ring-1 ring-blue-400
          relative top-0 left-0 group-hover:-top-2 group-hover:-left-2 transition-all ease-in-out bg-blue-200 group-hover:bg-transparent
          "
          >
            <img className="w-16 h-16 rounded-sm" src={src} alt="" />
            <div className="flex flex-col gap-1 test-start relative">
              <p className="text-blue-900 group-hover:text-blue-200 text-start font-semibold max-w-[20ch] overflow-hodden">
                {name}
              </p>
              <p class="text-sm text-start text-zinc-400 max-w-[20ch] overflow-hidden whitespace-nowrap truncate">
                {title}
              </p>
            </div>
          </div>
          <div class="absolute h-full w-full left-0 top-0 bg-white ring-1 ring-black -z-10 rounded-3xl transition-all ease-in-out group-hover:bg-[#3A4498]"></div>
          <div class="absolute h-full w-full left-1.5 top-1.5 group-hover:left-2 group-hover:top-2 bg-zinc-400 ring-1 ring-zinc-400 group-hover:ring-black -z-20 rounded-3xl transition-all ease-in-out group-hover:bg-[#0BE8F4] shadow-md group-hover:shadow-lg"></div>
        </div>
      </button>
      { popUp && (
        <div
          onClick={() => setPopUp(false)}
          className="flex flex-col gap-5 fixed inset-0 z-50 bg-black/50 flex items-center justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col bg-white w-full max-w-xl h-auto rounded-t-xl justify-start"
          >
            <div className="flex items-center w-full justify-center">
              <span className="bg-zinc-100 rounded-full w-[100px] h-2 mt-4 mx-auto"></span>
            </div>
            <div className="group flex w-full justify-between px-3">
              <div>
                <p className="flex flex-row text-xl text-zinc-500 font-bold items-center gap-1">
                  <svg
                    className="w-8 group-hover:rotate-[1.58rad] rotate-[0.8rad] duration-500"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.24000000000000005"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 3V21M16 4L12 8L8.00878 4M8.00878 20L12 16L16 20M3 12H21M4 8L8.00878 12L4 16M20 16L16 12L20 8"
                        stroke="#71717A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  Amine Project's
                </p>
              </div>
              <svg
                onClick={() => setPopUp(false)}
                className="mt-1 mr-1 hover:stroke-zinc-300 stroke-zinc-500 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4D4D4ff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </div>
            <div className="px-6 py-7 flex flex-col gap-6">
              <div className="flex gap-5">
                <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
                <div className="flex flex-col gap-1 justify-center">
                <p className="justtxt text-xl font-semibold">Pong Arena : Ping Pong Game App</p>
                  <p className="justtxt text-sm text-blue-800">42 Cursus</p>
                </div>
                
              </div>
              <div className="slider-container">
      <Slider {...settings}>
        <div >
        <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
        </div>
        <div >
        <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
        </div>
        <div >
        <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
        </div>
        <div >
        <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
        </div>
        <div >
        <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
        </div>
        <div>
        <img className="w-20 h-20 rounded-sm" src={src} alt=""/>
        </div>
      </Slider>
    </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
