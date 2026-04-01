import { motion } from "framer-motion";
import type { Event } from "@/lib/types";
import { Calendar, Award, Presentation } from "lucide-react";

const iconMap = {
  award: Award,
  event: Calendar,
  presentation: Presentation,
};

interface EventCardProps {
  event: Event;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const Icon = iconMap[event.type] || Calendar;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="card-editorial"
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon size={16} className="text-gold" />
        <span className="text-xs font-medium tracking-wider uppercase text-gold">{event.date}</span>
      </div>
      <h3 className="text-display text-lg font-semibold text-foreground mb-2">{event.title}</h3>
      {event.location && (
        <p className="text-xs text-muted-foreground mb-2">{event.location}</p>
      )}
      <p className="prose-editorial text-sm">{event.description}</p>
    </motion.article>
  );
};

export default EventCard;
