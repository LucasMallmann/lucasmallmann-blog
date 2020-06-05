import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin: 48px 4px 0;
  display: flex;
  flex-direction: column;

  ${media.lessThan('small')`
    margin-top: 32px;
  `}

  p {
    margin-top: 16px;
    line-height: 26px;

    ${media.lessThan('small')`
      margin-top: 8px;
      font-size: 15px;
    `}
  }

  > h1 {
    font-weight: 500;
    font-size: 32px;

    ${media.lessThan('small')`
      font-size: 26px;
    `}
  }
`;
