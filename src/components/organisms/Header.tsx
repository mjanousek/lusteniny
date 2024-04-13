import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import React from 'react';
import { classNames } from '../../utils';
import { Logo } from '../atoms';

export const Header = () => (
  <header className="left-0 right-0 top-0 z-50 bg-blue-50 lg:absolute lg:bg-transparent">
    <div className="container mx-auto flex items-center justify-between gap-8 px-4 sm:px-8 md:px-12 xl:justify-start">
      <div className="-ml-6 flex items-center gap-3 rounded px-6 py-6 text-2xl font-bold text-green-600 transition duration-300 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
        <Logo className="h-[30px]" />
        Luštěniny
      </div>
      <div className="hidden rounded-full border-l-2 border-gray-300 py-4 xl:block"></div>
      <nav
        aria-label="Hlavní navigace"
        className="hidden items-stretch gap-6 text-xl font-medium text-white xl:flex"
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
      <Menu as="div" className=" relative flex items-center justify-center xl:hidden">
        {({ open }) => (
          <>
            <Menu.Button
              className={classNames(
                'relative z-[60] px-6 py-5  focus:outline-none',
                open
                  ? 'text-white focus:text-green-50'
                  : 'rounded-lg text-gray-700 focus:text-gray-900 lg:bg-gray-50/20 lg:text-white lg:hover:bg-gray-700/20 lg:focus:text-green-50',
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
);
