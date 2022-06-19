import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import * as React from 'react';
import { ButtonInternalLink, Logo } from '../components/atoms';
import { Footer, CallToAction, Helmet } from '../components/organisms';
import { classNames } from '../utils';

export default function Page() {
  return (
    <>
      <Helmet
        title="Luštěniny | Šifrovací hra ve Zlíně"
        description="Luštěniny jsou tradiční šifrovací hra pořádána v centru Zlína, které se můžeš
                zúčastnit jak v týmu, tak sám. Neváhej a přijd si k nám zaluštit."
      />
      <header className="relative z-50 bg-white">
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
      <main className="bg-white">
        {/* Articles */}
        <section className="relative pt-32 pb-32" id="udalosti">
          <div className="container mx-auto px-4 sm:px-8 md:px-12">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Stránka nenalezena
            </h1>
            <p className="mb-8 text-center font-medium leading-relaxed text-gray-700">
              Omlouváme se, ale tato stránka nebyla nalezena
            </p>
            <div className="flex justify-center">
              <ButtonInternalLink
                to="/"
                icon="home"
                text="Zpět na úvodní stránku"
                variant="green"
              />
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
