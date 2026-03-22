import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionBlockProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alternate";
}

const SectionBlock = ({
  title,
  subtitle,
  children,
  className = "",
  id,
  variant = "default",
}: SectionBlockProps) => (
  <section
    id={id}
    className={`section-padding ${variant === "alternate" ? "bg-secondary/30" : ""} ${className}`}
  >
    <div className="container-editorial">
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {title && <h2 className="heading-editorial mb-4">{title}</h2>}
          <div className="divider-gold mb-4" />
          {subtitle && <p className="subheading-editorial">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

export default SectionBlock;
