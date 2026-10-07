import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCookieConsent,
  setCookieConsent,
  OPEN_COOKIE_PREFERENCES_EVENT,
  type CookieConsent,
} from "@/lib/cookieConsent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, open);
  }, []);

  const choose = (value: CookieConsent) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferenze cookie"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A] border-t border-white/10 px-4 py-4 md:py-3"
    >
      <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70 leading-relaxed text-center md:text-left">
          Questo sito usa solo strumenti tecnici necessari al funzionamento. Con il tuo consenso
          vengono caricati anche contenuti di terze parti (video Facebook) che possono installare
          cookie propri. Puoi cambiare idea in qualsiasi momento dal link "Preferenze cookie" nel footer.{" "}
          <Link to="/cookie-policy" className="text-gold hover:text-gold/80 underline-offset-2 hover:underline">
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => choose("rejected")}
            className="px-5 py-2 border border-white/30 text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
          >
            Rifiuta
          </button>
          <button
            onClick={() => choose("accepted")}
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
