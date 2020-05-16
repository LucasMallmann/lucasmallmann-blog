const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#7159c1',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['300', '400', '600', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Lucas Mallmann',
        short_name: 'lucas_mallmann',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#EF476F',
        display: 'standalone',
        icon: path.resolve('src', 'assets', 'icon.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.js'],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.example.com',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-offline',
  ],
};
