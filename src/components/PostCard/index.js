import React from 'react';
import PropTypes from 'prop-types';
import { FaTag } from 'react-icons/fa';

import { Container, Content, ImageContainer, Tags } from './styles';

const PostCard = ({ data }) => {
  const featuredImgFluid = data.frontmatter.image.childImageSharp.fluid;
  const { fields } = data;

  return (
    <Container to={`blog/${fields.slug}`}>
      <Content>
        <h2>{data.frontmatter.title}</h2>
        <p>{data.excerpt}</p>

        <div>
          <FaTag color="#424242" size={14} />
          <Tags>
            <li>
              <span>lifestyle</span>
            </li>
            <li>
              <span>reactjs</span>
            </li>
            <li>
              <span>nextjs</span>
            </li>
          </Tags>
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
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string,
          }),
        }),
      }),
    }),
  }).isRequired,
};

export default PostCard;
