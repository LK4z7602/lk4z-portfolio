import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import "./style/globals.css";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        <Background />
        <Navbar/>
      </div>
    </>
  );
}

export default App;
