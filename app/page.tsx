import "./globals.css";
import MainSection from "../components/section1/mainSection";
import Projects from "../components/Projects/projects";
import ClickSpark from "../components/spark/spark";
import Text from "../components/HeyText/text";
import Terminal from "../components/Terminal/terminal";
import Container from "../components/Containers/container";
import Focus from "@/components/Focus/focus";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiWordpress,
  SiDjango,
  SiPython,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiDocker,
} from "react-icons/si";

// import aa from "../assets/abenmous-iconjs.svg"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiCplusplus />,
    title: "C++",
    href: "https://isocpp.org",
  },
  {
    node: <SiWordpress />,
    title: "WordPress",
    href: "https://wordpress.org",
  },
  {
    node: <SiDjango />,
    title: "Django",
    href: "https://www.djangoproject.com",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
];

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
      // className="fixed w-full h-full"
      sparkColor="#fff"
      sparkSize={30}
      sparkRadius={60}
      sparkCount={5}
      duration={700}
    >
      <main className="w-full flex flex-col items-center max-w-full overflow-hidden">
        <div className="relative w-full">
          <div
            style={{ position: "absolute" }}
            className="w-full h-full z-10 overflow-hidden"
          >
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
          <section className="w-full flex flex-col items-center relative py-20">
            <LogoLoop
              className="icon z-20"
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={70}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#121a29"
              ariaLabel="Technology partners"
            />
          </section>
          <section className="w-full flex flex-col items-center justify-center py-10">
            <Projects text="Focusing" />
            <Focus />
          </section>
          <section className="w-full flex flex-col items-center justify-center py-10">
            <Projects text="Experience" />
          </section>
        </div>
      </main>
    </ClickSpark>
  );
}

export default App;
