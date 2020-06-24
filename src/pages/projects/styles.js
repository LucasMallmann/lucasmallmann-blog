import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding-top: 24px;
  ${media.lessThan('small')`
    padding: 16px;
  `}
`;

export const ProjectsGrid = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px 12px;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;
