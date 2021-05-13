import * as React from "react";

type Props = {
  children?: React.ReactNode;
  size?: "normal" | "lg";
};

export default function Text(props: Props) {

  const size = () => {
    switch (props.size) {
      case "normal":
        return "text-normal";
      default:
        return "text-lg";
    }
  };

  return <p className={`${size()} text-gray-700 dark:text-gray-300`}>{props.children}</p>;
}
