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
import { ButtonExternalLink, Container, H1, H2, TimeTag } from '../components/atoms';
import { CallToAction } from '../components/organisms/CallToAction';

export function Event(props: EventPageQuery) {
  const event = props.data.file.childUdalostiYaml;
  const [activeCypher, setActiveCypher] = useState<Cypher>(event.cyphers[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <main>
        {/* Main header */}
        <section className="relative -mt-[82px] pb-24">
          <div className="relative mb-12">
            <GatsbyImage
              image={getImage(event.image.childImageSharp)}
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

          <Container className="max-w-7xl text-center">
            <H1>{event.title}</H1>
            <div className="mb-8 flex justify-center">
              <TimeTag time={event.date} />
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
          </Container>
        </section>

        {/* Winners */}
        <section>
          <H2>Vítězné týmy</H2>
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
          <Container className="py-16 md:py-12 lg:py-8 xl:py-4">
            <header className="mx-auto mb-16 max-w-2xl text-center">
              <H2>Šifry a jejich řešení</H2>
              <p className="font-medium text-gray-700 md:text-lg">
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
          </Container>
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
            <Container className="max-w-7xl">
              <header className="mx-auto mb-16 max-w-2xl text-center">
                <H2>Bonusové informace k šifám</H2>
                <p className="font-medium text-gray-700 md:text-lg">
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
            </Container>
          </section>
        ) : (
          <section className="py-24">
            <Container className=" mb-16 max-w-2xl text-center">
              <H2>Bonusové informace k šifám</H2>
              <p className="mb-8 font-medium text-gray-700 md:text-lg">
                Tento ročník bohužel neobsahoval žádné bonusové informace k šifrám.
              </p>
              <FontAwesomeIcon icon={'question'} className="text-green-500" size="2x" />
            </Container>
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
