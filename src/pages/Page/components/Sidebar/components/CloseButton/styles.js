import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 40px;
  right: ${({ isOpen }) => (isOpen ? '-10px' : '-28px')};
  transition: all 0.4s ease;
  z-index: 1;
`;
