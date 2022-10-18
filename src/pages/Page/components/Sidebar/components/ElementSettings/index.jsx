import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'components';

import BackButton from '../BackButton';
import ModalDeleteItem from './components/ModalDeleteItem';

import * as S from './styles';

function ElementSettings() {
  const { elementSettings } = useSelector((s) => s.sidebar);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDelete = () => setIsModalOpen(true);

  return (
    <S.Container>
      <S.Title>
        <BackButton />
        <p>Element Settings</p>
        <p />
      </S.Title>

      <S.Content>
        <p>{elementSettings?.data.type}</p>

        <Button onClick={onDelete}>Apagar item</Button>
      </S.Content>

      <ModalDeleteItem
        element={elementSettings?.data}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </S.Container>
  );
}

export default ElementSettings;
