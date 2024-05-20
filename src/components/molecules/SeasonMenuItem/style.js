import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: auto;
  min-width: 4.25rem;
  height: 2.25rem;
  border-radius: 1.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  cursor: pointer;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;

  width: 4.25rem;
  height: 2.25rem;

  background-color: ${({ active }) =>
    active ? `rgba(2, 33, 29, 0.65)` : `rgba(255, 255, 255, 0.65)`};
  transition: background-color 0.2s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
