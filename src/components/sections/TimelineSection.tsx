import { motion } from "framer-motion";
import type { BiographySection } from "@/lib/types";

interface TimelineSectionProps {
  sections: BiographySection[];
}

const TimelineSection = ({ sections }: TimelineSectionProps) => (
  <div className="relative">
    {/* Vertical line */}
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

    <div className="space-y-12 md:space-y-16">
      {sections.map((section, i) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-2 z-10" />

          <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
            {section.period && (
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold block mb-2">
                {section.period}
              </span>
            )}
            <h3 className="text-display text-2xl font-semibold text-foreground mb-3">
              {section.title}
            </h3>
            <p className="prose-editorial text-sm">{section.content}</p>
          </div>

          <div className="flex-1 hidden md:block" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default TimelineSection;
