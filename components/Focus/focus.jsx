"use client";
import React from "react";
// <style></style>
const Focus = () => {
  return (
    <section className="fx-grid h-full flex flex-col sm:w-11/12 w-full xl:w-[90%] mx-auto mt-20 px-16 sm:px-5 xl:px-24 gap-4 z-20">
      {/* local styles for sheen/tilt/glow + content slide/underline */}
      <style jsx global>{`
        .st {
          strokeWidth:10;
        }
        .a
        {
          fill:none;stroke:#000000;strokeLinecap:round;stroke-linejoin:round;
          strokeWidth:2;
        }
        .b {
        fill:none;stroke:#000000;strokeLinecap:round;stroke-linejoin:round;
          strokeWidth:1.2;
          }
        .fx-grid {
          perspective: 1200px;
        }
        .fancy-card {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.35s cubic-bezier(0.2, 0.9, 0.2, 1),
            box-shadow 0.35s ease, background 0.4s ease;
          will-change: transform;
        }
        .group:hover .fancy-card {
          transform: translateY(-6px);
        }
        .fancy-card:hover {
          transform: translateY(-12px) scale(1.04) rotateX(2deg) rotateY(-2deg);
          box-shadow: 0 20px 50px -12px rgba(59, 130, 246, 0.45);
        }
        .fancy-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -130%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.28) 45%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(20deg);
          opacity: 0;
          transition: left 0.8s ease, opacity 0.4s ease;
          pointer-events: none;
        }
        .fancy-card:hover::before {
          left: 130%;
          opacity: 1;
        }
        .fancy-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0),
            0 0 60px 0 rgba(59, 130, 246, 0) inset;
          transition: box-shadow 0.35s ease;
          pointer-events: none;
        }
        .fancy-card:hover::after {
          box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.35),
            0 0 60px 10px rgba(59, 130, 246, 0.2) inset;
        }
      `}</style>
    
      <div className="w-full flex flex-col gap-4 z-20">
        <div className="flex w-full h-1/2 flex-col md:flex-row gap-4 z-20">
          <div className="group text-black flex flex-col justify-between rounded-3xl p-8 gap-3 cursor-pointer w-full md:w-7/12 bg-blue-300">
            <svg className="group-hover:rotate-[-0.6rad] a w-12 lg:w-24 h-12 lg:h-24 group-hover:scale-110 transition-all ease-in-out duration-300" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path className="a" d="M43.39,22a11.63,11.63,0,0,0-6.9-10.62A11.62,11.62,0,0,0,18.55,7.1h-.3A11.63,11.63,0,0,0,6.69,19.9a11.61,11.61,0,0,0,4.87,17.26A11.6,11.6,0,0,0,29,41.06c.29,0,.57,0,.86,0A11.63,11.63,0,0,0,41.51,29.47c0-.35,0-.69-.06-1A11.51,11.51,0,0,0,43.39,22Z"></path><path className="a" d="M6.69,19.9c.95,5.33,2.76,6.86,4.19,8.3s5.95,5.25,7,6.79"></path><path className="a" d="M41.45,28.44c-1-5.33-2.76-6.87-4.19-8.3s-5.95-5.26-7-6.8"></path><path className="a" d="M29,41.06c4.14-3.5,4.57-5.83,5.09-7.79s.89-5.47,2.38-9.46a17,17,0,0,0,0-12.41"></path><path className="a" d="M18.55,7.1c-4.14,3.5-4.09,6.23-4.61,8.19a69.25,69.25,0,0,1-2.38,9.46,17,17,0,0,0,0,12.41"></path><path className="a" d="M38.46,31.24c-4.71,3.34-7.43,2.76-11,4-2.12.71-3.42,2.19-9.94,2.62-4.28.29-5.92-.66-5.92-.66"></path><path className="a" d="M9.59,17.32c4.71-3.33,7.43-2.76,11-4,2.12-.71,3.42-2.19,9.94-2.62,4.28-.28,5.92.66,5.92.66"></path><path className="a" d="M27.18,11.12c-1.57-1.66-5.05-4-8.63-4"></path><path className="a" d="M20.8,37.45A11.85,11.85,0,0,0,29,41.06"></path></g></svg>
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-light group-hover:font-normal transition-all ease-in-out duration-300">Simplicity</h3>
            <p className="lg:text-base text-[12px] opacity-90 mt-2 lg:text-l">
              Focusing on what matters most and expressing it clearly without unnecessary complexity
            </p>
          </div>
          <div className="flex flex-col group rounded-3xl p-8 gap-3 justify-between cursor-pointer w-full md:w-5/12 bg-blue-400">
          <svg className="group-hover:rotate-[-0.18rad] w-12 lg:w-24 h-12 lg:h-24 group-hover:scale-110 transition-all ease-in-out duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="-1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="b" d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#1C274C" strokeWidth="1.5"></path> </g></svg>
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-light group-hover:font-normal transition-all ease-in-out duration-300">Perfection</h3>
            <p className="text-black lg:text-base text-[12px] opacity-90 mt-2 lg:text-l">
              Perfection is the result of polish, precision, and attention to detail
            </p>
          </div>
        </div>
        <div className="flex w-full h-1/2 flex-col md:flex-row gap-4 z-20">
          <div className=" flex flex-col gap-3 justify-between rounded-3xl p-8 cursor-pointer group w-full md:w-5/12 bg-blue-700 text-white">
            <svg
              className="w-12 lg:w-24 h-12 lg:h-24 group-hover:rotate-[-0.2rad] group-hover:scale-110 transition-all ease-in-out duration-300"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
            <h3 className="text-black text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-light group-hover:font-normal transition-all ease-in-out duration-300">Learning</h3>
            <p className="text-black lg:text-base text-[12px] opacity-90 mt-2 lg:text-l">Learning is the continuous journey of gaining knowledge skills and understanding</p>
          </div>
          <div className="group flex gap-3 flex-col justify-between rounded-3xl p-8 cursor-pointer w-full md:w-7/12 bg-blue-100">
          <svg className="group-hover:rotate-[-0.12rad] w-12 lg:w-24 h-12 lg:h-24 group-hover:scale-110 transition-all ease-in-out duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="stroke-[1.2px]" d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path className="stroke-[1.2px]" d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path className="stroke-[1.2px]" d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path className="stroke-[1.2px]" d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path className="stroke-[1.2px]" d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path  d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path  d="M22 22L21 21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <h3 className="text-black text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-light group-hover:font-normal transition-all ease-in-out duration-300">Consistency</h3>
            <p className="text-black lg:text-base text-[12px] opacity-90 mt-2 lg:text-l">
              Handling problems and tasks in original ways to generate new ideas and solutions 
            </p>
          </div>
        </div>
      </div>

      <div className="group gap-2 rounded-3xl p-6 cursor-pointer flex flex-col justify-between md:items-center w-full mx-auto bg-zinc-300">
      <svg viewBox="0 0 1024 1024" className="group-hover:rotate-[-0.12rad] w-12 lg:w-24 h-12 lg:h-24 xl:h-24 xl:w-24 group-hover:scale-110 transition-all ease-in-out duration-300" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="10"><g id="SVGRepo_bgCarrier" strokeWidth="10"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M434.452 904.856c0 30.647 24.843 55.49 55.489 55.49h36.993c30.647 0 55.49-24.843 55.49-55.49V886.36H434.452v18.496z m73.986-832.342c-173.66 0-314.44 140.78-314.44 314.44 0 95.368 42.457 180.82 109.499 238.486 41.118 35.365 130.955 223.926 130.955 223.926h147.972s89.893-188.849 130.128-223.219c67.521-57.672 110.326-143.433 110.326-239.193 0.001-173.659-140.78-314.44-314.44-314.44z m180.101 524.718C653.037 627.509 573.72 812.374 573.72 812.374h-46.785V579.401l87.181-87.181c7.173-7.175 7.173-18.805 0-25.978-7.173-7.173-18.804-7.173-25.978 0l-79.61 79.61-107.895-107.895c-7.225-7.225-18.935-7.225-26.158 0-7.225 7.223-7.225 18.933 0 26.158l112.292 112.292c0.981 0.981 2.05 1.817 3.174 2.531v233.436h-46.785s-79.269-184.61-115.548-215.765c-59.157-50.801-96.618-126.079-96.618-210.094 0-152.986 124.217-277.007 277.447-277.007s277.447 124.021 277.447 277.007c0.002 84.358-37.768 159.911-97.345 210.717z" fill="#000000"></path></g></svg>
        <h3 className="text-black text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-light group-hover:font-normal transition-all ease-in-out duration-300">Creativity</h3>
        <p className="text-black lg:text-base text-[12px] opacity-90 mt-2 lg:text-l">
          Approaching problems and tasks in original ways to generate new ideas and solutions
        </p>
      </div>
    </section>
  );
};

export default Focus;
