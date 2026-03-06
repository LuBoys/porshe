import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-bg-911", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
      })
        .from(
          ".hero-car-img",
          {
            y: 50,
            opacity: 0,
            duration: 1.5,
          },
          "-=1.5",
        )
        .from(
          ".hero-porsche-text",
          {
            y: 30,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.8",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Background 911 Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <span className="hero-bg-911 text-[65vw] font-black text-black/[0.04] tracking-tighter leading-none select-none">
          911
        </span>
      </div>

      {/* Main Content Container - Centered Car */}
      <div className="hero-car-img absolute inset-0 z-10 w-full h-[110vh] flex items-center justify-center transform -translate-y-4 pointer-events-none">
        <img
          src="/porshe.png"
          alt="Porsche 911"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Card (Adjusted size) */}
      <div className="absolute bottom-10 right-10 z-30 hero-video-card hidden md:block">
        <div
          className="w-64 md:w-80 aspect-video rounded-2xl overflow-hidden border border-black/5 shadow-2xl relative group cursor-pointer bg-white"
          onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) video.play();
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }}
        >
          <video
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white shadow-2xl">
              <Play className="w-6 h-6 fill-white" />
            </div>
          </div>
        </div>
        <p className="text-[8px] text-black/20 uppercase tracking-[0.3em] mt-2 text-right font-mono font-bold">
          GT3 RS • PREVIEW
        </p>
      </div>
    </section>
  );
};

export default Hero;
