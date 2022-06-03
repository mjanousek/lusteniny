import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ButtonInternalLink } from '../../components/atoms';
import { Footer, Navbar, NewsletterSection } from '../../components/organisms';
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
        };
      }[];
    };
  };
};

export default function Page({ data }: Props) {
  const events = data.events.edges.map((edge) => edge.node.childUdalostiYaml);

  return (
    <div className="">
      <Navbar hasBackground />
      <main className="">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-[25px] lg:px-[50px]">
            <div className="text-center md:mb-[100px]">
              <h1 className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Archiv Událostí
              </h1>
              <p className="mb-3 text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg xl:text-2xl">
                Zde naleznete informace o již proběhlých ročnících Luštěnin
              </p>
            </div>
          </div>
          <div className="divide-y-4 divide-dashed divide-gray-200">
            {events.map((event) => (
              <article className="container mx-auto px-[25px] lg:px-[50px]">
                <div className="grid grid-cols-6 items-center gap-x-[50px] gap-y-[15px] py-[50px]">
                  <div className="order-2 col-span-6 md:order-1 md:col-span-3">
                    <div className="mb-[30px] flex items-start justify-between gap-8">
                      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        {event.title}
                      </h2>
                      <time
                        className="flex items-center justify-center rounded-lg bg-blue-100 px-[10px] py-[5px] text-sm font-semibold text-blue-600 sm:px-[20px] sm:py-[10px] sm:text-base"
                        dateTime={event.date}
                      >
                        {new Date(event.date).toLocaleDateString('cs')}
                      </time>
                    </div>
                    <p className="mb-[30px] leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex">
                      <ButtonInternalLink
                        to="/archiv/"
                        variant="green"
                        text="Více informací"
                        icon="arrow-right-long"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 md:order-2 md:col-span-3">
                    <GatsbyImage
                      image={getImage(event.image.childImageSharp)}
                      alt={event.title}
                      className="aspect-[3/2] rounded-[16px] "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
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
        }
      }
    }
  }
`;
