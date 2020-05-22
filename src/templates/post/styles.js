import styled from 'styled-components';
import Img from 'gatsby-image';

export const Container = styled.div`
  margin-top: 36px;

  time {
    font-weight: 300;
    font-size: 14px;
  }
`;

export const PostHeader = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.postHeaderTitleOrSubTitle};
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.postDescription};
  }
`;

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

export const Content = styled.div`
  margin-top: 24px;

  p {
    margin: 8px 0 24px;
    font-size: 16.5px;
    line-height: 26px;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.postHeaderTitleOrSubTitle};
  }
`;
