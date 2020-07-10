import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import GlobalStyles from '~/styles/global';
import light from '~/styles/themes/default';
import dark from '~/styles/themes/dark';

import * as S from './styles';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storageValue = localStorage.getItem('theme');

    if (storageValue) {
      setTheme(JSON.parse(storageValue));
      setMounted(true);
      return;
    }

    setMounted(true);
    setTheme(light);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  return mounted ? (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Content>{children}</S.Content>
      <Header toggleTheme={handleToggleTheme} />
      <Footer />
    </ThemeProvider>
  ) : (
    <S.LoadingContainer>
      <S.Spinner />
    </S.LoadingContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
