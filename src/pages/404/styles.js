import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Container = styled.div`
  padding: 48px 0;

  ${media.lessThan('small')`
    padding: 48px 16px;
  `}

  > h1 {
    text-align: center;
    ${media.lessThan('small')`
      font-size: 28px;
    `}
  }

  > p {
    text-align: center;
    font-size: 18px;
  }
`;

export const AstronautContainer = styled.div`
  max-width: 250px;
  margin: 24px auto;
`;

export const AnimatedLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  margin-top: 16px;
  cursor: pointer;
  font-size: 16px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    margin-top: 10px;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;
