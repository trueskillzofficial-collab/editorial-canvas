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
import imgStudio from "@/assets/bio/nellostudio.png";
import imgInVilla from "@/assets/bio/invilla.png";
import imgAlunni1 from "@/assets/bio/alunni.png";
import imgAlunni2 from "@/assets/bio/alunni2.png";
import imgAlunni3 from "@/assets/bio/alunni3.png";
import imgPresentazione from "@/assets/bio/presentazione.jpg";
import imgCasentino from "@/assets/bio/premio_casentino.jpg";
import imgFortuna from "@/assets/bio/premio_fortuna.jpg";
import premio2 from "@/assets/premi/premio_2.png";
import premio3 from "@/assets/premi/premio_3.png";
import premio4 from "@/assets/premi/premio_4.png";
import premio5 from "@/assets/premi/premio_5.png";
import premio6 from "@/assets/premi/premio_6.png";
import premio7 from "@/assets/premi/premio_7.png";
import premio8 from "@/assets/premi/premio_8.png";
import premio9 from "@/assets/premi/premio_9.png";
import premio10 from "@/assets/premi/premio_10.png";
import premio11 from "@/assets/premi/premio_11.png";
import premio12 from "@/assets/premi/premio_12.png";
import premio13 from "@/assets/premi/premio_13.png";
import premio14 from "@/assets/premi/premio_14.png";
import premio15 from "@/assets/premi/premio_15.png";

const premiCarousel = [premio2, premio3, premio4, premio5, premio6, premio7, premio8, premio9, premio10, premio11, premio12, premio13, premio14, premio15];
const premiCarouselLoop = [...premiCarousel, ...premiCarousel];

