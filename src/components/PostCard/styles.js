import styled from 'styled-components';
import { Link } from 'gatsby';

import media from 'styled-media-query';

export const Container = styled(Link)`
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: all 0.3s ease-in-out;
  }

  color: inherit;
  padding: 16px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 12px auto;
  background-color: #fafafa;
  display: flex;

  &:hover {
    border-color: transparent;
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }

  &:before,
  &:after {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 4px;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:before {
    border-width: 1px 0 1px 0;
    transform: scaleX(0);
  }
  &:after {
    border-width: 0 1px 0 1px;
    transform: scaleY(0);
  }

  &:hover:before,
  &:hover:after {
    transform: scale(1, 1);
  }

  ${media.lessThan('small')`
    padding: 12px;
  `}
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    margin: 0;

    ${media.lessThan('small')`
      font-size: 16px;
    `}
  }

  p {
    padding-right: 16px;
    min-height: 60px;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    flex: 1;
    margin-bottom: 24px;

    ${media.lessThan('small')`
      font-size: 13px;
      min-height: auto;
      line-height: 20px;
      margin-bottom: 16px;
    `}
  }

  div {
    display: flex;
    align-items: center;
    padding: 0;
  }

  small {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    color: #333;
    margin-top: 4px;
  }
`;

export const ImageContainer = styled.div`
  width: 180px;
  display: flex;
  place-content: center;

  ${media.lessThan('small')`
    display: none;
  `}

  > img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  li {
    padding: 2px 5px;
    background-color: #eee;
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 6px;

    span {
      font-weight: 300;
      font-size: 12px;
    }
  }
`;
