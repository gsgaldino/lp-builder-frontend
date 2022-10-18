import React from 'react';
import PropTypes from 'prop-types';

import Overlay from './Overlay';
import Body from './Body';
import Heading from './Heading';
import Footer from './Footer';

import * as S from './styles';

function Modal({ children, isOpen }) {
  if (isOpen) {
    return (
      <S.Wrapper isOpen={isOpen}>
        {children}
      </S.Wrapper>
    );
  }

  return null;
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

Modal.Overlay = Overlay;
Modal.Body = Body;
Modal.Heading = Heading;
Modal.Footer = Footer;

export default Modal;
