import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { createRef, useEffect, useState } from 'react';
import { Logo } from '../atoms';

export const Footer = () => {
  return (
    <div className="relative">
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
