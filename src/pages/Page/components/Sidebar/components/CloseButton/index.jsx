import React from 'react';
import PropTypes from 'prop-types';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import { IconButton } from 'components';

import * as S from './styles';

function CloseButton({ onClick, isOpen }) {
  return (
    <S.Container onClick={onClick} isOpen={isOpen}>
      <IconButton>
        {isOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
      </IconButton>
    </S.Container>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

CloseButton.defaultProps = {
  onClick: () => { },
  isOpen: false,
};

export default CloseButton;
