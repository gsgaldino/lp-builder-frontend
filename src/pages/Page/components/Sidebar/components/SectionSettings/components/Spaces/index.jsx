import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Spaces({ onChange, data }) {
  const [state, setState] = useState(data?.spaces);

  useEffect(() => setState(data?.spaces), [data]);

  const onSpaceChange = (e) => {
    const { value } = e.target;

    setState(Number(value));
    onChange({
      ...data,
      spaces: Number(value),
    });
  };

  return (
    <S.Container>
      <span>
        Spaces
      </span>
      <input
        onChange={onSpaceChange}
        type="number"
        min={0}
        max={6}
        value={state}
      />
    </S.Container>
  );
}

Spaces.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};

Spaces.defaultProps = {
  data: {},
  onChange: () => {},
};

export default Spaces;
