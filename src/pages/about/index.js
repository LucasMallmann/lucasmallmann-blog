import React from 'react';
import { Link } from 'gatsby';

import { Container } from './styles';

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <span>
        See the first post here{' '}
        <Link to="/blog/first-post">/my-first-post</Link>
      </span>
    </Container>
  );
};

export default About;
