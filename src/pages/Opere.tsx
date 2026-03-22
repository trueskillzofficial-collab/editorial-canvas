import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import WorkCard from "@/components/cards/WorkCard";
import { getWorks } from "@/lib/data";

const Opere = () => {
  const works = getWorks();

  return (
    <Layout>
      <SectionBlock title="Opere e Pubblicazioni" subtitle="Il percorso letterario attraverso le pubblicazioni">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default Opere;
