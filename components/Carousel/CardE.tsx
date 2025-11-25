"use client";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from "swiper/modules";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

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
      <div className="z-40 flex items-center justify-center">
        <CreditCard
          bg="bg3"
          bg2="bg2"
          s={"Company Name"}
          className=""
          type="gray-dark"
          width={wi}
          timeline="Feb 25 - Jun 25"
          position="FULLSTACK DEVELOPER"
          company="MBO"
          backList={[
            "Contributed to the development and maintenance of digital media projects, ensuring fast, responsive, and user-friendly interfaces",
            "Built and optimized websites using React, JavaScript, and modern frontend practices",
            "Improved website performance, SEO structure, and page loading times",
            "Supported backend tasks when needed, including API integration and data handling.",
          ]}
          technologies="React, JavaScript, HTML, CSS, Django, Python, PostgreSQL, WordPress, VPS, Hosting."
        />
      </div>
      <div className="z-40 flex items-center justify-center">
        <CreditCard
          bg="bg4"
          bg2="bg1"
          s={"School Name"}
          width={wi}
          type="gray-dark"
          company="1337 Coding School"
          timeline="Sep 21 - Now"
          position="Software Engineer Student"
          backList={["Intensive project-based program following the 42 Network methodology", "Developed strong skills in C programming, algorithms, data structures, memory management, and debugging", "Built real projects independently and in teams: shell, pipelines, minishell, and more", "Learned problem-solving, peer-to-peer learning, and self-directed research", "Currently progressing toward advanced projects (web, systems, algorithms)"]}
          technologies="C, Algorithms, Data Structures, Memory Management, Debugging, Shell, Pipelines, Minishell"
        />
      </div>
    </div>
  );
};

export default CardE;
