import React from 'react';
import styled from 'styled-components';
import { FaAlgolia } from 'react-icons/fa';
import { darken } from 'polished';

export const Container = styled.form`
  background: ${(props) => darken(0.03, props.theme.colors.input.background)};

  color: #333;
  border-radius: 6px;

  border: 1.3px solid
    ${(props) =>
      props.focused
        ? props.theme.colors.primary
        : props.theme.colors.input.border};

  padding: 10px 16px;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) =>
      props.focused ? props.theme.colors.primary : '#424242'};
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${(props) => props.theme.colors.input.color};

    &::placeholder {
      color: ${(props) => props.theme.colors.input.placeholder};
    }
  }
`;

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <FaAlgolia size="1em" /> Algolia
    </a>
  </span>
);
