import { Link } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import {
  Button, Tag, Text, Title,
} from '../atoms';
import Card from '../atoms/card';

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
        body={(
          <div className="text-center pb-4">
            <div className="mb-2">
              <Link to={props.slug}>
                <Title level={3}>{props.title}</Title>
              </Link>
            </div>
            <div className="mb-4">
              <Tag icon="calendar-check">{new Date(props.date).toLocaleDateString('cs-CZ')}</Tag>
            </div>
            <Text size="normal">{props.description}</Text>

            <div className="absolute left-1/2 bottom-0 z-20 transform -translate-x-1/2 translate-y-1/2">
              <Link to={props.slug}>
                <Button icon="arrow-right">Zobrazit</Button>
              </Link>
            </div>
          </div>
        )}
        isFullheight
      />
    </article>
  );
}
