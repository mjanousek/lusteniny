import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SchemaObject } from './schema';

export type SingleContentQuery<T> = {
  file: {
    childContentYaml: T;
  };
  global: {
    childContentYaml: GlobalData;
  };
};

export type Image = {
  childImageSharp: IGatsbyImageData;
};

export type GlobalData = {
  host: string;
  facebookUrl: string;
  messengerUrl: string;
};

export type PageData = {
  title: string;
  description: string;
  image: Image;
  schema?: SchemaObject[];
};

export type PageSection = {
  title: string;
  description: string;
};

export type HomePageQuery = SingleContentQuery<HomePageData> & {
  events: {
    edges: {
      node: {
        fields: {
          slug: string;
        };
        childUdalostiYaml: {
          title: string;
          description: string;
          date: Date;
          image: Image;
        };
      };
    }[];
  };
};

export type HomePageData = PageData & {
  facebookUrl: string;
  messengerUrl: string;
  url: string;
  hero: PageSection;
  about: PageSection & {
    features: Feature[];
  };
  contact: PageSection & {
    image: Image;
  };
  archive: PageSection;
  events: Event[];
};

export type Feature = {
  icon: IconProp;
  title: string;
  description: string;
};

export type EventsPageQuery = SingleContentQuery<EventsPageData> & {
  events: {
    edges: {
      node: {
        fields: {
          slug: string;
        };
        childUdalostiYaml: {
          title: string;
          description: string;
          date: Date;
          image: Image;
        };
      };
    }[];
  };
};

export type EventsPageData = PageData & {
  events: Event[];
};

export type Event = {
  title: string;
  description: string;
  date: Date;
  image: Image;
  slug: string;
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
  info?: string[];
  hints: string[];
  steps: string[];
  solution: string;
};

export type BonusInformation = {
  title: string;
  text: string[];
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
      }
    };
    global: {
      childContentYaml: GlobalData;
    };
  };
};
