import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

import { BonusInformation, Cypher } from "../../types";
import {
  Button,
  Card,
  ExternalLink,
  Section,
  SectionHeader,
  Text,
  Title,
} from "../atoms";
import { CypherCard } from "../molecules";

import Page from "./page";

type Props = {
  pageContext: PageContext;
};

type PageContext = {
  title: string;
  description: string;
  slug: string;
  date: string;
  image: any;
  galleryLink: string;
  winners: string[];
  cyphers: Cypher[];
  bonusInformation: BonusInformation[];
};

export default function EventPage(props: Props) {
  const { pageContext } = props;

  const query = useStaticQuery(graphql`
    {
      cypherImages: allFile(
        filter: { relativeDirectory: { regex: "/events/[0-9]{4}/" } }
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
              original {
                src
              }
            }
          }
        }
      }
    }
  `);

  const cypherImages = pageContext.cyphers?.map((cypher) => {
    if (cypher.image === "none") {
      return { title: cypher.title, image: undefined };
    }

    const image = query.cypherImages.edges.find(
      (edge) => edge.node.relativePath === cypher.image
    );

    if (!image) {
      throw Error(`Image "${cypher.title} - ${cypher.image}" not found!`);
    }

    return { title: cypher.title, image: getImage(image.node) };
  });

  return (
    <Page
      title={`${pageContext.title} | Luštěniny | Šifrovací hra ve Zlíně`}
      description={pageContext.description}
      image={pageContext.image.childImageSharp.original.src}
      eventsForSchema={[pageContext]}
    >
      <div className="h-96 relative w-full bg-gradient-to-r from-black to-green-800">
        <GatsbyImage
          image={getImage(pageContext.image.childImageSharp.gatsbyImageData)}
          alt={pageContext.title}
          className="h-full w-full opacity-60"
          imgClassName="object-fit object-center w-full"
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
        <div className="flex justify-center">
          <ExternalLink href={pageContext.galleryLink}>
            <Button icon={["fab", "facebook"]}>Odkaz na fotogalerii</Button>
          </ExternalLink>
        </div>
      </Section>
      <Section>
        <SectionHeader
          level={1}
          title="Vítězné týmy"
          align="center"
          description=""
        />
        <ol className="max-w-5xl mx-auto space-y-16 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16 pt-6">
          {pageContext.winners.map((winner, index) => (
            <li
              key={winner}
              className="relative p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 shadow-md text-center"
            >
              <div className=" text-5xl font-bold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-20 w-20 rounded-full border-4 border-white bg-green-600 text-gray-100 shadow dark:border-gray-700">
                {index + 1}
              </div>
              <div className="mt-8 text-semibold text-gray-800 text-2xl">
                <Text size="normal">{winner}</Text>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionHeader
          subtitle="Prohlédněte si"
          title="Šifry a řešení"
          description="Všechny šifry, jejich řešení a nápovědy jsou vám k dispozici"
          align="center"
        />
        <div className="mt-12 space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-12">
          {pageContext.cyphers?.length > 0 &&
            pageContext.cyphers.map((cypher) => {
              const cypherImage = cypherImages.find(
                (x) => x.title === cypher.title
              ).image;
              const image = {
                data: cypherImage,
                alt: `${pageContext.title} - ${cypher.title}`,
              };

              return (
                <CypherCard
                  {...cypher}
                  image={image}
                  key={`cypher_${cypher.title}`}
                />
              );
            })}
        </div>
      </Section>
      {pageContext.bonusInformation?.length > 0 && (
        <Section>
          <SectionHeader
            subtitle="Objevte"
            title="Bonusové informace k šifrám"
            description="Každá šifra obsahuje menší, či delší doplňující informaci, která se váže buď s danou šifrou, nebo se stanovištěm šifry."
            align="center"
          />
          <div className="space-y-8">
            {pageContext.bonusInformation.map((information) => (
              <Card
                key={`bonusInformation_${information.title}`}
                body={
                  <div className="space-y-4">
                    <Title level={3}>{information.title}</Title>
                    {information.text.map((p) => (
                      <Text key={`bonusInformation_${information.title}_${p}`}>
                        {p}
                      </Text>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </Section>
      )}
    </Page>
  );
}
