import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Footer, CallToAction, Helmet } from '../components/organisms';

import { EventPageQuery } from '../types/content';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { classNames } from '../utils';
import { ButtonExternalLink, Logo } from '../components/atoms';

export function Event(props: EventPageQuery) {
  const event = props.data.file.childUdalostiYaml;

  return (
    <>
      <Helmet title={`${event.title} | Šifrovací hra ve Zlíně`} description={event.description} />
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
                    open ? 'text-white focus:text-green-50' : 'text-gray-700 focus:text-gray-900',
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
        {/* Main header */}
        <section className="relative bg-white pb-24">
          <div className="relative  pt-12">
            <div className="container relative z-20 mx-auto px-4 text-center sm:px-8 md:px-12">
              <div className="relative mb-12">
                <GatsbyImage
                  image={getImage(event.image.childImageSharp) as any}
                  alt={`${event.title}-${new Date(event.date).toLocaleDateString('cs')}`}
                  objectPosition="center"
                  className="aspect-[4/3] max-h-[20rem] w-full rounded-xl shadow-lg shadow-blue-800/25 saturate-[125%] sm:max-h-[24rem] md:max-h-[28rem] lg:max-h-[32rem] xl:max-h-[36rem]"
                />
              </div>
            </div>
            <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-blue-50 to-white"></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 text-center sm:px-8 md:px-12">
            <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {event.title}
            </h1>
            <div className="mb-8 flex justify-center">
              <time
                dateTime={new Date(event.date).toISOString()}
                className="block rounded-[8px] bg-blue-100 px-[20px] py-[10px] text-sm font-semibold text-blue-500 sm:text-base"
              >
                {new Date(event.date).toLocaleDateString('cs')}{' '}
              </time>
            </div>
            <p className="mb-12 text-center leading-loose text-gray-800 sm:text-lg sm:leading-loose lg:text-xl lg:leading-loose">
              {event.description}
            </p>
            <div className="flex justify-center">
              <ButtonExternalLink
                variant="green"
                href={event.galleryLink}
                text="Zobrazit fotogalerii"
                icon={['fab', 'facebook']}
              />
            </div>
          </div>
        </section>

        {/* Winners */}
        <section className="bg-white pt-12 pb-24">
          <div className="container mx-auto  px-4 py-16 sm:px-8 md:px-12 md:py-12 lg:py-8 xl:py-4">
            <h2 className="mb-16 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Vítězné týmy
            </h2>
            <ol className="mx-auto grid max-w-5xl justify-center gap-16 md:grid-cols-3">
              {event.winners.map((winner, index) => (
                <li className="group flex flex-col items-center rounded-lg border-2 border-green-500 p-8 shadow shadow-green-500/20 transition duration-500  hover:shadow-lg hover:shadow-green-500/30">
                  <div className="mb-6 -mt-14 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 bg-white text-xl font-bold text-green-600 sm:-mt-16 sm:h-16 sm:w-16 sm:text-3xl">
                    {index + 1}
                  </div>
                  <div className="font-medium text-gray-900 sm:text-lg lg:text-xl">{winner}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cyphers */}
        <section className="bg-blue-50 py-24">
          <div className="container mx-auto  px-4 py-16 sm:px-8 md:px-12 md:py-12 lg:py-8 xl:py-4">
            <header className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                Šifry a jejich řešení
              </h2>
              <p className="mb-12 text-center font-medium leading-relaxed text-gray-700 sm:mb-20">
                Všechny šifry, jejich řešení a nápovědy jsou vám k dispozici
              </p>
            </header>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3">
              {event.cyphers.map((cypher, cypherIndex) => (
                <div className="relative h-fit overflow-hidden rounded-[16px] bg-white shadow">
                  <h3
                    className={classNames(
                      cypher.info
                        ? 'p-6 text-center text-2xl font-semibold text-gray-900'
                        : 'sr-only',
                    )}
                  >
                    {cypher.title}
                  </h3>
                  {cypher.info && (
                    <div className="space-y-3 px-6 pb-6">
                      {cypher.info.map((info) => (
                        <p className="font-medium text-gray-800"> {info}</p>
                      ))}
                    </div>
                  )}

                  <div className="relative">
                    {cypher.image && (
                      <GatsbyImage
                        image={getImage(cypher.image.childImageSharp) as any}
                        alt={`${event.title} - Šifra ${cypher.title}`}
                      />
                    )}
                    {cypher.images && (
                      <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Navigation, Pagination, A11y]}
                        navigation={{
                          prevEl: `#prevButton-${cypherIndex}`,
                          nextEl: `#nextButton-${cypherIndex}`,
                        }}
                        pagination={{
                          clickable: false,
                          bulletActiveClass: 'bg-green-600 opacity-100',
                        }}
                      >
                        <SwiperPrevButton />
                        <SwiperNextButton />
                        {cypher.images.map((image, index) => (
                          <SwiperSlide>
                            <GatsbyImage
                              image={getImage(image.childImageSharp) as any}
                              alt={`${event.title} - Šifra ${cypher.title} (${index + 1})`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                  <Disclosure>
                    <Disclosure.Button className="flex w-full items-center justify-center gap-4 bg-green-600/90 px-[40px] py-[15px] font-semibold text-white transition hover:bg-green-600 focus:bg-green-600 focus:outline-none">
                      Zobrazit nápovědu <FontAwesomeIcon icon="lightbulb" />
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-300 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-300 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-white p-6 text-lg">
                        <ol className="list-decimal space-y-2 pl-4">
                          {cypher.hints.map((hint) => (
                            <li>{hint}</li>
                          ))}
                        </ol>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex w-full items-center justify-center gap-4 bg-green-600/90 px-[40px] py-[15px] font-semibold text-white transition hover:bg-green-600 focus:bg-green-600 focus:outline-none">
                      Zobrazit řešení <FontAwesomeIcon icon="list-check" />
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-300 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-300 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-white p-6 text-lg">
                        <ol className="mb-4 list-decimal space-y-2 pl-4 text-gray-400">
                          {cypher.steps.map((step) => (
                            <li>
                              <span className="text-gray-800 font-normal">{step}</span>
                            </li>
                          ))}
                        </ol>
                        <p className="rounded-[4px] border border-green-500 bg-green-50 p-2 text-center text-green-700 shadow-sm shadow-green-500/25">
                          Řešení: <strong>{cypher.solution}</strong>
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus information */}
        {event.bonusInformation ? (
          <section className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-4  sm:px-8 md:px-12">
              <header className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                  Bonusové informace k šifám
                </h2>
                <p className="mb-12 text-center font-medium leading-relaxed text-gray-700 sm:mb-20">
                  Každá šifra obsahuje menší, či delší doplňující informaci, která se váže buď s
                  danou šifrou, nebo se stanovištěm šifry.
                </p>
              </header>
              {event.bonusInformation.map((bonusInformation) => (
                <div className="mb-12">
                  <h3 className="mb-3 text-2xl font-semibold">{bonusInformation.title}</h3>
                  <div className="space-y-2">
                    {bonusInformation.text.split('\n').map((line) => (
                      <p className="whitespace-pre-wrap text-sm leading-loose text-gray-700 transition hover:text-gray-800 sm:text-base sm:leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="bg-white py-24">
            <div className="container mx-auto mb-16 max-w-7xl px-4 text-center sm:px-8 md:px-12 ">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                Bonusové informace k šifám
              </h2>
              <p className="mb-8 font-medium text-gray-700 md:text-lg">
                Tento ročník bohužel neobsahoval žádné bonusové informace k šifrám.
              </p>
              <FontAwesomeIcon icon={'question'} className="text-green-500" size="2x" />
            </div>
          </section>
        )}
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}

export default Event;

function SwiperPrevButton() {
  const swiper = useSwiper();
  const [disabled, setDisabled] = useState(true);
  swiper.on('slideChange', (swiper) => setDisabled(swiper.isBeginning));

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute left-0 top-0 bottom-0 z-20 flex items-center justify-center px-4 text-green-500 hover:text-green-600 focus:text-green-600 focus:outline-none disabled:opacity-50"
      title="Předchozí obrázek"
      disabled={disabled}
    >
      <FontAwesomeIcon icon={'angle-left'} size="2x" />
    </button>
  );
}
function SwiperNextButton() {
  const swiper = useSwiper();
  const [disabled, setDisabled] = useState(false);
  swiper.on('slideChange', (swiper) => setDisabled(swiper.isEnd));

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="absolute right-0 top-0 bottom-0 z-20 flex items-center justify-center px-4 text-green-500 hover:text-green-600 focus:text-green-600 focus:outline-none disabled:opacity-50"
      disabled={disabled}
      title="Další obrázek"
    >
      <FontAwesomeIcon icon={'angle-right'} size="2x" />
    </button>
  );
}

export const pageQuery = graphql`
  query EventById($id: String!) {
    file(id: { eq: $id }) {
      childUdalostiYaml {
        title
        description
        date
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [PNG], width: 1920)
          }
        }
        galleryLink
        winners
        cyphers {
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP], width: 760)
            }
          }
          info
          hints
          steps
          solution
          images {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP], width: 760)
            }
          }
        }
        bonusInformation {
          title
          text
        }
      }
      fields {
        slug
      }
    }
  }
`;
