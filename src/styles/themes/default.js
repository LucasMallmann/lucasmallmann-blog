const { lighten } = require('polished');

module.exports = {
  title: 'light',

  colors: {
    primary: '#EF476F',
    secondary: '#414361',
    text: '#000',
    background: '#f8f8f8',
    postHeaderTitleOrSubTitle: '#000',
    postDescription: '#727273',

    footer: {
      background: lighten(0.02, '#eee'),
      text: '#000',
    },

    input: {
      placeholder: '#424242',
      color: '#333',
      border: '#ddd',
      background: '#f8f8f8',
    },
  },
};
