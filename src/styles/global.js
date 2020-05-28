import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f8f8f8 ;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font: 16px "Open Sans", sans-serif;
  }
  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
