import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStackSection/TechStack";
import { Projects } from "./components/ProjectsSection/Projects";
import { Footer } from "./components/Footer";

import "./style/globals.css";

function App() {
  return (
    <>
      <div className="relative min-h-dvh bg-[#0a0a0a] text-white overflow-x-hidden">
        <Background />
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <TechStack />
          <Projects />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
