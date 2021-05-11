import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Button, ExternalLink } from "../atoms";
import { SectionHeader } from "../molecules";

type Props = {
  image: IGatsbyImageData;
};

export default function CTA(props: Props) {
  return (
    <div className="my-12 bg-green-600 dark:bg-gray-800 shadow-xl relative md:h-96 ">
      <div className="md:grid grid-cols-2">
        <div className="px-8 py-8 flex flex-col justify-center items-center md:items-end ">
          <SectionHeader
            subtitle="Kontaktujte nás"
            title="Chcete se na něco zeptat?"
            description="Přidej se k stránce luštěnin na facebooku, kde tvé dotazy rádi
              zodpovíme."
            align="right"
            isPrimary
          />
          <div className="flex justify-center md:justify-end space-x-2 lg:space-x-4">
            <ExternalLink href="https://www.facebook.com/lusteniny">
              <Button
                icon={["fab", "facebook"]}
                color="light"
                darkColor="primary"
              >
                Facebook
              </Button>
            </ExternalLink>
            <ExternalLink href="https://www.m.me/lusteniny/y">
              <Button
                icon={["fab", "facebook-messenger"]}
                color="light"
                darkColor="primary"
              >
                Messenger
              </Button>
            </ExternalLink>
          </div>
        </div>
        <div className="h-96 md:h-96 opacity-75">
          <GatsbyImage
            image={props.image}
            alt="Luštěniny 2019"
            imgClassName="object-cover object-center dark:filter brightness-75"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
