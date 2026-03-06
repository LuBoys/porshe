import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const images = [
    { url: "/porshe5.jpeg", title: "Legende" },
    { url: "/porshe6.jpeg", title: "Vitesse" },
    { url: "/porshe7.jpeg", title: "Design" },
    { url: "/porshe8.jpeg", title: "Circuit" },
    { url: "/porshe9.jpeg", title: "Detail" },
    { url: "/porshe10.jpeg", title: "Heritage" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current
        ? trackRef.current.scrollWidth - window.innerWidth
        : 0;

      gsap.to(trackRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=3000",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-900 h-screen overflow-hidden flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
          Immersion <span className="text-red-600">Visuelle</span>
        </h2>
      </div>

      <div ref={trackRef} className="flex gap-6 px-6 w-max">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-[80vw] md:w-[50vw] h-[60vh] md:h-[70vh] flex-shrink-0 group overflow-hidden rounded-2xl"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute bottom-4 left-4 mix-blend-difference">
              <span className="text-7xl md:text-9xl font-black text-white opacity-20 uppercase tracking-tighter transition-opacity duration-700 group-hover:opacity-40">
                {img.title}
              </span>
            </div>

            {/* Corner marks */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/30 group-hover:border-white/60 transition-colors duration-500" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/30 group-hover:border-white/60 transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/30 group-hover:border-white/60 transition-colors duration-500" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-6 text-white text-xs font-mono uppercase tracking-widest opacity-40">
        ← Scroll pour explorer →
      </div>
    </section>
  );
};

export default GallerySection;
