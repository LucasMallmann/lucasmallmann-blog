import React from 'react';
import { graphql } from 'gatsby';

import * as S from './styles';

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { image, title, date } = frontmatter;

  const featuredImgFluid = image.childImageSharp.fluid;

  return (
    <S.Container>
      <S.CoverImage fluid={featuredImgFluid} />
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </S.Container>
  );
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default BlogTemplate;
