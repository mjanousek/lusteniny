import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Cypher } from "../../types/content";

import { Card, Collapsible, Text } from "../atoms";

type Props = Omit<Cypher, "image"> & {
  image: {
    data: IGatsbyImageData;
    alt: string;
  };
};

export default function CypherCard(props: Props) {
  const toggleHintButtonRenderer = () => (
    <div className="items-stretch transition-all duration-300 cursor-pointer p-4 text-center text-base font-medium bg-green-600 text-gray-100 hover:bg-green-700 hover:text-white">
      Zobrazit Nápovědu
    </div>
  );
  const toggleSolutionButtonRenderer = (isExpanded: boolean) => (
    <div
      className={`items-stretch transition-all duration-300g cursor-pointer p-4 text-center text-base font-medium bg-green-600 text-gray-100 hover:bg-green-700 hover:text-white ${
        isExpanded ? "" : "rounded-b-lg"
      }`}
    >
      Zobrazit Řešení
    </div>
  );

  return (
    <div>
      <Card
        image={props.image}
        body={
          props.info?.length > 0 && (
            <div className="space-y-4 mt-6">
              {props.info.map((i) => (
                <Text key={`cypher_${props.title}_info_${i}`}>{i}</Text>
              ))}
            </div>
          )
        }
        footer={
          <>
            <Collapsible
              toggleRenderer={toggleHintButtonRenderer}
              content={
                <div className="p-4">
                  <Text>
                    {props.steps?.length > 0 && (
                      <ol
                        className="list-decimal list-outside pl-8 space-y-1"
                      >
                        {props.hints.map((hint) => (
                          <li key={`cypher_${props.title}_hint_${hint}`}>{hint}</li>
                        ))}
                      </ol>
                    )}
                  </Text>
                </div>
              }
              ariaId={`Nápověda k ${props.title}`}
            />
            <Collapsible
              toggleRenderer={toggleSolutionButtonRenderer}
              content={
                <div className="p-4">
                  <Text>
                    {props.steps?.length > 0 && (
                      <ol
                        className="list-decimal list-outside pl-8 space-y-1"
                      >
                        {props.steps.map((step) => (
                          <li key={`cypher_${props.title}_solution_${step}`}>{step}</li>
                        ))}
                      </ol>
                    )}
                  </Text>
                  <div className="mt-4 p-2 border shadow-inner bg-indigo-50 bg-opacity-25 border-green-600  rounded-md text-center">
                    <Text>
                      Řešení:
                      {props.solution}
                    </Text>
                  </div>
                </div>
              }
              ariaId={`Řešení k ${props.title}`}
            />
          </>
        }
      />
    </div>
  );
}
