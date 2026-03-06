import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeritageTimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const generations = [
    {
      year: "1963",
      model: "Original 911",
      desc: "La naissance d'une icône.",
      img: "/original911.jpg",
    },
    {
      year: "1974",
      model: "G-Series",
      desc: "L'ère des pare-chocs à soufflets.",
      img: "/G-Series.jpg",
    },
    {
      year: "1989",
      model: "964",
      desc: "Fusion de classicisme et modernité.",
      img: "/964.avif",
    },
    {
      year: "1993",
      model: "993",
      desc: "Le dernier refroidissement par air.",
      img: "/993.jpg",
    },
    {
      year: "2011",
      model: "991",
      desc: "Une nouvelle plateforme révolutionnaire.",
      img: "/991.jpg",
    },
    {
      year: "2019",
      model: "992",
      desc: "Perfection numérique et mécanique.",
      img: "/992.jpg",
    },
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
      className="relative h-screen bg-white overflow-hidden flex flex-col justify-center border-t border-neutral-100"
    >
      <div className="absolute top-12 left-12 z-20">
        <h2 className="text-4xl font-black text-black uppercase tracking-tighter">
          L'Héritage <span className="text-[#D5001C]">911</span>
        </h2>
        <div className="w-12 h-1 bg-[#FFCC00] mt-2" />
      </div>

      <div
        ref={trackRef}
        className="flex gap-24 px-12 md:px-24 w-max items-center h-full"
      >
        {generations.map((gen, idx) => (
          <div
            key={idx}
            className="relative group w-[600px] flex-shrink-0 flex flex-col items-start gap-6"
          >
            <span className="heritage-year text-[10rem] leading-none font-black text-neutral-100 absolute -top-20 -left-10 z-0 select-none transition-colors duration-500 group-hover:text-neutral-200">
              {gen.year}
            </span>

            {/* Image - rounded corners, NO red gradient overlay */}
            <div className="relative z-10 w-full h-[400px] overflow-hidden rounded-2xl">
              <img
                src={gen.img}
                alt={gen.model}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
            </div>

            <div className="relative z-10 pl-4 border-l-4 border-[#FFCC00]">
              <h3 className="text-3xl font-black text-black uppercase tracking-tight">
                {gen.model}
              </h3>
              <p className="text-neutral-500 font-medium max-w-sm mt-2">
                {gen.desc}
              </p>
            </div>
          </div>
        ))}

        {/* End Card */}
        <div className="w-[400px] flex-shrink-0 flex flex-col justify-center items-start gap-6 pl-12 border-l border-neutral-200">
          <p className="text-xl font-bold text-black max-w-xs">
            L'histoire continue de s'écrire.
          </p>
          <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D5001C] transition-colors rounded-lg">
            Découvrir le Musée
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 h-2 bg-[#FFCC00] w-full origin-left scale-x-0" />
    </section>
  );
};

export default HeritageTimelineSection;
