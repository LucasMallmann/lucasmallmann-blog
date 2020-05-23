import styled from 'styled-components';

export const Container = styled.div`
  padding: 36px 0;
  border-top: 1px solid #424242;
  border-bottom: 1px solid #424242;

  p {
    font-size: 16px;
    margin-top: 16px;
    line-height: 26px;
  }
`;

export const Avatar = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.colors.primary};
  }
`;
