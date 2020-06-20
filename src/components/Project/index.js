import React from 'react';

import * as S from './styles';

const Project = () => {
  return (
    <S.Container>
      <section>
        <S.Thumbnail>
          <img
            src="https://www.aboutmonica.com/static/instant-reservations-e5570514b233b109222a5dadb0baf432.png"
            alt="Project"
          />
        </S.Thumbnail>
        <h3>Gobarber App</h3>
        <p>
          Um pequeno clone do Medium realizado para um processo seletivo. Você
          pode realizar novas postagens, ler o blog das pessoas, e adicionar sua
          reação com o famoso clap!
        </p>
      </section>

      <S.Footer>
        <div>
          <strong>Techs: </strong>
          React, CSS, Redux, NodeJS, AWS Lambdas and other Serverless
          technologies.
        </div>

        <a href="http://github.com">Github</a>
      </S.Footer>
    </S.Container>
  );
};

export default Project;
