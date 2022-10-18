import styled from 'styled-components';

export const Section = styled.section`
  height: 120px;
  border: .5px solid transparent;
  display: grid;
  grid-template-columns: repeat(${({ spaces }) => spaces}, 1fr);
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: var(--primary-5);
  }
`;
