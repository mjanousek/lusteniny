import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ButtonInternalLink, Logo } from '../components/atoms';
import { Footer, CallToAction, Helmet } from '../components/organisms';
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
      <header className="relative z-50 bg-blue-50">
        <div className="container mx-auto flex items-center justify-between gap-8 px-4 sm:px-8 md:px-12 xl:justify-start">
          <div className="-ml-6 flex items-center gap-3 rounded px-6 py-6 text-2xl font-bold text-green-600 transition duration-300 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
            <Logo className="h-[30px]" />
            Luštěniny
          </div>

          <nav
            aria-label="Hlavní navigace"
            className="ml-auto hidden items-stretch gap-6 text-xl font-medium text-white xl:flex"
          >
            <Link
              className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-gray-600 transition duration-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              to="/"
            >
              Domů
            </Link>
            <Link
              className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-gray-600 transition duration-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              to="/#info"
            >
              O Luštěninách
            </Link>
            <Link
              className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-gray-600 transition duration-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              to="/#udalosti"
            >
              Události
            </Link>
            <Link
              className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-gray-600 transition duration-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              to="/#kontakt"
            >
              Kontakt
            </Link>
          </nav>
          <Menu as="div" className="relative flex items-center justify-center xl:hidden">
            {({ open }) => (
              <>
                <Menu.Button
                  className={classNames(
                    'relative z-[60] p-6  focus:outline-none',
                    open ? 'text-white focus:text-green-50' : 'text-gray-700 focus:text-white',
                  )}
                >
                  <FontAwesomeIcon icon={open ? 'times' : 'bars'} />
                </Menu.Button>

                <Transition
                  as={React.Fragment}
                  enter="transition linear duration-300"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform"
                  leave="transition linear duration-300"
                  leaveFrom="transform"
                  leaveTo="transform  scale-95 opacity-0"
                >
                  <Menu.Items
                    className={classNames(
                      'absolute right-0 top-0 z-50 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-br from-green-500 to-green-600 pt-14 text-center font-medium shadow-xl shadow-green-600/25 focus:outline-none',
                    )}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            'block px-6 py-3 text-green-50',
                            active ? 'bg-green-600 text-green-50' : '',
                          )}
                          to="/"
                        >
                          Domů
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            'block px-6 py-3 text-green-50',
                            active ? 'bg-green-600 text-green-50' : '',
                          )}
                          to="/#info"
                        >
                          O Luštěninách
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            'block px-6 py-3 text-green-50',
                            active ? 'bg-green-600 text-green-50' : '',
                          )}
                          to="/#udalosti"
                        >
                          Události
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            'block px-6 py-3 text-green-50',
                            active ? 'bg-green-600 text-green-50' : '',
                          )}
                          to="/#kontakt"
                        >
                          Kontakt
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </header>
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
                  <Link className="group relative block overflow-hidden" to={event.slug}>
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
