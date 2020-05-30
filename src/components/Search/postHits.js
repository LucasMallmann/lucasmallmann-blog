import React from 'react';
import { Link } from 'gatsby';
import { connectHits } from 'react-instantsearch-dom';

const Hits = connectHits(({ hits }) => (
  <div css={{ display: 'flex', flexWrap: 'wrap' }}>
    {hits.length ? (
      <>
        <div
          css={{
            fontStyle: 'italic',
            marginBottom: 10,
            maxWidth: '30rem',
          }}
        >
          These are the results of your search. The title and excerpt are
          displayed, though your search may have been found in the content of
          the post as well.
        </div>

        {/* Here is the crux of the component */}
        {hits.map((hit) => {
          return (
            <div css={{ marginBottom: 10 }} key={hit.id}>
              <Link css={{ display: 'block', marginBottom: 8 }} to="/">
                <h4 css={{ marginBottom: 0 }}>Hello title</h4>
                {hit.subtitle ? <h5 css={{ marginBottom: 0 }}>ola </h5> : null}
              </Link>
              <div>Exceprt</div>
            </div>
          );
        })}
      </>
    ) : (
      <p>There were no results for your query. Please try again.</p>
    )}
  </div>
));

export default Hits;
