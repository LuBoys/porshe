import React, { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation
    const duration = 2.5; // seconds
    const counter = { val: 0 };

    gsap.to(counter, {
      val: 100,
      duration: duration,
      ease: "power2.inOut",
      onUpdate: () => {
        setCount(Math.floor(counter.val));
      },
      onComplete: () => {
        // Final exit animation
        const tl = gsap.timeline({
          onComplete: onComplete,
        });

        tl.to(".loading-counter", {
          y: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
        }).to(
          ".loading-bg",
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.2,
            ease: "expo.inOut",
          },
          "-=0.4",
        );
      },
    });

    // Subtitle reveal
    gsap.from(".loading-sub", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none">
      {/* Background with subtle gradient */}
      <div className="loading-bg absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

        {/* Main Center Content */}
        <div className="relative flex flex-col items-center">
          {/* Large Progress Number */}
          <div className="loading-counter overflow-visible py-4">
            <span className="text-[15vw] font-black text-white italic tracking-tighter leading-none block select-none">
              {count.toString().padStart(3, "0")}
            </span>
          </div>

          {/* Subtitle */}
          <div className="loading-sub flex items-center gap-4 mt-[-4vw]">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">
              Porsche Engineering • 911 GT3 RS
            </span>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>
        </div>

        {/* Bottom Status */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2">
          <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-white transition-all duration-300 ease-out"
              style={{ width: `${count}%` }}
            />
          </div>
          <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] font-mono">
            INITIALIZING PERFORMANCE SYSTEMS...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
