import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/organisms/Layout';

import { EventPage } from '../components/templates';
import { EventPageQuery } from '../types/content';

export function Event(props: EventPageQuery) {
  props.data.file.childUdalostiYaml.cyphers.forEach((cypher) => {
    if (cypher.image === null) console.log(`error at ${cypher.title}`);
  });

  return (
    <Layout {...props.data.file.childUdalostiYaml} {...props.global.childContentYaml}>
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
