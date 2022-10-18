import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Overlay({ children }) {
  return (
    <S.Overlay>
      {children}
    </S.Overlay>
  );
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Overlay;
