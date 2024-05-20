import styled from 'styled-components';

export const Layout = styled.li`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 0;

  scroll-snap-align: center;
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 0.75rem;

  white-space: pre-wrap;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  padding: 1.5rem;
`;
