import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Fragment } from 'react';
import { Footer, Navbar } from '../components/organisms';

import { Cypher, EventPageQuery } from '../types/content';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { classNames } from '../utils';

export function Event(props: EventPageQuery) {
  const event = props.data.file.childUdalostiYaml;
  const [activeCypher, setActiveCypher] = useState<Cypher>(event.cyphers[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar hasBackground />
      <main>
        <section>
          <div className="p-8">
            <GatsbyImage
              image={getImage(event.image.childImageSharp)}
              alt={`${event.title}-${new Date(event.date).toLocaleDateString('cs')}`}
              objectPosition="center"
              className="h-[30rem] w-full rounded-[16px] shadow shadow-gray-800"
            />
          </div>
          <div className="flex justify-center">
            <div className="rounded-[16px]  bg-green-600 py-3 px-6 font-medium text-white">
              {new Date(event.date).toLocaleDateString('cs')}
            </div>
          </div>
          <div className="p-8"></div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">{event.description}</div>
        </section>

        {/* Cyphers */}
        <section className="bg-blue-50">
          <svg
            className="w-full -translate-y-1 text-white"
            viewBox="0 0 1919 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1918.5 0C697.254 40.4576 255.671 70.4599 0 140V0H1918.5Z"
              stroke="currentColor"
              fill="currentColor"
            />
          </svg>

          <div className="container mx-auto py-16 px-4 md:py-12 lg:py-8 xl:py-4">
            <header className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-5xl font-bold text-gray-900">Šifry a jejich řešení</h2>
              <p className="text-lg font-medium text-gray-700">
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
                  <button
                    title="Zobrazit na celou obrazovku"
                    className="absolute right-4 top-4 z-30 flex h-6 w-6 items-center justify-center rounded-[8px] text-gray-500 transition duration-300 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-4"
                    onClick={() => {
                      setActiveCypher(cypher);
                      setIsModalOpen(true);
                    }}
                  >
                    <FontAwesomeIcon icon="maximize" className="text-xl " />
                  </button>
                  <div className="relative">
                    {cypher.image && (
                      <GatsbyImage
                        image={getImage(cypher.image.childImageSharp)}
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
                              image={getImage(image.childImageSharp)}
                              alt={`${event.title} - Šifra ${cypher.title} (${index + 1})`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                  <Disclosure>
                    <Disclosure.Button className="flex w-full items-center justify-center gap-4 bg-green-500 px-[40px] py-[15px] font-semibold text-white transition hover:bg-green-600 focus:bg-green-600 focus:outline-none">
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
                    <Disclosure.Button className="flex w-full items-center justify-center gap-4 bg-green-500 px-[40px] py-[15px] font-semibold text-white transition hover:bg-green-600 focus:bg-green-600 focus:outline-none">
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

        {/* Active cypher modal */}
        <Transition show={isModalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h2"
                      className="bg-gray-100 p-6 text-center text-2xl font-semibold text-gray-900"
                    >
                      {activeCypher.title}
                    </Dialog.Title>
                    {activeCypher.info && (
                      <div className="space-y-3 p-6 ">
                        {activeCypher.info.map((info) => (
                          <p className="text-lg font-medium text-gray-800"> {info}</p>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      className="absolute right-4 top-4 flex h-8 w-8 items-center  justify-center gap-4 rounded-full border-2 border-gray-900 font-semibold text-gray-900 opacity-50 transition duration-300 hover:opacity-80 focus:opacity-80 focus:outline-none"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <FontAwesomeIcon icon="times" />
                    </button>

                    <div className="relative">
                      {activeCypher.image && (
                        <GatsbyImage
                          image={getImage(activeCypher.image.childImageSharp)}
                          alt={`${event.title} - Šifra ${activeCypher.title}`}
                          className="w-full"
                          objectFit="contain"
                        />
                      )}
                      {activeCypher?.images && (
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          onSlideChange={() => console.log('slide change')}
                          onSwiper={(swiper) => console.log(swiper)}
                          modules={[Navigation, Pagination, A11y]}
                          pagination={{
                            clickable: false,
                            bulletActiveClass: 'bg-green-600 opacity-100',
                          }}
                        >
                          <SwiperPrevButton />
                          <SwiperNextButton />
                          {activeCypher.images.map((image, index) => (
                            <SwiperSlide>
                              <GatsbyImage
                                image={getImage(image.childImageSharp)}
                                alt={`${event.title} - Šifra ${activeCypher.title} (${index + 1})`}
                                className="w-full"
                                objectFit="contain"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="overflow-hidden rounded-[8px] border border-green-500 bg-green-50">
                        <Disclosure>
                          <Disclosure.Button className="flex w-full items-center justify-center gap-4 bg-green-500 px-[40px] py-[15px] font-semibold text-white transition hover:bg-green-600 focus:bg-green-600 focus:outline-none">
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
                                {activeCypher.hints.map((hint) => (
                                  <li>{hint}</li>
                                ))}
                              </ol>
                            </Disclosure.Panel>
                          </Transition>
                        </Disclosure>
                      </div>
                      <div className="overflow-hidden rounded-[8px] border border-green-500 bg-green-50">
                        <Disclosure>
                          <Disclosure.Button className="flex w-full items-center justify-center gap-4 bg-green-500 px-[40px] py-[15px] font-semibold text-white transition hover:bg-green-600 focus:bg-green-600 focus:outline-none">
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
                                {activeCypher.steps.map((step) => (
                                  <li>{step}</li>
                                ))}
                              </ol>
                              <p className="rounded-[4px] border border-green-500 bg-green-50 p-2 text-center text-green-700 shadow-sm shadow-green-500/25">
                                Řešení: <strong>{activeCypher.solution}</strong>
                              </p>
                            </Disclosure.Panel>
                          </Transition>
                        </Disclosure>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-4 bg-gray-200 px-[40px] py-[15px] font-semibold text-gray-900 transition hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Zavřít <FontAwesomeIcon icon="times" />
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* Bonus information */}
        {event.bonusInformation ? (
          <section className="py-24">
            <div className="container mx-auto max-w-7xl px-4">
              <header className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="mb-4 text-5xl font-bold text-gray-900">
                  Bonusové informace k šifám
                </h2>
                <p className="text-lg font-medium text-gray-700">
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
            <div className="container mx-auto max-w-7xl px-4">
              <header className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="mb-4 text-5xl font-bold text-gray-900">
                  Bonusové informace k šifám
                </h2>
                <p className="mb-8 text-lg font-medium text-gray-700">
                  Tento ročník bohužel neobsahoval žádné bonusové informace k šifrám.
                </p>
                <FontAwesomeIcon icon={'question'} className="text-green-500" size="2x" />
              </header>
            </div>
          </section>
        )}
      </main>
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
