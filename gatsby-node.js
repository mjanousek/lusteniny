/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allFile(filter: { relativeDirectory: { eq: "udalosti" } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));

      return Promise.reject(result.errors);
    }

    // sluzby
    const postNodes = result.data.allFile.nodes;

    postNodes.forEach((node) => {
      const slug = node.fields.slug;
      const id = node.id;
      createPage({
        path: slug,
        component: path.resolve(`src/templates/event.tsx`),
        context: {
          slug,
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sluzby pages
  if (node.relativeDirectory === `udalosti`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
