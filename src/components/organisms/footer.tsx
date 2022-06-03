import { Link } from 'gatsby';
import * as React from 'react';

export const Footer = () => (
  <footer className="to-green-60 bg-gradient-to-b from-green-500 to-green-600 py-12">
    <div className="container mx-auto px-[25px] text-center lg:px-[50px]">
      <h2 className="mb-[20px] text-3xl font-bold text-white">Luštěniny</h2>
      <nav className="mb-[30px] flex flex-col justify-center gap-y-2 text-xl sm:flex-row">
        <Link
          className="flex h-full items-center justify-center rounded px-[25px] text-green-50 transition duration-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          to="/"
        >
          Domů
        </Link>
        <Link
          className="flex h-full items-center justify-center rounded px-[25px] text-green-50 transition duration-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          to="/archiv"
        >
          Archiv
        </Link>
        <Link
          className="flex h-full items-center justify-center rounded px-[25px] text-green-50 transition duration-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          to="/aktuality/lusteniny-2022"
        >
          Luštěniny 2022
        </Link>
      </nav>
      <p className="text-green-100">Copyright 2020 - {new Date().getFullYear()} Luštěniny</p>
    </div>
  </footer>
);
