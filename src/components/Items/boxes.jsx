import React from "react";

const boxes = ({ name, src, title }) => {
  return (
    <button className="group static transition-all ease-in-out fade-in">
      <div className="relative container z-10">
        <div
          className="flex gap-4 py-6 px-8 rounded-3xl h-32
        items-center bg-blue-900 ring-1 ring-blue-400
        relative top-0 left-0 group-hover:-top-2 group-hover:-left-2 transition-all ease-in-out "
        >
          <img
            className="w-16 h-16 rounded-sm"
            src={src}
            alt=""
          />
          <div className="flex flex-col gap-1 test-start relative">
            <p className="text-blue-200 font-semibold max-w-[20ch] overflow-hodden">
              {name}
            </p>
            <p class="text-sm text-start text-blue-500 max-w-[20ch] overflow-hidden whitespace-nowrap truncate">{title}</p>
          </div>
        </div>
        <div class="absolute h-full w-full left-0 top-0 bg-white ring-1 ring-black -z-10 rounded-3xl transition-all ease-in-out group-hover:bg-[#ffd074]"></div>
        <div class="absolute h-full w-full left-1.5 top-1.5 group-hover:left-2 group-hover:top-2 bg-zinc-400 ring-1 ring-zinc-400 group-hover:ring-black -z-20 rounded-3xl transition-all ease-in-out group-hover:bg-[#b087ff] shadow-md group-hover:shadow-lg"></div>
      </div>
    </button>
  );
};

export default boxes;
