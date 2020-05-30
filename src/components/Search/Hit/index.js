import React from 'react';
import { Link } from 'gatsby';
import { connectHits } from 'react-instantsearch-dom';

import * as S from './styles';
import PostCard from '~/components/PostCard';

const Hits = connectHits(({ hits }) => {
  return (
    <S.Container>
      {hits.length ? (
        <>
          {hits.map((hit) => {
            const featuredImgFluid = hit.image.childImageSharp.fluid;

            return (
              <PostCard
                title={hit.title}
                tags={hit.tags}
                key={hit.id}
                excerpt={hit.excerpt}
                slug={hit.fields.slug}
                featuredImgFluid={featuredImgFluid}
              />
            );
          })}
        </>
      ) : (
        <p>There were no results for your query. Please try again.</p>
      )}
    </S.Container>
  );
});

export default Hits;
