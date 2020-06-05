import React from 'react';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

const PreviewBlog = ({ posts }) => {
  return (
    <Container>
      <h1>Posts recentes</h1>
      {posts.map(({ node }) => {
        const { timeToRead, frontmatter, fields, id, excerpt } = node;
        const { title, tags, image, date } = frontmatter;
        const featuredImgFluid = image.childImageSharp.fluid;

        return (
          <PostCard
            key={id}
            date={date}
            timeToRead={timeToRead}
            slug={fields.slug}
            title={title}
            tags={tags}
            excerpt={excerpt}
            featuredImgFluid={featuredImgFluid}
          />
        );
      })}
    </Container>
  );
};

PreviewBlog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default PreviewBlog;
