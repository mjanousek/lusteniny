import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Slider from "react-slick";

import {
  Button,
  ExternalLink,
  Section,
  SectionHeader,
  Slide,
  Text,
  Title,
} from "../components/atoms";
import { Countdown, EventList, FeatureList } from "../components/organisms";
import Page from "../components/templates/page";
import data from "../content/index.yaml";

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
                  height: 2000
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
      image: file(relativePath: { eq: "Team.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 100, formats: [WEBP])
        }
      }
      heroImage: file(relativePath: { eq: "Hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 100, formats: [WEBP])
        }
      }
    }
  `);

  const events = query.events.edges
    .map((edge) => edge.node)
    .sort((node) => new Date(node.date))
    .reverse();

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
    <Page
      eventsForSchema={events}
      floatingNavbar
      title={data.title}
      description={data.description}
    >
      <div className="w-full h-screen  bg-gradient-to-r from-black to-green-800">
        <Slider {...settings}>
          <Slide
            title={data.hero.title}
            description={data.hero.description}
            link="#info"
            image={query.heroImage}
          />
          {events?.length > 0 &&
            events.map((event) => (
              <Slide
                key={`slide_${event.title}`}
                title={event.title}
                subtitle={new Date(event.date).toLocaleDateString("cs-CZ")}
                description={event.description}
                link={event.slug}
                image={event.image}
              />
            ))}
        </Slider>
      </div>
      <Countdown />

      <Section id="info">
        <SectionHeader
          subtitle="Luštěniny"
          title={data.about.title}
          description={data.about.description}
          align="center"
        />
        <FeatureList features={data.about.features} />
      </Section>

      <div className="shadow-lg bg-green-600 my-12 dark:bg-opacity-80">
        <div className="flex flex-col justify-end items-center lg:grid grid-cols-2">
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right px-4 py-10  lg:py-20 lg:pl-20 lg:pr-16">
            <p className="uppercase text-gray-100 font-quicksand font-semibold mb-1">
              Kontakt
            </p>
            <Title level={2} color="light">
              {data.contact.title}
            </Title>
            <Text color="light">{data.contact.description}</Text>
            <div className="mt-6 flex items-center space-x-2 lg:space-x-4">
              <ExternalLink href={data.facebookUrl}>
                <Button icon={["fab", "facebook"]}>Facebook</Button>
              </ExternalLink>
              <ExternalLink href={data.messengerUrl}>
                <Button icon={["fab", "facebook-messenger"]}>Messenger</Button>
              </ExternalLink>
            </div>
          </div>
          <GatsbyImage
            image={getImage(query.image)}
            alt="Luštěniny"
            className="h-screen-half w-full opacity-80 dark:filter brightness-75"
            imgClassName="object-fit object-center filter brightness-90"
          />
        </div>
      </div>

      <Section>
        <SectionHeader
          subtitle="Archiv"
          title={data.archive.title}
          description={data.archive.description}
          align="center"
        />
        <EventList events={events} />

        <div className="mt-16 flex justify-center">
          <Link to="/udalosti">
            <Button icon="archive" size="large">
              Zobrazit Archiv
            </Button>
          </Link>
        </div>
      </Section>
    </Page>
  );
};

export default IndexPage;
