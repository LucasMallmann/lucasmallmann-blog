import React from 'react';
import { ThemeProvider } from 'styled-components';

// import GlobalStyles from '@/styles/global';

import { Content } from './styles';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <Content>{children}</Content>
    </ThemeProvider>
  );
};

export default Layout;
