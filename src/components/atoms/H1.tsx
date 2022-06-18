import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const H1 = ({ children }: Props) => (
  <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
    {children}
  </h1>
);
