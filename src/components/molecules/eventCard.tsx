import * as React from "react";
import { Link } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button, Tag, Text, Title } from "../atoms";
import Card from "../atoms/card";

type Props = {
  title: string;
  description: string;
  date: string;
  image: IGatsbyImageData;
  slug: string;
};

export default function EventCard(props: Props) {
  const image = {
    data: getImage(props.image),
    alt: props.title,
    link: props.slug,
  };

  return (
    <article>
      <Card
        image={image}
        body={
          <>
            <Tag>{new Date(props.date).toLocaleDateString("cs-CZ")}</Tag>
            <div className="mt-5 mb-4">
              <Link to={props.slug}>
                <Title level={3}>{props.title}</Title>
              </Link>
            </div>
            <Text size="normal">{props.description}</Text>
          </>
        }
        footer={
          <div className="pb-4 px-4 flex justify-end">
            <Link to={props.slug}>
              <Button icon="arrow-right">Zobrazit</Button>
            </Link>
          </div>
        }
        isFullheight
      ></Card>
    </article>
  );
}
