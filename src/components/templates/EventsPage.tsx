import React from 'react';
import { EventsPageData } from "../../types/content";
import { Section, SectionHeader } from "../atoms";
import { EventList } from "../organisms";

export function EventsPage({title, description, events}: EventsPageData) {
  return (
    <>
      <Section>
        <SectionHeader
          subtitle="Archiv"
          title={title}
          description={description}
          level={1}
          align="center"
        />
        <EventList events={events} />
      </Section>
    </>
  );
}
