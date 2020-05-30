import React, { useRef, useState, useCallback } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { MdSearch } from 'react-icons/md';

import * as S from './styles';

const Input = connectSearchBox(
  ({
    refine,
    currentRefinement,
    isSearchStalled,
    indexContextValue,
    createURL,
    ...rest
  }) => {
    const [isFocused, setIsfocused] = useState(false);

    const inputRef = useRef(null);

    const handleInputBlur = useCallback(() => {
      setIsfocused(false);
    }, []);

    const handleInputFocus = useCallback(() => {
      setIsfocused(true);
    }, []);

    return (
      <S.Container focused={isFocused}>
        <input
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          aria-label="Search"
          onChange={(e) => refine(e.target.value)}
          {...rest}
        />
        <MdSearch size={24} focused={isFocused} />
      </S.Container>
    );
  },
);

export default Input;
