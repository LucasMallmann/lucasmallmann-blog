// Only querying posts since Im not gonna search for pages
const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/posts/" } }
  ) {
    edges {
      node {
        fields {
          slug
        }
        id
        timeToRead
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date
          tags
          description
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
}`;

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }));

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
];

module.exports = queries;
