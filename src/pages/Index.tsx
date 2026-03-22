import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionBlock from "@/components/sections/SectionBlock";
import WorkCard from "@/components/cards/WorkCard";
import { getSiteSettings, getWorks, getReviews, getPoems, getLatestPublications } from "@/lib/data";

const Index = () => {
  const settings = getSiteSettings();
  const works = getWorks().filter(w => ["2024", "2025"].includes(w.year)).slice(0, 4);
  const reviews = getReviews().slice(0, 3);
  const featuredPoem = getPoems()[0];
  const latestPubs = getLatestPublications();

  return (
    <Layout>
      <HeroSection
        quote={settings.heroQuote}
        quoteSource={settings.heroQuoteAuthor}
        authorName={settings.authorName}
        tagline={settings.tagline}
      />

      {/* Bio Preview */}
      <SectionBlock title="L'Autore" subtitle="Una vita tra lettere, culture e paesi">
        <div className="max-w-3xl mx-auto text-center">
          <p className="prose-editorial mb-8">{settings.authorBio}</p>
          <Link to="/biografia" className="btn-editorial inline-flex items-center gap-2">
            Leggi la biografia completa <ArrowRight size={16} />
          </Link>
        </div>
      </SectionBlock>

      {/* Featured Poem */}
      {featuredPoem && (
        <SectionBlock variant="alternate">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold block mb-6">
              Poesia in Evidenza
            </span>
            <h2 className="text-display text-3xl md:text-4xl font-light italic text-foreground mb-6">
              {featuredPoem.title}
            </h2>
            <div className="divider-gold mb-8" />
            <pre className="text-display text-base md:text-lg leading-relaxed text-foreground/80 whitespace-pre-wrap font-light italic mb-8">
              {featuredPoem.text}
            </pre>
            <Link to="/poesie" className="btn-editorial">
              Tutte le Poesie
            </Link>
          </div>
        </SectionBlock>
      )}

      {/* Ultime Pubblicazioni */}
      <SectionBlock title="Ultime Pubblicazioni" subtitle="Le opere più recenti">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3 mb-10">
            {latestPubs.map((pub, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <BookOpen size={16} className="text-gold shrink-0 mt-1" />
                <span className="text-sm text-foreground/80">{pub}</span>
              </motion.li>
            ))}
          </ul>
          <div className="text-center">
            <Link to="/opere" className="btn-editorial inline-flex items-center gap-2">
              Tutte le Opere <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionBlock>

      {/* Opere recenti - Cards */}
      <SectionBlock variant="alternate" title="Opere Recenti" subtitle="Le ultime pubblicazioni in evidenza">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </SectionBlock>

      {/* Reviews */}
      <SectionBlock title="Dalla Critica" subtitle="Cosa dicono i critici">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-editorial text-center"
            >
              <p className="text-display text-sm md:text-base italic leading-relaxed text-foreground/80 mb-4">
                "{review.text}"
              </p>
              <footer>
                <cite className="text-sm font-medium text-foreground not-italic">{review.author}</cite>
                <p className="text-xs text-muted-foreground mt-1">su <em>{review.work}</em></p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/recensioni" className="btn-editorial inline-flex items-center gap-2">
            Tutte le Recensioni <ArrowRight size={16} />
          </Link>
        </div>
      </SectionBlock>

      {/* CTA */}
      <SectionBlock variant="alternate">
        <div className="text-center">
          <h2 className="heading-editorial mb-4">Resta in contatto</h2>
          <div className="divider-gold mb-6" />
          <p className="prose-editorial max-w-xl mx-auto mb-8">
            Per informazioni, collaborazioni o semplicemente per scambiare idee sulla letteratura e la poesia.
          </p>
          <Link to="/contatti" className="btn-editorial-filled">
            Contattami
          </Link>
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default Index;
