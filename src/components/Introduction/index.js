/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import * as S from './styles';

const Introduction = () => (
  <S.Container>
    <h1>Quem sou eu?</h1>
    <p>
      Olá, seja muito bem vindo(a) ao meu blog! Meu nome é Lucas Mallmann.
      Trabalho como engenheiro de software desde 2017. Acredito que a educação,
      a divulgação de conhecimento e de boas ideias é o caminho mais rápido e
      eficaz para melhorar o mundo!
    </p>
    <p>
      Atualmente trabalho como <i>Software Enginner</i> na{' '}
      <a href="https://pling.net.br" target="_blank" rel="noreferrer">
        Pling
      </a>
      , como foco principalmente em <i>front-end</i> e na construção de{' '}
      <i>Progressive Web Apps</i> (PWA). Comecei a programar no ano de 2016, e
      meu interesse no mundo do desenvolvimento só aumenta a cada dia! Procuro
      sempre aprender e aplicar novas tecnologias, sendo esse um dos motivos
      pelo qual eu construí esse blog, pois acredito que a melhor forma de
      aprender seja ensinar.
    </p>
    <p>
      Gosto muito de música, apaixonado por games, um aventureiro na culinária,
      e nos tempos livres adoro filosofar sobre a vida. Apesar de ser um blog
      voltado para tecnologia, não se surpreenda se trouxermos algumas reflexões
      por aqui.
    </p>
    <p>
      Muitos sonhos e objetivos meus nasceram de recursos online que eu
      encontrei sobre tecnologia. Acredito que seja o meu dever, e eu ficarei
      extremamente feliz se conseguir retribuir pra vocês um pouco desse
      aprendizado e do que me trouxe até aqui! #keepgoing.
    </p>
  </S.Container>
);

export default Introduction;
