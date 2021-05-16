import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import * as React from 'react';

import data from '../../content/index.yaml';
import logo from '../../images/logo/Logo_Name.svg';
import { ExternalLink } from '../atoms';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-gray-300 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
      <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col space-y-8 sm:space-y-0">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src={logo} alt="Luštěniny" className="h-12 dark:filter brightness-90" />
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 border-gray-300  sm:py-2 sm:mt-0 mt-4 space-x-2">
          <span>© 2020 - 2021 Luštěniny </span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start  space-x-8">
          <ExternalLink
            href={data.facebookUrl}
            className="hover:text-green-600 transition-all duration-300"
            title="Facebook - @lusteniny"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
          </ExternalLink>
          <ExternalLink
            href={data.messengerUrl}
            className="hover:text-green-600 transition-all duration-300"
            title="Messnger - @lusteniny"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-messenger']} size="lg" />
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
}
