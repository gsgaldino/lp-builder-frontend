import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--primary-5);
  margin: var(--spacement-small);
  height: 100px;
  display: grid;
  place-items: center;
  cursor: grab;
  opacity: ${({ isDragging }) => (isDragging ? '0.4' : '1')};
  min-width: 120px;
`;
