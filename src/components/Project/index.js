/* eslint-disable import/no-dynamic-require */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import * as S from './styles';

const Project = ({ project }) => {
  const techs = useMemo(() => project.techs.join(', '), [project.techs]);

  return (
    <S.Container>
      <section>
        <S.Thumbnail>
          <Img fluid={project.fluid} alt="Project" />
        </S.Thumbnail>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </section>

      <S.Footer>
        <div>
          <strong>Techs: </strong>
          {techs}
        </div>

        <a href={project.github}>Github</a>
      </S.Footer>
    </S.Container>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
    thumbnail: PropTypes.string,
    github: PropTypes.string,
    fluid: PropTypes.object,
  }).isRequired,
};

export default Project;
