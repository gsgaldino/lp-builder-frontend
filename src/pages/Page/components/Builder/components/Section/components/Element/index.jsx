import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  setIsOpen,
  setElementData,
  setShowElementSettings,
  setShowSectionSettings,
} from 'store/modules/sidebar/slice';

import * as S from './styles';

function Element({ element, sectionId }) {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setIsOpen(true));
    dispatch(setShowSectionSettings(false));
    dispatch(setShowElementSettings(true));
    dispatch(setElementData({
      ...element,
      sectionId,
    }));
  };

  return (
    <S.Container onClick={onClick}>
      {element.type}
      {element.index}
    </S.Container>
  );
}

Element.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.string,
    index: PropTypes.number,
  }),
  sectionId: PropTypes.string.isRequired,
};

Element.defaultProps = {
  element: {},
};

export default Element;
