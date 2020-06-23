import styled from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

export const Container = styled.form`
  background: ${(props) => darken(0.03, props.theme.colors.input.background)};
  color: ${(props) => props.theme.colors.input.color};
  border-radius: 6px;

  border: 1.3px solid
    ${(props) =>
      props.focused
        ? props.theme.colors.primary
        : props.theme.colors.input.border};

  padding: 10px 16px;
  display: flex;
  align-items: center;

  ${media.lessThan('small')`
    padding: 8px 12px;
  `}

  svg {
    color: ${(props) =>
      props.focused
        ? props.theme.colors.primary
        : props.theme.colors.input.svg};
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${(props) => props.theme.colors.input.color};

    &::placeholder {
      color: ${(props) => props.theme.colors.input.placeholder};
    }

    ${media.lessThan('small')`
      font-size: 15px;
    `}
  }
`;
