const path = require('path');
require('dotenv').config();

const siteMetadata = require('./config/metadata');
const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-image',
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          'gatsby-remark-code-buttons',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-offline',
  ],
};
