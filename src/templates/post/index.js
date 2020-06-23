import React, { useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MdKeyboardBackspace } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useNavigate } from '@reach/router';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

import * as S from './styles';
import Description from '~/components/Description';
import PostCard from '~/components/PostCard';

const BlogTemplate = ({ data }) => {
  const { post, relatedPosts } = data;

  const { frontmatter, html, timeToRead, id } = post;
  const { image, title, date, description, tags } = frontmatter;
  const featuredImgFluid = image.childImageSharp.fluid;

  console.log(featuredImgFluid);

  const navigate = useNavigate();

  const formattedDate = useMemo(() => {
    return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  const timeToReadLabel = useMemo(() => {
    return `Leitura de ${timeToRead} minuto${timeToRead > 1 ? 's' : ''}`;
  }, [timeToRead]);

  const disqusConfig = {
    identifier: id,
    title,
  };

  return (
    <>
      <S.CoverImage fluid={featuredImgFluid} />
      <S.Container>
        <S.GoBackLink onClick={() => navigate(-1)}>
          <MdKeyboardBackspace />
          <span>Voltar</span>
        </S.GoBackLink>

        <time>
          {formattedDate} - {timeToReadLabel}
        </time>

        <S.PostHeader>
          <h1>{title}</h1>
          <p>{description}</p>
        </S.PostHeader>

        <S.Tags>
          {tags.map((tag) => (
            <Link key={tag} to={`/blog?query=${tag}`}>
              <li>{tag}</li>
            </Link>
          ))}
        </S.Tags>

        <S.Content
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </S.Container>

      <Description />

      <S.RelatedPosts>
        <h2>Posts que podem ser do seu interesse 😁</h2>
        {relatedPosts.nodes.map((nextToRead) => (
          <PostCard
            key={nextToRead.id}
            title={nextToRead.frontmatter.title}
            excerpt={nextToRead.excerpt}
            tags={nextToRead.frontmatter.tags}
            date={nextToRead.frontmatter.date}
            slug={nextToRead.fields.slug}
            featuredImgFluid={
              nextToRead.frontmatter.image.childImageSharp.fluid
            }
            timeToRead={nextToRead.timeToRead}
          />
        ))}
      </S.RelatedPosts>

      <S.Comments>
        <CommentCount config={disqusConfig} placeholder="..." />
        <Disqus config={disqusConfig} />
      </S.Comments>
    </>
  );
};

const postShape = PropTypes.shape({
  id: PropTypes.string,
  html: PropTypes.string,
  timeToRead: PropTypes.number,
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
});

const relatedPostsShape = PropTypes.shape({
  id: PropTypes.string,
  html: PropTypes.string,
  timeToRead: PropTypes.number,
  excerpt: PropTypes.string,
  fields: PropTypes.shape({
    slug: PropTypes.string,
  }),
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
});

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    post: postShape,
    relatedPosts: PropTypes.shape({
      nodes: PropTypes.arrayOf(relatedPostsShape),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
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

    relatedPosts: allMarkdownRemark(
      filter: { fields: { slug: { ne: $slug } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      nodes {
        id
        timeToRead
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date
          tags
          description
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogTemplate;
