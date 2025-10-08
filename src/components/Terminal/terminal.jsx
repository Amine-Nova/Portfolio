import { useState, useRef } from "react";


const Terminal = () => {
  // Time 
  const [date, setDate] = useState(new Date());

  let time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })

  let day = date.toLocaleString('en-US', { weekday: 'short' });
  let month = date.toLocaleString('en-US', { month: 'short' });
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
    <div ref={card} onMouseDown={mouseDown} className='absolute pt-40 sm:pt-[18vh] md:pt-[21vh] lg:pt-[28vh] z-10 overflow-hidden flex items-center justify-center p-2 cursor-move'>
        <div class="w-[370px] h-[200px] sm:w-[500px] sm:h-[230px] md:w-[600px] md:h-[260px] lg:w-[700px] coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
      <div class="top mb-2 flex justify-start">
          <div class="h-3 w-3 bg-red-500 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="mt-6 text-neutral-500">
        <p>Last login: {day} {month}</p>
      </div>
      <div className="mt-2 flex">
          <span class="text-green-400">abenmous:~$</span>
          <p class="flex-1 typing items-center pl-2">
               
          </p>
      </div>
  </div>
  
    </div>
  )
}

export default Terminal