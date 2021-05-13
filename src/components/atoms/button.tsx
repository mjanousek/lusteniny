import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  icon?: IconProp;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  shadow?: boolean;
};

export default function Button(props: Props) {
  const undefinedOrTrue = (bool?: boolean) =>
    bool === undefined ? true : bool;

  const rounded = `${
    undefinedOrTrue(props.roundedBottom) ? "" : "rounded-b-none"
  } ${undefinedOrTrue(props.roundedTop) ? "" : "rounded-t-none"}`;

  const shadow = undefinedOrTrue(props.roundedBottom) ? "" : "shadow-md";

  return (
    <button
      className={`px-6 py-3 border border-transparent transition-all text-base font-medium rounded-md ${rounded} ${shadow} bg-green-600 text-gray-100 dark:bg-green-500 dark:text-gray-100 hover:bg-green-700 hover:text-white focus:shadow-lg`}
    >
      <span>{props.children}</span>
      <FontAwesomeIcon icon={props.icon} className="ml-2" />
    </button>
  );
}
