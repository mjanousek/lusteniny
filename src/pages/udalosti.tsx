import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Section, SectionHeader, Title } from "../components/atoms";
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
            image
            fields {
              slug
              image
            }
          }
        }
      }
      eventImages: allFile(
        filter: { relativeDirectory: { regex: "/events/[0-9]{4}$/" } }
      ) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
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
  `);

  const events = query.events.edges
    .map((edge) => edge.node)
    .map((node) => {
      return {
        ...node,
        slug: node.fields.slug,
        image: query.eventImages.edges.find(
          (imageEdge) => imageEdge.node.relativePath === node.image
        ).node.childImageSharp.gatsbyImageData,
      };
    })
    .slice()
    .sort((node) => new Date(node.date));

  return (
    <Page>
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
