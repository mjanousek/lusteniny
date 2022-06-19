import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Fragment } from 'react';
import { Footer, Navbar, CallToAction } from '../components/organisms';

import { Cypher, EventPageQuery } from '../types/content';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { classNames } from '../utils';
import { ButtonExternalLink } from '../components/atoms';

export function Event(props: EventPageQuery) {
  const event = props.data.file.childUdalostiYaml;

  return (
    <div>
      <Navbar />
      <main>
        {/* Main header */}
        <section className="relative -mt-[82px] pb-24">
          <div className="relative mb-12">
            <GatsbyImage
              image={getImage(event.image.childImageSharp) as any}
              alt={`${event.title}-${new Date(event.date).toLocaleDateString('cs')}`}
              objectPosition="center"
              className="aspect-[4/3] max-h-[20rem] w-full saturate-[125%] sm:max-h-[24rem] md:max-h-[28rem] lg:max-h-[32rem] xl:max-h-[36rem]"
            />
            <svg
              className="-translate-y-f absolute bottom-0 left-0 right-0 -mb-px w-full text-white"
              viewBox="0 0 1922 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1921.5 96.4999H0.5V3.49995C382.084 -15.768 659.5 64.5 993 71.4999C1326.5 78.4999 1719.49 65.8273 1921.5 3.49995V96.4999Z"
                fill="currentColor"
                stroke="currentColor"
              />
            </svg>
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
        <section>
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Vítězné týmy
          </h2>
          <div className="relative mt-32 xl:mt-40">
            <svg
              className="w-full"
              viewBox="0 0 1913 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1913 154.999H-7C-7 154.999 577.574 -0.374917 960 0.500019C1337.03 1.36261 1913 154.999 1913 154.999Z"
                fill="#F2F7FB"
              />
            </svg>
            {event.winners.map((winner, index) => (
              <ul
                className={classNames(
                  'absolute text-center',
                  index === 0 ? 'left-1/2 bottom-[150%] -translate-x-1/2 sm:bottom-full' : '',
                  index === 1
                    ? 'left-[20%] bottom-full -translate-x-1/2 translate-y-1/3 lg:left-[25%] xl:left-[30%]'
                    : '',
                  index === 2
                    ? 'left-[80%] bottom-full -translate-x-1/2 translate-y-1/3 lg:left-[75%] xl:left-[70%]'
                    : '',
                )}
              >
                <li>
                  <span className="block pb-2 font-medium text-gray-700 sm:text-lg lg:pb-4 lg:text-xl xl:text-2xl">
                    {winner}
                  </span>
                  <span className="mx-auto -mb-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-600 bg-green-100 text-3xl font-bold text-green-700 sm:h-20 sm:w-20">
                    {index + 1}
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </section>

        {/* Cyphers */}
        <section className="bg-blue-50 pt-8">
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
                      Zobrazit řešení <FontAwesomeIcon icon="lightbulb" />
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
                        <ol className="mb-4 list-decimal space-y-2 pl-4">
                          {cypher.steps.map((step) => (
                            <li>{step}</li>
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
          <svg
            className="w-full translate-y-1 text-white"
            viewBox="0 0 1927 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1926 148H1C540.663 91.3705 924.32 124.594 1926 1V148Z"
              stroke="currentColor"
              fill="currentColor"
            />
          </svg>
        </section>

        {/* Bonus information */}
        {event.bonusInformation ? (
          <section className="py-24">
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
          <section className="py-24">
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
    </div>
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
