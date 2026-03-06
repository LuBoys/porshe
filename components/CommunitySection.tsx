import React, { useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".editorial-title span", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".badge-reveal", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-neutral-900 py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Main Heading with Editorial Style */}
        <div ref={titleRef} className="mb-16 editorial-title">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-white/20 select-none overflow-hidden pb-1">
            <span className="inline-block">Le futur de la</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 mt-[-0.25rem] md:mt-[-0.5rem] overflow-hidden">
            <span className="inline-block text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-white">
              performance
            </span>
            <span className="inline-block text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-white/40 italic">
              est
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="badge-reveal flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full ring-4 ring-white/5">
              <Zap className="w-5 h-5 md:w-7 md:h-7 text-red-600 fill-red-600" />
              <span className="text-xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase italic">
                Passion
              </span>
            </div>
            <span className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-white/40">
              +
            </span>
            <div className="badge-reveal flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full ring-4 ring-white/5">
              <div className="w-5 h-5 md:w-7 md:h-7 border-2 border-white/40 rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white/40 rounded-full" />
              </div>
              <span className="text-xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase italic">
                ADN
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-gray-500 text-xs md:text-base mb-12 font-medium tracking-wide leading-relaxed">
          Rejoignez une communauté de puristes dévots à l'héritage de la 911.
          Ensemble, nous célébrons plus de 60 ans de perfection et de passion
          automobile.
        </p>

        {/* Action Button */}
        <button className="group relative px-10 py-4 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-500 overflow-hidden">
          <span className="relative z-10 transition-colors duration-500">
            Rejoindre le Club
          </span>
          <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
