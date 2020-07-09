import React from 'react';

import avatarPic from '~/assets/me.jpeg';

import * as S from './styles';

const Description = () => (
  <S.Container>
    <S.Avatar>
      <img src={avatarPic} alt="Foto de Perfil Lucas Mallmann" />
    </S.Avatar>
    <p>
      Olá, eu sou o Lucas Mallmann! Sou um Engenheiro de Software Fullstack,
      atualmente trabalhando com ReactJS, Typescript & NodeJS. Me esforço ao
      máximo para levar o conhecimento que adquiro às pessoas, contribuindo com
      a comunidade e explicando a tecnologia de uma maneira simples! Tenho
      interesse em discussões sobre o ecossistema Javascript, projetos
      Open-Source, Data-Science, e claro, sobre como podemos expandir mais
      conhecimento sobre tecnologia no mundo 🌎
    </p>
  </S.Container>
);

export default Description;
