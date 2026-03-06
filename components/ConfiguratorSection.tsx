import React, { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

const ConfiguratorSection: React.FC = () => {
  const colors = [
    {
      name: "Argent GT",
      hex: "#8E908F",
      img: "/porshegris.png",
    },
    {
      name: "Noir Intense",
      hex: "#111111",
      img: "/porshenoir.png",
    },
    {
      name: "Rouge Indien",
      hex: "#D5001C",
      img: "/porsherouge.png",
    },
    {
      name: "Vert Pythons",
      hex: "#007A33",
      img: "/porshevert.png",
    },
    {
      name: "Blanc Carrera",
      hex: "#F5F5F5",
      img: "/porsheblanc.png",
    },
  ];

  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section className="relative min-h-screen bg-neutral-900 flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4">
            Personnalisation
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Créez la <span style={{ color: activeColor.hex }}>vôtre</span>
          </h2>
        </div>

        {/* Car Preview */}
        <div className="relative w-full max-w-5xl aspect-[16/9] mb-12 flex items-center justify-center overflow-hidden rounded-[3rem] shadow-2xl bg-black/10">
          {/* Main Car Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {colors.map((color) => (
              <img
                key={color.name}
                src={color.img}
                alt={`Porsche 911 ${color.name}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-[3rem] ${
                  activeColor.name === color.name
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Controls */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-4 px-8 flex items-center gap-8">
          <div className="flex gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setActiveColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 relative group shadow-inner ${
                  activeColor.name === color.name
                    ? "border-white scale-125 ring-2 ring-white/20"
                    : "border-white/20 hover:scale-110"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name}`}
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest">
                  {color.name}
                </span>
              </button>
            ))}
          </div>

          <div className="w-[1px] h-8 bg-white/10" />

          <button
            onClick={() => setActiveColor(colors[0])}
            className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-[#D5001C] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>

          <div className="w-[1px] h-8 bg-white/10" />

          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D5001C] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Commander
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorSection;
