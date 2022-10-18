import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

import * as S from './styles';

function Button({
  children,
  onClick,
  variant,
}) {
  return (
    <S.Container
      className={cc([variant])}
      onClick={onClick}
    >
      {children}
    </S.Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['solid', 'outline', 'link']),
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'solid',
};

export default Button;
