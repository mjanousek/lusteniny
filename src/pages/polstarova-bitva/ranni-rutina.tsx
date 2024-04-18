import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import React from 'react';
import { ButtonInternalLink, Logo } from '../../components/atoms';
import { classNames } from '../../utils';
import { Footer } from '../../components/organisms';
import { StaticImage } from 'gatsby-plugin-image';

export default function Page() {
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
      <main className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <section className="relative py-16" id="info">
          <div className="container mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
            <h1 className="mb-6 text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl">
              Šifra č.1 - Ranní rutina
            </h1>
            <div className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl md:text-4xl ">
                Úvodní informace
              </h2>
              <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed">
                Šifrovací soutěž je zábavná a vzdělávací aktivita, při které týmy soutěží v řešení
                různých šifer a kódů. Cílem této soutěže je rozluštit co nejvíce šifer, které byly
                zašifrovány pomocí různých technik. Mezi tyto techniky patří například mapování
                různých objektů, čísel nebo symbolů na písmena abecedy.
              </p>
              <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed">
                Soutěžícím může být nápomocná kartička, která obsahuje specifické mapování,
                například čísel na písmena abecedy, brailovo písmo, binární kód a podobně. Tato
                kartička může sloužit jako klíč k rozluštění některých šifer.
              </p>
              <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed">
                Je-li toto vaše první zkušenost se šifrovací soutěží, nebojte se! I vám přikládáme
                tuto kartičku a drobně napovídáme, že byste ji mohli potřebovat :)
              </p>
            </div>
            <div className="mt-16 space-y-8">
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl md:text-4xl ">
                Šifra
              </h2>

              <div className="flex gap-4">
                <StaticImage src="../../content/images/polstarova-bitva/pasta.png" alt="" />
                <StaticImage src="../../content/images/polstarova-bitva/brail.png" alt="" />
              </div>
              <p className="text-center text-lg font-bold">Řešení: _ _ _ _ _ _ _ _</p>
            </div>
            <div className="mt-12 flex text-center text-sm font-bold shadow-sm">
              <Link
                className="block w-full rounded-lg border-slate-300 bg-green-500 px-4 py-4 text-white"
                to="/polstarova-bitva/pracovni-den"
              >
                Další šifra
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
