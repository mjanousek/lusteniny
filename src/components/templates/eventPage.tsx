import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { EventPageData } from '../../types/content';
import { Button, Card, ExternalLink, Section, SectionHeader, Text, Title } from '../atoms';
import { CypherCard } from '../molecules';

export function EventPage(props: EventPageData) {
  return (
    <>
      <div className="h-96 relative w-full bg-gradient-to-r from-black to-green-800">
        <GatsbyImage
          image={getImage(props.image.childImageSharp)}
          alt={props.title}
          className="h-full w-full opacity-60"
          imgClassName="object-fit object-center w-full"
        />
      </div>
      <Section>
        <SectionHeader
          level={1}
          subtitle={new Date(props.date).toLocaleDateString()}
          title={props.title}
          description={props.description}
          align="center"
        />
        <div className="flex justify-center">
          <ExternalLink href={props.galleryLink}>
            <Button icon={['fab', 'facebook']}>Odkaz na fotogalerii</Button>
          </ExternalLink>
        </div>
      </Section>
      <Section>
        <SectionHeader level={1} title="Vítězné týmy" align="center" description="" />
        <ol className="max-w-5xl mx-auto space-y-16 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16 pt-6">
          {props.winners.map((winner, index) => (
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
          {props.cyphers?.length > 0 &&
            props.cyphers.map((cypher) => {
              const image = {
                data: cypher.image?.childImageSharp,
                alt: `${props.title} - ${cypher.title}`,
              };

              return <CypherCard {...cypher} image={image} key={`cypher_${cypher.title}`} />;
            })}
        </div>
      </Section>
      {props.bonusInformation?.length > 0 && (
        <Section>
          <SectionHeader
            subtitle="Objevte"
            title="Bonusové informace k šifrám"
            description="Každá šifra obsahuje menší, či delší doplňující informaci, která se váže buď s danou šifrou, nebo se stanovištěm šifry."
            align="center"
          />
          <div className="space-y-8">
            {props.bonusInformation.map((information) => (
              <Card
                key={`bonusInformation_${information.title}`}
                body={
                  <div className="space-y-4">
                    <Title level={3}>{information.title}</Title>
                    {information.text.map((p) => (
                      <Text key={`bonusInformation_${information.title}_${p}`}>{p}</Text>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
