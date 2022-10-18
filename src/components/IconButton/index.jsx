import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function IconButton({ children, onClick }) {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  );
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  onClick: () => {},
};

export default IconButton;
