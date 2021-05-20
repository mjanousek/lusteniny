import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

type Props = {
  head?: React.ReactNode;
  image?: {
    data: IGatsbyImageData;
    alt: string;
    link?: string;
  };
  body?: React.ReactNode;
  footer?: React.ReactNode;
  isFullheight?: boolean;
};

export default function Card(props: Props) {
  const image = props.image && (
    <GatsbyImage
      image={props.image.data}
      alt={props.image.alt}
      className="transition-all duration-500 transform group-hover:scale-125 h-full"
      imgClassName="rounded-t-lg dark:filter brightness-90"
    />
  );

  return (
    <div
      className={`shadow-lg rounded-lg bg-white dark:bg-gray-800 flex flex-col relative ${
        props.isFullheight ? 'h-full' : ''
      }`}
    >
      {props.head && (
        <h3 className="px-6 py-3 border-4 border-white shadow-md rounded-full font-medium bg-green-600 text-gray-100 absolute left-1/2 top-0 z-20 transform -translate-x-1/2 -translate-y-1/2 dark:border-gray-700 text-center">
          {props.head}
        </h3>
      )}
      {props.image
        && (props.image.link ? (
          <Link
            to={props.image.link}
            className="group overflow-hidden rounded-t-lg"
          >
            {image}
          </Link>
        ) : (
          <>{image}</>
        ))}
      <div className="flex-grow flex flex-col rounded-lg">
        {props.body && <div className="flex-grow p-4">{props.body}</div>}
        {props.footer && <div className="">{props.footer}</div>}
      </div>
    </div>
  );
}
