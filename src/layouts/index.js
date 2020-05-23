import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import GlobalStyles from '~/styles/global';
import theme from '~/styles/themes/default';

import { Content } from './styles';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>{children}</Content>
      <Header />
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
