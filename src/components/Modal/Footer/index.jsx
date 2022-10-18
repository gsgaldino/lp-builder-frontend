import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Footer({ children }) {
  return (
    <S.Footer>
      {children}
    </S.Footer>
  );
}

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Footer;
