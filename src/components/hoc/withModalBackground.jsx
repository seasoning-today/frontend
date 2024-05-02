import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalBackground = styled.div`
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

export default function withModalBackground(WrappedModal) {
  return (props) => {
    const handleBackgroundClick = (event) => {
      if (event.target === event.currentTarget) {
        props.onCloseModal();
      }
    };

    return (
      <ModalBackground onClick={handleBackgroundClick}>
        <WrappedModal {...props} />
      </ModalBackground>
    );
  };
}
