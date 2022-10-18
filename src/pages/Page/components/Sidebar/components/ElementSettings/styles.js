import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacement-default);
  min-width: 280px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  padding: var(--spacement-default);
`;
