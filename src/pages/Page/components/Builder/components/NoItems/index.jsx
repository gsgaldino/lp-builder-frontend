import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

import { IconButton } from 'components';

import api from 'services/api';
import * as S from './styles';

function NoItems() {
  const { pageId } = useParams();

  const onClick = async () => {
    const { data } = await api.post(`/page/${pageId}/section`);
    console.log('DATA', data);
  };

  return (
    <S.Container>
      <S.AddItemSection onClick={onClick}>
        <IconButton>
          <AiOutlinePlus />
        </IconButton>
      </S.AddItemSection>
    </S.Container>
  );
}

export default NoItems;
