import { graphql } from 'gatsby';
import React from 'react';

import { EventPageQuery } from '../types/content';

export function Event(props: EventPageQuery) {
  const event = props.data.file.childUdalostiYaml;
  const host = props.data.global.childContentYaml.host;
  const slug = props.data.file.childUdalostiYaml;

  return <></>;
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
