import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin: 36px 4px 0;
  display: flex;
  flex-direction: column;

  p {
    a {
      font-weight: 700;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ${media.lessThan('small')`
    margin-top: 32px;
  `}

  p {
    margin-top: 14px;
    line-height: 26px;

    a {
      font-weight: 500;
    }

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
