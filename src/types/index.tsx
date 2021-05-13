import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Feature = {
  icon: IconProp;
  title: string;
  description: string;
};

export type Cypher = {
  title: string;
  image?: string;
  info?: string[];
  hints: string[];
  steps: string[];
  solution: string;
};

export type BonusInformation = {
  title: string;
  text: string[];
};
