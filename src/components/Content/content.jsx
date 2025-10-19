import SplitText from "../Animations/text";

const Content = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="flex flex-col w-full items-center justify-center txt text-white lg:gap-1 min-h-[35em] sm:min-h-[28em] md:min-h-[50em] lg:min-h-[58em] 2xl:min-h-[58em]">
      <div className="font-bold cursor-default leading-tight flex xl:gap-4 gap-3 justify-center items-center select-none">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-2">👨🏻‍💻</p>
        <SplitText
          text={`Hey, it’s Amine`}
          className=" wave-text tracking-wide text-[43px] sm:text-6xl md:text-7xl lg:text-8xl pb-2"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
};

export default Content;
