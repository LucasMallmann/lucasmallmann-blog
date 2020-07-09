import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 500;
    text-align: center;

    ${media.lessThan('small')`
      font-size: 28px;
    `}
  }

  > p {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;

    ${media.lessThan('small')`
      font-size: 16px;
    `}
  }
`;
