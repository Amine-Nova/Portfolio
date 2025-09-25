import "./App.css";
import MainSection from "./components/section1/mainSection";
import ClickSpark from "./components/spark/spark";
import LiquidEther from "./components/Squares/squares";

function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={30}
      sparkRadius={60}
      sparkCount={5}
      duration={700}
    >
      <section className="relative w-full overflow-hidden">
          <div style={{ width: "100%", height: "100%", position: "fixed" }}>
            <LiquidEther
              colors={["#5227FF", "#8379F6", "#413C59"]}
              mouseForce={20}
              cursorSize={100}
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
            />
          </div>
        <div className="relative w-full flex flex-col items-center gap-20">
          <MainSection />
        </div>
      </section>
    </ClickSpark>
  );
}
export default App;
