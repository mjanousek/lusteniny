import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ButtonInternalLink, Logo } from '../components/atoms';
import { Footer, CallToAction, Helmet, Header } from '../components/organisms';
import { Image } from '../types/content';
import { classNames } from '../utils';

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
    <>
      <Helmet
        title="Luštěniny | Šifrovací hra ve Zlíně"
        description="Luštěniny jsou tradiční šifrovací hra pořádána v centru Zlína, které se můžeš
                zúčastnit jak v týmu, tak sám. Neváhej a přijd si k nám zaluštit."
      />
      <Header />
      <main className="bg-blue-50">
        {/* Articles */}
        <section className="relative bg-blue-50 pt-16 pb-32" id="udalosti">
          <div className="container mx-auto px-4 sm:px-8 md:px-12">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Minulé Ročníky
            </h1>
            <p className="mb-12 text-center font-medium leading-relaxed text-gray-700 sm:mb-20">
              Zde naleznete všechny informace o již proběhlých ročnících Luštěnin
            </p>
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
              {events.map((event) => (
                <article className="flex flex-col rounded-xl bg-white shadow-xl transition duration-500 hover:shadow-2xl hover:shadow-black/40">
                  <Link className="group relative block overflow-hidden rounded-t-xl" to={event.slug}>
                    <GatsbyImage
                      image={getImage(event.image.childImageSharp) as any}
                      alt={event.title}
                      className="aspect-[3/2] rounded-t-xl transition duration-500 group-hover:scale-110"
                    />
                    <svg
                      className="absolute left-0 bottom-0 right-0 -mb-[2px] w-full text-center text-white"
                      viewBox="0 0 201 7"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6L200 6C200 6 140.254 1 100 1C59.7457 1 0 6 0 6Z"
                        stroke="currentColor"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>

                  <div className="group flex-grow px-4 pb-6 text-center sm:px-6 md:px-8 lg:px-10">
                    <time
                      dateTime={new Date(event.date).toISOString()}
                      className="mb-4 block text-sm font-semibold text-gray-500 transition duration-500 group-hover:text-gray-700"
                    >
                      {new Date(event.date).toLocaleDateString('cs')}{' '}
                    </time>
                    <h3 className="mb-5 text-xl font-extrabold text-gray-900 transition duration-500 group-hover:text-black md:text-2xl">
                      {event.title}
                    </h3>
                    <p className="text-left leading-relaxed text-gray-700 transition duration-500 group-hover:text-gray-900">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      to={event.slug}
                      className="block rounded-t-[2rem] bg-green-600/90 px-10 py-3 font-semibold uppercase tracking-wide text-white transition duration-500 hover:bg-green-500"
                    >
                      Více informací
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="h-32 bg-white"></section>
      </main>
      <CallToAction />
      <Footer />
    </>
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
