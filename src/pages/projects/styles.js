import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding-top: 24px;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    padding: 16px;
  `}
`;

export const ProjectsGrid = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px 12px;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`;
