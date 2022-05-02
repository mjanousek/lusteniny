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
        <div className="border-2 border-white h-12 w-12 flex justify-center items-center shadow-lg rounded-full text-white hover:bg-white hover:text-green-600 transition-all duration-300 cursor-pointer">
          <FontAwesomeIcon icon="arrow-left" />
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="border-2 border-white h-12 w-12 flex justify-center items-center shadow-lg rounded-full text-white hover:bg-white hover:text-green-600 transition-all duration-300 cursor-pointer">
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
      <section className="py-16 bg-gradient-to-br from-green-500 to-green-600 relative shadow-lg shadow-green-600/20 z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Luštěniny 2022
              </h2>
              <p className="text-green-50 sm:text-lg font-medium mb-4 leading-relaxed">
                Tradice pokračuje a Luštěniny se opět probouzejí k akci, tentokrát společně oslavíme
                pátý ročník zlínské šifrovačky Luštěniny.
              </p>
              <p className="text-green-50  sm:text-lg font-medium mb-4 leading-relaxed">
                Když si vybavíme všechny ty uplynulé ročníky, tak pět let je pro nás dlouhá doba.
                Nicméně jak už určitě někteří z vás tuší, slaví se tento rok ve Zlíně ještě jedno, o
                trošku větší, číslo.
              </p>
              <p className="text-green-50  sm:text-lg font-medium mb-4 leading-relaxed">
                To číslo je 700 a je výročím první písemné zmínky o městu Zlín - a to přesně bude i
                naše téma!
              </p>
              <p className="text-green-50  sm:text-lg font-semibold mb-4 leading-relaxed">
                Kdy a kde se potkáme? Sejdeme se v sobotu <strong>11. 6. 2022 v 14:00</strong>. před{' '}
                <strong>Zlínským zámkem</strong>.
              </p>
            </div>
            <form action="" className="bg-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 mb-6">
                Registruj svůj tým
              </h3>
              <p className="text-center sm:text-lg leading-relaxed text-gray-700 mb-8">
                Svůj tým můžeš registrovat naapsáním komentáře s názvém týmu a počtem členů na
                facebookové události, nebo nám můžeš napsat email.
              </p>

              <a
                href="https://www.facebook.com/events/669591394339457"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-700 shadow shadow-blue-600/20 rounded-lg font-semibold text-white flex items-center gap-3 justify-center mb-3"
              >
                <span>Registrovat se na facebookové události</span>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
              </a>

              <a
                href=" mailto:mjanousek92@gmail.com?subject=Lu%C5%A1t%C4%9Bniny%202022%20-%20Registrace%20t%C3%BDmu&body=Dobr%C3%BD%20den%2C%0D%0A%0D%0Acht%C4%9Bli%20bychom%20registrovat%20sv%C5%AFj%20t%C3%BDm%20na%20ud%C3%A1losti%20Lu%C5%A1t%C4%9Bniny%202022%20(11.06.2022).%0D%0A%0D%0AN%C3%A1zev%20t%C3%BDmu%3A%20_____%0D%0APo%C4%8Det%20%C4%8Dlen%C5%AF%3A%20_____ "
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-br from-green-500 to-green-600 shadow shadow-green-600/20 rounded-lg font-semibold text-white flex items-center gap-3 justify-center mb-4"
              >
                <span>Registrovat se emailem</span>
                <FontAwesomeIcon icon={'envelope'} />
              </a>
              <small className="text-sm text-gray-700">
                (Přihlášení lze provést i na místě, ale vzhledem k náročnosti příprav vás prosíme o
                předčasnou registraci )
              </small>
            </form>
          </div>
        </div>
      </section>

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
