import styled from 'styled-components';
import Img from 'gatsby-image';

export const Container = styled.div``;

export const CoverImage = styled(Img).attrs({
  alt: 'Imagem de introdução',
  'aria-hidden': true,
})`
  display: block;
  height: 25vh;
  width: 100vw;
  position: relative;
  margin-top: 48px;
  left: calc(-50vw + 50%);
  object-fit: cover;

  &:after {
    background-color: rgba(0, 0, 0, 0.45);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
`;
