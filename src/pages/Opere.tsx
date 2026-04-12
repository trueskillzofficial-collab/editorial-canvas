import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import BookCover from "@/components/cards/BookCover";
import { getWorks } from "@/lib/data";
import type { Work } from "@/lib/types";

const GENRE_ORDER = ["Poesia", "Narrativa", "Narrativa (Romanzo)", "Critica Letteraria", "Saggistica"];

const Opere = () => {
  const works = getWorks();

  // Group by genre
  const grouped = works.reduce<Record<string, Work[]>>((acc, work) => {
    const genre = work.genre;
    if (!acc[genre]) acc[genre] = [];
    acc[genre].push(work);
    return acc;
  }, {});

  const sortedGenres = Object.keys(grouped).sort(
    (a, b) => (GENRE_ORDER.indexOf(a) === -1 ? 99 : GENRE_ORDER.indexOf(a)) - (GENRE_ORDER.indexOf(b) === -1 ? 99 : GENRE_ORDER.indexOf(b))
  );

  return (
    <Layout>
      <SectionBlock title="Opere e Pubblicazioni" subtitle="Il percorso letterario attraverso le pubblicazioni">
        <div className="mb-12 p-6 bg-secondary/50 rounded-sm border border-border">
          <p className="text-display text-sm md:text-base text-foreground/80 leading-relaxed italic">
            Per acquistare i libri di Nicola Prebenna, contattare direttamente l'autore o consultare i riferimenti nella sezione{" "}
            <a href="/contatti" className="text-gold hover:underline">Contatti</a>.
          </p>
        </div>
        {sortedGenres.map((genre) => (
          <div key={genre} className="mb-16 last:mb-0">
            <h3 className="text-display text-2xl font-semibold text-foreground mb-2">{genre}</h3>
            <div className="divider-gold mb-8" style={{ marginLeft: 0, marginRight: "auto" }} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {grouped[genre].map((work, i) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <BookCover work={work} index={work.id} size="md" />
                  <div className="max-w-[180px]">
                    <h4 className="text-display text-sm font-semibold text-foreground leading-tight">
                      {work.title}
                    </h4>
                    <p className="text-xs text-gold mt-1">{work.year}</p>
                    {work.publisher && (
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{work.publisher}</p>
                    )}
                    <p className="text-xs text-foreground/70 mt-2 line-clamp-3">{work.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </SectionBlock>
    </Layout>
  );
};

export default Opere;
