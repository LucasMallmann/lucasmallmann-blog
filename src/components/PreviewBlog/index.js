import React from 'react';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

const PreviewBlog = ({ posts }) => {
  return (
    <Container>
      <h1>Blogs recentes</h1>
      {posts.map(({ node }) => {
        const { title, tags, image } = node.frontmatter;
        const featuredImgFluid = image.childImageSharp.fluid;

        return (
          <PostCard
            key={node.id}
            slug={node.fields.slug}
            title={title}
            tags={tags}
            excerpt={node.excerpt}
            featuredImgFluid={featuredImgFluid}
          />
        );
      })}
    </Container>
  );
};

PreviewBlog.propTypes = {
  posts: PropTypes.arrayOf({
    node: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PreviewBlog;
