import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import EventCard from "@/components/cards/EventCard";
import { getEvents } from "@/lib/data";

const Eventi = () => {
  const events = getEvents();

  return (
    <Layout>
      <SectionBlock title="Eventi e Presentazioni" subtitle="Incontri, presentazioni e momenti culturali">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default Eventi;
