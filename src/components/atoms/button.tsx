import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import * as React from 'react';
import { classNames } from '../../utils';

type ButtonInternalLinkProps = {
  variant: 'green' | 'blue' | 'instagram';
  to: string;
  text: string;
  icon: IconProp;
};

export const ButtonInternalLink = ({ variant, to, text, icon }: ButtonInternalLinkProps) => (
  <Link
    to={to}
    className={classNames(
      'group relative flex items-stretch rounded-[8px] bg-gradient-to-r from-green-500 to-green-600 px-[30px] py-[15px] font-bold text-white shadow shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-[60px]',
    )}
  >
    <div className="relative z-10 flex items-center justify-center gap-3">
      <span>{text}</span>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="absolute inset-0 rounded-[8px] bg-black opacity-0 shadow-lg shadow-green-500/25 transition duration-300 group-hover:opacity-10"></div>
  </Link>
);

type ButtonExternalLinkProps = {
  variant: 'green' | 'blue';
  href: string;
  text: string;
  icon: IconProp;
};

export const ButtonExternalLink = ({ variant, href, text, icon }: ButtonExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer external"
    className={classNames(
      'group relative flex items-stretch rounded-[8px] px-[30px] py-[15px] font-bold shadow  focus:outline-none  focus:ring-2 focus:ring-offset-2 sm:px-[60px]',
      variant === 'green'
        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-500/25 focus:ring-green-500'
        : '',
      variant === 'blue'
        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/25 focus:ring-blue-500'
        : '',
      variant === 'instagram'
        ? 'bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white shadow-purple-500/25 focus:ring-purple-500'
        : '',
    )}
  >
    <div className="relative z-10 flex items-center justify-center gap-3">
      <span>{text}</span>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="absolute inset-0 rounded-[8px] bg-black opacity-0 shadow-lg transition duration-300 group-hover:opacity-10"></div>
  </a>
);
