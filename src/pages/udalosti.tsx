import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Section, Title } from "../components/atoms";
import { EventCard } from "../components/molecules";
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
    .sort((node) => node.date);

  return (
    <Page>
      <Section>
        <div className="pb-5 mb-12 border-b-2 dark:border-gray-600 text-center">
          <Title level={1}>Poslední události</Title>
        </div>
        <EventList events={events} />
      </Section>
    </Page>
  );
}
