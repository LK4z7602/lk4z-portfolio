import { Background } from "./components/Background";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import "./style/globals.css";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        <Background />
        <Navbar/>

        <main className="relative z-10">
          <Hero/>
        </main>
      </div>
    </>
  );
}

export default App;
