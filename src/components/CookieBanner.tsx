import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie_consent_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A] border-t border-white/10 px-4 py-4 md:py-3">
      <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70 leading-relaxed text-center md:text-left">
          Questo sito utilizza cookie tecnici e analitici per migliorare l'esperienza di navigazione. 
          Proseguendo o cliccando su "Accetta" acconsenti all'uso dei cookie.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/privacy-policy"
            className="text-xs text-gold hover:text-gold/80 transition-colors whitespace-nowrap"
          >
            Leggi Informativa
          </Link>
          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-gold text-[#0F172A] text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gold/90 transition-colors whitespace-nowrap"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
