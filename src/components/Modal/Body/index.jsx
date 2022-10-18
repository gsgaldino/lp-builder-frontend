import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Body({ children }) {
  return (
    <S.Body>
      {children}
    </S.Body>
  );
}

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Body;
