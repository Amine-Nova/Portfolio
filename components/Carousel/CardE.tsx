"use client";
import * as React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import images from "@/assets/indexs/imageIndex";

const CardE = () => {
  return (
    <div className="z-30 w-[100%] py-32">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={900}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        height={500}

      >
        <SwiperSlide className="h-full bg-blue-500">
          <div className="h-[100px]">
            helooo
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full bg-green-500">
          <div className="h-[100px]">
            helooo
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full bg-red-500">
          <div className="h-[100px]">
            helooo
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full bg-yellow-500">
          <div className="h-[100px]">
            helooo
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardE;
