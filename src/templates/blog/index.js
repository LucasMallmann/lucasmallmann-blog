import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';
import Search from '~/components/Search';

import * as S from './styles';

// const searchIndices = [
//   { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
// ];

const BlogList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <S.Container>
      <Search />

      {posts.map(({ node }) => {
        return <PostCard key={node.id} data={node} />;
      })}
    </S.Container>
  );
};

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              date: PropTypes.string,
              image: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string,
                  }),
                }),
              }),
              description: PropTypes.string,
              fields: PropTypes.shape({
                slug: PropTypes.string,
              }),
            }),
          }),
        }),
      ),
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
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date
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
  }
`;

export default BlogList;
