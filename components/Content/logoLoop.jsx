'use client'
import React, { useEffect, useState } from "react";
import LogoLoop from "../LogoLoop/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiWordpress,
  SiDjango,
  SiPython,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiDocker,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiCplusplus />,
    title: "C++",
    href: "https://isocpp.org",
  },
  {
    node: <SiWordpress />,
    title: "WordPress",
    href: "https://wordpress.org",
  },
  {
    node: <SiDjango />,
    title: "Django",
    href: "https://www.djangoproject.com",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
];

const logoLoop = () => {
  const [height, setHeight] = useState(70);
  const [gap, setGap] = useState(40);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setHeight(40);
        setGap(20);
      } 
      else if (width <= 768) {
        setHeight(50);
        setGap(30);
      }  
      else if (width <= 1000) {
        setHeight(60);
        setGap(35);
      } 
      else {
        setHeight(70);
        setGap(40);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <section className="w-full flex flex-col items-center relative py-20">
      <LogoLoop
        className="icon z-20"
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={height}
        gap={gap}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#121a29"
        ariaLabel="Technology partners"
      />
    </section>
  );
};

export default logoLoop;
