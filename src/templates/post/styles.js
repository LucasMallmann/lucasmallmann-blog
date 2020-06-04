import styled from 'styled-components';
import Img from 'gatsby-image';

import { lighten, darken } from 'polished';

export const Container = styled.div`
  margin-top: 36px;
  padding-bottom: 30px;

  time {
    display: block;
    font-weight: 300;
    font-size: 14px;
  }

  .gatsby-code-button {
    svg {
      fill: ${lighten(0.07, '#272822')};
    }

    &-container {
      top: 48px;
      right: 16px;
    }
  }

  .gatsby-highlight {
    background-color: #272822;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight-code-line {
    background-color: ${lighten(0.07, '#272822')};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${(props) => props.theme.colors.primary};
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
`;

export const PostHeader = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.postHeaderTitleOrSubTitle};
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.postDescription};
  }
`;

export const CoverImage = styled(Img).attrs({
  alt: 'Imagem de introdução',
  'aria-hidden': true,
})`
  display: block;
  height: 25vh;
  width: 100vw;
  position: relative;
  margin-top: 48px;
  left: calc(-50vw + 50%);
  object-fit: cover;

  &:after {
    background-color: rgba(0, 0, 0, 0.45);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
`;

export const Content = styled.div`
  margin-top: 24px;

  p {
    margin: 8px 0 24px;
    font-size: 16.5px;
    line-height: 26px;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.postHeaderTitleOrSubTitle};
  }
`;

export const GoBackLink = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 18px;

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

  span {
    margin-left: 8px;
  }

  svg {
    vertical-align: middle;
  }
`;

export const Tags = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin: 24px 0 0;

  svg {
    margin-right: 12px;
  }

  li {
    padding: 4px 10px;
    background-color: #eee;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 14px;
    color: #333;
    transition: 0.5s background;
    margin-left: 6px;

    &:hover {
      background-color: ${darken(0.05, '#eee')};
    }
  }
`;

export const Comments = styled.div`
  margin-top: 32px;
`;
