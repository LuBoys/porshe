import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".grid-line", {
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from([titleRef.current, textRef.current], {
        x: -50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 100,
        scale: 1.05,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
        },
      });

      // Parallax on image
      gsap.to(".company-img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-neutral-900 py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grid-line absolute top-0 left-0 w-full h-[1px] bg-white/5 origin-left" />
        <div className="grid-line absolute bottom-0 left-0 w-full h-[1px] bg-white/5 origin-right" />
        <div className="grid-line absolute top-0 left-2/3 w-[1px] h-full bg-white/5 hidden md:block origin-top" />
        <div className="absolute top-0 left-2/3 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rounded-sm hidden md:block" />
        <div className="absolute bottom-0 left-2/3 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-600 rounded-sm hidden md:block" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-start mb-16 md:mb-24">
          {/* Left Column: Title */}
          <div className="md:col-span-2">
            <h2
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter leading-tight text-white/90"
            >
              L'Histoire
              <br />
              Porsche 911
            </h2>

            {/* Historical Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-12">
              <div>
                <span className="block text-red-600 font-bold text-xl mb-2 counter-glow">
                  1948
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">
                  La première 356 "No. 1" Roadster.
                </p>
              </div>
              <div>
                <span className="block text-white font-bold text-xl mb-2">
                  1963
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">
                  Naissance de l'icône 911 originale.
                </p>
              </div>
              <div>
                <span className="block text-white font-bold text-xl mb-2">
                  1974
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">
                  Introduction de la première 911 Turbo.
                </p>
              </div>
              <div>
                <span className="block text-white font-bold text-xl mb-2">
                  2023
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">
                  60 ans de perfection continue.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="md:col-span-1 pt-4 md:pt-16">
            <p
              ref={textRef}
              className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-sm"
            >
              Depuis plus de sept décennies, Porsche définit les standards de
              l'automobile sportive. La 911 demeure le cœur battant de notre
              marque, une fusion parfaite entre tradition et performance
              futuriste.
            </p>
          </div>
        </div>
      </div>

      {/* Background large text accent */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[30vw] font-black text-white tracking-tighter leading-none">
          HISTOIRE
        </span>
      </div>
    </section>
  );
};

export default CompanySection;
