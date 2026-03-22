import { motion } from "framer-motion";

interface PoemCardProps {
  title: string;
  theme: string;
  text: string;
  index?: number;
}

const PoemCard = ({ title, theme, text, index = 0 }: PoemCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card-editorial"
  >
    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold mb-2 block">{theme}</span>
    <h3 className="text-display text-2xl font-semibold text-foreground mb-4 italic">{title}</h3>
    <div className="divider-gold !mx-0 mb-4" />
    <pre className="text-display text-sm md:text-base leading-relaxed text-foreground/80 whitespace-pre-wrap font-light italic">
      {text}
    </pre>
  </motion.article>
);

export default PoemCard;
