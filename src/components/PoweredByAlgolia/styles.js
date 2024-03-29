import styled from 'styled-components';

export const Container = styled.a`
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: end;
  padding: 0;

  color: ${(props) => props.theme.colors.primary};

  svg {
    margin-left: 4px;
  }
`;
