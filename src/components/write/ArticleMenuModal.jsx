import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 8rem; */
  flex-shrink: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2.19rem;
  padding: 2.37rem 0 2.63rem;

  background-color: #fff;
  border-radius: 1.0625rem 1.0625rem 0rem 0rem;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);

  animation: ${slideUp} 0.4s ease;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;

  cursor: pointer;

  span {
    width: 100%;

    color: ${(props) => (props.warning ? `#C23952` : `#333`)};
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ArticleMenuModal = ({ setShowMenuModal, setShowDeleteModal }) => {
  const onCloseModal = () => {
    setShowMenuModal(false);
  };
  const handleArticleEdit = () => {
    setShowMenuModal(false);
  };
  const handleArticleDelete = () => {
    setShowDeleteModal(true);
  };

  return (
    <ModalBackground>
      <ModalOverlay>
        <ModalContent onClick={handleArticleEdit}>
          <span>수정하기</span>
        </ModalContent>
        <ModalContent warning onClick={handleArticleDelete}>
          <span>삭제하기</span>
        </ModalContent>
      </ModalOverlay>
    </ModalBackground>
  );
};

export default ArticleMenuModal;
