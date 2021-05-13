import * as React from "react";

type Props = {
  children?: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "light";
};

export default function Title(props: Props) {
  const fontSize = () => {
    switch (props.level) {
      case 2:
        return "font-semibold text-3xl md:text-4xl leading-8";
      case 1:
        return "font-extrabold text-4xl md:text-5xl leading-10";
      default:
        return "font-bold text-xl leading-4";
    }
  };

  const color = () => {
    switch (props.color) {
      case "light": 
        return "text-gray-100 dark:text-gray-100";
      default:
        return "text-gray-900 dark:text-gray-100";
    }
  };

  const className = `font-quicksand  tracking-tight ${fontSize()} ${color()}`;
  const Tag = ("h" + props.level) as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{props.children}</Tag>;
}
