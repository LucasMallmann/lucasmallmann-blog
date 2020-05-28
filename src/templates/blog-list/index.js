import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const BlogList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return <div key={node.fields.slug}>{title}</div>;
      })}
    </>
  );
};

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            fields: PropTypes.shape({
              slug: PropTypes.string,
            }),
          }),
        }),
      }),
    }),
  }).isRequired,
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default BlogList;
