import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'gatsby';
import media from 'styled-media-query';

const lightInnerCircleStyle = css`
  border: 2px solid #f8f8f8;
  background: #f8f8f8;

  border-radius: 50%;
  height: 24px;
  width: 24px;

  overflow: hidden;
  position: relative;

  transform: scale(1);
  transition: all 0.45s ease;

  &::before {
    border-radius: 50%;
    border: 2px solid #f8f8f8;
    content: '';
    height: 24px;
    opacity: 1;
    position: absolute;
    right: -9px;
    top: -9px;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform 0.45s ease;
    -webkit-transition: transform 0.45s ease;
    transition: transform 0.45s ease;
    width: 24px;
  }

  &::after {
    border-radius: 50%;
    box-shadow: 0 -23px 0 #f8f8f8, 0 23px 0 #f8f8f8, 23px 0 0 #f8f8f8,
      -23px 0 0 #f8f8f8, 15px 15px 0 #f8f8f8, -15px 15px 0 #f8f8f8,
      15px -15px 0 #f8f8f8, -15px -15px 0 #f8f8f8;

    content: '';
    height: 8px;
    left: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    width: 8px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;

const darkInnerCircleStyle = css`
  background-color: #f8f8f8;
  height: 24px;
  width: 24px;
  position: relative;
  transform: scale(0.55);
  border-radius: 50%;
  overflow: visible;
  transition: all 0.45s ease 0s;

  &::after {
    box-shadow: 0 -23px 0 #f8f8f8, 0 23px 0 #f8f8f8, 23px 0 0 #f8f8f8,
      -23px 0 0 #f8f8f8, 15px 15px 0 #f8f8f8, -15px 15px 0 #f8f8f8,
      15px -15px 0 #f8f8f8, -15px -15px 0 #f8f8f8;
    content: '';
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 8px;
    transform: scale(1);
    border-radius: 50%;
    margin: -4px 0px 0px -4px;
    transition: all 0.35s ease 0s;
  }

  &::before {
    content: '';
    height: 24px;
    opacity: 0;
    position: absolute;
    right: -9px;
    top: -9px;
    transform: translate(14px, -14px);
    width: 24px;
    border-radius: 50%;
    transition: transform 0.45s ease 0s;
  }
`;

export const Container = styled.header`
  height: 48px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  z-index: 50;
  background-color: ${(props) => props.theme.colors.secondary};

  ${media.lessThan('512px')`
    padding: 0 16px;
  `}
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  max-width: 950px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    a {
      color: #f8f8f8;
      font-size: 16px;
      transition: color 0.2s;
      position: relative;

      ${media.lessThan('small')`
        font-size: 14px;
      `}

      margin-right: 12px;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        margin-top: 10px;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: ${darken(0.06, '#f8f8f8')};
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
      }

      &:hover {
        color: ${darken(0.06, '#f8f8f8')};
        &::before {
          visibility: visible;
          transform: scaleX(1);
        }
      }
    }
  }
`;

export const Avatar = styled(Link)`
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;

    ${media.lessThan('small')`
      width: 30px;
      height: 30px;
    `}
  }

  span {
    color: #f8f8f8;
    font-weight: 600;
    margin-left: 16px;
    font-size: 18px;

    ${media.lessThan('small')`
      margin-left: 8px;
      font-size: 16px;
    `}
  }
`;

export const ToggleThemeButton = styled.button`
  padding: 0;
  appearance: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border-radius: 5px;
  border: 0;

  cursor: pointer;

  height: 36px;
  width: 36px;

  opacity: 0.75;
  overflow: hidden;
  position: relative;

  transform: scale(0.75);
  transition: opacity 0.3s ease;
  vertical-align: middle;

  > .inner-circle {
    ${(props) =>
      props.theme === 'light' ? lightInnerCircleStyle : darkInnerCircleStyle}
  }

  ${(props) =>
    props.theme === 'light' &&
    css`
      .moon {
        background: #414361;
        border-radius: 50%;
        border: 0;
        opacity: 1;

        height: 24px;
        width: 24px;

        position: absolute;
        right: 0;
        top: 0;

        transform: translate(0, 0);
        transition: background 0.25s ease, transform 0.45s ease;
      }
    `}
`;
