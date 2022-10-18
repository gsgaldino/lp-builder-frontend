import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: var(--spacement-large);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border: 1px dashed var(--primary-6);
  margin: var(--spacement-large);
  border-radius: var(--radius-default);
  position: relative;

  &:hover {
    border-color: var(--primary-4);
  }

  &.isHovered {
    border-color: var(--semantic-green-1);

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--semantic-green-7);
      opacity: 0.2;
      top: 0;
      left: 0;
    } 
  }

  & > svg {
    z-index: -1;
  }
`;
