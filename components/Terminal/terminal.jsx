"use client";
import { useState, useRef, useEffect, useCallback } from "react";
// simple Typewriter used locally so we can detect completion reliably
const Typewriter = ({ text = "", speed = 80, pauseDuration = 1500, showCursor = true, cursor = "|", onComplete }) => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (!text) return;
    setPos(0);
    let mounted = true;
    const interval = setInterval(() => {
      setPos((p) => {
        if (!mounted) return p;
        if (p + 1 >= text.length) {
          clearInterval(interval);
          // wait pauseDuration then call onComplete
          setTimeout(() => {
            if (mounted) onComplete?.();
          }, pauseDuration);
          return text.length;
        }
        return p + 1;
      });
    }, speed);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [text, speed, pauseDuration, onComplete]);

  return (
    <span className="flex items-center pl-2">
      <span>{text.slice(0, pos)}</span>
      {showCursor && pos < text.length && <span className="ml-1">{cursor}</span>}
    </span>
  );
};

const Terminal = () => {
  const breakpoints = [
    { minWidth: 1536, top: -120, bottom: 160 },
    { minWidth: 1025, top: -120, bottom: 110 },
    { minWidth: 808, top: -80, bottom: 200 },
    { minWidth: 769, top: -80, bottom: 170 },
    { minWidth: 641, top: -100, bottom: 130 },
    { minWidth: 553, top: -28, bottom: 140 },
    { minWidth: 0, top: -28, bottom: 100 },
  ];
  const [date] = useState(new Date());

  let time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  let day = date.toLocaleString("en-US", { weekday: "short" });
  let month =
    date.toLocaleString("en-US", { month: "short" }) +
    " " +
    date.getDate() +
    " " +
    time;
  //////////////////////////////////////////////////////////
  // DnD

  const card = useRef(null);
  const typingWrapperRef = useRef(null);
  const [typingVisible, setTypingVisible] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  // stable callback so Typewriter's onComplete doesn't change identity and restart the effect
  const handleFirstComplete = useCallback(() => {
    setShowSecondLine(true);
  }, []);

  useEffect(() => {
    const el = typingWrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          // start typing when at least 40% of wrapper is visible — do this only once
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setTypingVisible(true);
            observer.disconnect(); // stop observing so it won't restart
            break;
          }
        }
      },
      { threshold: [0, 0.4, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  let startX = 0;
  let startY = 0;

  function mouseDown(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(e) {
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    let top = 0;
    let bottom = 0;

    startX = e.clientX;
    startY = e.clientY;

    const cardEl = card.current;
    for (const breakpoint of breakpoints)
      if (window.innerWidth >= breakpoint.minWidth) {
        top = breakpoint.top;
        bottom = breakpoint.bottom;
        break;
      }
    if (cardEl.offsetTop + dy > top && cardEl.offsetTop + dy < bottom) {
      cardEl.style.top = cardEl.offsetTop + dy + "px";
    }
    cardEl.style.left = cardEl.offsetLeft + dx + "px";
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
  return (
    <div
      ref={card}
      onMouseDown={mouseDown}
      className="relative pt-[14em] sm:pt-[20em] md:pt-[23em] lg:pt-[27em] z-10 overflow-hidden flex items-center justify-center p-2 cursor-move"
    >
      <div
        className="w-[370px] h-full sm:w-[500px] md:w-[600px] 
            lg:w-[750px] coding inverse-toggle shadow-lg
            text-gray-100 text-sm font-mono subpixel-antialiased 
            bg-gray-800 rounded-lg leading-normal overflow-hidden text-xs sm:text-sm lg:text-[16px]"
      >
        <div className="top mb-2 flex justify-start w-full bg-white/10 px-5 py-3 ">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mt-2 text-neutral-500 px-6 pt-5">
          <span>
            Last login: {day} {month} on abm007
          </span>
        </div>
        {/* Typing starts when this wrapper becomes visible in viewport */}
        <div ref={typingWrapperRef} className="mt-1 flex flex-col px-6 mb-6 py-3">
          <div className="flex items-center">
            <span className="text-green-400">abenmous:~$</span>
            {typingVisible && (
              <Typewriter
                text="npm install abenmous --save"
                speed={60}
                pauseDuration={1500}
                showCursor={true}
                cursor="|"
                onComplete={handleFirstComplete}
              />
            )}
          </div>

          {showSecondLine && (
            <div className="start flex items-center justify-start leading-[1.3rem] md:leading-[1.8rem] pr-2">
              <Typewriter
                text="Combining fresh creativity with thoughtful simplicity and tireless effort to build things that last"
                speed={10}
                showCursor={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
