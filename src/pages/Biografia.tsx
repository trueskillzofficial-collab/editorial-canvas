import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import TimelineSection from "@/components/sections/TimelineSection";
import { getBiographySections } from "@/lib/data";
import authorImg from "@/assets/nicola_prebenna.jpg";
import imgNaxos from "@/assets/bio/naxos.jpg";
import imgPoetessa from "@/assets/bio/poetessa_greca.jpg";
import imgVarsavia from "@/assets/bio/varsavia.jpg";
import imgDickinson from "@/assets/bio/premio_dickinson.jpg";
import imgStudio from "@/assets/bio/nello_studio.jpg";
import imgPresentazione from "@/assets/bio/presentazione.jpg";
import imgCasentino from "@/assets/bio/premio_casentino.jpg";
import imgFortuna from "@/assets/bio/premio_fortuna.jpg";

const bioImages = [
  { src: imgStudio, alt: "Nicola Prebenna nel suo studio", caption: "Nel suo studio, tra i libri" },
  { src: imgNaxos, alt: "Nicola Prebenna a Naxos", caption: "A Naxos, Grecia" },
  { src: imgPresentazione, alt: "Nicola Prebenna durante una presentazione", caption: "Presentazione letteraria" },
  { src: imgPoetessa, alt: "Con la poetessa greca M. Dalmati e Vocou", caption: "Con la poetessa greca M. Dalmati e Vocou" },
  { src: imgVarsavia, alt: "All'Istituto Italiano di Cultura di Varsavia", caption: "All'Istituto Italiano di Cultura di Varsavia" },
  { src: imgDickinson, alt: "Premio Emily Dickinson", caption: "Premio Internazionale Emily Dickinson – 1° Classificato" },
  { src: imgCasentino, alt: "Premio Casentino a Poppi", caption: "Premio Letterario del Casentino, Poppi" },
  { src: imgFortuna, alt: "Premio Fortuna d'Autore a Bari", caption: "Premio Fortuna d'Autore, Bari" },
];

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
            <p className="prose-editorial mb-4">
              Nato nel 1947 ad Ariano Irpino, Nicola Prebenna ha dedicato la sua vita alla letteratura,
              all'insegnamento e alla cultura. Poeta, scrittore, critico letterario, saggista e giornalista pubblicista,
              ha percorso un cammino che lo ha portato dall'Irpinia alle grandi capitali della cultura europea.
            </p>
            <p className="prose-editorial">
              È stato docente e dirigente scolastico, in Italia ed all'estero: presso il Liceo Italiano di Istanbul,
              il Liceo Internazionale di Ferney-Voltaire nella zona franco-ginevrina, e la Scuola Italiana di Atene,
              dove ha svolto anche la funzione di dirigente scolastico.
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

      {/* Editorial photo spread - first pair */}
      <SectionBlock variant="alternate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={bioImages[0].src}
              alt={bioImages[0].alt}
              className="w-full rounded-sm shadow-lg object-cover"
              loading="lazy"
            />
            <p className="text-xs text-muted-foreground italic mt-3">{bioImages[0].caption}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <img
              src={bioImages[1].src}
              alt={bioImages[1].alt}
              className="w-full rounded-sm shadow-lg object-cover"
              loading="lazy"
            />
            <p className="text-xs text-muted-foreground italic mt-3">{bioImages[1].caption}</p>
          </motion.div>
        </div>
      </SectionBlock>

      {/* Timeline */}
      <SectionBlock title="Percorso di Vita" subtitle="Una storia di cultura e passione">
        <TimelineSection sections={sections} />
      </SectionBlock>

      {/* Full-width editorial image */}
      <SectionBlock variant="alternate">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <img
            src={bioImages[2].src}
            alt={bioImages[2].alt}
            className="w-full rounded-sm shadow-lg object-cover"
            loading="lazy"
          />
          <p className="text-xs text-muted-foreground italic mt-3 text-center">{bioImages[2].caption}</p>
        </motion.div>
      </SectionBlock>

      {/* International experiences - image + text */}
      <SectionBlock>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="heading-editorial mb-4">Esperienze Internazionali</h2>
            <div className="divider-gold !mx-0 mb-6" />
            <p className="prose-editorial mb-4">
              L'esperienza all'estero ha profondamente arricchito la visione culturale di Nicola Prebenna. 
              Dall'Istituto Italiano di Cultura di Varsavia ai salotti letterari di Atene, 
              ogni incontro ha contribuito a tessere un dialogo tra le culture del Mediterraneo e dell'Europa.
            </p>
            <p className="prose-editorial">
              La Grecia, in particolare, è diventata una seconda patria spirituale, 
              ispirandone l'opera poetica e le relazioni con poeti e intellettuali ellenici.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2"
          >
            <img
              src={bioImages[3].src}
              alt={bioImages[3].alt}
              className="w-full rounded-sm shadow-lg object-cover"
              loading="lazy"
            />
            <p className="text-xs text-muted-foreground italic mt-3">{bioImages[3].caption}</p>
          </motion.div>
        </div>
      </SectionBlock>

      {/* Varsavia full-width */}
      <SectionBlock variant="alternate">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src={bioImages[4].src}
            alt={bioImages[4].alt}
            className="w-full rounded-sm shadow-lg object-cover"
            loading="lazy"
          />
          <p className="text-xs text-muted-foreground italic mt-3 text-center">{bioImages[4].caption}</p>
        </motion.div>
      </SectionBlock>

      {/* Awards gallery */}
      <SectionBlock title="Premi e Riconoscimenti" subtitle="Un percorso costellato di successi">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bioImages.slice(5).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-sm shadow-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
              <p className="text-xs text-muted-foreground italic mt-3">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      {/* Roles */}
      <SectionBlock variant="alternate">
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
              "Editorialista TGNewsTv",
              "Premio Internazionale ACSI – Firenze",
              "Premio Poeti residenti all'estero – Quarrata",
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
