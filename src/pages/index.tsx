import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Page from "../components/templates/page";

import data from "../content/index.yaml";
import { getImage } from "gatsby-plugin-image";
import { Button, Section, SectionHeader } from "../components/atoms/";
import { CTA, EventList, FeatureList } from "../components/organisms";

// markup
const IndexPage = () => {
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
      image: file(relativePath: { eq: "polstare_lusteniny-1.jpg" }) {
        id
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  const events = query.events.edges
    .map((edge) => edge.node)
    .sort((node) => new Date(node.date))
    .reverse();

  return (
    <Page eventsForSchema={events}>
      <Section>
        <SectionHeader
          subtitle="Luštěniny"
          title={data.about.title}
          description={data.about.description}
          align="center"
        />
        <FeatureList features={data.about.features} />
      </Section>
      <CTA image={getImage(query.image)} />
      <Section>
        <SectionHeader
          subtitle="Archiv"
          title={data.archive.title}
          description={data.archive.description}
          align="center"
        />
        <EventList events={events} />

        <div className="mt-10 flex justify-center">
          <Link to="/udalosti">
            <Button icon="archive">Zobrazit Archiv</Button>
          </Link>
        </div>
      </Section>
    </Page>
  );
};

export default IndexPage;
