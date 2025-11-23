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

    const getWi = () => {
      if (typeof window === "undefined") return 500;
      if (window.innerWidth < 768) return 350;
      if (window.innerWidth < 1101) return 400;
      return 500;
    };

    const [wi, setWi] = useState(getWi());

    useEffect(() => {
      const updateWidth = () => {
        setWi(getWi());
      };
      window.addEventListener("resize", updateWidth);
    }, []);

  return (
    <div className="flex flex-col gap-24 lg:flex-row lg:gap-0 justify-evenly items-center z-40 inset-0 w-full h-auto py-32">
      {/* <Swiper
        slidesPerView={1} 
        spaceBetween={0}
        className="mySwiper"
        style={{ width: "100%"}}
      >
        <SwiperSlide className=" z-40 py-5"> */}
          <div className="z-40 flex items-center justify-center">
            <CreditCard
            bg="bg3"
            bg2="bg2"
            s={'Company Name'}
            className=""
            type="gray-dark" 
            width={wi}
            timeline="Feb 25 - Jun 25"
            position="FULLSTACK DEVELOPER"
            company="MBO"
            />
          </div>
        {/* </SwiperSlide>
         <SwiperSlide className="z-40 py-5"> */}
          <div className="z-40 flex items-center justify-center">
            <CreditCard
            bg="bg4"
            bg2="bg1"
            s={'School Name'}
            width={wi}
            type="gray-dark"
            company="1337 Coding School"
            timeline="Sep 21 - Now"
            position="Software Engineer Student"
            />
          </div>
        {/* </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default CardE;
