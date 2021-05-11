import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button, Tag, Text, Title } from "../atoms";

type Props = {
  title: string;
  description: string;
  date: string;
  image: IGatsbyImageData;
  slug: string;
  isLarge?: boolean;
};

export default function EventCard(props: Props) {
  const image = getImage(props.image);

  return (
    <article className="shadow-lg rounded-md overflow-hidden bg-white dark:bg-gray-800 flex flex-col">
      <GatsbyImage image={image} alt="" />
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <Tag>{new Date(props.date).toLocaleDateString()}</Tag>
          <div className="mt-5 mb-4">
            <Title level={3}>{props.title}</Title>
          </div>
          <Text size="normal">{props.description}</Text>
        </div>
        <div className="flex-grow-0 flex justify-end mt-2">
          <Link to={props.slug}>
            <Button icon="arrow-right" color="primary" darkColor="primary">
              Zobrazit
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
