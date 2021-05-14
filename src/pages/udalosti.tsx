import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Section, SectionHeader } from "../components/atoms";
import { EventList } from "../components/organisms";
import Page from "../components/templates/page";

export default function Events() {
  const query = useStaticQuery(graphql`
    {
      events: allEventsYaml {
        edges {
          node {
            title
            description
            date
            slug
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 500
                  placeholder: BLURRED
                  formats: [WEBP, AVIF]
                  aspectRatio: 1.5
                )
              }
            }
          }
        }
      }
    }
  `);

  const events = query.events.edges
    .map((edge) => edge.node)
    .sort((node) => new Date(node.date));

  return (
    <Page
      title="Archiv | Luštěniny | Šifrovací hra ve Zlíně"
      eventsForSchema={events}
    >
      <Section>
        <SectionHeader
          subtitle="Archiv"
          title="Poslední události"
          description="Fotky, šifry, řešení - podívej se na již proběhlé akce!"
          level={1}
          align="center"
        />
        <EventList events={events} />
      </Section>
    </Page>
  );
}
