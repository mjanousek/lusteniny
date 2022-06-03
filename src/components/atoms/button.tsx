import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import * as React from 'react';
import { classNames } from '../../utils';

type ButtonInternalLinkProps = {
  variant: 'green' | 'blue';
  to: string;
  text: string;
  icon: IconProp;
};

export const ButtonInternalLink = ({ variant, to, text, icon }: ButtonInternalLinkProps) => (
  <Link
    to={to}
    className="group mb-3 block  rounded-lg font-semibold text-white shadow shadow-green-800 focus:outline-none"
  >
    <div className="flex items-center justify-center gap-3 rounded-lg bg-green-600 px-[30px] py-[15px] transition duration-300 group-hover:bg-green-500 group-focus:bg-green-500 group-active:translate-y-[2px]">
      <span>{text}</span>
      <FontAwesomeIcon icon={icon} />
    </div>
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
      'focus:outline-none" group mb-3 block rounded-lg font-semibold text-white shadow',
      variant === 'green' && 'shadow-green-800',
      variant === 'blue' && 'shadow-blue-800',
    )}
  >
    <div
      className={classNames(
        'flex items-center justify-center gap-3 rounded-lg px-8 py-4 transition duration-300 group-active:translate-y-[2px]',
        variant === 'green' && 'bg-green-600 group-hover:bg-green-500 group-focus:bg-green-500',
        variant === 'blue' && 'bg-blue-600 group-hover:bg-blue-500 group-focus:bg-blue-500',
      )}
    >
      <span>{text}</span>
      <FontAwesomeIcon icon={icon} />
    </div>
  </a>
);
