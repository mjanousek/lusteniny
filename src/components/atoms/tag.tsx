import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

type Props = {
  color: "primary" | "white"
  children?: React.ReactNode;
  icon?: IconProp;
};

export default function Tag(props: Props) {
  const color = props.color === "primary" 
  ? "bg-green-600 text-white dark:text-gray-200"
  : "bg-white text-green-600 dark:bg-gray-100"

  return (
    <span className={`${color} text-sm px-2 py-1 rounded-md`}>
      {props.icon && <FontAwesomeIcon icon={props.icon} className="mr-2" />}
      <span>{props.children}</span>
    </span>
  );
}
