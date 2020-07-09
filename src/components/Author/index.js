/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

const Author = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const {
    site: { siteMetadata },
  } = data;

  return (
    <S.Container>
      <h1>{siteMetadata.title}</h1>
      <p>{siteMetadata.description}</p>
    </S.Container>
  );
};

export default Author;
