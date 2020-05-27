import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaTag } from 'react-icons/fa';

import { Container, Content, ImageContainer } from './styles';

const PostCard = ({ data }) => {
  const featuredImgFluid = data.frontmatter.image.childImageSharp.fluid;

  return (
    <Container>
      <Content>
        <h2>{data.frontmatter.title}</h2>
        <p>{data.excerpt}</p>

        <div>
          <FaTag color="#424242" size={14} />
          <span>lifestyle, reactjs, frontend</span>
        </div>

        <small>27 Mar, 2020 - 5 min de leitura</small>
      </Content>

      <ImageContainer>
        <img src={featuredImgFluid.src} alt="Post cover" />
      </ImageContainer>
    </Container>
  );
};

PostCard.propTypes = {
  data: PropTypes.shape({
    excerpt: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  }).isRequired,
};

export default PostCard;
