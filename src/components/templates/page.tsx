import * as React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../organisms";
import heroImage from "../../images/Hero.jpg";
import { Event } from "../../types";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  eventsForSchema?: Event[];
};

export default function Page(props: Props) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const host = "https://www.lusteniny.eu";

  const title = props.title ?? "Luštěniny | Šifrovací hra ve Zlíně";
  const description =
    props.description ??
    "Baví tě šifrovačky? Pokud ano, jsi na správném místě. Luštěniny jsou šifrovací hra pořádána v centru Zlína, které se můžeš zúčastnit jak v týmu, tak sám.";
  const image = host + (props.image ?? heroImage);
  const schemaImage = host + heroImage;

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
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Luštěniny",
            "image": "${schemaImage}",
            "@id": "${host}",
            "url": "${host}",
            "telephone": "+420 776 747 421",
            "priceRange": "free",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Zlín",
              "postalCode": "76001",
              "addressCountry": "CZ"
            } ,
            "sameAs": [
              "https://www.facebook.com/lusteniny",
              "${host}"
            ] 
          }`}
        </script>
        {props.eventsForSchema?.length > 0 &&
          props.eventsForSchema.map((event) => (
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Event",
                  "name": "${event.title}",
                  "description": "${event.description}",
                  "image": "${host}${event.image.childImageSharp.original.src}",
                  "startDate": "${new Date(new Date(event.date).setHours(18)).toISOString()}",
                  "endDate": "${new Date(new Date(event.date).setHours(18)).toISOString()}",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                  "organizer": {
                    "@type": "Organization",
                    "name": "Luštěniny",
                    "url": "${host}"
                  },
                  "location": {		
                    "@type": "Place",
                    "name": "Zlín",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "",
                      "addressLocality": "Zlín",
                      "postalCode": "76001",
                      "addressCountry": "CZ"
                    }
                  },
                  "performer": {
                    "@type": "PerformingGroup",
                    "name": "Luštěniny"
                  },
                  "offers": {
                    "@type": "Offer",
                    "name": "Vstup Zdarma",
                    "price": "0",
                    "priceCurrency": "CZK",
                    "validFrom": "${event.date}",
                    "url": "${host}",
                    "availability": "https://schema.org/InStock"
                  }
                }`}
            </script>
          ))}
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="bg-gray-100 dark:bg-gray-900 flex-grow">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
