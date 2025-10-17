import React, { useEffect, useState } from "react";

const Boxes = ({ name, src, title }) => {
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    document.body.style.overflow = popUp ? "hidden" : "";
  }, [popUp])
  return (
    <div>

    <button onClick={() => setPopUp(true)} className="group static transition-all ease-in-out fade-in">
      <div className="relative container z-10">
        <div
          className="flex gap-4 py-6 px-8 rounded-3xl h-32 w-80 lg:w-[275px] xl:w-80
          items-center  ring-1 ring-blue-400
          relative top-0 left-0 group-hover:-top-2 group-hover:-left-2 transition-all ease-in-out bg-blue-200 group-hover:bg-transparent
          "
          >
          <img
            className="w-16 h-16 rounded-sm"
            src={src}
            alt=""
            />
          <div className="flex flex-col gap-1 test-start relative">
            <p className="text-blue-900 group-hover:text-blue-200 text-start font-semibold max-w-[20ch] overflow-hodden">
              {name}
            </p>
            <p class="text-sm text-start text-zinc-400 max-w-[20ch] overflow-hidden whitespace-nowrap truncate">{title}</p>
          </div>
        </div>
        <div class="absolute h-full w-full left-0 top-0 bg-white ring-1 ring-black -z-10 rounded-3xl transition-all ease-in-out group-hover:bg-[#3A4498]"></div>
        <div class="absolute h-full w-full left-1.5 top-1.5 group-hover:left-2 group-hover:top-2 bg-zinc-400 ring-1 ring-zinc-400 group-hover:ring-black -z-20 rounded-3xl transition-all ease-in-out group-hover:bg-[#0BE8F4] shadow-md group-hover:shadow-lg"></div>
      </div>
    </button>
    {
      popUp && 
      <div onClick={() => setPopUp(false)} className="flex flex-col gap-5 fixed inset-0 z-50 bg-black/50 flex items-center justify-end">
         <div onClick={(e) => e.stopPropagation()} className="flex bg-white w-[550px] h-[450px] rounded-t-xl justify-end">
         </div>
         {/* <button className="text-white text-5xl bg-red-600 rounded-xl w-48 h-16" onClick={() => setPopUp(false)}>quit</button> */}
      </div>
    }
    </div>
  );
};

export default Boxes;
