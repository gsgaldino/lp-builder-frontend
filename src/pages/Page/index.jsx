import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchPage } from 'store/modules/page/slice';

import Sidebar from './components/Sidebar';
import Builder from './components/Builder';

import * as S from './styles';

function Page() {
  const dispatch = useDispatch();
  const { pageId } = useParams();

  useEffect(() => {
    dispatch(fetchPage(pageId));
  }, [pageId]);

  return (
    <S.Container>
      <Sidebar />
      <Builder />
    </S.Container>
  );
}

export default Page;
