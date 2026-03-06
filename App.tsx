import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import PremiumNavbar from "./components/PremiumNavbar";
import Hero from "./components/Hero";
import TechSpecsSection from "./components/TechSpecsSection";
import ConfiguratorSection from "./components/ConfiguratorSection";
import HeritageTimelineSection from "./components/HeritageTimelineSection";
import CompanySection from "./components/CompanySection";
import RacingDNASection from "./components/RacingDNASection";
import ExperienceSection from "./components/ExperienceSection";
import CommunitySection from "./components/CommunitySection";
import GallerySection from "./components/GallerySection";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Router>
      <SmoothScroll />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Film grain overlay for cinematic feel */}
      <div className="grain-overlay bg-black min-h-screen">
        <CustomCursor />
        <PremiumNavbar />

        <main className="relative z-10 text-white">
          {/* Hero Section */}
          <Hero />

          {/* Marquee Text Divider */}
          <div className="relative z-15 bg-neutral-900 py-4 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="text-xs font-bold uppercase tracking-[0.4em] text-white/15 mx-12"
                >
                  GT3 RS • 525 CH • 3.2s 0-100 • ATMOSPHÉRIQUE • 9000 TR/MIN •
                  NÜRBURGRING • FLAT-SIX • DEPUIS 1963 •&nbsp;
                </span>
              ))}
            </div>
          </div>

          {/* Section 2: TechSpecs - no overlap */}
          <div className="relative z-20 bg-neutral-900">
            <TechSpecsSection />
          </div>

          {/* Section 3: Configurator - clean transition */}
          <div className="relative z-30 bg-neutral-900">
            <ConfiguratorSection />
          </div>

          {/* Section 4: Heritage - white bg with rounded top */}
          <div className="relative z-40 bg-white text-black pt-12 pb-12">
            <HeritageTimelineSection />
          </div>

          {/* Section 5+: Dark sections */}
          <div className="relative z-50 bg-neutral-900 text-white pt-12">
            <CompanySection />
            <RacingDNASection />
            <ExperienceSection />
            <GallerySection />
            <CommunitySection />
            <AppSection />
          </div>
        </main>

        <div className="relative z-[60]">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
