import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MdKeyboardBackspace } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import * as S from './styles';
import Description from '~/components/Description';

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  const { image, title, date, description } = frontmatter;
  const featuredImgFluid = image.childImageSharp.fluid;

  const formattedDate = useMemo(() => {
    return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  const timeToReadLabel = useMemo(() => {
    return `Leitura de ${timeToRead} minuto${timeToRead > 1 ? 's' : ''}`;
  }, [timeToRead]);

  return (
    <>
      <S.CoverImage fluid={featuredImgFluid} />
      <S.Container>
        <S.GoBackLink to="/">
          <MdKeyboardBackspace size={20} />
          <span>Voltar</span>
        </S.GoBackLink>

        <time>
          {formattedDate} - {timeToReadLabel}
        </time>

        <S.PostHeader>
          <h1>{title}</h1>
          <p>{description}</p>
        </S.PostHeader>

        <S.Content
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </S.Container>
      <Description />
    </>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      timeToRead: PropTypes.number,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        image: PropTypes.object,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
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
