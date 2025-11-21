"use client";

import { useMemo, useState } from "react";
import { cx, sortCx } from "@/utils/cx";
import { MastercardIcon, MastercardIconWhite, PaypassIcon } from "./icons";

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
  company?: string;
  cardNumber?: string;
  cardHolder?: string;
  cardExpiration?: string;
  type?: CreditCardType;
  className?: string;
  width?: number;
  /** Provide custom JSX for the back face */
  backContent?: React.ReactNode;
  s?: string;
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
  type = "brand-dark",
  className,
  width,
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
      className={cx("relative flex items-center justify-center", className)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          width: `${originalWidth}px`,
          height: `${originalHeight}px`,
          transformStyle: "preserve-3d",
          transform: `scale(${scale}) rotateY(${flipped ? 180 : 0}deg)`,
          transformOrigin: "center",
          transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={cx(
            "absolute inset-0 flex origin-center flex-col justify-between overflow-hidden rounded-2xl p-4",
            styles[type].root
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
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="30"
                  rx="4"
                  fill="url(#paint0_linear_23_52)"
                />
                <rect
                  x="1.5"
                  y="1.5"
                  width="37"
                  height="27"
                  rx="3.5"
                  stroke="black"
                  stroke-opacity="0.13"
                />
                <rect
                  x="15.05"
                  y="11.05"
                  width="9.9"
                  height="7.9"
                  stroke="black"
                  stroke-width="0.1"
                />
                <path d="M25 14.95L32 15" stroke="black" stroke-width="0.1" />
                <line
                  x1="19.95"
                  y1="11"
                  x2="19.95"
                  y2="2"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="19.95"
                  y1="28"
                  x2="19.95"
                  y2="19"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="26.9646"
                  y1="11.9646"
                  x2="31.9646"
                  y2="6.96464"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="27.0354"
                  y1="17.9646"
                  x2="32.0354"
                  y2="22.9646"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="25"
                  y1="11.95"
                  x2="27"
                  y2="11.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="13"
                  y1="11.95"
                  x2="15"
                  y2="11.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="25"
                  y1="17.95"
                  x2="27"
                  y2="17.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="13"
                  y1="17.95"
                  x2="15"
                  y2="17.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="32"
                  y1="6.95"
                  x2="38"
                  y2="6.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="2"
                  y1="22.95"
                  x2="8"
                  y2="22.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="2"
                  y1="6.95"
                  x2="8"
                  y2="6.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="32"
                  y1="22.95"
                  x2="38"
                  y2="22.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="8"
                  y1="14.95"
                  x2="15"
                  y2="14.95"
                  stroke="black"
                  stroke-width="0.1"
                />
                <path
                  d="M31.9878 6.93488C31.9921 6.93632 32.0185 6.94072 32.0273 6.94508C32.0545 6.95855 31.9791 6.97729 31.9681 6.97734C31.9658 6.97448 31.9702 6.96579 31.9753 6.95769C31.9804 6.94959 31.9862 6.94234 32.0054 6.93048"
                  stroke="black"
                  stroke-width="0.08"
                  stroke-linecap="round"
                />
                <path
                  d="M31.9439 6.95244C31.9425 6.95244 31.941 6.95244 31.9446 6.95099C31.9482 6.94954 31.9569 6.94664 31.979 6.93048"
                  stroke="black"
                  stroke-width="0.08"
                  stroke-linecap="round"
                />
                <line
                  x1="12.9646"
                  y1="12.0354"
                  x2="7.96464"
                  y2="7.03536"
                  stroke="black"
                  stroke-width="0.1"
                />
                <line
                  x1="13.0354"
                  y1="18.0354"
                  x2="8.03536"
                  y2="23.0354"
                  stroke="black"
                  stroke-width="0.1"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_23_52"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E4A700" />
                    <stop
                      offset="0.501676"
                      stop-color="white"
                      stop-opacity="0.85"
                    />
                    <stop offset="0.9999" stop-color="#E4A700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <PaypassIcon className={styles[type].paypassIcon} />
          </div>

          <div className="flex justify-between">
           
              <div className="flex flex-col">
                <p className="menlo text-zinc-500 opacity-75 text-[10px] tracking-tighter">
                {s}
                </p>
                <p className="menlo text-blue-200 uppercase text-[13px] flex align-right pl-[2px]">
                    mbo
                </p>
              </div>
            <div
              className={cx(
                "flex h-8 w-12 shrink-0 items-center justify-center rounded",
                styles[type].cardTypeRoot
              )}
            >
              {CARD_WITH_COLOR_LOGO.includes(
                type as (typeof CARD_WITH_COLOR_LOGO)[number]
              ) ? (
                <MastercardIcon />
              ) : (
                <MastercardIconWhite />
              )}
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className={cx(
            "absolute inset-0 flex origin-center flex-col overflow-hidden rounded-2xl p-4 bg-[#19253a]",
            styles[type].root
          )}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};
