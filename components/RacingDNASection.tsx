import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const RacingDNASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const specs = [
    {
      label: "Puissance",
      value: "525",
      unit: "CH",
      desc: "Moteur atmosphérique 4.0L",
    },
    {
      label: "0-100 km/h",
      value: "3.2",
      unit: "s",
      desc: "Launch Control activé",
    },
    {
      label: "Vitesse Max",
      value: "296",
      unit: "km/h",
      desc: "Sur circuit fermé",
    },
    { label: "Poids", value: "1450", unit: "kg", desc: "Construction légère" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dna-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".dna-title-word", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-neutral-900 relative overflow-hidden flex flex-col justify-center py-24"
    >
      {/* Background - Parallax Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/50 z-10" />
        <img
          src="/porshe2.jpeg"
          alt="Porsche Engineering"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-12">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <span className="dna-title-word block text-7xl md:text-[8rem] font-black tracking-tighter text-white leading-[0.85]">
                RACING
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="dna-title-word block text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#D5001C] to-red-800">
                DNA
              </span>
            </div>

            <p className="text-neutral-400 text-lg max-w-lg mt-8 leading-relaxed">
              Née à Flacht. Élevée sur le Nürburgring. La technologie de la
              course adaptée à la route. Chaque composant est optimisé pour une
              expérience de conduite pure et inégalée.
            </p>
          </div>

          {/* Button - White bg, black text for contrast */}
          <button className="relative px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#D5001C] hover:text-white transition-all duration-300 group overflow-hidden flex items-center gap-4">
            <span className="relative z-10">Fiche Technique</span>
            <MoveRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2" />
          </button>
        </div>

        {/* Specs Grid - Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="dna-item relative group bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-[#D5001C]/90 hover:border-[#D5001C] transition-all duration-500 overflow-hidden rounded-xl"
            >
              <div className="relative z-10">
                <span className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">
                  {spec.label}
                </span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black text-white tracking-tighter">
                    {spec.value}
                  </span>
                  <span className="text-lg font-bold text-white/50 group-hover:text-white/80 transition-colors">
                    {spec.unit}
                  </span>
                </div>
                <div className="w-full h-px bg-white/20 my-4 group-hover:bg-white/50 transition-colors" />
                <p className="text-sm text-neutral-500 font-medium group-hover:text-white transition-colors">
                  {spec.desc}
                </p>
              </div>

              {/* Background Number Faded */}
              <span className="absolute -bottom-4 -right-4 text-8xl font-black text-white/5 group-hover:text-black/10 transition-colors select-none pointer-events-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacingDNASection;
