import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const H2 = ({ children }: Props) => (
  <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
    {children}
  </h2>
);
