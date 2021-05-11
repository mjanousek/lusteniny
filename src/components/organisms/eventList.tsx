import * as React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { EventCard } from "../molecules";

type Event = {
  title: string;
  description: string;
  date: string;
  image: IGatsbyImageData;
  slug: string;
};

type Props = {
  events: Event[];
};

export default function EventList(props: Props) {
  return (
    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
      {props.events.map((event) => (
        <EventCard {...event} />
      ))}
    </div>
  );
}
