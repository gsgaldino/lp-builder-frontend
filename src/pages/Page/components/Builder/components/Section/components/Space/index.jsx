import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cc from 'classcat';

import { AiOutlinePlus } from 'react-icons/ai';

import { setIsOpen as setIsSidebarOpen } from 'store/modules/sidebar/slice';
import { createElement } from 'store/modules/page/slice';

import Element from '../Element';
import * as S from './styles';

function Space({ index, sectionId, element }) {
  const { pageId } = useParams();
  const { isOpen: isSidebarOpen } = useSelector((s) => s.sidebar);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const onDragEnter = () => setIsHovered(true);

  const onDragLeave = () => setIsHovered(false);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsHovered(false);

    const el = {
      type: e.dataTransfer.getData('text'),
      index,
    };

    dispatch(createElement({ pageId, sectionId, element: el }));

    return false;
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isSidebarOpen) dispatch(setIsSidebarOpen(true));
  };

  return (
    <div>
      {element.index ? (
        <Element element={element} />
      ) : (
        <S.Wrapper>
          <S.Container
            className={cc({
              isHovered,
            })}
            onClick={onClick}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <AiOutlinePlus />
          </S.Container>
        </S.Wrapper>
      )}
    </div>
  );
}

Space.propTypes = {
  index: PropTypes.number,
  sectionId: PropTypes.string,
  element: PropTypes.object,
};

Space.defaultProps = {
  index: 0,
  sectionId: '',
  element: { },
};

export default Space;
