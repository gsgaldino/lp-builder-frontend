import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Background({ onChange, data }) {
  const [state, setState] = useState(data?.css?.backgroundColor);

  useEffect(() => setState(data?.css?.backgroundColor), [data]);

  const onDataChange = (e) => {
    const { value } = e.target;

    setState(value);
    onChange({
      ...data,
      css: {
        ...data.css,
        backgroundColor: value,
      },
    });
  };

  return (
    <S.Container>
      <span>background-color</span>
      <input onChange={onDataChange} type="color" value={state} />
    </S.Container>
  );
}

Background.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.object,
};

Background.defaultProps = {
  onChange: () => {},
  data: {},
};

export default Background;
