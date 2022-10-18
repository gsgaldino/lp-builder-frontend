import styled from 'styled-components';

export const Container = styled.button`
  border: 1px solid var(--primary-5);
  border-radius: var(--radius-default);
  width: 24px;
  height: 24px;
  background: var(--absolute-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    fill: var(--primary-4);
  }
`;
