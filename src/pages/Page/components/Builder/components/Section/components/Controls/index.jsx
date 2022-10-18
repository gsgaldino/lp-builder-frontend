import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { IconButton } from 'components';

import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineSetting,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from 'react-icons/ai';

import { createSection, deleteSection } from 'store/modules/page/slice';
import {
  setShowElementSettings,
  setShowSectionSettings,
  setSectionData,
  setIsOpen as setIsSidebarOpen,
} from 'store/modules/sidebar/slice';

import * as S from './styles';

function Controls({ section }) {
  const dispatch = useDispatch();

  const { isOpen: isSidebarOpen } = useSelector((s) => s.sidebar);

  const { pageId } = useParams();

  const onAddSection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(createSection(pageId));
  };

  const onDeleteSection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteSection({ sectionId: section._id, pageId }));
  };

  const onSectionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setShowElementSettings(false));
    dispatch(setShowSectionSettings(true));
    dispatch(setSectionData(section));

    if (!isSidebarOpen) dispatch(setIsSidebarOpen(true));
  };

  return (
    <S.Container>
      <IconButton>
        <AiOutlineArrowUp />
      </IconButton>

      <IconButton>
        <AiOutlineArrowDown />
      </IconButton>

      <IconButton onClick={onSectionClick}>
        <AiOutlineSetting />
      </IconButton>

      <IconButton onClick={onAddSection}>
        <AiOutlinePlus />
      </IconButton>

      <IconButton onClick={onDeleteSection}>
        <AiOutlineClose />
      </IconButton>
    </S.Container>
  );
}

Controls.propTypes = {
  section: PropTypes.object,
};

Controls.defaultProps = {
  section: {},
};

export default Controls;
