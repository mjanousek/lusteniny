import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  icon?: IconProp;
};

export default function Tag(props: Props) {
  return (
    <span className="bg-green-600 text-sm px-2 py-1 rounded-md text-white dark:text-gray-200 ">
      {props.icon && <FontAwesomeIcon icon={props.icon} className="mr-2" />}
      <span>{props.children}</span>
    </span>
  );
}
