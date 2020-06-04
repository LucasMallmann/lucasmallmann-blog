import React from 'react';
import { FaAlgolia } from 'react-icons/fa';

import * as S from './styles';

export const PoweredBy = () => (
  <S.Container href="https://algolia.com" target="_blank">
    Powered by Algolia <FaAlgolia />
  </S.Container>
);

export default PoweredBy;
