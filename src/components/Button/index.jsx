import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Button({
  children,
  onClick,
}) {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
