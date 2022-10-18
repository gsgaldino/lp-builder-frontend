import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import BackButton from '../BackButton';

import * as S from './styles';

function ElementSettings() {
  const { elementSettings } = useSelector((s) => s.sidebar);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(elementSettings.data);
  }, [elementSettings]);

  return (
    <S.Container>
      <S.Title>
        <BackButton />
        <p>Element Settings</p>
        <p />
      </S.Title>

      <S.Content>
        <p>{data.type}</p>
      </S.Content>
    </S.Container>
  );
}

export default ElementSettings;
