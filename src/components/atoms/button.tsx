import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  icon?: IconProp;
  size?: 'large' | 'normal' | 'circle';
};

export default function Button(props: Props) {
  const size = () => {
    switch (props.size) {
      case 'large':
        return 'px-8 py-4 text-lg';
      case 'circle':
        return 'h-14 w-14';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <button
      className={`${size()} border-4 border-white shadow-md rounded-full transition-all duration-200 text-base font-medium bg-green-600 text-gray-100 hover:bg-green-700 hover:text-white dark:border-gray-700 `}
    >
      {props.children && <span>{props.children}</span>}
      <FontAwesomeIcon
        icon={props.icon}
        className={props.children ? 'ml-2' : ''}
      />
    </button>
  );
}
