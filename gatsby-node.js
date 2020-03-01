const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/Post/index.jsx');

    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                  avatar
                }
              }
            }
          }
        }
      `).then(({ data }) => {
        data.allMarkdownRemark.edges.forEach(({ node }) => {
          const pathSlug = node.frontmatter.path;

          createPage({
            path: pathSlug,
            component: postTemplate,
            context: {
              pathSlug,
              avatar: node.frontmatter.avatar,
            },
          });

          resolve();
        });
      }),
    );
  });
};
