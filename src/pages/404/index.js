import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '~/components/SEO';

import * as S from './styles';
import PreviewBlog from '~/components/PreviewBlog';

const NotFoundPage = ({ data }) => {
  const { image, posts } = data;

  return (
    <>
      <SEO title="Not Found" />
      <S.Container>
        <h1>Ops! Página não encontrada.</h1>
        <S.AstronautContainer>
          <Img fluid={image.fluid} alt="Página não encontrada" />
        </S.AstronautContainer>
        <p>
          Parece que você se perdeu por aqui. Não se preocupe, ajudaremos você a
          encontrar o caminho de volta!
        </p>

        <PreviewBlog posts={posts.edges} />
        <S.AnimatedLink to="/blog">Ver todos os posts</S.AnimatedLink>
      </S.Container>
    </>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      fluid: PropTypes.object,
    }),
    posts: PropTypes.object,
  }).isRequired,
};

export const pageQuery = graphql`
  {
    posts: allMarkdownRemark(
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

    image: imageSharp(fluid: { src: { regex: "/astronaut/" } }) {
      fluid(maxWidth: 400, maxHeight: 400) {
        src
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default NotFoundPage;
