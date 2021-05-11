import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Tag(props: Props) {
  return (
    <span className="bg-green-600 text-sm px-2 py-1 rounded-full text-white dark:text-gray-200 ">
      {props.children}
    </span>
  );
}
