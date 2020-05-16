import React from 'react';
import { Link } from 'gatsby';

import avatarPic from '~/assets/me.jpeg';

import { Container, Avatar, Inner } from './styles';

const Header = () => {
  return (
    <Container>
      <Inner>
        <Avatar>
          <img src={avatarPic} alt="Lucas Mallmann" />
          <span>Lucas Mallmann</span>
        </Avatar>

        <nav>
          <Link to="/about">sobre</Link>
          <Link to="/about">blog</Link>
          <Link to="/about">projects</Link>
        </nav>
      </Inner>
    </Container>
  );
};

export default Header;
