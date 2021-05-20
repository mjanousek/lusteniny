import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { Button } from '.';

type Props = {
  image: IGatsbyImageData;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  main?: boolean;
};

export default function Slide(props: Props) {
  const titleClassName = 'font-quicksand font-bold text-white text-4xl md:text-6xl lg:text-8xl   mb-4 dark:text-gray-100';

  return (
    <div className="h-full w-full relative flex items-center">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <GatsbyImage
          image={getImage(props.image)}
          alt={props.title}
          className="h-full w-full opacity-70"
          imgClassName="object-fit object-center filter filter brightness-90"
        />
      </div>
      <div className="w-full bg-black bg-opacity-40  mx-auto relative z-20 flex flex-col justify-center items-center">
        <div className="lg:max-w-5xl py-8 px-4 md:px-16 text-center lg:rounded-full">
          {props.main && <h1 className={titleClassName}>{props.title}</h1>}
          {!props.main && <h2 className={titleClassName}>{props.title}</h2>}
          {props.subtitle && (
            <p className="mt-2 mb-4 text-white lg:text-md dark-text-gray-100">{props.subtitle}</p>
          )}

          <p className="text-lg text-gray-100 font-bold font-quicksand my-4 dark:text-gray-200">
            {props.description}
          </p>
          <Link to={props.link} className="mt-4">
            <Button icon="arrow-right">Více informací</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
