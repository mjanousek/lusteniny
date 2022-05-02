import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import * as React from 'react';

import { ExternalLink, Logo } from '../atoms';

type Props = {
  facebookUrl: string;
  messengerUrl: string;
  isFixed?: boolean;
};

export default function Navbar({ facebookUrl, messengerUrl, isFixed }: Props) {
  return (
    <nav
      className={`py-3 ${
        isFixed
          ? 'bg-black bg-opacity-20 absolute top-0 z-40 w-full text-gray-100 text-lg'
          : 'bg-white  shadow-lg  text-gray-800 '
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-2 md:px-5 flex-col md:flex-row items-center space-y-4 md:space-y-0 w-full">
        <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <Logo withName className="h-12 " />
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center  justify-center ">
          <div className="pt-0 space-x-4 md:space-x-8">
            <Link to="/" className="hover:text-green-600 transition-all duration-300">
              Domů
            </Link>
            <Link to="/udalosti" className="hover:text-green-600 transition-all duration-300">
              Události
            </Link>
            <ExternalLink
              href={facebookUrl}
              className="hover:text-green-600 transition-all duration-300"
              title="Facebook - @lusteniny"
            >
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
            </ExternalLink>
            <ExternalLink
              href={messengerUrl}
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
