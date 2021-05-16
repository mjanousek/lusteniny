import React, { useEffect, useState } from 'react';

import { Title } from '../atoms';

type TimeDifference = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const calculateTimeLeft = (): TimeDifference => {
    const difference = +new Date('06/19/2021') - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const circle = (value, label) => (
    <div className="w-20 h-20 md:w-32 md:h-32 border-4 border-white shadow-lg rounded-full flex flex-col items-center justify-center dark:border-gray-300">
      <div className="text-xl md:text-4xl font-bold -mb-1 md:mb-2 dark:text-gray-100">{value}</div>
      <div className="text-semibold text-gray-100 text-md md:text-2xl dark:text-gray-200">{label}</div>
    </div>
  );

  return (
    <div className="relative z-10 shadow-lg bg-green-600 overflow-hidden dark:bg-opacity-90">
      <div className="mx-auto text-white py-8 px-4 md:px-5 flex max-w-6xl text-center flex flex-col items-center lg:flex-row">
        <div className="px-10 flex-grow flex flex-col justify-center text-center lg:text-left">
          <p className="uppercase text-gray-100 font-quicksand font-semibold mb-1">
            Datum Luštěnin
          </p>
          <Title level={2} color="light">Další Luštěniny již za</Title>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-4">
          {circle(timeLeft.days, 'Dní')}
          {circle(timeLeft.hours, 'Hodin')}
          {circle(timeLeft.minutes, 'Minut')}
          {circle(timeLeft.seconds, 'Sekund')}
        </div>
      </div>
    </div>
  );
}
