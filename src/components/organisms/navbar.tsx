import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import * as React from 'react';
import { Logo } from '../atoms';
import { classNames } from '../../utils';

export type Props = {
  hasBackground?: boolean;
};

export const Navbar = ({ hasBackground }: Props) => (
  <header
    className={classNames(
      'relative z-40 ',
      hasBackground ? 'bg-green-600 shadow shadow-green-800' : 'bg-green-600/90',
    )}
  >
    <nav className="flex items-stretch justify-between bg-transparent">
      <Link
        to="/"
        className="flex items-center gap-3 px-[25px] py-[0px] text-2xl font-bold text-green-50 transition duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 sm:px-[50px] md:py-[25px]"
      >
        <Logo className="h-[30px]" />
        Luštěniny
      </Link>
      <div className="hidden items-stretch text-xl font-medium text-white md:flex">
        <Link
          className="flex h-full items-center justify-center px-[25px] text-green-50 transition duration-300 hover:bg-green-500 hover:text-white  focus:outline-none focus:ring-2 focus:ring-green-400 sm:px-[50px]"
          to="/"
        >
          Domů
        </Link>
        <Link
          className="flex h-full items-center justify-center px-[25px] text-green-50 transition duration-300 hover:bg-green-500 hover:text-white  focus:outline-none focus:ring-2 focus:ring-green-400 sm:px-[50px]"
          to="/udalosti"
        >
          Události
        </Link>
        <Link
          className="flex h-full items-center justify-center px-[25px] text-green-50 transition duration-300 hover:bg-green-500 hover:text-white  focus:outline-none focus:ring-2 focus:ring-green-400 sm:px-[50px]"
          to="/Kontakt"
        >
          Kontakt
        </Link>
      </div>

      <Menu as="div" className=" flex items-center justify-center md:hidden">
        {({ open }) => (
          <>
            <Menu.Button className="px-[25px] py-[25px] text-green-100 hover:text-white focus:text-white focus:outline-none">
              <FontAwesomeIcon icon={open ? 'times' : 'bars'} />
            </Menu.Button>

            <Transition
              as={React.Fragment}
              enter="transition linear duration-150"
              enterFrom="transform -translate-x-full"
              enterTo="transform"
              leave="transition linear duration-150"
              leaveFrom="transform -translate-x-full"
              leaveTo="transform"
            >
              <Menu.Items
                className={classNames(
                  'absolute left-0 right-0 top-full z-50 overflow-hidden whitespace-nowrap bg-green-600 text-center focus:outline-none',
                  hasBackground ? 'bg-green-600 shadow shadow-green-800' : '',
                )}
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={classNames(
                        'block px-6 py-3 text-green-50',
                        active ? 'bg-green-50 text-green-800' : '',
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
                        active ? 'bg-green-50 text-green-800' : '',
                      )}
                      to="/udalosti"
                    >
                      Události
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </nav>
  </header>
);
