import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from '~/components/Project';

import * as S from './styles';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      site {
        siteMetadata {
          projects {
            name
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <S.Container>
      <h1>Meus projetos</h1>
      <p>
        Aqui você pode explorar os projetos que venho desenvolvendo ultimamente!
      </p>

      <S.ProjectsGrid>
        <Project />
        <Project />
        <Project />
        <Project />
      </S.ProjectsGrid>
    </S.Container>
  );
};

export default Projects;
