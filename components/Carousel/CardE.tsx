"use client";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from 'swiper/modules';
import { CreditCard } from '@/components/shared-assets/credit-card/credit-card';
 

const CardE = () => {

  const [wi, setWi] = useState(600);

  useEffect(() => {
    const updateWidth = () => {
      setWi(window.innerWidth < 1024 ? 400 : 600);
    };

    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="z-40 inset-0 w-full h-auto py-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        className="mySwiper"
        style={{ width: "100%"}}
      >
        <SwiperSlide className=" z-40 py-5">
          <div className="z-40 flex items-center justify-center">
            <CreditCard
            s={'Company Name'}
            className=""
            type="gray-dark" 
            width={wi}
            />
          </div>
        </SwiperSlide>
         <SwiperSlide className=" z-40 py-5">
          <div className="z-40 flex items-center justify-center">
            <CreditCard
            s={'School Name'}
            width={wi}
            type="gray-dark" 
            />
          </div>
        </SwiperSlide>
         <SwiperSlide className=" z-40 py-5">
          <div className="z-40 flex items-center justify-center">
            <CreditCard
            width={wi}
            type="gray-dark" 
            />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className=" bg-green-500">helo</SwiperSlide>
        <SwiperSlide className=" bg-red-500">helo</SwiperSlide>
        <SwiperSlide className=" bg-yellow-500">helo</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CardE;
