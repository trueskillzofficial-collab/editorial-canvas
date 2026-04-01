import { motion } from "framer-motion";
import type { Work } from "@/lib/types";
import { BookOpen } from "lucide-react";

interface WorkCardProps {
  work: Work;
  index?: number;
}

const WorkCard = ({ work, index = 0 }: WorkCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.35, delay: index * 0.08 }}
    className="card-editorial group"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
        <BookOpen size={18} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-display text-xl font-semibold text-foreground">{work.title}</h3>
          <span className="text-xs font-medium tracking-wider uppercase text-gold">{work.year}</span>
        </div>
        <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">
          {work.genre} {work.publisher && `· ${work.publisher}`}
        </p>
      </div>
    </div>
    <p className="prose-editorial text-sm">{work.description}</p>
  </motion.article>
);

export default WorkCard;
