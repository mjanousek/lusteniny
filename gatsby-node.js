const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `EventsYaml`) {
    createNodeField({
      node,
      name: "slug",
      value: "/udalosti" + node.slug,
    });

    createNodeField({
      node,
      name: "image",
      value: "../images/" + node.image,
    });
  }
};

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
            image
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
      path: "/udalosti" + node.slug,
      component: path.resolve(`./src/components/templates/eventPage.tsx`),
      context: {
        ...node,
      },
    });
  });
};
