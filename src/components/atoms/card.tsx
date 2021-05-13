import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

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
  return (
    <div
      className={`shadow-lg rounded-md overflow-hidden bg-white dark:bg-gray-800 flex flex-col ${
        props.isFullheight ? "h-full" : ""
      }`}
    >
      {props.head && (
        <div className="bg-green-600 dark:bg-green-500 flex justify-center items-center p-4 shadow-lg relative z-10">
          {props.head}
        </div>
      )}
      {props.image &&
        (props.image.link ? (
          <Link to={props.image.link} className="group overflow-hidden">
            <GatsbyImage
              image={props.image.data}
              alt={props.image.alt}
              className="transition-all duration-500 transform group-hover:scale-125"
              imgClassName="dark:filter brightness-90"
            />{" "}
          </Link>
        ) : (
          <GatsbyImage
            image={props.image.data}
            alt={props.image.alt}
            imgClassName="dark:filter brightness-90"
          />
        ))}
      <div className=" flex-grow flex flex-col">
        {props.body && <div className="flex-grow p-4">{props.body}</div>}
        {props.footer && <div className="">{props.footer}</div>}
      </div>
    </div>
  );
}
