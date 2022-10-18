import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setIsOpen } from 'store/modules/sidebar/slice';
import CloseButton from './components/CloseButton';
import Item from './components/Item';
import SectionSettings from './components/SectionSettings';
import ElementSettings from './components/ElementSettings';

import * as S from './styles';

function Sidebar() {
  const dispatch = useDispatch();
  const { sectionSettings, isOpen, elementSettings } = useSelector((s) => s.sidebar);

  const onClick = () => dispatch(setIsOpen(!isOpen));

  const sidebarItems = [
    {
      id: 1,
      label: 'Image',
      type: 'image',
    },
    {
      id: 2,
      label: 'Video',
      type: 'video',
    },
    {
      id: 3,
      label: 'Text',
      type: 'text',
    },
    {
      id: 4,
      label: 'Title',
      type: 'title',
    },
  ];

  return (
    <S.Container>
      <S.Sidebar isOpen={isOpen}>
        <CloseButton isOpen={isOpen} onClick={onClick} />

        {(!sectionSettings.isOpen && !elementSettings.isOpen) && (
          <S.SidebarItems>
            {sidebarItems.map((item) => (
              <Item data={item} key={item.id} />
            ))}
          </S.SidebarItems>
        )}

        {sectionSettings.isOpen && <SectionSettings />}
        {elementSettings.isOpen && <ElementSettings />}
      </S.Sidebar>
    </S.Container>
  );
}

export default Sidebar;
