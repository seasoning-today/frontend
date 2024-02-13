import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const withModalBackground = (WrappedModal) => {
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
};

export default withModalBackground;
