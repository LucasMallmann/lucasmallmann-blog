import styled, { keyframes } from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.background} !important;
  max-width: 700px;
  margin: 48px auto 100px;
`;

export const LoadingContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(FaCircleNotch)`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 24px;
  color: #EF476F;
  /* color: ${(props) => props.theme.colors.primary}; */
`;
