import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { MediaItem } from "@/lib/types";
import {
  getCookieConsent,
  setCookieConsent,
  COOKIE_CONSENT_CHANGED_EVENT,
} from "@/lib/cookieConsent";

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&#]+)/);
  return match ? match[1] : null;
};

// Il player Facebook installa cookie di terze parti: si carica solo dopo il consenso.
const FacebookEmbed = ({ item }: { item: MediaItem }) => {
  const [allowed, setAllowed] = useState(() => getCookieConsent() === "accepted");

  useEffect(() => {
    const sync = () => setAllowed(getCookieConsent() === "accepted");
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, sync);
  }, []);

  if (!allowed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-center text-background">
        <p className="text-sm text-background/80 max-w-md leading-relaxed">
          Questo video è ospitato su Facebook, che può installare cookie di terze parti.
          Per vederlo qui accetta i cookie di terze parti, oppure aprilo direttamente su Facebook.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setCookieConsent("accepted")}
            className="px-5 py-2 bg-gold text-[#0F172A] text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gold/90 transition-colors"
          >
            Accetta e guarda
          </button>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-background/30 text-sm font-medium tracking-wider uppercase rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            Apri su Facebook
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}&show_text=false&width=734`}
      title={item.title}
      className="w-full h-full border-none overflow-hidden"
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
};

interface VideoModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

const VideoModal = ({ item, onClose }: VideoModalProps) => (
  <AnimatePresence>
    {item && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl aspect-video bg-foreground rounded-sm overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-background hover:text-background/80 transition-colors"
            aria-label="Chiudi"
          >
            <X size={28} />
          </button>
          {item.type === "youtube" && getYouTubeId(item.url) && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(item.url)}?autoplay=1`}
              title={item.title}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            />
          )}
          {item.type === "facebook" && <FacebookEmbed item={item} />}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default VideoModal;
