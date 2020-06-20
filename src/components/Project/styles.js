import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-top: 18px;
  }

  p {
    margin: 8px 0;
    line-height: 24px;
    min-height: 120px;
    max-height: 180px;
  }
`;

export const Thumbnail = styled.div`
  img {
    max-width: 100%;
  }
  border-bottom: 1px solid #bbb;
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
