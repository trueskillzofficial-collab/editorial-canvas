import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCover from "@/components/cards/BookCover";
import type { Work } from "@/lib/types";

interface BooksCarouselProps {
  works: Work[];
}

const BooksCarousel = ({ works }: BooksCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {/* Navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity -ml-5"
        aria-label="Scorri a sinistra"
      >
        <ChevronLeft size={18} className="text-foreground" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity -mr-5"
        aria-label="Scorri a destra"
      >
        <ChevronRight size={18} className="text-foreground" />
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="snap-start shrink-0 flex flex-col items-center gap-3 w-44"
          >
            <BookCover work={work} index={i} size="md" />
            <div className="text-center w-full px-1">
              <h3 className="text-display text-sm font-semibold text-foreground leading-tight line-clamp-2">
                {work.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{work.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BooksCarousel;
