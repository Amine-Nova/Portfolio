import "./App.css";
import MainSection from "./components/section1/mainSection";
import ClickSpark from "./components/spark/spark";
import LiquidEther from "./components/Backgrounds/rails";
import SecondSection from "./components/SecondSection/second";
import Threads from "./components/Backgrounds/lightup";

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
      <main className="w-full flex flex-col items-center gap-20 max-w-full overflow-hidden">

        <div style={{ position: 'absolute'}} className="w-full h-full z-10">
          <LiquidEther
            colors={["#2e2946", "#16141e", "#3c3464"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            />
        </div>
      <section className="w-full flex flex-col items-center relative">
          <MainSection />
      </section>
      <section className=" flex flex-col item-center relative">
        <SecondSection />
      </section>
      </main>
    </ClickSpark>
  );
}

//2583
export default App;
