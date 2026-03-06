import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const PremiumNavbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: "Modèles", href: "#models" },
    { label: "Heritage", href: "#heritage" },
    { label: "Experience", href: "#experience" },
    { label: "Motorsport", href: "#motorsport" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="absolute top-0 left-0 w-full z-[100] bg-transparent py-6"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <Magnetic>
              <img
                src="/porsche-seeklogo.png"
                alt="Porsche Logo"
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ${isScrolled ? "scale-90" : "scale-100"}`}
              />
            </Magnetic>
          </div>

          {/* Desktop Links - Glass Pill */}
          <div className="hidden md:flex items-center gap-10 ml-auto mr-8 bg-black/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/10">
            {navLinks.map((link, idx) => (
              <Magnetic key={idx}>
                <a
                  href={link.href}
                  className="line-link text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-black/80 hover:text-black inline-block p-2"
                >
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Action & Menu */}
          <div className="flex items-center gap-6">
            <Magnetic>
              <button className="magnetic-btn hidden md:block px-5 py-2 border rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all bg-white/5 backdrop-blur-md border-black/15 text-black hover:bg-black hover:text-white">
                Configurer
              </button>
            </Magnetic>

            <Magnetic>
              <button
                onClick={toggleMenu}
                className="transition-colors text-black hover:text-red-600 p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white/20 hover:text-white transition-all duration-500 hover:tracking-normal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default PremiumNavbar;
