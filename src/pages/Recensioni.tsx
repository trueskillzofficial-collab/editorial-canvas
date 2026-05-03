import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { getReviews } from "@/lib/data";

const Recensioni = () => {
  const reviews = getReviews();
  const works = [...new Set(reviews.map(r => r.work))];

  return (
    <Layout>
      <SectionBlock title="Recensioni">
        <div className="text-center -mt-4 mb-12">
          <p className="text-display text-xl md:text-2xl font-semibold text-gold italic">
            Stralci di quanto critici, lettori, hanno scritto sulle opere.
          </p>
        </div>
        {works.map((work) => (
          <div key={work} className="mb-16 last:mb-0">
            <h3 className="text-display text-xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              A proposito di <em>{work}</em>
            </h3>
            <div className="space-y-6">
              {reviews
                .filter((r) => r.work === work)
                .map((review, i) => (
                  <motion.blockquote
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="card-editorial"
                  >
                    <p className="text-body text-sm md:text-base italic leading-relaxed text-foreground/80 mb-4">
                      "{review.text}"
                    </p>
                    <footer className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <cite className="text-sm font-medium text-foreground not-italic">{review.author}</cite>
                      {review.role && (
                        <span className="text-xs text-muted-foreground">– {review.role}</span>
                      )}
                    </footer>
                  </motion.blockquote>
                ))}
            </div>
          </div>
        ))}
      </SectionBlock>
    </Layout>
  );
};

export default Recensioni;
