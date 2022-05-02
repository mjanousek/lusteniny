import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  size?: 'normal' | 'lg';
  color?: 'light';
};

export default function Text(props: Props) {
  const size = () => {
    switch (props.size) {
      case 'normal':
        return 'text-normal';
      default:
        return 'text-lg';
    }
  };

  const color = props.color ? 'text-gray-200' : 'text-gray-800';

  return <p className={`${size()} ${color} `}>{props.children}</p>;
}
