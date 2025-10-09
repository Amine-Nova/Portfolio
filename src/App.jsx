import "./App.css";
import MainSection from "./components/section1/mainSection";
import Projects from "./components/Projects/projects";
import ClickSpark from "./components/spark/spark";
import Text from "./components/HeyText/text";
import Terminal from "./components/Terminal/terminal";
import LiquidEther from "./components/Backgrounds/rails"
// With custom prop values
function App() {
  return (
    <ClickSpark
      className="fixed w-full h-full"
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
          <section className="flex flex-col items-center w-full h-full relative h-[60vh] 2xl:h-[68vh] lg:h-[88vh] md:h-[80vh] sm:h-[48vh] h-[38vh]">
            <div className="flex flex-col items-center w-full justify-center relative max-w-full">
              <Text />
            </div>
            <div className="flex flex-col items-center w-full justify-center relative max-w-full ">
              <Terminal />
            </div>
          </section>
        <section className="dotted w-full flex flex-col items-center relative h-[50vh]">
          <Projects />
        </section>
        </div>
      </main>
    </ClickSpark>
  );
}

export default App;
