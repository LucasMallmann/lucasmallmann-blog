import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s box-shadow;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.19), 0 2px 2px rgba(0, 0, 0, 0.23);
  }

  h3 {
    margin-top: 18px;
  }

  p {
    margin: 8px 0;
    line-height: 24px;
    min-height: 100px;
    max-height: 150px;
  }
`;

export const Thumbnail = styled.div`
  border-bottom: 1px solid #bbb;
  min-width: 360px;

  ${media.lessThan('small')`
    min-width: auto;
  `}

  img {
    width: 100%;
    max-height: 240px;
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
  font-size: 14px;

  a {
    display: inline-block;
    margin-top: 24px;
    color: #333;
    font-weight: bold;
    transition: 0.3s opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`;
