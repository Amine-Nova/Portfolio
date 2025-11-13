"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardE = () => {
  return (
    <div>
      <div className="w-full flex justify-center z-20 my-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CardE;
