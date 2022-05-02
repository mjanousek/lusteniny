import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

type Props = {
  color: "primary" | "white"
  size: "regular" | "large"
  children?: React.ReactNode;
  icon?: IconProp;
};

export default function Tag(props: Props) {
  const color = props.color === "primary" 
  ? "bg-green-600 text-white"
  : "bg-white text-green-600"

  return (
    <span className={`${color} ${props.size === "regular" ? "text-sm px-2 py-1" : "text-md font-semibold px-4 py-2"} text-sm px-2 py-1 rounded-md`}>
      {props.icon && <FontAwesomeIcon icon={props.icon} className="mr-2" />}
      <span>{props.children}</span>
    </span>
  );
}
