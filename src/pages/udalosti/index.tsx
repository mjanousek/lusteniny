import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ButtonInternalLink, Container, H1, H2, TimeTag } from '../../components/atoms';
import { Footer, Navbar } from '../../components/organisms';
import { CallToAction } from '../../components/organisms/CallToAction';
import { Image } from '../../types/content';

type Props = {
  data: {
    events: {
      edges: {
        node: {
          childUdalostiYaml: {
            title: string;
            description: string;
            image: Image;
            date: string;
          };
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
};

export default function Page({ data }: Props) {
  const events = data.events.edges.map((edge) => ({
    ...edge.node.childUdalostiYaml,
    slug: edge.node.fields.slug,
  }));

  return (
    <div className="">
      <Navbar hasBackground />
      <main className="">
        <section className="py-16 sm:py-24">
          <Container>
            <div className="text-center md:mb-[50px]">
              <H1>Archiv Událostí</H1>
              <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg xl:text-2xl">
                Zde naleznete informace o již proběhlých ročnících Luštěnin
              </p>
            </div>
          </Container>
          <div className="divide-y-4 divide-dashed divide-blue-100">
            {events.map((event) => (
              <Container>
                <article>
                  <div className="grid grid-cols-6 items-center gap-x-[50px] gap-y-[15px] py-[50px]">
                    <div className="order-2 col-span-6 lg:order-1 lg:col-span-3">
                      <div className="mb-[15px] flex items-start justify-between gap-8 lg:mb-[30px]">
                        <H2>{event.title}</H2>
                        <TimeTag time={event.date} />
                      </div>
                      <p className="mb-[30px] leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex">
                        <ButtonInternalLink
                          to={event.slug}
                          variant="green"
                          text="Více informací"
                          icon="arrow-right-long"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 lg:order-2 lg:col-span-3">
                      <GatsbyImage
                        image={getImage(event.image.childImageSharp)}
                        alt={event.title}
                        className="aspect-[3/2] rounded-[16px] shadow-sm"
                      />
                    </div>
                  </div>
                </article>
              </Container>
            ))}
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}

export const query = graphql`
  {
    events: allFile(
      filter: { relativeDirectory: { eq: "udalosti" } }
      sort: { fields: childrenUdalostiYaml___date, order: DESC }
    ) {
      edges {
        node {
          childUdalostiYaml {
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
