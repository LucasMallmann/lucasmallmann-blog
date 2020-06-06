import React, { useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import qs from 'qs';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import PostCard from '~/components/PostCard';
import Search from '~/components/Search';
// import PoweredByAlgolia from '~/components/PoweredByAlgolia';

import * as S from './styles';

const BlogList = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numberOfPages } = pageContext;

  const isFirst = useMemo(() => currentPage === 1, [currentPage]);

  const isLast = useMemo(() => currentPage === numberOfPages, [
    currentPage,
    numberOfPages,
  ]);

  const prevPage = useMemo(
    () => (currentPage - 1 === 1 ? 'blog/' : `/blog/${currentPage - 1}`),
    [currentPage],
  );

  const nextPage = useMemo(() => `/blog/${currentPage + 1}`, [currentPage]);

  const parsedSearch = useMemo(() => qs.parse(location?.search?.slice(1)), [
    location.search,
  ]);

  return (
    <S.Container>
      <Search search={parsedSearch}>
        {posts.map(({ node }) => {
          const { title, tags, image, date } = node.frontmatter;
          const featuredImgFluid = image.childImageSharp.fluid;

          return (
            <PostCard
              date={date}
              timeToRead={node.timeToRead}
              key={node.id}
              slug={node.fields.slug}
              title={title}
              tags={tags}
              excerpt={node.excerpt}
              featuredImgFluid={featuredImgFluid}
            />
          );
        })}
      </Search>

      <S.Pagination>
        {!isFirst && (
          <Link to={prevPage} rel="prev" className="left">
            <MdArrowBack /> Página Anterior
          </Link>
        )}
        <span>
          {currentPage} de {numberOfPages}
        </span>
        {!isLast && (
          <Link to={nextPage} rel="next" className="right">
            Próxima Página <MdArrowForward />
          </Link>
        )}
      </S.Pagination>

      {/* <footer>
        <PoweredByAlgolia />
      </footer> */}
    </S.Container>
  );
};

BlogList.defaultProps = {
  location: {},
};

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            timeToRead: PropTypes.number.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              date: PropTypes.string,
              image: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string,
                  }),
                }),
              }),
              description: PropTypes.string,
              fields: PropTypes.shape({
                slug: PropTypes.string,
              }),
            }),
          }),
        }),
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    limit: PropTypes.number,
    numberOfPages: PropTypes.number,
    skip: PropTypes.number,
  }).isRequired,
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogList;
