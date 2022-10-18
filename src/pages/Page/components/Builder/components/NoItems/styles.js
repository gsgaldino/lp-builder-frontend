import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: var(--spacement-large);
`;

export const AddItemSection = styled.section`
  background: var(--absolute-white);
  border: 1px dashed var(--primary-5);
  border-radius: var(--radius-default);
  display: grid;
  place-items: center;
  height: 180px;
  width: 100%;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: var(--primary-1);
  }
`;
