import "./App.css";
import MainSection from "./components/section1/mainSection";
import ClickSpark from "./components/spark/spark";
import LiquidEther from "./components/Backgrounds/rails";
import SecondSection from "./components/SecondSection/second";


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
      <section className="w-full flex flex-col items-center relative b">
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
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
        <div className="relative w-full flex flex-col items-center gap-20">
          <MainSection />
        </div>
      </section>
      <section className="w-full flex flex-col item-center relative">
        <SecondSection />
      </section>
    </ClickSpark>
  );
}
export default App;
