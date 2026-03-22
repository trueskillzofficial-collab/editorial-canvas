import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
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
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <div className="container-editorial relative z-10 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            {tagline}
          </p>
          <h1 className="heading-editorial text-4xl md:text-5xl lg:text-6xl mb-8">
            {authorName}
          </h1>
          <div className="divider-gold !mx-0 mb-8" />
          <blockquote className="text-display text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed text-foreground/80 mb-4">
            "{quote}"
          </blockquote>
          <p className="text-sm text-muted-foreground mb-10">{quoteSource}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/opere" className="btn-editorial-filled">
              Scopri le Opere
            </Link>
            <Link to="/biografia" className="btn-editorial">
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
            <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
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
