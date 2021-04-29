import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link, graphql, useStaticQuery } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from "../images/Hero.jpg";
import Layout from "../components/layout";
import React from "react";
import Slide from "../components/slider/slide";
import Slider from "react-slick";
import SocialLinks from "../components/socialLinks";
import data from "../content/index.yaml";

// markup
const IndexPage = () => {
  const events = useStaticQuery(graphql`
    {
      allEventsYaml {
        edges {
          node {
            title
            description
            date
            image
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .allEventsYaml.edges.map((edge) => edge.node)
    .sort((node) => node.date)
    .reverse();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <>
        <section>
          <Slider {...sliderSettings} className="is-hero">
            <div>
              <div className="hero is-fullheight">
                <div
                  className="hero-body"
                  style={{
                    backgroundImage: `url("${HeroImage}")`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container">
                    <h1 className="title">Luštěniny</h1>
                  </div>
                </div>
              </div>
            </div>
            {data.hero.slides.map((slide) => (
              <Slide {...slide} image={"/images" + slide.image} />
            ))}
          </Slider>
        </section>
        <section className="section">
          <div className="container">
            <header className="has-text-centered mb-6">
              <div className="columns is-centered">
                <div className="column is-7">
                  <h2 className="title is-1">{data.about.title}</h2>
                  <p className="subtitle">{data.about.subtitle}</p>
                </div>
              </div>
            </header>
            <div className="columns is-multiline is-centered mt-6">
              {data.about.features.map((feature) => (
                <div className="column is-6-tablet is-4-desktop mb-5">
                  <div className="is-flex is-align-items-start">
                    <div className="mr-5 p-4 is-rounded has-background-primary has-text-white">
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="fa-2x"
                        style={{ width: 32, height: 32 }}
                      />
                    </div>
                    <div>
                      <h3 className="title is-size-5 is-spaced mb-3">
                        {feature.title}
                      </h3>
                      <p className="subtitle">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <header className="has-text-centered mb-5">
              <h2 className="title is-1">{data.contact.title}</h2>
              <p className="subtitle">{data.contact.subtitle}</p>
            </header>
            <SocialLinks isCentered isExpanded />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <header className="has-text-centered mb-6">
              <h2 className="title is-1">{data.archive.title}</h2>
              <p className="subtitle">{data.archive.subtitle}</p>
            </header>
            <div className="columns is-centered is-multiline">
              {events &&
                events.length > 0 &&
                events.map((event) => (
                  <article className="column is-6-tablet is-3-desktop">
                    <Link to={event.fields.slug}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="image is-fullwidth is-radius is-object-cover"
                      />
                    </Link>
                    <div className="my-2">
                      <span className="tag is-rounded">
                        {new Date(event.date).toLocaleDateString("cs")}
                      </span>
                    </div>
                    <h3 className="title is-size-4 my-2">{event.title}</h3>
                    <p className="mt-2 mb-3 subtitle is-size-6">
                      {event.description}
                    </p>
                    <div className="buttons">
                      <Link
                        to={event.fields.slug}
                        className="button is-primary"
                      >
                        <FontAwesomeIcon
                          icon="angle-double-right"
                          className="mr-2"
                        />
                        Více informací
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default IndexPage;
