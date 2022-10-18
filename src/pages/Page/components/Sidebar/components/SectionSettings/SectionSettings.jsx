import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Background from './components/Background';
import Spaces from './components/Spaces';
import BackButton from '../BackButton';

import { useSection } from './context/Section';
import * as S from './styles';

function SectionSettings() {
  const { sectionSettings } = useSelector((s) => s.sidebar);

  const { data, setData, onChange } = useSection();

  useEffect(() => {
    setData(sectionSettings.data);
  }, [sectionSettings]);

  return (
    <S.Container>
      <S.Title>
        <BackButton />

        <p>Configurações da seção</p>
        <p />
      </S.Title>

      <Background onChange={onChange} data={data} />
      <Spaces onChange={onChange} data={data} spaces={data?.spaces} />
    </S.Container>
  );
}

export default SectionSettings;
