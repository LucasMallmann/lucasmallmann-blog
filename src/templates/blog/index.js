import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import qs from 'qs';

import PostCard from '~/components/PostCard';
import Search from '~/components/Search';

import * as S from './styles';

const BlogList = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

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
