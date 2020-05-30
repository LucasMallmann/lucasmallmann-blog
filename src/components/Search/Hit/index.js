import React from 'react';
import { Link } from 'gatsby';
import { connectHits } from 'react-instantsearch-dom';

import * as S from './styles';

const Hits = connectHits(({ hits }) => {
  console.log(hits);

  return (
    <S.Container>
      {hits.length ? (
        <>
          {hits.map((hit) => {
            return (
              <div css={{ marginBottom: 10 }} key={hit.id}>
                <Link css={{ display: 'block', marginBottom: 8 }} to="/">
                  <h4 css={{ marginBottom: 0 }}>Hello title</h4>
                  {hit.subtitle ? (
                    <h5 css={{ marginBottom: 0 }}>ola </h5>
                  ) : null}
                </Link>
                <div>Exceprt</div>
              </div>
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
