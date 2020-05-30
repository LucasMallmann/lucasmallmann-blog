import React from 'react';
import PropTypes from 'prop-types';
import { FaTag } from 'react-icons/fa';

import { Container, Content, ImageContainer, Tags } from './styles';

const PostCard = ({ title, excerpt, tags, featuredImgFluid, slug }) => {
  return (
    <Container to={`/blog${slug}`}>
      <Content>
        <h2>{title}</h2>
        <p>{excerpt}</p>

        <div>
          <FaTag color="#424242" size={14} />
          <Tags>
            {tags.map((tag) => (
              <li key={tag}>
                <span>{tag}</span>
              </li>
            ))}
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
  excerpt: PropTypes.string.isRequired,

  slug: PropTypes.string.isRequired,

  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featuredImgFluid: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
};

export default PostCard;
