import { graphql, useStaticQuery } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { BonusInformation, Cypher } from "../../types";
import {
  Button,
  Card,
  Collapsible,
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
  image: string;
  galleryLink: string;
  winners: string[];
  cyphers: Cypher[];
  bonusInformation: BonusInformation[];
};

export default function EventPage(props: Props) {
  const pageContext = props.pageContext;

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
      cypherImages: allFile(
        filter: { relativeDirectory: { regex: "/events/[0-9]{4}/" } }
      ) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
            childImageSharp {
              id
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

  const eventImageEdge = query.eventsImages.edges.find(
    (edge) => edge.node.relativePath === pageContext.image
  );

  if (!eventImageEdge) {
    throw `Image "${pageContext.title} - ${pageContext.image}" not found!`;
  }

  const eventImage = getImage(eventImageEdge.node);

  const cypherImages = pageContext.cyphers?.map((cypher) => {
    if (cypher.image === "none")
      return { title: cypher.title, image: undefined };

    const image = query.cypherImages.edges.find(
      (edge) => edge.node.relativePath === cypher.image
    );

    if (!image) {
      throw `Image "${cypher.title} - ${cypher.image}" not found!`;
    }

    return { title: cypher.title, image: getImage(image.node) };
  });

  return (
    <Page>
      <div className="h-96 relative">
        <GatsbyImage
          image={eventImage}
          alt={pageContext.title}
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
            <Button icon={["fab", "facebook"]}>Odkaz na fotogalerii</Button>
          </ExternalLink>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 text-center mb-4 space-y-4">
            <Title level={2}>Vítězné týmy</Title>
            <ul
              role="list"
              className="md:grid grid-cols-3 md:divide-x-2 divide-y-2 md:divide-y-0"
            >
              {pageContext.winners.map((winner, index) => (
                <li className="py-4 px-8 flex flex-col justify-center items-center">
                  <div className="mb-4 w-10 h-10 bg-green-600 dark:bg-green-500 rounded-full text-gray-100 flex justify-center items-center">
                    {index + 1}
                  </div>
                  <Text>{winner}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader
          subtitle="Prohlédněte si"
          title="Šifry a řešení"
          description="Všechny šifry, jejich řešení a nápovědy jsou vám k dispozici"
          align="center"
        />
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {pageContext.cyphers?.length > 0 &&
            pageContext.cyphers.map((cypher) => {
              const cypherImage = cypherImages.find(
                (x) => x.title === cypher.title
              ).image;
              const image = {
                data: cypherImage,
                alt: `${pageContext.title} - ${cypher.title}`,
              };

              return <CypherCard {...cypher} image={image} />;
            })}
        </div>
      </Section>
      <Section>
        <SectionHeader
          subtitle="Objevte"
          title="Bonusové informace k šifrám"
          description="Každá šifra obsahuje menší, či delší doplňující informaci, která se váže buď s danou šifrou, nebo se stanovištěm šifry."
          align="center"
        />
        <div className="space-y-8">
          {pageContext.bonusInformation?.length > 0 &&
            pageContext.bonusInformation.map((information) => (
              <Card
                body={
                  <div className="space-y-4">
                    <Title level={3}>{information.title}</Title>
                    {information.text.map((p) => (
                      <Text>{p}</Text>
                    ))}
                  </div>
                }
              />
            ))}
        </div>
      </Section>
    </Page>
  );
}
