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

const AnimatedLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  margin-top: 16px;
  cursor: pointer;
  font-size: 16px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    margin-top: 10px;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const Home = ({ data }) => {
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges;

  return (
    <Container>
      <Author />

      <Introduction />

      <PreviewBlog posts={posts} />

      <AnimatedLink to="/blog">Ver todos os posts</AnimatedLink>
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
