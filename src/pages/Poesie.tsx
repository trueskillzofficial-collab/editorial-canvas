import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import PoemCard from "@/components/cards/PoemCard";
import { getPoems } from "@/lib/data";

const Poesie = () => {
  const poems = getPoems();
  const themes = [...new Set(poems.map((p) => p.theme))];

  return (
    <Layout>
      <SectionBlock title="Poesie" subtitle="Versi che nascono dalla parte più genuina dell'io">
        {themes.map((theme) => (
          <div key={theme} className="mb-16 last:mb-0">
            <h3 className="text-display text-xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {theme}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {poems
                .filter((p) => p.theme === theme)
                .map((poem, i) => (
                  <PoemCard key={poem.id} title={poem.title} theme={poem.theme} text={poem.text} index={i} />
                ))}
            </div>
          </div>
        ))}
      </SectionBlock>
    </Layout>
  );
};

export default Poesie;
