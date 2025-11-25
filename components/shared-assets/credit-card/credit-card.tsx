"use client";

import { useMemo, useState } from "react";
import { cx, sortCx } from "@/utils/cx";
import { MastercardIcon, MastercardIconWhite, PaypassIcon } from "./icons";
import Image from "next/image";
import chip from "../../../assets/abenmous12.svg";


const styles = sortCx({
  // Normal
  transparent: {
    root: "bg-black/10 bg-linear-to-br from-white/30 to-transparent backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "transparent-gradient": {
    root: "bg-black/10 bg-linear-to-br from-white/30 to-transparent backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "brand-dark": {
    root: "bg-linear-to-tr from-brand-900 to-brand-700 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "brand-light": {
    root: "bg-brand-100 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-black/10 before:ring-inset",
    company: "text-gray-700",
    footerText: "text-gray-700",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white",
  },
  "gray-dark": {
    root: "bg-linear-to-tr from-gray-900 to-gray-700 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "gray-light": {
    root: "bg-gray-100 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-black/10 before:ring-inset",
    company: "text-gray-700",
    footerText: "text-gray-700",
    paypassIcon: "text-gray-400",
    cardTypeRoot: "bg-white",
  },

  // Strip
  "transparent-strip": {
    root: "bg-linear-to-br from-white/30 to-transparent backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "gray-strip": {
    root: "bg-gray-100 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-gray-700",
    footerText: "text-white",
    paypassIcon: "text-gray-400",
    cardTypeRoot: "bg-white/10",
  },
  "gradient-strip": {
    root: "bg-linear-to-b from-[#A5C0EE] to-[#FBC5EC] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "salmon-strip": {
    root: "bg-[#F4D9D0] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-gray-700",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },

  // Vertical strip
  "gray-strip-vertical": {
    root: "bg-linear-to-br from-white/30 to-transparent before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-gray-400",
    cardTypeRoot: "bg-white/10",
  },
  "gradient-strip-vertical": {
    root: "bg-linear-to-b from-[#FBC2EB] to-[#A18CD1] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
  "salmon-strip-vertical": {
    root: "bg-[#F4D9D0] before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-[inherit] before:mask-linear-135 before:mask-linear-to-white/20 before:ring-1 before:ring-white/30 before:ring-inset",
    company: "text-white",
    footerText: "text-white",
    paypassIcon: "text-white",
    cardTypeRoot: "bg-white/10",
  },
});

const _NORMAL_TYPES = [
  "transparent",
  "transparent-gradient",
  "brand-dark",
  "brand-light",
  "gray-dark",
  "gray-light",
] as const;
const STRIP_TYPES = [
  "transparent-strip",
  "gray-strip",
  "gradient-strip",
  "salmon-strip",
] as const;
const VERTICAL_STRIP_TYPES = [
  "gray-strip-vertical",
  "gradient-strip-vertical",
  "salmon-strip-vertical",
] as const;

const CARD_WITH_COLOR_LOGO = [
  "brand-dark",
  "brand-light",
  "gray-dark",
  "gray-light",
] as const;

type CreditCardType =
  | (typeof _NORMAL_TYPES)[number]
  | (typeof STRIP_TYPES)[number]
  | (typeof VERTICAL_STRIP_TYPES)[number];

interface CreditCardProps {
  cardNumber?: string;
  cardHolder?: string;
  cardExpiration?: string;
  type?: CreditCardType;
  className?: string;
  backList?: string[];
  width?: number;
  /** Provide custom JSX for the back face */
  backContent?: React.ReactNode;
  s?: string;
  bg: string;
  bg2?: string;
  timeline?: string;
  position?: string;
  company?: string;
  technologies?: string;
  /** Interaction mode: hover (default) or click; click is useful for touch devices */
  interactionMode?: 'hover' | 'click';
}

const calculateScale = (
  desiredWidth: number,
  originalWidth: number,
  originalHeight: number
) => {
  // Calculate the scale factor
  const scale = desiredWidth / originalWidth;

  // Calculate the new dimensions
  const scaledWidth = originalWidth * scale;
  const scaledHeight = originalHeight * scale;

  return {
    scale: scale.toFixed(4), // Scale rounded to 4 decimal places
    scaledWidth: scaledWidth.toFixed(2), // Width rounded to 2 decimal places
    scaledHeight: scaledHeight.toFixed(2), // Height rounded to 2 decimal places
  };
};

export const CreditCard = ({
  s,
  bg,
  bg2,
  type = "brand-dark",
  className,
  width,
  timeline,
  position,
  company,
  backList,
  technologies
}: CreditCardProps) => {
  const originalWidth = 316;
  const originalHeight = 190;
  const [flipped, setFlipped] = useState(false);

  const { scale, scaledWidth, scaledHeight } = useMemo(() => {
    if (!width)
      return {
        scale: 1,
        scaledWidth: originalWidth,
        scaledHeight: originalHeight,
      };

    return calculateScale(width, originalWidth, originalHeight);
  }, [width]);

  return (
    <div
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
        perspective: "1000px",
      }}
      className={cx("group relative flex items-center justify-center z-40 cursor-pointer", className)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          width: `${originalWidth}px`,
          height: `${originalHeight}px`,
          transformStyle: "preserve-3d",
          transform: `scale(${scale}) rotateY(${flipped ? 180 : 0}deg)`,
          transformOrigin: "center",
          transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
          willChange: "transform",
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={cx(
            "absolute inset-0 flex origin-center flex-col justify-between overflow-hidden rounded-2xl p-4",
            styles[type].root,
            bg
          )}
        >
          {/* Horizontal strip */}
          {STRIP_TYPES.includes(type as (typeof STRIP_TYPES)[number]) && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gray-800"></div>
          )}
          {/* Vertical stripe */}
          {VERTICAL_STRIP_TYPES.includes(
            type as (typeof VERTICAL_STRIP_TYPES)[number]
          ) && (
            <div className="pointer-events-none absolute inset-y-0 right-22 left-0 z-0 bg-gray-800"></div>
          )}
          {/* Gradient diffusor */}
          {type === "transparent-gradient" && (
            <div className="absolute -top-4 grid grid-cols-2 blur-3xl">
              <div className="size-20 rounded-tl-full bg-pink-500 opacity-30 mix-blend-normal" />
              <div className="size-20 rounded-tr-full bg-orange-500 opacity-50 mix-blend-normal" />
              <div className="size-20 rounded-bl-full bg-blue-500 opacity-30 mix-blend-normal" />
              <div className="size-20 rounded-br-full bg-success-500 opacity-30 mix-blend-normal" />
            </div>
          )}

          <div className="relative flex items-start justify-between px-1 pt-1">
            <div>
              <Image src={chip} alt="Card Image" width={35} height={20} />
            </div>
            <PaypassIcon className={styles[type].paypassIcon} />
          </div>
        <div className="menlo5 uppercase flex flex-col px-1 items-center align-center w-full">
          <p className="text-white text-[23px] text-center">{position}</p>
          </div>
          <div className="flex justify-between w-full">
           
              <div className="flex flex-col w-1/2 h-full gap-[0.5px]">
                <p className="menlo text-zinc-200 opacity-75 text-[10px] tracking-tighter">
                {s}
                </p>
                <p className="menlo text-white text-[12px] flex align-right pl-[2px]">
                   {company}
                </p>
              </div>
            <div className="flex flex-col w-[35%] h-full gap-[2px]">
                <p className="menlo text-zinc-200 opacity-75 text-[10px] tracking-tighter pr-2">
                  Timeline
                </p>
                <p className="menlo text-white font-bold uppercase text-[11px] font-light tracking-tighter flex items-end align-end">
                    {timeline}
                </p>
              </div>
          </div>
        </div>

        {/* Back */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className={cx(
            "absolute inset-0 flex origin-center flex-col overflow-hidden rounded-2xl p-4",
            bg2,
            styles[type].root
          )}
        >
          <div className="flex flex-col justify-center items-start w-[100%] px-3 h-full gap-1/2">
            {backList && backList.map((item, index) => (
              <li key={index} className="break justtxt text-[9px] text-zinc-200">{item}</li>
            ))}
            <p className="text-[9px] text-blue-500 underline pt-1">Technologies : {technologies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
