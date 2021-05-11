const path = require(`path`);

const IMAGE_PATH = "./src/images/";

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
              hint
              steps
              solution
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
