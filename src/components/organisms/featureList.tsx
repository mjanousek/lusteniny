import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Feature } from '../../types/content';

import { Text, Title } from '../atoms';

type Props = {
  features: Feature[];
};

export default function FeatureList(props: Props) {
  return (
    <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16 pt-6">
      {props.features.map((feature) => (
        <div
          key={feature.title}
          className="relative p-4 rounded-lg shadow-lg bg-white text-center"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-20 w-20 rounded-full border-4 border-white bg-green-500 text-gray-100 shadow-lg">
            <FontAwesomeIcon icon={feature.icon} size="2x" />
          </div>
          <div className="mt-9 mb-4">
            <Title level={3}>{feature.title}</Title>
          </div>
          <Text size="normal">{feature.description}</Text>
        </div>
      ))}
    </div>
  );
}
