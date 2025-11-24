import "./globals.css";
import MainSection from "../components/section1/mainSection";
import Projects from "../components/Projects/projects";
import ClickSpark from "../components/spark/spark";
import Text from "../components/HeyText/text";
import Terminal from "../components/Terminal/terminal";
import Container from "../components/Containers/container";
import Focus from "@/components/Focus/focus";
import SocialEnd from "../components/social/socialEnd";
import ContinuousMarquee from "../components/ContinuousMarquee";
import Logo from "../components/Content/logoLoop";


import CardE from "../components/Carousel/CardE";



// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

// import LiquidEther from "./components/Backgrounds/rails"
// With custom prop values
function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={30}
      sparkRadius={60}
      sparkCount={5}
      duration={700}
    >
      <main className="w-full flex flex-col items-center max-w-full overflow-hidden">
        <div className="relative w-full">
          <section className="bg w-full flex flex-col items-center pb-14">
            <MainSection />
          </section>
          <Logo />
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
          <section className="w-full h-full flex flex-col items-center relative py-10 gap-5">
            <div className="dotted absolute inset-0"></div>
            <Projects text="Projects" />
            <Container />
          </section>
          <section className="w-full h-full flex flex-col items-center justify-center py-10">
            <Projects text="Focusing" />
            <Focus />
          </section>
          <section className="w-full h-full flex flex-col items-center py-20 ">
            <Projects text="Experience" />
            <CardE />
          </section>
          <section className="w-full flex flex-col items-center py-20 border-t border-gray-700">
            <SocialEnd />
          </section>
          <section className="relative w-full overflow-hidden pb-28 ">
            <ContinuousMarquee
              text="Stay Tuned For More Projects & Updates !!! | "
              repeat={24}
              speed={25}
              className="font-display text-3xl font-bold tracking-[-0.02em] text-blue-200 drop-shadow-xs pb-3"
              direction="left"
            />
             <ContinuousMarquee
              text="Made By Amine Ben Moussa |"
              repeat={24}
              speed={25}
              className="font-display text-3xl font-bold tracking-[-0.02em] text-blue-400 drop-shadow-xs"
              direction="right"
            />
          </section>
        </div>
      </main>
    </ClickSpark>
  );
}

export default App;
