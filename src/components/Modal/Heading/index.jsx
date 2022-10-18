import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Heading({ children }) {
  return (
    <S.Heading>
      {children}
    </S.Heading>
  );
}

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Heading;
