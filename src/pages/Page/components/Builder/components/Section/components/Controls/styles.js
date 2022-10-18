import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: var(--spacement-small);
  background: var(--primary-7);
  padding: var(--spacement-small);
  width: fit-content;
  height: fit-content;
  position: absolute;
  inset: 0;
  margin-inline: auto;
  z-index: 1;
`;
