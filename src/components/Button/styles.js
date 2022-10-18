import styled from 'styled-components';

export const Container = styled.button`
  padding: var(--spacement-small) var(--spacement-default);
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  border-radius: 3px;

  &.solid {
    background: var(--primary-7);
    border: 1px solid var(--primary-7);
    color: var(--absolute-black);

    &:hover {
      background: var(--primary-6);
    }

    &:active {
      background: var(--primary-7);
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6690ff;
  }
`;
