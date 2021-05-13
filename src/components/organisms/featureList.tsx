import * as React from "react";
import { Feature as FeatureType } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text, Title } from "../atoms";

type Props = {
  features: FeatureType[];
};

export default function FeatureList(props: Props) {
  return (
    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-12 pt-6">
      {props.features.map((feature) => (
        <div className="relative p-4 rounded shadow-lg bg-white dark:bg-gray-800 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center h-12 w-12 rounded-md bg-green-600 dark:bg-green-500 text-gray-100">
            <FontAwesomeIcon icon={feature.icon} size="lg" />
          </div>
          <div className="mt-5 mb-4">
            <Title level={3}>{feature.title}</Title>
          </div>
          <Text size="normal">{feature.description}</Text>
        </div>
      ))}
    </div>
  );
}
