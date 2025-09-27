import SplitText from "../Animations/text";

const Content = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="flex gap-5">
      <div className="txt text-white font-bold cursor-default leading-tight min-h-[calc(80vh-146px)] pb-20 uppercase flex flex-col gap-4 justify-center items-center select-none">
        <SplitText
          text={`Hey There,`}
          className="text-4xl tracking-wide sm:text-5xl md:text-8xl"
          delay={200}
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
        <p className="text-4xl tracking-wide sm:text-5xl md:text-8xl">
            <SplitText
              text={`Amine Here!`}
              className="text-4xl tracking-wide sm:text-5xl md:text-8xl"
              delay={200}
              duration={2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
        </p>
      </div>
      <div className="flex justify-center items-center pb-12 rounded"></div>
    </div>
  );
};

export default Content;
