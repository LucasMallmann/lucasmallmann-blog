import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

import { lighten, darken } from 'polished';

export const Container = styled.div`
  margin-top: 36px;
  padding-bottom: 30px;

  ${media.lessThan('small')`
    margin-top: 24px;
    padding: 0 16px 30px;
  `}

  blockquote {
    font-size: 1.4em;
    width: 100%;
    margin: 50px auto;
    font-style: italic;
    color: #555555;
    padding: 1.2em 30px 1.2em 75px;
    border-left: 8px solid ${(props) => props.theme.colors.primary};
    line-height: 1.6;
    position: relative;
    background: #ededed;

    &::after {
      content: '';
    }

    &::before {
      font-family: Arial;
      color: ${(props) => props.theme.colors.primary};
      font-size: 4em;
      content: '\\201C';
      position: absolute;
      left: 10px;
      top: -10px;
    }

    span {
      display: block;
      color: #333333;
      font-style: normal;
      font-weight: bold;
      margin-top: 1em;
    }
  }

  time {
    display: block;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 1px;

    ${media.lessThan('small')`
      font-size: 13px;
    `}
  }

  .gatsby-code-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 600;
    color: #f8f8f8;
    transition: 0.2s opacity;

    &[data-tooltip]:hover:after {
      visibility: hidden;
    }

    &::after {
      display: none;
    }

    svg {
      display: none;
    }

    &:hover {
      opacity: 0.8;
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

    code {
      font-size: 14px;
    }
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

    ${media.lessThan('small')`
      font-size: 28px;
      margin-top: 16px;
    `}
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

  ${media.lessThan('small')`
    font-size: 16px;
  `}

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
    font-size: 20px;
    ${media.lessThan('small')`
      font-size: 16px;
    `}
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
    margin-right: 8px;

    &:hover {
      background-color: ${darken(0.05, '#eee')};
    }
  }
`;

export const Comments = styled.div`
  margin-top: 32px;

  ${media.lessThan('small')`
    padding: 0 16px;
  `}
`;

export const RelatedPosts = styled.div`
  margin-top: 24px;

  > h2 {
    color: #333;
    font-size: 28px;
    font-weight: 600;
  }
`;
