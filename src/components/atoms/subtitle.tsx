import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Subtitle(props: Props) {
  return (
    <p className="text-base font-semibold tracking-wide uppercase font-quicksand text-green-600 dark:text-green-500">
      {props.children}
    </p>
  );
}