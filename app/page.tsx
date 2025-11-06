import "./globals.css";
import MainSection from "../components/section1/mainSection";
import Projects from "../components/Projects/projects";
import ClickSpark from "../components/spark/spark";
import Text from "../components/HeyText/text";
import Terminal from "../components/Terminal/terminal";
import Container from "../components/Containers/container";
// import LiquidEther from "./components/Backgrounds/rails"
// With custom prop values
function App() {
  return (
    <ClickSpark
      // className="fixed w-full h-full"
      sparkColor="#fff"
      sparkSize={30}
      sparkRadius={60}
      sparkCount={5}
      duration={700}
    >
      <main className="w-full flex flex-col items-center max-w-full overflow-hidden">
        <div className="relative w-full">
          <div style={{ position: "absolute" }} className="w-full h-full z-10 overflow-hidden">
            {/* <LiquidEther
              colors={["#2e2946", "#16141e", "#3c3464"]}
              mouseForce={20}
              cursorSize={40}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            /> */}
          </div>
          <section className="bg w-full flex flex-col items-center relative pb-14">
            <MainSection />
          </section>
          <section className="flex flex-col items-center w-full relative h-[43em] 2xl:h-[58em] lg:h-[50em] md:h-[50em] sm:h-[46em]">
            <div className="flex flex-col items-center w-full justify-center relative max-w-full">
              <Text />
            </div>
            <div className="flex flex-col items-center w-full justify-center relative max-w-full ">
              <div className="absolute">
               <Terminal />
              </div>
            </div>
          </section>
        <section className="w-full flex flex-col items-center relative py-20 gap-5">
          <div className="dotted absolute inset-0"></div>
          <Projects text="Projects" />
          <Container />
        </section>
         <section className="w-full flex items-center justify-center py-20">
          <Projects text="Focusing" />
          </section>
        </div>
      </main>
    </ClickSpark>
  );
}

export default App;
