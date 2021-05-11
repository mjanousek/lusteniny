import * as React from "react";

type Props = {
  children?: React.ReactNode;
  color?: "light" | "dark";
  size?: "normal" | "lg";
};

export default function Text(props: Props) {
  const color = () => {
    switch (props.color) {
      case "light":
        return "text-gray-200";
      default:
        return "text-gray-700 dark:text-gray-300";
    }
  };

  const size = () => {
    switch (props.size) {
      case "normal":
        return "text-normal";
      default:
        return "text-lg";
    }
  };

  return <p className={`${size()} ${color()}`}>{props.children}</p>;
}
