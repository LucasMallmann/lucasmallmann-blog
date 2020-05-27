import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

const PreviewBlog = ({ posts }) => {
  return (
    <Container>
      <h1>Blogs recentes</h1>
      {posts.map(({ node }) => (
        <PostCard key={node.id} data={node} />
      ))}
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
