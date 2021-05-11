import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { Button, ExternalLink, Section, Text, Title } from "../atoms";
import { SectionHeader } from "../molecules";
import Page from "./page";

export default function EventPage({ pageContext }) {
  const query = useStaticQuery(graphql`
    {
      eventsImages: allFile(
        filter: { relativeDirectory: { regex: "/events/[0-9]{4}$/" } }
      ) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [WEBP, AVIF]
                quality: 100
                width: 2000
              )
            }
          }
        }
      }
    }
  `);
  const image = getImage(
    query.eventsImages.edges.find(
      (x) => x.node.relativePath === pageContext.image
    ).node
  );

  return (
    <Page>
      <div className="h-96 relative">
        <GatsbyImage
          image={image}
          alt=""
          className="h-full "
          imgClassName="object-fit object-center dark:filter brightness-75"
        />
      </div>
      <Section>
        <SectionHeader
          level={1}
          subtitle={new Date(pageContext.date).toLocaleDateString()}
          title={pageContext.title}
          description={pageContext.description}
          align="center"
        />
        <div className="my-6 flex justify-center">
          <ExternalLink href={pageContext.galleryLink}>
            <Button
              icon={["fab", "facebook"]}
              color="primary"
              darkColor="primary"
            >
              Odkaz na fotogalerii
            </Button>
          </ExternalLink>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 text-center mb-4 space-y-4">
            <Title level={2}>Vítězné týmy</Title>
            <div className="md:grid grid-cols-3 md:divide-x-2 divide-y-2 md:divide-y-0">
              {pageContext.winners.map((winner, index) => (
                <div className="py-4 px-8 flex flex-col justify-center items-center">
                  <div className="mb-4 w-10 h-10 bg-green-600 rounded-full text-gray-100 flex justify-center items-center">
                    {index + 1}
                  </div>
                  <Text>{winner}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader
          subtitle="Vyluštěte"
          title="Šifry a řešení"
          description="Všechny šifry, jejich řešení a nápovědy jsou vám k dispozici"
          align="center"
        />
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {pageContext.cyphers.map((cypher) => (
            <div className="p-4 shadow-md text-center bg-white rounded-md">{cypher.title}</div>
          ))}
        </div>
      </Section>
    </Page>
  );
}
