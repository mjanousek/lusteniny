import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Page from "../components/templates/page";

import data from "../content/index.yaml";
import { getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Section } from "../components/atoms/";
import { SectionHeader } from "../components/molecules/";
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
            image
            fields {
              slug
              image
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
    .sort((node) => node.date)
    .reverse();

  return (
    <Page>
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
            <Button icon="archive" color="primary" darkColor="primary">
              Zobrazit Archiv
            </Button>
          </Link>
        </div>
      </Section>
    </Page>
  );
};

export default IndexPage;
