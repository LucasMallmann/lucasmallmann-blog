import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import GlobalStyles from '~/styles/global';
import light from '~/styles/themes/default';
import dark from '~/styles/themes/dark';

import { Content } from './styles';
import usePersistedState from '~/hooks/usePersistedState';

const Layout = ({ children }) => {
  const [theme, setTheme] = usePersistedState({
    key: 'theme',
    initialState: light,
  });

  const handleToggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>{children}</Content>
      <Header toggleTheme={handleToggleTheme} />
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
