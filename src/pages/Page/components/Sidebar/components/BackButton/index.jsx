import React from 'react';
import { useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { AiOutlineLeft } from 'react-icons/ai';

import {
  setShowSectionSettings,
  setShowElementSettings,
} from 'store/modules/sidebar/slice';

import * as S from './styles';

function BackButton({ onClick }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setShowElementSettings(false));
    dispatch(setShowSectionSettings(false));

    onClick(e);
  };

  return (
    <S.Container onClick={handleClick}>
      <AiOutlineLeft />
    </S.Container>
  );
}

BackButton.propTypes = {
  onClick: Proptypes.func,
};

BackButton.defaultProps = {
  onClick: () => {},
};

export default BackButton;
