import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const AnimatedLink = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>;
};

AnimatedLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedLink;
