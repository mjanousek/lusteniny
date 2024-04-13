import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Logo } from '../../components/atoms';
import { classNames } from '../../utils';
import { CallToAction, Footer } from '../../components/organisms';

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const passCode = 'heslo';

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (passCode === e.target[0].value) setUnlocked(true);
  };

  return (
    <>
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
        <section className="relative py-16" id="info">
          <div className="container mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
            <h1 className="mb-6 text-3xl font-bold text-slate-700 sm:text-4xl md:text-5xl lg:text-6xl">
              Šifra č.1 - Pracovní den
            </h1>
            <div className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-700 sm:text-3xl md:text-4xl ">
                Úvodní informace
              </h2>
              <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed">
                Kromě mapování objektů na písmena abecedy může text být zakódován i skrytím v
                souvislém bloku textu. Tato technika, známá jako steganografie, umožňuje skrýt
                zprávu v zdánlivě normálním textu, aniž by si toho většina čtenářů všimla.
              </p>
              <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed">
                Zpráva může být zakódována například pomocí prvních nebo posledních písmen vět,
                řádků, slov nebo dokonce nějakých jiných skrytých vzorců. Tato šifra vyžaduje nejen
                schopnost detekce skryté zprávy, ale také kreativní myšlení a důkladné zkoumání
                textu.
              </p>
            </div>
            <div className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-700 sm:text-3xl md:text-4xl ">
                Šifra
              </h2>
              <div className="space-y-3 font-medium italic text-slate-800">
                <p>Dobrý den,</p>
                <p>za základě vašeho dotazu Vám zasíláme podstatné informace o naší společnosti:</p>
                <p>
                  “Náš tým v marketingové firmě se neustále snaží inovovat a přinášet nové nápady.
                  Aktivní spolupráce mezi odděleními je klíčová pro úspěch našich projektů. Rozsáhlá
                  analýza trhu nám poskytuje cenné informace pro naše strategické plánování. Každý
                  člen týmu má svůj podíl na tvorbě kreativních kampaní. Organizace a plánování jsou
                  základem pro efektivní využití našich zdrojů. Lze se spolehnout na to, že každý z
                  nás nese odpovědnost za svůj úkol. Energie a nadšení, které do práce vkládáme, se
                  odráží ve výsledcích naší práce. Pravidelná setkávání a brainstorming pomáhají
                  vytvářet inovativní řešení. Společně tvoříme dynamické prostředí, kde se
                  inspirujeme a podporujeme. Inovace jsou pro nás stálou motivací ke zdokonalování
                  našich služeb. Efektivní komunikace a spolupráce jsou klíčové pro dosažení našich
                  marketingových cílů.”
                </p>
                <p>Přejeme Vám hezký den a těšíme se na budoucí spolupráci S pozdravem</p>
                <p>Marie Nováková</p>
              </div>
            </div>
            <div className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-700 sm:text-3xl md:text-4xl ">
                Bonusová informace
              </h2>
              <div className="space-y-3">
                {unlocked ? (
                  <>Lorem ipsum</>
                ) : (
                  <form className="flex flex-col gap-2" onSubmit={onSubmit}>
                    <label htmlFor="passcode" className="pl-1 text-sm font-medium text-slate-600">
                      Zadejte výsledek šifry pro odemknutí
                    </label>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        id="passcode"
                        name="passcode"
                        className="w-full rounded-t border px-4 py-2 text-center shadow-sm focus:outline-none  focus:ring focus:ring-green-600/50"
                        placeholder="Tajný výsledek"
                      />
                      <button
                        type="submit"
                        className="rounded-b bg-gradient-to-br from-green-500 to-green-600 px-4 py-2 font-medium text-white shadow shadow-green-600/20"
                      >
                        Odekmnout
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-blue-50 to-white py-24"></section>
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}
