const { darken } = require('polished');

module.exports = {
  title: 'dark',

  colors: {
    primary: '#EF476F',
    secondary: '#414361',
    text: '#D0D0D1',
    background: '#1D1D1D',
    postHeaderTitleOrSubTitle: '#D0D0D1',
    postDescription: '#727273',

    footer: {
      background: darken(0.03, '#1D1D1D'),
      text: '#ddd',
    },

    input: {
      placeholder: '#424242',
      color: '#333',
      border: '#ddd',
      background: '#f8f8f8',
    },
  },
};
