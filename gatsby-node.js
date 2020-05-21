// const { createFilePath } = require('gatsby-source-filesystem');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode });

//     const fileNode = getNode(node.parent);
//     const source = fileNode.sourceInstanceName;

//     const separtorIndex = slug.indexOf('--') ? slug.indexOf('--') : 0;
//     const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

//     if (source !== 'parts') {
//       createNodeField({
//         node,
//         name: `slug`,
//         value: `${separtorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
//       });
//     }

//     createNodeField({
//       node,
//       name: `source`,
//       value: source,
//     });

//     createNodeField({
//       node,
//       name: `prefix`,
//       value: separtorIndex ? slug.substring(1, separtorIndex) : '',
//     });
//   }
// };

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = require.resolve(`./src/templates/post/index.js`);
//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//               prefix
//               source
//             }
//             frontmatter {
//               title
//               tags
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   const items = result.data.allMarkdownRemark.edges;
//   const posts = items.filter((item) => item.node.fields.source === 'posts');

//   posts.forEach(({ node }) => {
//     const { slug, source } = node.fields;
//     createPage({
//       path: `blog${slug}`,
//       component: blogPostTemplate,
//       context: { slug, source },
//     });
//   });
// };
