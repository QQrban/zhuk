import { useState } from "react";
import bgImage from "./assets/bg.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import dividerRed from "./assets/dividerRed.png";
import dividerBlack from "./assets/dividerBlack.png";
import About from "./components/About";
import Divider from "./components/divider";
import Gallery from "./components/Gallery";

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
          <Divider src={dividerRed} />
          <About />
          <Divider src={dividerBlack} />
          <Gallery />
        </main>
      </div>
    </>
  );
}

export default App;
