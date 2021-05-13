import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Button, ExternalLink, SectionHeader } from "../atoms";

type Props = {
  image: IGatsbyImageData;
};

export default function CTA(props: Props) {
  return (
    <div className="my-12 py-48 border-t-2 border-b-2 dark:border-gray-600 bg-white dark:bg-gray-700 relative flex justify-center items-center px-2">
      <div className="relative z-20 bg-white dark:bg-gray-700 p-4 md:p-6 shadow-md rounded-md bg-opacity-95">
        <SectionHeader
          subtitle="Kontaktujte nás"
          title="Chcete se na něco zeptat?"
          description="Přidej se k stránce luštěnin na facebooku, kde tvé dotazy rádi
              zodpovíme."
          align="center"
        />
        <div className="flex justify-center space-x-2 md:space-x-4">
          <ExternalLink href="https://www.facebook.com/lusteniny">
            <Button icon={["fab", "facebook"]}>Facebook</Button>
          </ExternalLink>
          <ExternalLink href="https://www.m.me/lusteniny/y">
            <Button icon={["fab", "facebook-messenger"]}>Messenger</Button>
          </ExternalLink>
        </div>
      </div>
      <GatsbyImage
        image={props.image}
        alt="Luštěniny 2019"
        imgClassName="object-cover object-center dark:filter brightness-75"
        className="h-full object-cover absolute top-0 left-0 w-full z-10 opacity-75"
      />
    </div>
  );
}
