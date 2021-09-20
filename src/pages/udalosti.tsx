import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../components/organisms/Layout';
import { EventsPage } from '../components/templates';
import { Event, EventsPageQuery } from '../types/content';

export default function Page() {
  const query = useStaticQuery<EventsPageQuery>(graphql`
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
                  gatsbyImageData(
                    height: 500
                    placeholder: BLURRED
                    formats: [WEBP]
                    aspectRatio: 1.5
                  )
                }
              }
            }
          }
        }
      }
      file(name: { eq: "udalosti" }) {
        childContentYaml {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [PNG], width: 1400, aspectRatio: 1.5)
            }
          }
        }
      }
      global: file(name: {eq: "global"}) {
        childContentYaml {
          facebookUrl
          messengerUrl
          host
        }
      }
    }
  `);

  return (
    <Layout {...query.file.childContentYaml} {...query.global.childContentYaml}>
      <EventsPage
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
