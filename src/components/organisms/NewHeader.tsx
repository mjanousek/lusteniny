import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '../../utils';
import { Icon, Logo } from '../atoms';
import { Button } from '../atoms/NewButton';

const links = [
  {
    title: 'Informace',
    href: '/#informace',
  },
  {
    title: 'Pravidla',
    href: '/#pravidla',
  },
  {
    title: 'Kontakt',
    href: '/kontakt',
  },
  {
    title: 'Archiv událostí',
    href: '/udalosti',
  },
];

export const NewHeader = () => {
  return (
    <Menu
      as="header"
      className={({ open }) => classNames('relative py-6 transition duration-300', open ? 'bg-white' : '')}
    >
      {({ open }) => (
        <>
          <div className="relative z-50 mx-auto flex items-center justify-between px-4 lg:container">
            <a href="/" className="flex items-center justify-center gap-3">
              <Logo className="h-10"></Logo>
              <span className="text-2xl font-extrabold text-green-600">Luštěniny</span>
            </a>
            <div className="hidden items-center justify-center gap-4 font-semibold text-slate-600 lg:flex">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="rounded-full border border-transparent px-6 py-3 transition duration-300 hover:border-slate-200 hover:bg-white hover:text-slate-800"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="hidden lg:block">
              <Button to="/#aktuality" text="Luštěniny 2025" />
            </div>
            <Menu.Button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-300 text-slate-700 md:h-12 md:w-12 lg:hidden"
              title={open ? 'Zavřít menu' : 'Otevřít menu'}
            >
              <Icon icon={open ? 'xmark' : 'bars'} className="h-5" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 -translate-y-full"
            enterTo="transform opacity-100 "
            leave="transition ease-in duration-300"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0 -translate-y-full"
          >
            <Menu.Items
              as="div"
              className="absolute top-full z-40 -mx-4 flex max-h-screen w-full flex-col overflow-hidden"
            >
              <nav className="flex w-full flex-grow flex-col items-center justify-between gap-6 border-b bg-white  py-8 text-center text-lg font-medium text-slate-600 shadow-xl">
                {links.map((link) => (
                  <Menu.Item key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-primary-400 w-full rounded-sm py-2 transition duration-300"
                    >
                      {link.title}
                    </a>
                  </Menu.Item>
                ))}
                <Button to="/#aktuality" text="Luštěniny 2025" />
              </nav>
            </Menu.Items>
          </Transition>

          <div
            className={classNames(
              'pointer-events-none absolute left-0 top-full h-[calc(100vh-100%)] w-full bg-black/50 transition duration-300 ease-in',
              open ? 'opacity-100' : 'opacity-0',
            )}
          ></div>
        </>
      )}
    </Menu>
  );
};
