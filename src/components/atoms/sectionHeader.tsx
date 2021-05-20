import * as React from 'react';

import { Subtitle, Text, Title } from '.';

type Props = {
  subtitle?: string;
  title: string;
  description: string;
  align: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function SectionHeader(props: Props) {
  return (
    <header className={`text-${props.align} mb-10`}>
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      <div className="mt-1 mb-4">
        <Title level={props.level ? props.level : 2}>{props.title}</Title>
      </div>
      <div className="mt-4 max-w-2xl lg:mx-auto">
        <Text>{props.description}</Text>
      </div>
    </header>
  );
}
