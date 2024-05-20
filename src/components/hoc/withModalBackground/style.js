import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

export const Background = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 1001;
`;
