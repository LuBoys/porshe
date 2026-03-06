import React, { useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5,
    });
  }, []);

  const navItems = [
    { label: "Modèles", href: "#" },
    { label: "Services", href: "#" },
    { label: "Processus", href: "#" },
    { label: "Studio", href: "#" },
    { label: "À propos", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav
      ref={navRef}
      className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none"
    >
      {/* Logo Area */}
      {/* Logo Area */}
      <div className="pointer-events-auto group cursor-pointer">
        <div className="flex items-center gap-3">
          {/* Minimalist Porsche Crest Representation */}
          <svg
            viewBox="0 0 100 120"
            className="w-10 h-12 text-white fill-current transition-transform duration-500 group-hover:scale-110"
          >
            <path
              d="M50 0 L10 20 L10 80 L50 120 L90 80 L90 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              d="M50 20 L50 100 M25 35 L75 35 M25 55 L75 55 M25 75 L75 75"
              stroke="currentColor"
              strokeWidth="3"
              opacity="0.6"
            />
            <rect x="42" y="45" width="16" height="30" fill="currentColor" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-[0.4em] uppercase leading-none text-white/40 group-hover:text-white transition-colors">
              Official
            </span>
            <h1 className="text-xl font-black tracking-[0.2em] uppercase leading-none">
              Stuttgart
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Links - Stacked vertically like the reference */}
      <div className="hidden md:flex flex-col items-end space-y-2 pointer-events-auto">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors duration-300 py-1 px-2 uppercase tracking-[0.2em]"
          >
            {item.label}
          </a>
        ))}

        <button className="mt-4 px-8 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
          Devis
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden pointer-events-auto">
        <button className="text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
