import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import MediaCard from "@/components/cards/MediaCard";
import VideoModal from "@/components/sections/VideoModal";
import { getMediaItems } from "@/lib/data";
import type { MediaItem } from "@/lib/types";

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
      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </Layout>
  );
};

export default Media;
