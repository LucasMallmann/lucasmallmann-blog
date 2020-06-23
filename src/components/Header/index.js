import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { BrowserView, MobileView } from 'react-device-detect';
import { ThemeContext } from 'styled-components';

import avatarPic from '~/assets/me.jpeg';

import * as S from './styles';

const Header = ({ toggleTheme }) => {
  const value = useContext(ThemeContext);

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
          <Link to="/blog">blog</Link>
          <Link to="/projects">projects</Link>
          <S.ToggleThemeButton
            onClick={toggleTheme}
            aria-label="Ativate light mode"
            title="Activate light mode"
          >
            <div className="first" />
            <div className="moon" />
          </S.ToggleThemeButton>
        </nav>
      </S.Inner>
    </S.Container>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
