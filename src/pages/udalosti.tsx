import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { Section, SectionHeader } from '../components/atoms';
import { EventList } from '../components/organisms';
import Page from '../components/templates/page';
import data from '../content/udalosti.yaml';

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
                original {
                  src
                }
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
      title={data.title}
      description={data.description}
      eventsForSchema={events}
    >
      <Section>
        <SectionHeader
          subtitle="Archiv"
          title={data.archive.title}
          description={data.archive.description}
          level={1}
          align="center"
        />
        <EventList events={events} />
      </Section>
    </Page>
  );
}
