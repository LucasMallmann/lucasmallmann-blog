import React from 'react';
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
                date={hit.date}
                timeToRead={hit.timeToRead}
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
        <S.NotFoundContainer>
          <p>Não foi encontrado nenhum post.</p>
        </S.NotFoundContainer>
      )}
    </S.Container>
  );
});

export default Hits;
