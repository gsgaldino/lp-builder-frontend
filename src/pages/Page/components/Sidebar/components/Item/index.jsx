import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Item({ data }) {
  const [isDragging, setIsDragging] = useState(false);

  function onDragStart(e) {
    setIsDragging(true);
    e.dataTransfer.setData('text', data.label);
  }

  function onDragEnd() {
    setIsDragging(false);
  }

  return (
    <S.Container
      isDragging={isDragging}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {data.label}
    </S.Container>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.number,
  }),
};

Item.defaultProps = {
  data: {},
};

export default Item;
