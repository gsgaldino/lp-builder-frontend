import styled from 'styled-components';

export const Heading = styled.div`
  margin-bottom: var(--spacement-default);

  &:after {
    content: '';
    display: block;
    position: relative;
    height: 1px;
    width: 100%;
    background: rgba(0,0,0,.1);
    margin-top: var(--spacement-small);
  }
`;
