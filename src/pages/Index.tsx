import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionBlock from "@/components/sections/SectionBlock";
import BooksCarousel from "@/components/sections/BooksCarousel";
import VideoModal from "@/components/sections/VideoModal";
import { getSiteSettings, getWorks, getReviews, getPoems, getMediaItems } from "@/lib/data";
import type { MediaItem } from "@/lib/types";

const Index = () => {
  const settings = getSiteSettings();
  const works = getWorks();
  const recentWorks = works.filter(w => parseInt(w.year) >= 2020).slice(0, 12);
  const reviews = getReviews().slice(0, 3);
  const featuredPoem = getPoems()[0];
  
  const mediaItems = getMediaItems().slice(0, 3);
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);

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
            <pre className="text-body text-base md:text-lg leading-relaxed text-foreground/80 whitespace-pre-wrap font-light italic mb-8">
              {featuredPoem.text}
            </pre>
            <Link to="/poesie" className="btn-editorial">
              Tutte le Poesie
            </Link>
          </div>
        </SectionBlock>
      )}

      {/* Publications Carousel */}
      <SectionBlock title="Pubblicazioni Recenti" subtitle="Le opere più recenti di Nicola Prebenna">
        <BooksCarousel works={recentWorks} />
        <div className="text-center mt-10">
          <Link to="/opere" className="btn-editorial inline-flex items-center gap-2">
            Tutte le Opere <ArrowRight size={16} />
          </Link>
        </div>
      </SectionBlock>

      {/* Events Preview */}
      <SectionBlock variant="alternate" title="Eventi e Presentazioni" subtitle="Incontri, premi e momenti culturali">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/eventi" className="btn-editorial inline-flex items-center gap-2">
            Scopri tutti gli eventi <ArrowRight size={16} />
          </Link>
        </div>
      </SectionBlock>

      {/* Media Preview */}
      <SectionBlock title="Media" subtitle="Interviste, presentazioni e contenuti video">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, i) => {
            const videoId = item.url.includes("youtu")
              ? item.url.split(/[/=]/).pop()
              : null;
            const thumb = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : undefined;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-editorial cursor-pointer group"
                onClick={() => setActiveVideo(item)}
              >
                <div className="relative aspect-video bg-muted rounded-sm overflow-hidden mb-4">
                  {thumb && (
                    <img src={thumb} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/media" className="btn-editorial inline-flex items-center gap-2">
            Scopri tutti i media <ArrowRight size={16} />
          </Link>
        </div>
      </SectionBlock>

      {/* Reviews */}
      <SectionBlock variant="alternate" title="Dalla Critica" subtitle="Cosa dicono i critici">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-editorial text-center"
            >
              <p className="text-body text-sm md:text-base italic leading-relaxed text-foreground/80 mb-4">
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
      <SectionBlock>
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

      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </Layout>
  );
};

export default Index;
