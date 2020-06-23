import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  ${(props) => props.theme.title === 'light' && `border-top: 1px solid #ddd;`}
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  background-color: ${(props) => props.theme.colors.footer.background};

  a {
    color: ${(props) => props.theme.colors.footer.text};
    margin: 0 8px;
    display: flex;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
