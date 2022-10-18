import React from 'react';
import { useSelector } from 'react-redux';

import Section from './components/Section';
import NoItems from './components/NoItems';

import * as S from './styles';

function Builder() {
  const { page } = useSelector((s) => s.page);

  return (
    <S.Container>
      {page.body?.items?.map((item) => (
        <Section item={item} />
      ))}

      {!page.body?.items?.length && <NoItems />}
    </S.Container>
  );
}

export default Builder;
