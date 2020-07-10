/* eslint-disable import/no-dynamic-require */
const path = require('path');
require('dotenv').config();

const siteMetadata = require('./config/metadata');
const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata,
  plugins: [
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'thumbnails',
        path: path.join(__dirname, 'src', 'assets', 'thumbnails'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    'gatsby-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          'gatsby-remark-images-zoom',
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                include: ['Youtube', 'Twitter', 'Codepen'],
                exclude: ['Reddit', 'Flickr', 'Instagram'],
              },
              settings: {
                Twitter: { theme: 'dark' },
              },
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 700,
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          {
            resolve: 'gatsby-remark-code-buttons',
            options: {
              buttonText: 'copy',
              toasterClass: `toaster`,
              toasterTextClass: `toaster-text`,
              toasterText: 'Copied to clipboard',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          'gatsby-remark-responsive-iframe',
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
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/styles/themes/default.js`),
        dark: require(`${__dirname}/src/styles/themes/dark.js`),
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
        name: 'Lucas Mallmann Blog',
        short_name: 'Lucas Mallmann Blog',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#414361',
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
        siteUrl: 'https://lucasmallmann.netlify.app',
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
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `lucasmallmann`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-layout',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline',
  ],
};
