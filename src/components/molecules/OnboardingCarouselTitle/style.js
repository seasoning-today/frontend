import styled from 'styled-components';

export const Layout = styled.li`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 1rem;
  padding: 1rem 0;

  scroll-snap-align: center;

  white-space: pre-wrap;
`;
