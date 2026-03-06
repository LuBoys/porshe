import React from "react";
import { Instagram, Twitter, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-neutral-900 pt-20 pb-8 overflow-hidden">
      {/* Giant background text */}
      <div className="absolute bottom-0 left-0 w-full select-none pointer-events-none overflow-hidden">
        <span className="text-[18vw] font-black text-white/[0.015] tracking-tighter leading-none block text-center uppercase italic">
          Porsche
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <img
              src="/porsche-seeklogo.png"
              alt="Porsche Logo"
              className="h-14 w-auto object-contain mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            />
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Plus qu'une voiture. Un héritage de performance, de passion et
              d'innovation depuis 1948.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
              Explorer
            </h4>
            <div className="flex flex-col gap-3">
              {["Modèles", "Héritage", "Motorsport", "Expérience"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="line-link text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* More Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {["Configurateur", "Financement", "Après-vente", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="line-link text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
              Newsletter
            </h4>
            <p className="text-neutral-500 text-sm mb-6">
              Recevez les dernières nouvelles et événements exclusifs.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="email@exemple.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600/50 transition-colors"
              />
              <button className="magnetic-btn px-5 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
            © 2026 Créé par Nova. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-neutral-600 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
