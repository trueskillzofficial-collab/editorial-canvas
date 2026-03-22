import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import authorImg from "@/assets/nicola_prebenna.jpg";

interface HeroSectionProps {
  quote?: string;
  quoteSource?: string;
  authorName?: string;
  tagline?: string;
}

const HeroSection = ({
  quote = "Ho dispensato parole al vento, semi lanciati per aria, ho radicato parole nel cuore mio e su fogli di carta bianca.",
  quoteSource = 'Da "Il Dono del Poeta"',
  authorName = "Nicola Prebenna",
  tagline = "Poeta · Scrittore · Critico Letterario",
}: HeroSectionProps) => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1F3A2E]">
    {/* Subtle author image overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-[0.12] blur-[2px]"
      style={{ backgroundImage: `url(${authorImg})` }}
    />
    {/* Gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A2E] via-[#1F3A2E]/95 to-[#162b21]" />

    <div className="container-editorial relative z-10 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-6">
            {tagline}
          </p>
          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8">
            {authorName}
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <blockquote className="text-display text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed text-white/75 mb-4">
            "{quote}"
          </blockquote>
          <p className="text-sm text-white/40 mb-10">{quoteSource}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/opere"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#1F3A2E] text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gold/90 transition-colors"
            >
              Scopri le Opere
            </Link>
            <Link
              to="/biografia"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-white/10 transition-colors"
            >
              Biografia
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 rounded-sm" />
            <img
              src={authorImg}
              alt={authorName}
              className="w-full max-w-md mx-auto rounded-sm shadow-2xl object-cover aspect-[3/4]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