const premiPerOpera: { opera: string; premi: string[] }[] = [
  {
    opera: "Dacruma",
    premi: [
      "I° Premio Speciale al 16° Concorso Letterario Internazionale \"Giovanni Gronchi\" di Pontedera (PI) per la silloge Dacruma.",
      "3° Premio per la poesia edita (Dacruma) alla XXII edizione del Premio di Poesia \"Aeclanum\", città di Mirabella Eclano (AV).",
      "5° Premio ex-aequo per la sezione B al XXXI° Concorso Nazionale di Narrativa e Poesia \"Franco Bargaglia\" – Pontedera.",
    ],
  },
  {
    opera: "In Gurgite Vasto",
    premi: [
      "I° Premio per la poesia edita (In Gurgite Vasto) alla XXIII edizione del Premio di Poesia \"Aeclanum\", città di Mirabella Eclano (AV).",
      "4° Premio per la poesia edita alla XV Edizione del Premio Letterario \"Città di Pinerolo\".",
      "Finalista al Premio Letterario Osservatorio 2004, Bari.",
      "II° Premio per la sezione libro edito Premio \"Italo Carretto\" 2008 Bardineto – Savona.",
    ],
  },
  {
    opera: "E la fiaccola … vive!",
    premi: [
      "VI° Posto, per la poesia edita, alla XVII Edizione del Premio Letterario \"Città di Pinerolo\" 2006.",
      "III Premio per la sezione Libro Edito di poesia al Concorso Letterario Teatro Osservatorio 2007 – Bari.",
      "III° Premio assoluto per la poesia edita al Premio Internazionale di S. Maria della Luce 2008 di Mattinata (FG).",
    ],
  },
  {
    opera: "Come per acqua cupa",
    premi: [
      "II° Premio per la poesia edita alla XIX edizione Premio Letterario \"Città di Pinerolo\" 2008.",
      "III° Premio per la poesia edita al Concorso Letterario Teatro Osservatorio 2008 – Bari.",
      "Segnalazione di merito, per la poesia edita, al concorso pennacalamaio/zacem 2008 (SV).",
      "Segnalazione di merito, per la poesia edita, al Premio Nazionale \"Nicola Martucci\" – Città di Valenzano – 2009.",
      "II° Premio per la poesia edita alla V Edizione del Premio Internazionale S. Maria della Luce, 2009, Mattinata (FG).",
      "V° Premio ex-aequo per la sezione Volume di poesia al 23° Concorso Letterario Internazionale \"Giovanni Gronchi\" di Pontedera.",
      "III° Premio per la poesia edita al 9° Premio Nazionale di Poesia \"Italo Carretto\" 2010, Bardineto (SV).",
      "IV° Premio al Premio Cittadella 2011 di Reggio Calabria.",
      "Menzione d'onore alla XXVI Edizione 2012, Premio \"CINQUE TERRE – GOLFO DEI POETI Sirio Guerrieri\".",
      "Finalista per la sezione Poesia edita al XXI Premio Nazionale di Poesia \"Tra Secchia e Panaro\" 2015.",
      "Segnalazione di merito per la sezione Poesia edita al Premio Letterario Europeo \"Massa città fiabesca di mare e di marmo\" 2015.",
      "III° Premio (ex aequo), per poesia edita XIX Ed. Premio Internazionale di Poesia e Narrativa \"Firenze, Capitale d'Europa\".",
    ],
  },
  {
    opera: "Era il maggio odoroso",
    premi: [
      "Dignità di Stampa per la silloge inedita al 2° Concorso di poesia per l'Inedito I Murazzi 2010, di Torino.",
      "Premio assoluto per la poesia, per la sezione libro edito, al Concorso LiberArte 2011 di Mattinata (FG).",
      "VI° Posto al 10° Premio Nazionale di Poesia \"Italo Carretto\" 2011 (Bardineto-SV), nella sez. D – libro edito.",
      "Segnalazione al 20° Concorso Nazionale di Poesia \"Città di Manfredonia\" 2011.",
      "III° Premio al Concorso Premio Nazionale Aeclanum 2011 di Mirabella Eclano.",
      "IV° Premio ex-aequo al Concorso letterario \"Città di Pinerolo\", 2011.",
      "IV° Premio ex-aequo al 25° Concorso Letterario Internazionale \"Giovanni Gronchi\" di Pontedera.",
      "Menzione d'onore alla XIV Edizione del Premio Letterario Osservatorio – Bari.",
      "Premio della critica alla XXV Edizione – 2012 – Premio Internazionale di Poesia e Narrativa \"Cinque Terre – Sirio Guerrieri\".",
      "2° Premio ex-aequo al XXX° Concorso Nazionale di Narrativa e Poesia \"Franco Bargagna\" – Pontedera.",
      "Menzione d'onore, Sez. B, alla XIII edizione 2012 del Premio Internazionale \"Val di Vara – Alessandra Marziale\".",
      "IV° Premio al Premio Nazionale \"Il fiore del deserto 2012\", Reggio Calabria.",
      "II° Premio al XVII° Premio di Poesia \"Città di San Leucio del Sannio\" (2012).",
      "VII° Posto per la sezione Poesia Edita al Premio Nazionale \"Città di Mesagne\".",
      "IV° Premio 1ª Edizione 2013 Premio \"Dalle Cinque Terre al Golfo dei Poeti\" per la poesia edita – La Spezia.",
      "IV Premio XIV Ed. Premio il Convivio 2015. Premio \"Poesia, Prosa ed Arti figurative\".",
    ],
  },
  {
    opera: "Fragmina",
    premi: [
      "I° Premio Assoluto per la poesia edita al Premio Internazionale \"Il Convivio 2014\", sez. \"Filoteo Omodei – Pensieri in Versi\", Castiglione di Sicilia (CT).",
      "Menzione d'onore al XXXIX Premio Letterario Casentino in Poppi (AR).",
      "Finalista nella sezione \"Libri editi di narrativa o poesia\" al I° Concorso Letterario Nazionale \"Avv. Giuseppe La Franca\" di Partinico (PA).",
      "Premio della Giuria, alla XXVII Edizione – 2014 – del Premio Internazionale di Poesia e Narrativa \"CINQUE TERRE – GOLFO DEI POETI Sirio Guerrieri\".",
      "Opera segnalata al XXIII Premio Internazionale di Cultura \"Re Manfredi\" della Città di Manfredonia, per la poesia edita.",
      "I° Premio per la poesia edita al 28° Concorso letterario \"Giovanni Gronchi\" di Pontedera (PI).",
      "Finalista al concorso Firenze Capitale d'Europa.",
      "II° Premio Città di S. Leucio.",
      "III° Premio al Premio Nazionale 2018 Leandro Polverini.",
    ],
  },
  {
    opera: "In una parte più e meno altrove",
    premi: [
      "III° Premio per la silloge inedita al Premio Carrera 2016, Accademia Il Convivio.",
      "Dignità di stampa per la poesia inedita, al Premio I Murazzi 2016, Torino.",
      "Finalista al Premio Firenze Capitale d'Europa 2017.",
      "Premio Speciale della Giuria al Premio Val di Vara Alessandra Marziale 2017.",
      "3° Premio per la poesia edita con la silloge In una parte più e meno altrove al Premio Città di Pinerolo 2018.",
      "Diploma di merito, Premio Re Manfredi 2018.",
      "1° Premio Leandro Polverini 2019, Poesia Edita.",
    ],
  },
  {
    opera: "Vulnera Temporis",
    premi: [
      "4° Premio Centro Zuppardo Premio La Gorgone d'oro 2019.",
      "2° Premio Emily Dickinson 23ª edizione, Napoli.",
      "Premio Miosotys Rorà: Menzione d'onore per la silloge Vulnera Temporis.",
      "Finalista con segnalazione di merito: Il Convivio 2020 Poesia, Prosa e Arti figurative, Castiglione di Sicilia (CT).",
      "1° Premio: Premio Città di Pinerolo 2020.",
    ],
  },
  {
    opera: "Per correr migliori acque",
    premi: [
      "3° Premio: Firenze Capitale d'Europa 2020.",
      "1° Premio per migliore copertina: Premio Polverini 2020-2021.",
    ],
  },
  {
    opera: "Non di solo pane",
    premi: [
      "Finalista al Premio I Murazzi 2018 per narrativa inedita.",
      "Segnalazione Particolare della Giuria al 43° Premio Casentino per narrativa inedita.",
      "Finalista per la sezione Romanzo inedito al Premio I Murazzi 2017 con Vi dico e benedico.",
    ],
  },
  {
    opera: "In rime sparse",
    premi: [
      "Finalista (inedito) al Premio Carrera Il Convivio.",
      "3° Premio al Premio Vitruvio 2022, Lecce.",
    ],
  },
  {
    opera: "Per cieli nuovi e terra nuova",
    premi: [
      "Premio Erato, Premio Vitruvio Le Muse 2025 (I°).",
    ],
  },
  {
    opera: "L'altra faccia della luna",
    premi: [
      "Segnalazione di Merito (inedito) al Premio Carrera 2022.",
      "Dignità di stampa al Premio I Murazzi 2020.",
    ],
  },
  {
    opera: "Vive l'amore e canto",
    premi: [
      "II Premio: Firenze Capitale d'Europa 2023.",
      "Premio Speciale della Giuria, Premio Vitruvio 2024.",
      "I Premio: Premio \"Città di Pinerolo\" 2024.",
    ],
  },
];

