import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Layout } from '../components/organisms/Layout';

import { EventPage } from '../components/templates';
import { EventPageQuery } from '../types/content';

export function Event(props: EventPageQuery) {
  const event = props.data.file.childUdalostiYaml;
  const host = props.data.global.childContentYaml.host;
  const slug = props.data.file.childUdalostiYaml;

  return (
    <Layout
      {...props.data.file.childUdalostiYaml}
      {...props.data.global.childContentYaml}
      schema={[
        {
          key: event.title,
          '@context': 'https://schema.org/',
          '@type': 'Event',
          name: event.title,
          description: event.description,
          image: host + getImage(event.image.childImageSharp).images.fallback.src,
          startDate: new Date(new Date(event.date).setHours(12)),
          endDate: new Date(new Date(event.date).setHours(18)),
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          organizer: {
            '@type': 'Organization',
            name: 'Luštěniny',
            url: host + slug,
          },
          location: {
            '@type': 'Place',
            name: 'Zlín',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '',
              addressLocality: 'Zlín',
              postalCode: '76001',
              addressCountry: 'CZ',
            },
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'Luštěniny',
          },
          offers: {
            '@type': 'Offer',
            name: 'Vstup Zdarma',
            price: '0',
            priceCurrency: 'CZK',
            validFrom: new Date(event.date),
            url: host,
            availability: 'https://schema.org/InStock',
          },
        },
      ]}
    >
      <EventPage {...props.data.file.childUdalostiYaml} />
    </Layout>
  );
}

export default Event;

export const pageQuery = graphql`
  query EventById($id: String!) {
    file(id: { eq: $id }) {
      childUdalostiYaml {
        title
        description
        date
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [PNG], width: 1400, aspectRatio: 1.5)
          }
        }
        galleryLink
        winners
        cyphers {
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP], width: 760)
            }
          }
          info
          hints
          steps
          solution
        }
        bonusInformation {
          title
          text
        }
      }
      fields {
        slug
      }
    }
    global: file(name: { eq: "global" }) {
      childContentYaml {
        facebookUrl
        messengerUrl
        host
      }
    }
  }
`;
