import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Pagination,
} from 'react-instantsearch-dom';

import Hits from './postHits';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const Search = () => {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <Configure hitsPerPage={100} />
      <SearchBox />
      <Hits />
      <Pagination />
    </InstantSearch>
  );
};

export default Search;
