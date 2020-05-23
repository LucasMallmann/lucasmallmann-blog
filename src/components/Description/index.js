import React from 'react';

import avatarPic from '~/assets/me.jpeg';

import * as S from './styles';

const Description = () => (
  <S.Container>
    <S.Avatar>
      <img src={avatarPic} alt="Lucas Mallmann" />
    </S.Avatar>
    <p>
      Hi, I am Monica! I am a Full Stack Engineer who is currently building
      technology to bring people together IRL at Meetup and focusing on growing
      the React Ladies community for women + non-binary React developers. I am
      interested in discussing React, JAMStack, open-source, tech inclusion,
      automation and more. 🍿
    </p>
  </S.Container>
);

export default Description;
