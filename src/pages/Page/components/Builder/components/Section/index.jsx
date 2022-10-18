import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import {
  setShowSectionSettings,
  setIsOpen as setIsSidebarOpen,
  setSectionData,
  setShowElementSettings,
} from 'store/modules/sidebar/slice';

import Space from './components/Space';
import Controls from './components/Controls';

import * as S from './styles';

function Section({ item }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const { isOpen: isSidebarOpen } = useSelector((s) => s.sidebar);

  const spaces = new Array(item.spaces).fill();

  const onMouseEnter = () => setIsHovered(true);

  const onMouseLeave = () => setIsHovered(false);

  const onSectionClick = (e) => {
    e.preventDefault();
    dispatch(setShowElementSettings(false));
    dispatch(setShowSectionSettings(true));
    dispatch(setSectionData(item));

    if (!isSidebarOpen) dispatch(setIsSidebarOpen(true));
  };

  return (
    <S.Section
      onClick={onSectionClick}
      spaces={item.spaces}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundColor: item.css.backgroundColor,
      }}
    >
      {isHovered && <Controls section={item} />}

      {spaces.map((_, index) => (
        <Space
          key={v4()}
          index={index + 1}
          sectionId={item._id}
          element={item.elements.find((el) => el.index === (index + 1))}
        />
      ))}
    </S.Section>
  );
}

Section.propTypes = {
  item: PropTypes.shape({
    css: PropTypes.object,
    spaces: PropTypes.number,
    _id: PropTypes.string,
    elements: PropTypes.array,
  }).isRequired,
};

export default Section;
