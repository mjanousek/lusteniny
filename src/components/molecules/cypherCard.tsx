import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Cypher } from "../../types";
import { Button, Card, Collapsible, Text, Title } from "../atoms";

type Props = Omit<Cypher, "image"> & {
  image: {
    data: IGatsbyImageData;
    alt: string;
  };
};

export default function CypherCard(props: Props) {
  const toggleHintButtonRenderer = (isExpanded: boolean) => (
    <div className="flex flex-col items-stretch">
      <Button roundedTop={false} roundedBottom={false} shadow={false}>
        Zobrazit Nápovědu
      </Button>
    </div>
  );
  const toggleSolutionButtonRenderer = (isExpanded: boolean) => (
    <div className="flex flex-col items-stretch">
      <Button roundedTop={false} roundedBottom={!isExpanded} shadow={false}>
        Zobrazit Řešení
      </Button>
    </div>
  );

  return (
    <div>
      <Card
        head={
          <Title level={3} color="light">
            {props.title}
          </Title>
        }
        image={props.image}
        body={
          props.info?.length > 0 && (
            <div className="space-y-4">
              {props.info.map((i) => (
                <Text>{i}</Text>
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
                        role="list"
                        className="list-decimal list-outside pl-8 space-y-1"
                      >
                        {props.hints.map((hint) => (
                          <li>{hint}</li>
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
                        role="list"
                        className="list-decimal list-outside pl-8 space-y-1"
                      >
                        {props.steps.map((step) => (
                          <li>{step}</li>
                        ))}
                      </ol>
                    )}
                  </Text>
                  <div className="mt-4 p-2 border bg-gray-50 dark:bg-gray-700 border-green-600  rounded-md text-center">
                    <Text>Řešení: {props.solution}</Text>
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
