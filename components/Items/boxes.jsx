import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledWrapper = styled.div`
  .container {
    margin: 0;
    overflow: auto;
    display: flex;
    scroll-snap-type: x mandatory;
    width: 100%;

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.35) transparent;
    -webkit-overflow-scrolling: touch;
  }

  /* WebKit browsers (Chrome, Safari, Edge) */
  .container::-webkit-scrollbar {
    height: 2px; /* horizontal scrollbar thickness */
    width: 2px; /* vertical scrollbar thickness */
  }
  .container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 9999px;
  }
  .container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.55);
  }

  .card {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 1px;
    padding: 2rem;
    margin: 1rem;
    width: 100%;
  }

  .title {
    width: 100%;
    display: inline-block;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin: 1rem auto;
  }
`;
const Boxes = ({
  name,
  src,
  title,
  header,
  carimage,
  description,
  languages,
  link,
}) => {
  const [popUp, setPopUp] = useState(false);
  const containerRef = useRef(null);
  const animationCSS = `
    @keyframes overlayFade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* only translate/scale — do not animate opacity */
  @keyframes fadeUp {
    0% {
      transform: translateY(450px) scale(0.98);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  .popup-card {
    animation: fadeUp 800ms cubic-bezier(.16,.84,.24,1) both;
    transform-origin: bottom;
  }

`;

  const scroll = (dir = "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.35);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <style>{animationCSS}</style>
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
            <Image className="w-16 h-16 rounded-sm" src={src} alt="icon"/>
            <div className="flex flex-col gap-1 test-start relative">
              <p className="text-blue-900 group-hover:text-blue-200 text-start font-semibold max-w-[20ch] overflow-hodden">
                {name}
              </p>
              <p className="text-sm text-start text-zinc-400 max-w-[20ch] overflow-hidden whitespace-nowrap truncate">
                {title}
              </p>
            </div>
          </div>
          <div className="absolute h-full w-full left-0 top-0 bg-white ring-1 ring-black -z-10 rounded-3xl transition-all ease-in-out group-hover:bg-[#3A4498]"></div>
          <div className="absolute h-full w-full left-1.5 top-1.5 group-hover:left-2 group-hover:top-2 bg-zinc-400 ring-1 ring-zinc-400 group-hover:ring-black -z-20 rounded-3xl transition-all ease-in-out group-hover:bg-[#0BE8F4] shadow-md group-hover:shadow-lg"></div>
        </div>
      </button>
      {popUp && (
        <div
          onClick={() => setPopUp(false)}
          className="popup-overlay fixed inset-0 z-50 bg-black/50 flex items-end justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="popup-card w-full max-w-xl bg-white rounded-t-xl flex flex-col h-auto justify-start"
          >
            <div className="flex items-center w-full justify-center">
              <span className="bg-zinc-100 rounded-full w-[100px] h-2 mt-4 mx-auto"></span>
            </div>
            <div className="group flex w-full justify-between px-4 py-2">
              <div>
                <p className="flex flex-row text-xl text-zinc-500 font-bold items-center gap-1">
                  <svg
                    className="w-8 group-hover:rotate-[1.58rad] rotate-[0.8rad] duration-500"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.24000000000000005"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 3V21M16 4L12 8L8.00878 4M8.00878 20L12 16L16 20M3 12H21M4 8L8.00878 12L4 16M20 16L16 12L20 8"
                        stroke="#71717A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </div>
            <div className="px-6 py-4 flex flex-col gap-3">
              <div className="flex gap-5">
                <Image className="w-20 h-20 rounded-sm" src={src} alt="icon" />
                <div className="flex flex-col gap-1 justify-center">
                  <p className="justtxt text-xl font-semibold">{header}</p>
                  <p className="justtxt text-sm text-blue-800">{title}</p>
                </div>
              </div>
              <StyledWrapper>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => scroll("left")}
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white/70 h-5 w-5 rounded-full pr-[1px] flex items-center pb-0.5 justify-center shadow-md"
                    aria-label="scroll left"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => scroll("right")}
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white/70  h-5 w-5 rounded-full pl-[1px] flex items-center pb-0.5 justify-center shadow-md"
                    aria-label="scroll right"
                  >
                    ›
                  </button>
                  <div ref={containerRef} className="container gap-3">
                  {carimage.map((img, idx) => (
                     <Image
                      className="object-fill aspect-video h-40 max-w-full rounded-md object-cover inline-block"
                      src={img}
                      alt=""
                    />
                  ))}
                  </div>
                </div>
              </StyledWrapper>
              <div className="flex">
                <p className="text-sm text-blue-500 underline">
                  {Array.isArray(languages) ? languages.join(" | ") : ""}
                </p>
              </div>
              <p className="text-sm text-zinc-400">{description}</p>
            </div>
            <div className="mt-auto flex flex-col gap-2 p-4">
              <button className="w-full">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className="vaul-scrollable"
                >
                  <span className="bg-[#1a263b]  text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link w-4 h-4 mr-2"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    Project Link
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
