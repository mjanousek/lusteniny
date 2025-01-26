import { Menu, Transition } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../utils';
import { Icon, Logo } from '../atoms';

type Props = {
  isAlternative?: boolean;
};

export const Header = ({ isAlternative }: Props) => (
  <header
    className={classNames('bg-blue-50', isAlternative && 'left-0 right-0 top-0 z-50 xl:absolute xl:bg-transparent')}
  >
    <div
      className={classNames(
        'mx-auto flex items-center justify-between gap-8 px-4 xl:container sm:px-8 md:px-12',
        isAlternative ? 'xl:justify-start' : '',
      )}
    >
      <a
        href="/"
        className="-ml-6 flex items-center gap-3 rounded px-6 py-6 text-2xl font-bold text-green-600 transition duration-300 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <Logo className="h-[30px]" />
        Luštěniny
      </a>
      <nav aria-label="Hlavní navigace" className="hidden items-stretch gap-6 text-xl font-medium text-white xl:flex">
        <a
          className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-slate-600 transition duration-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          href="/"
        >
          Domů
        </a>
        <a
          className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-slate-600 transition duration-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          href="/#info"
        >
          O Luštěninách
        </a>
        <a
          className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-slate-600 transition duration-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          href="/#udalosti"
        >
          Události
        </a>
        <a
          className="flex items-center gap-3 rounded px-6 py-8 text-lg font-semibold text-slate-600 transition duration-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          href="/#kontakt"
        >
          Kontakt
        </a>
      </nav>
      <Menu as="div" className=" relative flex items-center justify-center xl:hidden">
        {({ open }) => (
          <>
            <Menu.Button
              className={classNames(
                'relative z-[60] px-6 py-5  focus:outline-none',
                open ? 'text-white focus:text-green-50' : 'rounded-lg text-slate-700 focus:text-slate-900 ',
              )}
              title={open ? 'Zavřít menu' : 'Otevřít menu'}
            >
              <Icon icon={open ? 'xmark' : 'bars'} className="h-5" />
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
                    <a
                      className={classNames(
                        'block px-6 py-3 text-green-50',
                        active ? 'bg-green-600 text-green-50' : '',
                      )}
                      href="/"
                    >
                      Domů
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={classNames(
                        'block px-6 py-3 text-green-50',
                        active ? 'bg-green-600 text-green-50' : '',
                      )}
                      href="/#info"
                    >
                      O Luštěninách
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={classNames(
                        'block px-6 py-3 text-green-50',
                        active ? 'bg-green-600 text-green-50' : '',
                      )}
                      href="/#udalosti"
                    >
                      Události
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={classNames(
                        'block px-6 py-3 text-green-50',
                        active ? 'bg-green-600 text-green-50' : '',
                      )}
                      href="/#kontakt"
                    >
                      Kontakt
                    </a>
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
