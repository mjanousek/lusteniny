import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

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
    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-12">
      {props.events
        .sort((a, b) => +new Date(b.date) - +new Date(a.date))
        .map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
    </div>
  );
}
