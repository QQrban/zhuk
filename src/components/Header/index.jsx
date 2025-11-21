import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 bg-black w-full px-4 z-50">
      <div className="flex justify-between items-center max-w-[1350px] mx-auto py-4">
        <a href="#" className="text-yelloWW text-4xl lg:text-[53px] block z-50">
          Dmitri Zhuk
        </a>

        <nav className="hidden md:flex gap-8 lg:gap-[55px] text-white text-2xl lg:text-[32px]">
          <a className="link" href="#about">
            About
          </a>
          <a className="link" href="#">
            Gallery
          </a>
          <a className="link" href="#">
            Projects
          </a>
          <a className="link" href="#">
            Services
          </a>
          <a className="link" href="#">
            Contact
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`w-8 h-0.5 bg-yelloWW transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-8 h-0.5 bg-yelloWW transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-8 h-0.5 bg-yelloWW transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <div
          className={`fixed top-0 right-0 h-screen w-[280px] bg-black border-l-2 border-yelloWW transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-8 text-white text-2xl pt-24 px-8">
            <a className="link" href="#" onClick={toggleMenu}>
              About
            </a>
            <a className="link" href="#" onClick={toggleMenu}>
              Gallery
            </a>
            <a className="link" href="#" onClick={toggleMenu}>
              Projects
            </a>
            <a className="link" href="#" onClick={toggleMenu}>
              Services
            </a>
            <a className="link" href="#" onClick={toggleMenu}>
              Contact
            </a>
          </nav>
        </div>

        {isMenuOpen && <div className="fixed inset-0 bg-black/50 md:hidden" onClick={toggleMenu} />}
      </div>
    </header>
  );
}
