import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SchemaObject } from './schema';

export type SingleContentQuery<T> = {
  file: {
    childContentYaml: T;
  };
};

export type Image = {
  childImageSharp: IGatsbyImageData;
};

export type PageData = {
  title: string;
  description: string;
  image: Image;
  schema?: SchemaObject[];
};

export type EventPageData = PageData & {
  date: Date;
  galleryLink: string;
  winners: string[];
  cyphers: Cypher[];
  bonusInformation: BonusInformation[];
};

export type Cypher = {
  title: string;
  image?: Image;
  images?: Image[];
  info?: string[];
  hints: string[];
  steps: string[];
  solution: string;
};

export type BonusInformation = {
  title: string;
  text: string;
};

export type EventPageQuery = {
  pageContext: {
    slug: string;
    id: string;
  };
  data: {
    file: {
      childUdalostiYaml: EventPageData;
      fields: {
        slug: string;
      };
    };
  };
};
