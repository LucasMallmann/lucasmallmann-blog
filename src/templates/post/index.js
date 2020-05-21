import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const { image, title, date } = frontmatter;

  const featuredImgFluid = image.childImageSharp.fluid;

  return (
    <div className="blog-post-container">
      <h1>blog</h1>
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <Img fluid={featuredImgFluid} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
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
            fluid(maxWidth: 800) {
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
