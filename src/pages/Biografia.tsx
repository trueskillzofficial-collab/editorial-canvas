import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import TimelineSection from "@/components/sections/TimelineSection";
import { getBiographySections } from "@/lib/data";
import authorImg from "@/assets/nicola_prebenna.jpg";

const Biografia = () => {
  const sections = getBiographySections();

  return (
    <Layout>
      {/* Page Hero */}
      <SectionBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold block mb-4">
              Biografia
            </span>
            <h1 className="heading-editorial mb-6">Nicola Prebenna</h1>
            <div className="divider-gold !mx-0 mb-6" />
            <p className="prose-editorial">
              Nato nel 1947 ad Ariano Irpino, Nicola Prebenna ha dedicato la sua vita alla letteratura,
              all'insegnamento e alla cultura. Poeta, scrittore, critico letterario, saggista e giornalista pubblicista,
              ha percorso un cammino che lo ha portato dall'Irpinia alle grandi capitali della cultura europea.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src={authorImg}
              alt="Nicola Prebenna"
              className="w-full rounded-sm shadow-lg object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>
      </SectionBlock>

      {/* Timeline */}
      <SectionBlock variant="alternate" title="Percorso di Vita" subtitle="Una storia di cultura e passione">
        <TimelineSection sections={sections} />
      </SectionBlock>

      {/* Roles */}
      <SectionBlock>
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-editorial text-center mb-8">Ruoli e Riconoscimenti</h2>
          <div className="divider-gold mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Poeta e Scrittore",
              "Critico Letterario",
              "Saggista",
              "Giornalista Pubblicista",
              "Dirigente Scolastico",
              "Docente di Lettere Classiche",
              "Presidente IRASE Avellino",
              "Docente all'Estero (Istanbul, Ferney-Voltaire, Atene)",
            ].map((role, i) => (
              <div key={i} className="card-editorial flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="text-sm text-foreground">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default Biografia;
