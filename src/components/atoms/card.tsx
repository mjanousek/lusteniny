import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

type Props = {
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
      image={getImage(props.image.data)}
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
