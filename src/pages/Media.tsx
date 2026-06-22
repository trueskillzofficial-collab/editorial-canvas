import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import MediaCard from "@/components/cards/MediaCard";
import VideoModal from "@/components/sections/VideoModal";
import PhotoGallery, { type GalleryPhoto } from "@/components/sections/PhotoGallery";
import { getMediaItems } from "@/lib/data";
import type { MediaItem } from "@/lib/types";

import rotary from "@/assets/eventi/rotary_2026.jpg";
import manifestoAlatri from "@/assets/eventi/manifesto_alatri.jpg";
import presComePer from "@/assets/eventi/pres_come_per_acqua_cupa.jpg";
import presLibroMuseo from "@/assets/eventi/pres_libro_museo.jpg";
import presParzanese from "@/assets/eventi/pres_parzanese.jpg";
import presSolstizio from "@/assets/eventi/pres_solstizio.jpg";
import presVulneraBiogem from "@/assets/eventi/pres_vulnera_biogem.jpg";
import presVulneraGrottaminarda from "@/assets/eventi/pres_vulnera_grottaminarda.jpg";
import presAltraFacciaLuna from "@/assets/eventi/pres_altra_faccia_luna.jpg";
import presFiaccola from "@/assets/eventi/pres_fiaccola.jpg";
import presOde from "@/assets/eventi/pres_ode.jpg";
import teatroGiuliettaRomeo1 from "@/assets/eventi/teatro_giulietta_romeo_1.jpg";
import teatroGiuliettaRomeo2 from "@/assets/eventi/teatro_giulietta_romeo_2.jpg";
import teatroIlMulatto from "@/assets/eventi/teatro_il_mulatto.jpg";
import teatroSpiaggeLuce from "@/assets/eventi/teatro_spiagge_luce.jpg";

const presentazioni: GalleryPhoto[] = [
  { src: presComePer, alt: "Presentazione di Come per acqua cupa", caption: "Presentazione di “Come per acqua cupa”" },
  { src: presFiaccola, alt: "Presentazione dell'ode E la fiaccola … vive!", caption: "Presentazione dell'ode “E la fiaccola … vive!”, con i proff. Maresca e Vernacchia" },
  { src: presVulneraBiogem, alt: "Presentazione di Vulnera Temporis a Biogem", caption: "“Vulnera Temporis” a Biogem" },
  { src: presVulneraGrottaminarda, alt: "Presentazione di Vulnera Temporis a Grottaminarda", caption: "“Vulnera Temporis” a Grottaminarda" },
  { src: presAltraFacciaLuna, alt: "Presentazione di L'altra faccia della luna a Biogem", caption: "“L'altra faccia della luna” a Biogem" },
  { src: presParzanese, alt: "Presentazione dell'opera su Parzanese", caption: "Presentazione dell'opera su Pietro Paolo Parzanese" },
  { src: presSolstizio, alt: "Presentazione Solstizio con Fernando e Nicola", caption: "Presentazione “Solstizio”" },
  { src: presOde, alt: "Presentazione di un'ode dedicata", caption: "Presentazione di un'ode dedicata" },
  { src: presLibroMuseo, alt: "Presentazione di un libro al museo", caption: "Presentazione di un libro al museo" },
  { src: rotary, alt: "Incontro Rotary 2026 su letteratura, vita e umanità", caption: "Incontro Rotary: letteratura, vita e umanità" },
  { src: manifestoAlatri, alt: "Manifesto del viaggio nei dintorni di Alatri", caption: "Manifesto “Viaggio nei dintorni”, Alatri" },
];

const teatro: GalleryPhoto[] = [
  { src: teatroSpiaggeLuce, alt: "Rappresentazione teatrale Le spiagge della luce", caption: "“Le spiagge della luce”" },
  { src: teatroGiuliettaRomeo1, alt: "Rappresentazione teatrale Giulietta e Romeo", caption: "“Giulietta e Romeo” di P.P. Parzanese" },
  { src: teatroGiuliettaRomeo2, alt: "Rappresentazione teatrale Giulietta e Romeo", caption: "“Giulietta e Romeo” di P.P. Parzanese" },
  { src: teatroIlMulatto, alt: "Rappresentazione teatrale Il Mulatto", caption: "“Il Mulatto”" },
];

const Media = () => {
  const items = getMediaItems();
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);

  return (
    <Layout>
      <SectionBlock title="Eventi & Media" subtitle="Interviste, presentazioni, eventi e contenuti video">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <MediaCard key={item.id} item={item} index={i} onPlay={setActiveVideo} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock variant="alternate" title="Presentazioni" subtitle="Momenti dalle presentazioni delle opere">
        <PhotoGallery photos={presentazioni} />
      </SectionBlock>

      <SectionBlock title="Teatro Parzanesiano" subtitle="Le opere teatrali di Pietro Paolo Parzanese in scena">
        <PhotoGallery photos={teatro} columns="columns-1 sm:columns-2 lg:columns-4" />
      </SectionBlock>

      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </Layout>
  );
};

export default Media;
