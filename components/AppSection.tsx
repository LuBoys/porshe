import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main reveal
      gsap.from(".app-text-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Mockup slide in
      gsap.from(mockupRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Parallax Cards - Different speeds for depth effect
      cardsRef.current.forEach((card, i) => {
        if (card) {
          // Entry animation
          gsap.from(card, {
            y: 80 + i * 40,
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            delay: 0.3 + i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          });

          // Parallax scrub - different speeds
          const speeds = [-60, -120, -90];
          gsap.to(card, {
            y: speeds[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      // Rotating badge animation
      gsap.to(".app-rotating-text", {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Verrouillage",
      value: "À distance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      position: { top: "10%", left: "-8%" },
    },
    {
      title: "Localisation",
      value: "Paris, FR",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      position: { top: "55%", left: "-12%" },
    },
    {
      title: "Autonomie",
      value: "412 km",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
          <line x1="23" x2="23" y1="13" y2="11" />
          <polyline points="11 6 7 12 13 12 9 18" />
        </svg>
      ),
      position: { top: "30%", right: "-10%" },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 md:py-48 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50/50 -skew-x-12 translate-x-1/2 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-100 bg-red-50 text-red-600 font-bold text-[10px] uppercase tracking-widest mb-6 app-text-reveal">
              Connectivité Totale
            </div>

            <h2 className="app-text-reveal text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.1] mb-8">
              Sécurisée & <br />
              Intuitive <br />
              <span className="text-neutral-300">My Porsche App</span>
            </h2>

            <p className="app-text-reveal text-lg text-neutral-500 font-medium mb-12 max-w-md">
              Gérez votre Porsche à distance avec une précision absolue.
              Vérifiez l'état, planifiez vos trajets et accédez au Club
              Stuttgart partout.
            </p>

            <div className="app-text-reveal flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <button className="group relative px-10 py-5 bg-red-600 text-white rounded-full font-bold text-sm tracking-tight hover:bg-red-700 transition-all flex items-center gap-3 shadow-lg shadow-red-600/20">
                Essayer l'App
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <div className="flex items-center gap-3">
                {/* Real Apple App Store Badge */}
                <a
                  href="#"
                  className="group flex items-center gap-3 px-5 py-3 bg-black rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 384 512"
                    fill="white"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[8px] text-white/60 font-medium leading-none">
                      Télécharger sur
                    </p>
                    <p className="text-sm text-white font-bold leading-tight">
                      App Store
                    </p>
                  </div>
                </a>

                {/* Real Google Play Badge */}
                <a
                  href="#"
                  className="group flex items-center gap-3 px-5 py-3 bg-black rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="22"
                    viewBox="0 0 512 512"
                    fill="white"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[8px] text-white/60 font-medium leading-none">
                      Disponible sur
                    </p>
                    <p className="text-sm text-white font-bold leading-tight">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual (Mockup + Parallax Cards) */}
          <div className="flex-1 relative w-full max-w-xl">
            {/* Main Phone Mockup - RED background */}
            <div
              ref={mockupRef}
              className="relative aspect-[4/5] bg-gradient-to-br from-red-600 to-red-700 rounded-[3.5rem] overflow-hidden flex justify-center items-center shadow-2xl shadow-red-600/30"
            >
              {/* Subtle noise texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')",
                }}
              />

              <img
                src="/app.png"
                alt="My Porsche App"
                className="w-[115%] h-auto max-w-none object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] translate-y-6 relative z-10"
              />

              {/* Corner Label */}
              <div className="absolute bottom-10 right-10 z-20 text-right">
                <p className="text-[9px] font-mono text-white/50 font-bold tracking-widest max-w-[120px] leading-tight uppercase">
                  Application Officielle
                </p>
              </div>

              {/* Light accent glow */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
            </div>

            {/* Parallax Info Cards */}
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute z-20 bg-white backdrop-blur-xl border border-neutral-100 p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] min-w-[170px]"
                style={feature.position as React.CSSProperties}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-sm font-black text-black">
                      {feature.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Rotating Badge - RED */}
      <div
        ref={badgeRef}
        className="absolute bottom-12 left-6 lg:left-12 z-30 flex items-center justify-center"
      >
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="app-rotating-text absolute inset-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="appCirclePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text className="text-[8px] font-black uppercase tracking-[0.4em] fill-red-600/30">
                <textPath xlinkHref="#appCirclePath">
                  Security • Precision • Control •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full shadow-lg shadow-red-600/30 flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Background large text accent - subtle */}
      <div className="absolute -left-20 bottom-10 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[25vw] font-black text-black tracking-tighter leading-none">
          PORSCHE
        </span>
      </div>
    </section>
  );
};

export default AppSection;
