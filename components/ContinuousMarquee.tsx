"use client";
import React from "react";

interface ContinuousMarqueeProps {
  text: string; // Base text to loop
  speed?: number; // Seconds per full cycle
  repeat?: number; // How many times to repeat inside each half
  className?: string; // Additional styling for the text
  direction?: 'left' | 'right'; // Scroll direction
}

// A purely CSS-powered continuous marquee. We build two identical blocks each containing the text repeated `repeat` times.
// The animation translates the combined width by -50%, causing the second block to take the place of the first seamlessly.
export const ContinuousMarquee: React.FC<ContinuousMarqueeProps> = ({
  text,
  speed = 20,
  repeat = 12,
  className = "",
  direction = 'left',
}) => {
  // Build repeated chunk with a trailing space for separation
  const chunk = Array.from({ length: repeat }, () => text).join(" ");
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        }}
      >
        <span className={"flex-shrink-0 pr-1 " + className}>{chunk}</span>
        <span aria-hidden="true" className={"flex-shrink-0 pr-8 " + className}>{chunk}</span>
      </div>
    </div>
  );
};

export default ContinuousMarquee;
