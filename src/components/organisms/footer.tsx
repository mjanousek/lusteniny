import { Link } from 'gatsby';
import React from 'react';
import { Logo } from '../atoms';
import { StaticImage } from 'gatsby-plugin-image';

export const Footer = () => {
  return (
    <footer id="paticka" className="bg-blue-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-4 pb-12 pt-24 text-center xl:flex-row xl:text-left">
        <h2 className="flex items-center gap-4">
          <Logo className="h-10" />
          <span className="text-lg font-bold text-gray-700">Luštěniny</span>
        </h2>
        <nav
          aria-label="Patička - Navigace"
          className="flex flex-col gap-x-12 gap-y-6 xl:border-l-2 xl:border-slate-300 xl:pl-12 font-semibold uppercase text-gray-500 xl:flex-row"
        >
          <Link className="transition duration-300 hover:text-gray-700 focus:text-gray-700" to="/">
            Domů
          </Link>
          <Link
            className="transition duration-300 hover:text-gray-700 focus:text-gray-700"
            to="/#info"
          >
            O Luštěninách
          </Link>
          <Link
            className="transition duration-300 hover:text-gray-700 focus:text-gray-700"
            to="/#udalosti"
          >
            Události
          </Link>
          <Link
            className="transition duration-300 hover:text-gray-700 focus:text-gray-700"
            to="/#kontakt"
          >
            Kontakt
          </Link>
        </nav>
        <div className="flex-grow"></div>
        <a
          href="https://www.kudyznudy.cz/?utm_source=kzn&utm_medium=partneri_kzn&utm_campaign=banner"
          target="_blank"
          rel='noopener noreferrer external'
          title='kudyznudy.cs'
        >
          <StaticImage src='../../content/images/kudyznudy.jpg' alt="Kudyznudy.cz - nejlepší začátek výletu" objectFit='contain' className='h-18 rounded-lg shadow-sm'/>
        </a>
      </div>
    </footer>
  );
};
