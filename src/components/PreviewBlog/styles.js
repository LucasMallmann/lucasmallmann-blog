import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin-top: 32px;

  > h1 {
    font-weight: 500;
    font-size: 32px;

    ${media.lessThan('small')`
      font-size: 26px;
    `}
  }
`;
