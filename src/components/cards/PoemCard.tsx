import { motion } from "framer-motion";

interface PoemCardProps {
  title: string;
  theme: string;
  text: string;
  index?: number;
}

const PoemCard = ({ title, theme, text, index = 0 }: PoemCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.35, delay: index * 0.08 }}
    className="card-editorial"
  >
    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold mb-2 block">{theme}</span>
    <h3 className="text-display text-2xl font-semibold text-foreground mb-4 italic">{title}</h3>
    <div className="divider-gold !mx-0 mb-4" />
    <pre className="text-body text-[1.1rem] md:text-[1.15rem] leading-[1.85] text-foreground/80 whitespace-pre-wrap font-light italic">
      {text}
    </pre>
  </motion.article>
);

export default PoemCard;
