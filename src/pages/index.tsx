import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {
  ButtonExternalLink,
  ButtonInternalLink,
  Container,
  H1,
  H2,
  Logo,
} from '../components/atoms';
import { Footer, Navbar } from '../components/organisms';
import { CallToAction } from '../components/organisms/CallToAction';

const features: Feature[] = [
  {
    icon: 'route',
    title: 'Krátká procházka Zlínem',
    description:
      'Čeká na tebe krátká procházka Zlínem lemovaná stanovišti s šiframi a tvým úkolem bude, jich vyluštit co nejvíc.',
  },
  {
    icon: 'map-marker-alt',
    title: 'Stanoviště s šiframi',
    description:
      'Na každém stanovišti na tebe bude čekat jeden z organizátorů, který ti předá zadání a případně pomůže s čím bude potřeba.',
  },
  {
    icon: 'pencil-ruler',
    title: 'Připravené pomůcky',
    description:
      'Před záhájením dostaneš vše, co je potřeba k luštění - propisky, volné papíry dokonce i tahák na šifry.',
  },
  {
    icon: 'child',
    title: 'Šifry i pro děti',
    description: 'Můžeš s sebou vzít i děti, budeme mít připravené šifry a ceny i pro ně.',
  },
  {
    icon: 'mobile-alt',
    title: 'Řešení šifer v telefonu',
    description:
      'Pro účastníky šifrovačky bude připravena webová aplikace, kde bude například možnost šifru odevzat a získat místo dalšího stanoviště.',
  },
  {
    icon: 'trophy',
    title: 'Vyhlášení vítězů',
    description:
      'Na konci události tě bude čekat vyhlášení vítězů, předání cen a nějaký ten networking včetně občerstvení.',
  },
];

type Feature = {
  icon: IconProp;
  title: string;
  description: string;
};

export default function Page() {
  return (
    <div className="overflow-hidden">
      {/* <Navbar hasBackground /> */}
      <main>

        <section className="relative py-48">
          <StaticImage
            src="../content/images/Lusteniny.jpg"
            alt=""
            className="absolute right-0 top-0 aspect-square w-[48rem]"
            style={{
              WebkitMaskImage: 'radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%)',
              maskImage: 'radial-gradient(circle, black 50%, rgba(0, 0, 0, 0) 50%)',
            }}
          />
          <Container>
            <H1>Šifrovací hra ve Zlíně</H1>
            <p className="mb-6 max-w-xl text-lg font-medium leading-relaxed text-gray-800">
              Luštěniny jsou odpolední šifrovací hra pořadáná v centru Zlína, které se můžeš
              zůčastnit sám, v týmu nebo dokonce i s celou rodinou.
            </p>
            <div className="flex justify-start">
              <ButtonInternalLink
                variant="green"
                to="/#info"
                text="Více informací"
                icon="arrow-right-long"
              />
            </div>
          </Container>
        </section>
        <div className="h-screen"></div>

        {/* Features */}
        <section className="relative py-24" id="info">
          <Container>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="order-1">
                <H2>Co vás čeká na Luštěninách ?</H2>
              </div>
              <p className="order-0 font-medium uppercase tracking-wide text-green-700 sm:text-lg">
                Informace o šifrovačce
              </p>
            </div>
            <p className="mx-auto mb-16 max-w-2xl text-center font-medium text-gray-700 md:text-lg">
              Čeká vás šifrovací hra o ceny, které se můžete zúčastnit jak sami, tak v týmu. Nebojte
              se vzít s sebou děti, i pro ně budeme mít připravené šifry.
            </p>
          </Container>
          <div className="relative">
            <Container>
              <div className="relative z-20 grid gap-[50px] sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                      <FontAwesomeIcon icon={feature.icon} className="text-2xl" />
                    </div>
                    <h3 className="mb-3 font-semibold text-gray-900 sm:text-lg lg:text-xl">
                      {feature.title}
                    </h3>
                    <p className="leading-loose text-gray-800">{feature.description}</p>
                  </div>
                ))}
              </div>
            </Container>
            <svg
              className="pointer-events-none absolute inset-0 hidden  h-full w-full text-green-500 opacity-20 lg:block"
              viewBox="0 0 1920 699"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 698C445.522 599.872 1549.81 501.903 623.324 279.072C-303.158 56.2408 1054.22 -80.5676 1437.74 54.8C1821.27 190.168 1331.19 622.676 1921 633.27"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="20 20"
              />
            </svg>
          </div>
        </section>

        {/* Archive */}
        <section className="py-72">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="pb-16 md:col-span-6 md:pb-0">
                <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                  Zajímá tě, jaké byly minulé ročníky ?
                </h2>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                  Luštěniny mají za sebou jíž několik ročníků, a všechny informace z předešlých
                  ročníků si můžeš zobraziv archivu. Najdeš zde fotky, šifry s řešením a vítěze
                  ročníku
                </p>
                <div className="flex justify-start">
                  <ButtonInternalLink
                    to="/udalosti"
                    variant="green"
                    text="Zobrazit události"
                    icon="archive"
                  />
                </div>
              </div>
              <div className="relative pr-16 md:col-span-5">
                <div className="relative">
                  <StaticImage
                    src="../content/images/IMG_2.jpg"
                    className="relative z-20 aspect-[3/2] rounded-[32px] shadow-xl shadow-green-500/25"
                    alt="Luštěniny 2021"
                  />
                  <div className="absolute top-0 right-0 -translate-y-[70%] translate-x-[25%] ">
                    <div className="absolute inset-0 z-10 h-full w-full rounded-[24px] bg-green-500 opacity-50"></div>
                    <StaticImage
                      src="../content/images/IMG_1.jpg"
                      className="aspect-[3/2] h-24 rounded-[24px] opacity-75 shadow-lg shadow-green-500/25 md:h-64"
                      alt="Luštěniny 2021"
                    />
                  </div>
                  <div className="absolute bottom-1/2 right-0 translate-y-[50%] translate-x-[80%] ">
                    <div className="absolute inset-0 z-10 h-full w-full rounded-[16px] bg-green-500 opacity-10 blur-sm"></div>
                    <StaticImage
                      src="../content/images/IMG_5.jpg"
                      className="aspect-[3/2] h-12 rounded-[16px] opacity-25  shadow shadow-green-500/50 blur-sm"
                      alt="Luštěniny 2021"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 translate-y-[50%] translate-x-[35%] ">
                    <div className="absolute inset-0 z-10 h-full w-full rounded-[16px] bg-green-500 opacity-25"></div>
                    <StaticImage
                      src="../content/images/IMG_3.jpg"
                      className="aspect-[3/2] h-36 rounded-[16px] opacity-25  shadow-lg shadow-green-500/25"
                      alt="Luštěniny 2021"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
