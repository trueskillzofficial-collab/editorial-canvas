import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { MediaItem } from "@/lib/types";

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&#]+)/);
  return match ? match[1] : null;
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
          {item.type === "facebook" && (
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}&show_text=false&width=734`}
              title={item.title}
              className="w-full h-full border-none overflow-hidden"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default VideoModal;
