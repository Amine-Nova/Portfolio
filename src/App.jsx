import "./App.css";
import MainSection from "./components/section1/mainSection";
import ClickSpark from "./components/spark/spark";
import Squares from "./components/Squares/squares";

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
        {/* Background Squares */}
        <div className="fixed inset-0 -z-10">
          <Squares
            speed={0.5}
            squareSize={16}
            direction="down" // up, down, left, right, diagonal
            borderColor="#222020"
            hoverFillColor="#182645"
          />
        </div>
        {/* Foreground content */}
        <div className="relative w-full flex flex-col items-center gap-20">
          <MainSection />
        </div>
      </section>
    </ClickSpark>
  );
}
export default App;
