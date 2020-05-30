import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';
import { InstantSearch, Configure, Stats } from 'react-instantsearch-dom';

// import * as S from './styles';

import Input from './Input';
import Hits from './Hit';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const Search = ({ children, search }) => {
  const [searchState, setSearchState] = useState(search);

  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
      searchState={searchState}
      onSearchStateChange={setSearchState}
    >
      <Configure hitsPerPage={100} distinct />
      <Input placeholder="Pesquise algum post no blog" />
      {searchState?.query ? (
        <>
          <Stats
            translations={{
              stats(numberOfHits) {
                return `${numberOfHits} resultados encontrados`;
              },
            }}
          />
          <Hits />
        </>
      ) : (
        children
      )}
    </InstantSearch>
  );
};

Search.defaultProps = {
  search: null,
};

Search.propTypes = {
  children: PropTypes.node.isRequired,
  search: PropTypes.shape({
    query: PropTypes.string,
  }),
};

export default Search;
