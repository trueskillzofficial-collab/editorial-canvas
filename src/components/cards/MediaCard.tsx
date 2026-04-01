import { motion } from "framer-motion";
import type { MediaItem } from "@/lib/types";
import { Play } from "lucide-react";

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&#]+)/);
  return match ? match[1] : null;
};

interface MediaCardProps {
  item: MediaItem;
  index?: number;
  onPlay?: (item: MediaItem) => void;
}

const MediaCard = ({ item, index = 0, onPlay }: MediaCardProps) => {
  const ytId = item.type === "youtube" ? getYouTubeId(item.url) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="card-editorial group cursor-pointer"
      onClick={() => onPlay?.(item)}
    >
      {ytId && (
        <div className="relative aspect-video mb-4 rounded-sm overflow-hidden bg-secondary">
          <img
            src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg">
              <Play size={20} className="text-foreground ml-1" />
            </div>
          </div>
        </div>
      )}
      <h3 className="text-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
      <p className="prose-editorial text-sm">{item.description}</p>
    </motion.article>
  );
};

export default MediaCard;
