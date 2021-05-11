import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  icon?: IconProp;
  color: "light" | "primary";
  darkColor: "light" | "primary";
};

export default function Button(props: Props) {
  const color = () => {
    switch (props.color) {
      case "light":
        return "bg-gray-100 text-green-600";
      case "primary":
        return "bg-green-600 text-gray-100";
    }
  };

  const darkColor = () => {
    switch (props.color) {
      case "light":
        return "dark:bg-gray-100 dark:text-green-600";
      case "primary":
        return "dark:bg-green-600 dark:text-gray-100";
    }
  };

  return (
    <button className={`px-6 py-3 border border-transparent text-base font-medium rounded-md shadow ${color()} ${darkColor()}`}>
      <span>{props.children}</span>
      <FontAwesomeIcon icon={props.icon} className="ml-2" />
    </button>
  );
}
