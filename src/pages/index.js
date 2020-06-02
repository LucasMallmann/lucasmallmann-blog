/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Author from '~/components/Author';
import Introduction from '~/components/Introduction';
import PreviewBlog from '~/components/PreviewBlog';

const Container = styled.div`
  padding-top: 24px;
`;

const Home = ({ data }) => {
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges;

  return (
    <Container>
      <Author />

      <Introduction />

      <PreviewBlog posts={posts} />

      <Link to="/blog">Ver todos os posts</Link>
    </Container>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          timeToRead
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

export default Home;
