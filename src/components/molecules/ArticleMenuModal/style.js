import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Layout = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-shrink: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.19rem;
  padding: 1.37rem 0 1.63rem;

  background-color: #fff;
  border-radius: 1.0625rem 1.0625rem 0rem 0rem;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);

  animation: ${slideUp} 0.4s ease;
`;

export const Menu = styled.li`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  cursor: pointer;
`;
