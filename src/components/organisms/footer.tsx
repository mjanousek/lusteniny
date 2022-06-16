import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { createRef, useEffect, useState } from 'react';
import { Logo } from '../atoms';

export const Footer = () => {
  return (
    <div className="relative">
      <aside className="relative">
        <div className="container relative z-10 mx-auto px-4">
          <div className="group relative mx-auto max-w-7xl">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-green-400 to-green-600 opacity-25 blur transition duration-500"></div>
            <div className="relative grid gap-8 rounded-[32px] bg-gradient-to-br from-green-500 to-green-600 p-8 sm:p-12 md:p-14 lg:grid-cols-5 lg:p-16">
              <div className="lg:col-span-3">
                <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
                  Nechceš přijít o novinky ?
                </h2>
                <p className="max-w-lg text-sm font-medium leading-relaxed text-green-50 sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                  Sleduj nás na facebooku nebo instagramu a nepřijdeš o nejnovější informace k
                  luštěninám.
                </p>
              </div>
              <div className="flex flex-col items-stretch justify-center gap-4 lg:col-span-2 lg:items-center">
                <a
                  href="https://www.facebook.com/lusteniny"
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="flex items-center gap-4 rounded-[8px] bg-blue-500 px-[40px] py-[15px] text-sm font-bold text-blue-50 shadow shadow-blue-500/25 sm:px-[60px] sm:text-base "
                >
                  <span>Facebook @lusteninyzlin</span>
                  <FontAwesomeIcon className="sm:text-lg" icon={['fab', 'facebook-f']} />
                </a>
                <a
                  href="https://www.instagram.com/lusteninyzlin"
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="bg-instagram flex items-center gap-4 rounded-[8px] px-[40px] py-[15px] text-sm font-bold text-blue-50 drop-shadow sm:px-[60px] sm:text-base"
                >
                  <span>Instagram @lusteninyzlin</span>
                  <FontAwesomeIcon className="sm:text-lg" icon={['fab', 'instagram']} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1920 86"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 bottom-0 m-0 -mb-1 w-full text-blue-50"
        >
          <path d="M1920 0C1216.18 87.0898 796.828 87.0991 0 0V86H1920V0Z" fill="currentColor" />
        </svg>
      </aside>
      <footer>
        <div className="bg-blue-50">
          <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 pb-12 pt-24 text-center md:flex-row md:text-left">
            <h2 className="flex items-center gap-4">
              <Logo className="h-10" />
              <span className="text-lg font-bold text-gray-700">Luštěniny</span>
            </h2>
            <nav className="flex flex-col gap-x-12 gap-y-3 font-semibold uppercase text-gray-500 md:flex-row">
              <Link
                className="transition duration-300 hover:text-gray-700 focus:text-gray-700"
                to="/"
              >
                Domů
              </Link>
              <Link
                className="transition duration-300 hover:text-gray-700 focus:text-gray-700"
                to="/udalosti"
              >
                Události
              </Link>
              <Link
                className="transition duration-300 hover:text-gray-700 focus:text-gray-700"
                to="/kontakt"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
