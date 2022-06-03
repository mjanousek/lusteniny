import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ButtonExternalLink, Logo } from '../../components/atoms';
import { Navbar } from '../../components/organisms';
import { classNames } from '../../utils';

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-green-500 to-green-600">
      <div className="absolute inset-0 z-10 h-full w-full bg-black/25"></div>
      <StaticImage
        className="absolute inset-0 z-20 h-full w-full opacity-10"
        src="../../content/images/Zlin.jpg"
        alt=""
      />
      <Navbar />
      <main className="relative z-30 flex flex-grow items-center justify-center pb-10">
        <div className="container mx-auto px-[25px] lg:px-[50px]">
          <div className="grid grid-cols-6 gap-[50px]">
            <div className="col-span-6 lg:col-span-3">
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Luštěniny V. - 2022
              </h1>
              <p className="mb-3 text-sm font-medium leading-relaxed text-green-50 sm:text-base md:text-lg xl:text-xl">
                Tradice pokračuje a Luštěniny se opět probouzejí k akci, tentokrát společně oslavíme
                pátý ročník zlínské šifrovačky Luštěniny.
              </p>
              <p className="mb-3 font-medium leading-relaxed text-green-50 sm:text-base md:text-lg xl:text-xl">
                Když si vybavíme všechny ty uplynulé ročníky, tak pět let je pro nás dlouhá doba.
                Nicméně jak už určitě někteří z vás tuší, slaví se tento rok ve Zlíně ještě jedno, o
                trošku větší, číslo.
              </p>
              <p className="mb-3 font-medium leading-relaxed text-green-50 sm:text-base md:text-lg xl:text-xl">
                To číslo je 700 a je výročím první písemné zmínky o městu Zlín - a to přesně bude i
                naše téma!
              </p>
            </div>
            <div
              className="shadow-xl col-span-6 rounded-[16px] bg-gradient-to-br from-black/20 to-black/30 px-[30px] py-[30px] text-center shadow-black/25 sm:px-[60px] lg:col-span-3"
              style={{ backdropFilter: 'blur(5px)' }}
            >
              <h2 className="mb-5 text-xl font-semibold text-gray-100 sm:text-2xl md:text-3xl">
                Registruj svůj tým
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-green-50 md:text-base">
                Svůj tým můžeš registrovat napsáním komentáře s názvem týmu a počtem členů na
                facebookové události, nebo nám můžeš napsat email. Registrovat se na facebookové
                události
              </p>
              <ButtonExternalLink
                href="https://www.facebook.com/events/669591394339457"
                variant="blue"
                text="Registrovat se na facebookové události"
                icon={['fab', 'facebook-square']}
              />
              <ButtonExternalLink
                href=" mailto:info@lusteniny.eu?subject=Lu%C5%A1t%C4%9Bniny%202022%20-%20Registrace%20t%C3%BDmu&body=Dobr%C3%BD%20den%2C%0D%0A%0D%0Acht%C4%9Bli%20bychom%20registrovat%20sv%C5%AFj%20t%C3%BDm%20na%20ud%C3%A1losti%20Lu%C5%A1t%C4%9Bniny%202022%20(11.06.2022).%0D%0A%0D%0AN%C3%A1zev%20t%C3%BDmu%3A%20_____%0D%0APo%C4%8Det%20%C4%8Dlen%C5%AF%3A%20_____ "
                variant="green"
                text="Registrovat se emailem"
                icon="envelope"
              />
              <p className="text-sm text-green-50  sm:text-sm">
                Přihlášení lze provést i na místě, ale vzhledem k náročnosti příprav vás prosíme o
                předčasnou registraci
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative z-30 p-6 text-center text-sm font-medium text-green-100">
        Copyright 2020 - 2022 Luštěniny
      </footer>
    </div>
  );
}
