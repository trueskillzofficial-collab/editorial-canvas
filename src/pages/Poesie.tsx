import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import PoemCard from "@/components/cards/PoemCard";
import { getPoems } from "@/lib/data";

const THEME_FILTERS = [
  { label: "Tutte", value: "" },
  { label: "Amore", value: "Amore" },
  { label: "Madre", value: "Amore per la Madre" },
  { label: "Attualità", value: "Attualità" },
  { label: "Spiritualità", value: "Spiritualità" },
  { label: "Storia", value: "Storia e Religiosità" },
  { label: "La Poesia", value: "La Poesia" },
  { label: "La Terra", value: "La Terra" },
];

const Poesie = () => {
  const poems = getPoems();
  const [activeFilter, setActiveFilter] = useState("");

  const themeOrder = ["La Poesia", "Amore", "Amore per la Madre", "Attualità", "Spiritualità", "Storia e Religiosità", "La Terra"];
  const themes = themeOrder.filter(t => poems.some(p => p.theme === t));

  const filteredThemes = activeFilter ? themes.filter(t => t === activeFilter) : themes;

  return (
    <Layout>
      <SectionBlock title="Poesie" subtitle="Versi che nascono dal profondo del cuore, testimonianza di un animo offeso dalle brutture del mondo, ma sorretto dal vivo desiderio di nuova umanità.">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {THEME_FILTERS.filter(f => !f.value || themes.includes(f.value)).map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-sm border transition-colors ${
                activeFilter === filter.value
                  ? "bg-gold text-background border-gold"
                  : "bg-transparent text-foreground/70 border-border hover:border-gold hover:text-gold"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredThemes.map((theme) => (
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
