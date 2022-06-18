import React, { ReactNode } from 'react';
import { classNames } from '../../utils';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => (
  <div
    className={classNames(
      'container mx-auto px-[25px] lg:px-[50px]',
      className !== undefined ? className : '',
    )}
  >
    {children}
  </div>
);
