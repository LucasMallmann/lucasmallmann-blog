import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled(Link)`
  color: inherit;
  padding: 16px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 12px auto;
  background-color: #fafafa;
  display: flex;
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
  }

  p {
    padding-right: 16px;
    min-height: 60px;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    flex: 1;
    margin-bottom: 24px;
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

  > img {
    width: 100%;
    height: auto;
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
