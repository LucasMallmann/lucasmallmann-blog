import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage
      }
    }
  }
`;

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || defaultImage}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta httpEquiv="Content-Language" content="pt-br" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:locale" content="pt_BR" />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "url": "${seo.url}",
          "name": "Lucas Mallmann",
          "jobTitle": "Desenvolvedor de Software",
          "affiliation": {
            "@type": "Organization",
            "telephone": "0800 887 1680",
            "contactType": "Customer Support",
            "name": "Pling"
          }
        }
      `}
      </script>

      <meta property="og:site_name" content="Lucas Mallmann Blog" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default SEO;
