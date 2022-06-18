import React from 'react';

type Props = {
  time: string;
};

export const TimeTag = ({ time }: Props) => (
  <time
    dateTime={new Date(time).toISOString()}
    className="block rounded-[8px] bg-blue-100 px-[20px] py-[10px] text-sm font-semibold text-blue-500 sm:text-base"
  >
    {new Date(time).toLocaleDateString('cs')}{' '}
  </time>
);
