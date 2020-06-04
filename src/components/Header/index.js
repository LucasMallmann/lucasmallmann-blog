import React from 'react';
import { Link } from 'gatsby';

import avatarPic from '~/assets/me.jpeg';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.Avatar to="/">
          <img src={avatarPic} alt="Lucas Mallmann" />
          <span>Lucas Mallmann</span>
        </S.Avatar>

        <nav>
          <Link to="/about">sobre</Link>
          <Link to="/blog">blog</Link>
          <Link to="/about">projects</Link>
        </nav>
      </S.Inner>
    </S.Container>
  );
};

export default Header;
