import React, { useEffect, useRef } from "react";
import { ArrowRight, Zap, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const sectionContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The "Slide over" effect
      gsap.fromTo(
        containerRef.current,
        {
          y: "30vh", // Start slightly lower
        },
        {
          y: "-20vh", // Slide up over the previous section
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // When top of section hits bottom of viewport
            end: "top top", // Until top of section hits top of viewport
            scrub: true,
          },
        },
      );

      // Card reveals
      gsap.from(".exp-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-neutral-900 overflow-hidden z-20 pb-32"
    >
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
            Choisissez votre <span className="text-red-600">Aventure</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base font-medium tracking-wide">
            Depuis 1963, nous créons des expériences d'exception pour les
            passionnés de la 911, repoussant les limites de la performance et du
            design intemporel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Pilote */}
          <div className="exp-card group relative h-[500px] md:h-[600px] bg-black rounded-3xl overflow-hidden border border-white/10">
            {/* Image Background */}
            <img
              src="/porshe3.jpeg"
              alt="Pilote Performance"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="relative h-full p-10 flex flex-col justify-end">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-red-600/20 border border-red-600/40 rounded-full text-[10px] font-bold text-red-500 uppercase tracking-widest mb-4">
                  Performance
                </span>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Pour le pilote
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                  Dominez la piste avec une télémétrie en temps réel et des
                  réglages optimisés par IA.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <Zap className="w-4 h-4 text-red-600" />
                    Analyse de trajectoire prédictive
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <Zap className="w-4 h-4 text-red-600" />
                    Optimisation moteur dynamique
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <Zap className="w-4 h-4 text-red-600" />
                    Feedback haptique haute fidélité
                  </li>
                </ul>
              </div>

              <button className="flex items-center gap-4 px-8 py-3 bg-red-600 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-red-700 transition-colors w-full md:w-max">
                Explorer la piste
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Esthète */}
          <div className="exp-card group relative h-[500px] md:h-[600px] bg-black rounded-3xl overflow-hidden border border-white/10">
            {/* Image Background */}
            <img
              src="/porshe4.jpeg"
              alt="Esthète Design"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="relative h-full p-10 flex flex-col justify-end">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Design & Confort
                </span>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Pour l'esthète
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                  Plongez dans un univers de luxe technologique où chaque courbe
                  est une œuvre d'art.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <Eye className="w-4 h-4 text-white/40" />
                    Interface minimaliste adaptative
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <Eye className="w-4 h-4 text-white/40" />
                    Matériaux durables & premium
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <Eye className="w-4 h-4 text-white/40" />
                    Ambiance sonore immersive
                  </li>
                </ul>
              </div>

              <button className="flex items-center gap-4 px-8 py-3 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all w-full md:w-max group/btn">
                Découvrir le design
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative large text in background */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] w-full text-center">
        <span className="text-[15vw] font-black text-white tracking-tighter leading-none uppercase">
          Porsche 911
        </span>
      </div>
    </section>
  );
};

export default ExperienceSection;
