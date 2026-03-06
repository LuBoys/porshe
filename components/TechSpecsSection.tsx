import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechSpecsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  const specs = [
    { label: "Puissance", value: "525", unit: "ch", detail: "à 8500 tr/min" },
    { label: "0-100 km/h", value: "3.2", unit: "s", detail: "Launch Control" },
    { label: "Vitesse Max", value: "296", unit: "km/h", detail: "Sur circuit" },
    { label: "Poids", value: "1450", unit: "kg", detail: "DIN à vide" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation for spec values
      const items = gsap.utils.toArray(".tech-spec-item");
      items.forEach((item: any) => {
        // Fade in item
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });

        // Counter number animation
        const counter = item.querySelector(".tech-counter");
        const targetVal = parseFloat(
          counter.getAttribute("data-target") || "0",
        );
        const isFloat = targetVal % 1 !== 0; // Check if it needs decimal
        const counterObj = { val: 0 };

        gsap.to(counterObj, {
          val: targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          onUpdate: () => {
            counter.innerText = isFloat
              ? counterObj.val.toFixed(1)
              : Math.floor(counterObj.val).toString();
          },
        });

        // Line width animation
        const line = item.querySelector(".tech-line-fill");
        gsap.fromTo(
          line,
          { width: "0%" },
          {
            width: "50%",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        );
      });

      // Blueprint lines animation
      gsap.from(".blueprint-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1,
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Parallax on image
      gsap.to(".tech-img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
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
      className="relative bg-neutral-900 py-32 overflow-hidden"
    >
      {/* Background Grid - Blueprint style */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Content - Specs */}
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
              Ingénierie <span className="text-[#FFCC00]">Pure</span>
            </h2>
            <div className="w-24 h-1 bg-[#D5001C] mb-12 blueprint-line" />

            <div ref={specsRef} className="grid grid-cols-2 gap-x-8 gap-y-12">
              {specs.map((spec, idx) => (
                <div key={idx} className="tech-spec-item">
                  <p className="text-[#FFCC00] font-mono text-xs uppercase tracking-widest mb-1 opacity-80">
                    {spec.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-5xl md:text-6xl font-black text-white tracking-tighter counter-glow tech-counter"
                      data-target={spec.value}
                    >
                      0
                    </span>
                    <span className="text-xl font-bold text-neutral-500 transform -translate-y-4">
                      {spec.unit}
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-white/20 my-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#D5001C] w-1/2 tech-line-fill" />
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Engine/Tech Image with rounded corners */}
          <div className="flex-1 w-full relative h-[600px] border border-white/10 rounded-2xl bg-black/20 p-8 backdrop-blur-sm overflow-hidden">
            {/* Decorative UI elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#FFCC00]" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#FFCC00]" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#FFCC00]" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#FFCC00]" />

            <div className="h-full w-full flex items-center justify-center relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D5001C]/20 to-transparent blur-3xl rounded-full" />
              <img
                src="/porshe2.jpeg"
                alt="Moteur 4.0L Atmosphérique"
                className="tech-img relative z-10 w-full h-auto object-contain transition-all duration-700 grayscale hover:grayscale-0 contrast-125 rounded-2xl"
              />

              {/* Floating "Nodes" */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFCC00] rounded-full shadow-[0_0_10px_#FFCC00] animate-pulse" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#D5001C] rounded-full shadow-[0_0_10px_#D5001C] animate-pulse delay-75" />
            </div>

            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-[10px] text-[#FFCC00] uppercase tracking-widest">
                System: Dry Sump Lubrication
              </p>
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                Status: Optimal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
