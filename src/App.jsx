import bgImage from "./assets/bg.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import dividerRed from "./assets/dividerRed.png";
import dividerBlack from "./assets/dividerBlack.png";
import About from "./components/About";
import Divider from "./components/divider";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
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
          <Divider src={dividerRed} />
          <Projects />
          <Divider src={dividerBlack} />
          <Services />
          <Divider src={dividerRed} />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
