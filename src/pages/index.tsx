import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ButtonExternalLink, ButtonInternalLink, Logo } from '../components/atoms';
import { Footer, Navbar, NewsletterSection } from '../components/organisms';

export default function Page() {
  return (
    <div className="overflow-hidden">
      <header> </header>
      <main>
        {/* <section className="bg-green-600">
          <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="mb-4 text-7xl font-bold text-white">Šifrovací hra ve Zlíně</h1>
            <p className="mb-8 text-xl font-semibold text-green-100">
              Luštěniny jsou tradiční odpolední, celorodinná šifrovačka pořádaná v centru Zlína, pro
              jednotlivce i pro týmy.
            </p>
            <div className="flex justify-center">
              <ButtonInternalLink
                to=""
                variant="blue"
                text="Více informací"
                icon="arrow-alt-right"
              />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,128L48,133.3C96,139,192,149,288,138.7C384,128,480,96,576,69.3C672,43,768,21,864,21.3C960,21,1056,43,1152,48C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section> */}
        <section className="py-72">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="pb-16 md:col-span-6 md:pb-0">
                <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                  Zajímá tě, jaké byly minulé ročníky ?
                </h2>
                <p className="mb-12 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                  Luštěniny mají za sebou jíž několik ročníků, a všechny informace z předešlých
                  ročníků si můžeš zobraziv archivu. Najdeš zde fotky, šifry s řešením a vítěze
                  ročníku
                </p>
                <Link
                  to="/udalosti"
                  className="rounded-[8px] bg-gradient-to-r from-green-500 to-green-600 px-[60px] py-[15px] font-bold text-white"
                >
                  Zobrazit Archiv
                </Link>
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
      <Footer />
    </div>
  );
}
