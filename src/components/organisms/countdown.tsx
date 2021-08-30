import React, { useEffect, useState } from "react";

import { Tag, Title } from "../atoms";

type TimeDifference = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  // Note: JavaScript counts months from 0 to 11.
  const date = new Date(2021, 8, 4, 14, 0, 0, 0);

  const calculateTimeLeft = (): TimeDifference => {
    const difference = +date - +new Date();

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
      <div className="text-xl md:text-4xl font-bold -mb-1 md:mb-2 dark:text-gray-100">
        {value}
      </div>
      <div className="text-semibold text-gray-100 text-md md:text-2xl dark:text-gray-200">
        {label}
      </div>
    </div>
  );

  return (
    <div className="relative z-10 shadow-lg bg-green-600 overflow-hidden dark:bg-opacity-90">
      <div className="mx-auto text-white py-8 px-4 md:px-5 flex max-w-6xl text-center flex flex-col items-center lg:flex-row">
        <div className="px-10 flex-grow flex flex-col justify-center text-center lg:text-left mb-4 lg:mb-0 space-y-1">
          <p className="uppercase text-gray-100 font-quicksand font-semibold">
            Datum Luštěnin
          </p>
          <Title level={2} color="light">
            Další Luštěniny již za
          </Title>
          <div className="pt-1 justify-center lg:justify-start hidden lg:flex">
            <Tag size="large" icon="calendar-day" color="white">{date.toLocaleDateString("cs")}</Tag>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
          <div className="flex gap-2 md:gap-4">
            {circle(timeLeft.days, "Dní")}
            {circle(timeLeft.hours, "Hodin")}
          </div>
          <div className="flex gap-2 md:gap-4">
            {circle(timeLeft.minutes, "Minut")}
            {circle(timeLeft.seconds, "Sekund")}
          </div>
        </div>
          <div className="flex justify-center lg:hidden pt-4">
            <Tag size="large" icon="calendar-day" color="white">{date.toLocaleDateString("cs")}</Tag>
          </div>
      </div>
    </div>
  );
}
