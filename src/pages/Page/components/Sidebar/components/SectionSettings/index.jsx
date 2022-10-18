import React from 'react';
import SectionProvider from './context/Section';
import SectionSettings from './SectionSettings';

export default function Section() {
  return (
    <SectionProvider>
      <SectionSettings />
    </SectionProvider>
  );
}