const bioImages = [
  { src: imgStudio, alt: "Nicola Prebenna nel suo studio", caption: "Nel suo studio, tra i libri" },
  { src: imgInVilla, alt: "Nicola Prebenna con A. Giorgione", caption: "Con A. Giorgione" },
  { src: imgPresentazione, alt: "Nicola Prebenna durante una presentazione", caption: "Presentazione letteraria" },
  { src: imgPoetessa, alt: "Con la poetessa greca M. Dalmati e Vocou", caption: "da destra in senso antiorario: Nicola Prebenna, Margherita Dalmati, la Sig.a Prebenna, Elena Vocou della Scuola Italiana di Atene." },
  { src: imgVarsavia, alt: "All'Istituto Italiano di Cultura di Varsavia", caption: "All'Istituto Italiano di Cultura di Varsavia, dietro da sx il prof. Paveu Krupka, traduttore, e il Direttore dell’IIC di Varsavia, Prof. Giulio Molisani, avanti da sx: Ugo Piscopo, poeta e critico letterario, Nicola Prebenna, il poeta Sangiuliano e il Prof. Piotr Salwa dell’Università di Varsavia." },
  { src: imgDickinson, alt: "Premio Emily Dickinson", caption: "Premio Internazionale Emily Dickinson – 1° Classificato" },
  { src: imgCasentino, alt: "Premio Casentino a Poppi", caption: "Premio Letterario del Casentino, Poppi" },
  { src: imgFortuna, alt: "Premio Fortuna d'Autore a Bari", caption: "Premio Fortuna d'Autore, Bari" },
];

const alunniImages = [
  { src: imgAlunni1, alt: "Con gli alunni in gita", caption: "Con gli alunni" },
  { src: imgAlunni2, alt: "Con una classe di alunni", caption: "Con una classe di alunni" },
  { src: imgAlunni3, alt: "Con gli studenti sui gradini", caption: "Con gli studenti" },
  { src: imgNaxos, alt: "Nicola Prebenna a Naxos", caption: "A Naxos, Grecia" },
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
              ispirandone l'opera poetica “E la fiaccola … vive!” e le relazioni con poeti e intellettuali ellenici, 
              in particolare con la poetessa greca Margherita Dalmati, amica di Mario Luzi, Nelo Risi, Ungaretti, Montale. 
              Alla Dalmati ha dedicato un saggio pubblicato sulla rivista filologica greca Parnassos.
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

        {/* Foto con alunni */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {alunniImages.map((img, i) => (
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


      {/* Awards gallery + list */}
      <SectionBlock title="Premi e Riconoscimenti">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center -mt-8 mb-12 max-w-3xl mx-auto"
        >
          <p className="text-display text-2xl md:text-3xl font-semibold text-gold mb-6">
            Un percorso costellato di successi
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Molti sono i premi che gli sono stati attribuiti. Vengono di seguito riportati solo quelli relativi alle sillogi poetiche. Successivamente sono presentate foto di alcuni premi.
          </p>
        </motion.div>

        {/* Awards grouped by work */}
        <div className="max-w-3xl mx-auto space-y-10 mb-16">
          {premiPerOpera.map((gruppo, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-1">
                {gruppo.opera} <span className="text-gold">— Premi conseguiti</span>
              </h3>
              <div className="divider-gold !mx-0 mb-4" />
              <ul className="space-y-2">
                {gruppo.premi.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span className="text-sm text-foreground leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </SectionBlock>

      {/* Full-bleed horizontal autoplay carousel */}
      <section
        className="overflow-hidden pb-16 md:pb-24"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
      >
        <motion.div
          className="flex w-max gap-0 py-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 95, repeat: Infinity }}
        >
          {premiCarouselLoop.map((src, i) => (
            <div key={`${src}-${i}`} className="shrink-0">
              <img
                src={src}
                alt={`Foto premio ${i + 1}`}
                className="block w-auto max-w-none h-[62vw] min-h-[320px] max-h-[78vh] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Biografia;
