import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import * as React from 'react';

import data from '../../content/index.yaml';
import logo from '../../images/logo/Logo_Name.svg';
import { ExternalLink } from '../atoms';

type Props = {
  isFixed?: boolean;
};

export default function Navbar(props: Props) {
  return (
    <nav
      className={`py-3 ${
        props.isFixed
          ? 'bg-transparent absolute top-0 z-40 w-full text-gray-100 text-lg'
          : 'bg-white  shadow-lg  text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center space-y-4 md:space-y-0 w-full">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            src={logo}
            alt="Luštěniny"
            className="h-12 dark:filter brightness-90"
          />
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center  justify-center divide-x divide-gray-300 dark:divide-gray-600">
          <div className="py-2 pr-8 space-x-8">
            <Link
              to="/"
              className="hover:text-green-600 transition-all duration-300"
            >
              Domů
            </Link>
            <Link
              to="/udalosti"
              className="hover:text-green-600 transition-all duration-300"
            >
              Události
            </Link>
          </div>
          <div className="py-2 pl-6 space-x-6">
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
              title="Messenger - @lusteniny"
            >
              <FontAwesomeIcon icon={['fab', 'facebook-messenger']} size="lg" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
