import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { HomePageData } from '../../types/content';
import Slider from 'react-slick';

import { Button, ExternalLink, Section, SectionHeader, Slide, Text, Title } from '../atoms';
import { EventList, FeatureList } from '../organisms';
import CNGroupLogo from '../atoms/sponsors/CngroupLogo';
import ZivyZlinLogo from '../atoms/sponsors/ZivyZlinLogo';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

export function HomePage(props: HomePageData) {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <div className="border-2 border-white h-12 w-12 flex justify-center items-center shadow-lg rounded-full text-white hover:bg-white hover:text-green-600 transition-all duration-300 cursor-pointer dark:border-gray-200 dark:text-gray-200">
          <FontAwesomeIcon icon="arrow-left" />
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="border-2 border-white h-12 w-12 flex justify-center items-center shadow-lg rounded-full text-white hover:bg-white hover:text-green-600 transition-all duration-300 cursor-pointer dark:border-gray-200 dark:text-gray-200">
          <FontAwesomeIcon icon="arrow-right" />
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="w-full h-screen  bg-gradient-to-r from-black to-green-800">
        <Slider {...settings}>
          <Slide
            title={props.hero.title}
            description={props.hero.description}
            link="#info"
            image={props.image.childImageSharp}
          />
          {props.events?.length > 0 &&
            props.events.map((event) => (
              <Slide
                key={`slide_${event.title}`}
                title={event.title}
                subtitle={new Date(event.date).toLocaleDateString('cs-CZ')}
                description={event.description}
                link={event.slug}
                image={event.image.childImageSharp}
              />
            ))}
        </Slider>
      </div>

      <Section id="info">
        <SectionHeader
          subtitle="Luštěniny"
          title={props.about.title}
          description={props.about.description}
          align="center"
        />
        <FeatureList features={props.about.features} />
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 mx-auto space-y-8 md:space-y-0 md:space-x-12">
          <CNGroupLogo />
          <ZivyZlinLogo />
        </div>
      </Section>

      <div className="shadow-inner my-12">
        <div className="shadow-lg bg-green-600 py-6 relative z-10">
          <div className="container mx-auto text-center">
            <p className="uppercase text-gray-100 font-quicksand font-semibold mb-1">Kontakt</p>
            <Title level={2} color="light">
              {props.contact.title}
            </Title>
            <Text color="light">{props.contact.description}</Text>
            <div className="mt-6 flex justify-center space-x-2 lg:space-x-4 mx-auto">
              <ExternalLink href={props.facebookUrl}>
                <Button icon={['fab', 'facebook']}>Facebook</Button>
              </ExternalLink>
              <ExternalLink href={props.messengerUrl}>
                <Button icon={['fab', 'facebook-messenger']}>Messenger</Button>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center transform flex justify-center mt-6">
          <div className="shadow-lg rounded-full overflow-hidden border-2 border-white dark:border-gray-700">
            <GatsbyImage
              image={getImage(props.contact.image.childImageSharp)}
              alt="Luštěniny"
              className="dark:filter brightness-75 h-full"
              imgClassName="object-fit object-center filter brightness-90 h-full"
            />
          </div>
        </div>
      </div>

      <Section>
        <SectionHeader
          subtitle="Archiv"
          title={props.archive.title}
          description={props.archive.description}
          align="center"
        />
        <EventList events={props.events} />
      </Section>
    </>
  );
}
