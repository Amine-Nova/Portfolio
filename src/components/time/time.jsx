import React from 'react'
import { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000); // update every 1 second

    return () => clearInterval(timer);
  }, []);
  let time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
  let onlyTime = time.substring(0, time.length - 2);
  let ampm = time.substring(time.length - 2).toLowerCase();
  const month = date.toLocaleString('en-US', { month: 'long' }) + " " + date.getDate();
  return (
    <div className='hidden md:flex justify-center items-center gap-2 text-white'>
        <p id="time" className='num tracking-wide font-medium'>{onlyTime}</p>
        <div className='flex flex-col'>
          <p id="ampm" className='text-xs font-semibold'>{ampm}</p>
          <p id="month" className='text-xs font-medium'>{month}</p>
        </div>
    </div>
  )
}

export default Time;