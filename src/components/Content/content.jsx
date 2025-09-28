import SplitText from "../Animations/text";

const Content = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="flex flex-col w-full items-center justify-center txt text-white lg:gap-1 min-h-[calc(80vh-146px)]">
      <div className="font-bold cursor-default leading-tight  flex gap-4 justify-center items-center select-none">
      <SplitText
          text={`👨🏻‍💻`}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
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
        <p className=""></p>
        <SplitText
          text={`Hey, it’s Amine`}
          className="tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-2"
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
