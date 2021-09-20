import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Layout } from '../components/organisms/Layout';
import { Event, HomePageQuery } from '../types/content';
import { HomePage } from '../components/templates';

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

  return (
    <Layout {...query.file.childContentYaml} {...query.global.childContentYaml} floatingNavbar>
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
