import * as React from "react";

type Props = {
  children?: React.ReactNode;
  color?: "primary" | "light";
  darkColor?: "primary" | "light";
};

export default function Subtitle(props: Props) {
  const color = () => {
    switch (props.color) {
      case "light":
        return "text-gray-300";

      default:
        return "text-green-600 ";
    }
  };

  const darkColor = () => {
    switch (props.darkColor) {
      case "light":
        return "dark:text-gray-300";

      default:
        return "dark:text-green-600";
    }
  };

  return (
    <p
      className={`text-base font-semibold tracking-wide uppercase font-quicksand ${color()} ${darkColor()}`}
    >
      {props.children}
    </p>
  );
}
