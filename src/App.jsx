import { useState } from "react";
import bgImage from "./assets/bg.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import dividerRed from "./assets/dividerRed.png";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      />

      <div className="relative font-school">
        <Header />
        <main>
          <Hero />
          <div className="pt-20">
            <img className="w-full h-[90px] object-cover" src={dividerRed} alt="" />
          </div>
          <About />
        </main>
      </div>
    </>
  );
}

export default App;
