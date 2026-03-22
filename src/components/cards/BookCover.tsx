import { motion } from "framer-motion";
import type { Work } from "@/lib/types";

/** Color palettes for generated placeholder covers */
const COVER_PALETTES = [
  { bg: "#2C3E50", accent: "#C9A96E", text: "#F5F0EB" },
  { bg: "#1B4332", accent: "#D4A574", text: "#F5F0EB" },
  { bg: "#3C1518", accent: "#C9A96E", text: "#F5F0EB" },
  { bg: "#1A1A2E", accent: "#E2B97F", text: "#F5F0EB" },
  { bg: "#4A3728", accent: "#C9A96E", text: "#F5F0EB" },
  { bg: "#2D3436", accent: "#DFB98D", text: "#F5F0EB" },
  { bg: "#0F172A", accent: "#C9A96E", text: "#F5F0EB" },
  { bg: "#1F3A2E", accent: "#D4A574", text: "#F5F0EB" },
];

interface BookCoverProps {
  work: Work;
  index?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const BookCover = ({ work, index = 0, size = "md", className = "" }: BookCoverProps) => {
  const palette = COVER_PALETTES[index % COVER_PALETTES.length];

  const sizeClasses = {
    sm: "w-32 h-48",
    md: "w-40 h-56",
    lg: "w-48 h-68",
  };

  if (work.image) {
    return (
      <img
        src={work.image}
        alt={work.title}
        className={`${sizeClasses[size]} object-cover rounded-sm shadow-md ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-sm shadow-md flex flex-col justify-between p-4 relative overflow-hidden shrink-0 ${className}`}
      style={{ backgroundColor: palette.bg }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: palette.accent }}
      />

      {/* Genre label */}
      <p
        className="text-[9px] tracking-[0.2em] uppercase opacity-60 mt-2"
        style={{ color: palette.text }}
      >
        {work.genre}
      </p>

      {/* Title */}
      <div className="flex-1 flex items-center justify-center py-3">
        <h3
          className="text-display text-center leading-tight font-semibold"
          style={{
            color: palette.text,
            fontSize: work.title.length > 30 ? "0.7rem" : work.title.length > 20 ? "0.8rem" : "0.9rem",
          }}
        >
          {work.title}
        </h3>
      </div>

      {/* Bottom section */}
      <div className="text-center">
        <div
          className="w-8 h-px mx-auto mb-2"
          style={{ backgroundColor: palette.accent }}
        />
        <p
          className="text-[8px] tracking-[0.15em] uppercase"
          style={{ color: palette.accent }}
        >
          Nicola Prebenna
        </p>
        <p
          className="text-[7px] mt-1 opacity-50"
          style={{ color: palette.text }}
        >
          {work.year}
        </p>
      </div>
    </div>
  );
};

export default BookCover;
