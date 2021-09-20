import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Layout } from '../components/organisms/Layout';
import { Event, HomePageQuery } from '../types/content';
import { HomePage } from '../components/templates';
import { SchemaObject } from '../types/schema';
import { getImage } from 'gatsby-plugin-image';

// markup
export default function Page() {
  const query = useStaticQuery<HomePageQuery>(graphql`
    {
      events: allFile(filter: { relativeDirectory: { eq: "udalosti" } }) {
        edges {
          node {
            fields {
              slug
            }
            childUdalostiYaml {
              title
              description
              date
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [WEBP], aspectRatio: 1.5)
                }
              }
            }
          }
        }
      }
      file(name: { eq: "index" }) {
        childContentYaml {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [PNG])
            }
          }
          facebookUrl
          messengerUrl
          hero {
            title
            description
          }
          about {
            title
            description
            features {
              icon
              title
              description
            }
          }
          contact {
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
              }
            }
          }
          archive {
            title
            description
          }
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
  `);

  const host = query.global.childContentYaml.host;

  return (
    <Layout
      {...query.file.childContentYaml}
      {...query.global.childContentYaml}
      floatingNavbar
      schema={[
        ...query.events.edges.map<SchemaObject>((edge) => {
          const event = edge.node.childUdalostiYaml;
          const slug = edge.node.fields.slug;

          return {
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
          };
        }),
        {
          key: '_Luštěniny',
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Luštěniny',
          image: host + getImage(query.file.childContentYaml.image.childImageSharp).images.fallback.src,
          '@id': host,
          url: host,
          telephone: '+420 739 640 503',
          priceRange: 'free',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '',
            addressLocality: 'Zlín',
            postalCode: '76001',
            addressCountry: 'CZ',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 49.2309578,
            longitude: 17.5364241,
          },
          sameAs: ['https://www.facebook.com/lusteniny', host],
        },
      ]}
    >
      <HomePage
        {...query.file.childContentYaml}
        events={query.events.edges
          .map<Event>((edge) => {
            return {
              title: edge.node.childUdalostiYaml.title,
              description: edge.node.childUdalostiYaml.description,
              date: edge.node.childUdalostiYaml.date,
              image: edge.node.childUdalostiYaml.image,
              slug: edge.node.fields.slug,
            };
          })
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())}
      />
    </Layout>
  );
}
