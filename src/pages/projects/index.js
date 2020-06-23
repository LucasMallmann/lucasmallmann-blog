import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from '~/components/Project';

import * as S from './styles';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      site: site {
        siteMetadata {
          projects {
            name
            description
            techs
            thumbnail
            github
          }
        }
      }

      images: allImageSharp(
        filter: { fluid: { src: { regex: "/(medium|api|gobarber|blog)/" } } }
      ) {
        nodes {
          fluid(maxWidth: 360, maxHeight: 240) {
            src
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const { projects } = data.site.siteMetadata;
  const { images } = data;

  const transformedProjects = useMemo(() => {
    const newProjects = images.nodes.map(({ fluid }) => {
      const splitArray = fluid.src.split('/');
      const key = splitArray[splitArray.length - 1];

      const projectWithKey = projects.find(
        (project) => project.thumbnail === key,
      );

      return { ...projectWithKey, fluid };
    });

    return newProjects;
  }, []);

  return (
    <S.Container>
      <h1>Meus projetos</h1>
      <p>
        Aqui você pode explorar os projetos que venho desenvolvendo ultimamente!
      </p>

      <S.ProjectsGrid>
        {transformedProjects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </S.ProjectsGrid>
    </S.Container>
  );
};

export default Projects;
