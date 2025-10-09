import { useState, useRef } from "react";


const Terminal = () => {
  // Time 
  const [date, setDate] = useState(new Date());

  let time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })

  let day = date.toLocaleString('en-US', { weekday: 'short' });
  let month = date.toLocaleString('en-US', { month: 'short' }) + ' ' + date.getDate() + ' ' + time;
  //////////////////////////////////////////////////////////
  // DnD

  const card = useRef(null);
  let startX = 0;
  let startY = 0;

  function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(e) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    startX = e.clientX;
    startY = e.clientY;

    const cardEl = card.current;
    cardEl.style.top = cardEl.offsetTop + dy + "px";
    cardEl.style.left = cardEl.offsetLeft + dx + "px";
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
  return (
    <div className="absolute">
    <div ref={card} onMouseDown={mouseDown} className='relative pt-40 sm:pt-[10em] md:pt-[18em] lg:pt-[18em] z-10 overflow-hidden flex items-center justify-center p-2 cursor-move'>
        <div className="w-[370px] h-[200px] sm:w-[500px] sm:h-[230px] md:w-[600px] md:h-[260px] lg:w-[700px] coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
      <div className="top mb-2 flex justify-start">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="mt-6 text-neutral-500">
        <p>Last login: {day} {month} on abm007</p>
      </div>
      <div className="mt-2 flex">
          <span className="text-green-400">abenmous:~$</span>
          <p className="flex-1 typing items-center pl-2">
               
          </p>
      </div>
  </div>
  
    </div>
    </div>
  )
}

export default Terminal