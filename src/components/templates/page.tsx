import * as React from "react";
import { Helmet } from "react-helmet";

import data from "../../content/index.yaml";
import heroImage from "../../images/Hero.jpg";
import { Event } from "../../types";
import { SchemaEvent, SchemaLocalBusiness } from "../../types/schema";
import { Footer, Navbar } from "../organisms";

type Props = {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  eventsForSchema?: Event[];
  floatingNavbar?: boolean;
};

export default function Page(props: Props) {
  const { title, description } = props;
  const url = typeof window !== "undefined" ? window.location.href : "";
  const host = data.url;

  const image = host + (props.image ?? heroImage);

  const schemaLocalBussiness: SchemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Luštěniny",
    image: host + heroImage,
    "@id": host,
    url: host,
    telephone: "+420 776 747 421",
    priceRange: "free",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Zlín",
      postalCode: "76001",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.2309578,
      longitude: 17.5364241,
    },
    sameAs: ["https://www.facebook.com/lusteniny", host],
  };

  const schemaEvents =
    props.eventsForSchema?.length > 0 &&
    props.eventsForSchema.map<SchemaEvent>((event) => {
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: event.title,
        description: event.description,
        image: host + event.image.childImageSharp.original.src,
        startDate: new Date(new Date(event.date).setHours(12)),
        endDate: new Date(new Date(event.date).setHours(18)),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        organizer: {
          "@type": "Organization",
          name: "Luštěniny",
          url: host,
        },

        location: {
          "@type": "Place",
          name: "Zlín",
          address: {
            "@type": "PostalAddress",
            streetAddress: "",
            addressLocality: "Zlín",
            postalCode: "76001",
            addressCountry: "CZ",
          },
        },
        performer: {
          "@type": "PerformingGroup",
          name: "Luštěniny",
        },
        offers: {
          "@type": "Offer",
          name: "Vstup Zdarma",
          price: "0",
          priceCurrency: "CZK",
          validFrom: new Date(event.date),
          url: host,
          availability: "https://schema.org/InStock",
        },
      };
    });

  return (
    <>
      <Helmet>
        <html lang="cs" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={url} />

        <meta name="copyright" content="© 2020 - 2021 Luštěniny" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="14 years" />

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        <script type="application/ld+json">
          {JSON.stringify(schemaLocalBussiness, null, 4)}
        </script>
        {schemaEvents?.length > 0 &&
          schemaEvents.map((event) => (
            <script type="application/ld+json" key={event.name}>
              {JSON.stringify(event, null, 4)}
            </script>
          ))}
      </Helmet>
      <div className="min-h-screen flex flex-col bg-indigo-50 dark:bg-gray-900">
        <Navbar isFixed={props.floatingNavbar} />
        <main className=" flex-grow">{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
