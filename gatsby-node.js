const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allEventsYaml {
        edges {
          node {
            title
            description
            date
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [WEBP, AVIF]
                  quality: 100
                  width: 2000
                )
                original {
                  src
                }
              }
            }
            galleryLink
            winners
            slug
            cyphers {
              title
              image
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
      }
    }
  `);

  result.data.allEventsYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/templates/eventPage.tsx`),
      context: {
        ...node,
      },
    });
  });
};
