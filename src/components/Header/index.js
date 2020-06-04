import React from 'react';
import { Link } from 'gatsby';
import { BrowserView, MobileView } from 'react-device-detect';

import avatarPic from '~/assets/me.jpeg';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.Avatar to="/">
          <img src={avatarPic} alt="Lucas Mallmann" />
          <BrowserView>
            <span>Lucas Mallmann</span>
          </BrowserView>
          <MobileView>
            <span>mallmann</span>
          </MobileView>
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
