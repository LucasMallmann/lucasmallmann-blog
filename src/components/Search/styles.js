import React from 'react';
import { FaAlgolia } from 'react-icons/fa';

import styled from 'styled-components';
import { Stats } from 'react-instantsearch-dom';

export const StatusContainer = styled(Stats)`
  margin: 16px auto;
`;

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <FaAlgolia size="1em" /> Algolia
    </a>
  </span>
);
