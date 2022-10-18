import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  max-width: 300px;
  height: 100vh;
  z-index: 1;
`;

export const Sidebar = styled.div`
  box-shadow: 10px 0px 42px -14px rgba(0,0,0,.2);
  position: relative;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
  transition: all 0.4s ease;
  height: 100vh;
`;

export const SidebarItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  max-width: 95%;
  padding-top: var(--spacement-default);
`;
