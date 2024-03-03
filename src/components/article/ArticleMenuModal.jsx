import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import withModalBackground from '@components/hoc/withModalBackground';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;

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

const ArticleMenuModal = ({
  editable,
  articleId,
  onCloseModal,
  setShowDeleteModal,
}) => {
  const navigate = useNavigate();

  const handleArticleDelete = () => {
    onCloseModal();
    setShowDeleteModal(true);
  };

  return (
    <ModalOverlay>
      {editable && (
        <ModalContent
          onClick={() => {
            navigate(`/article/edit/${articleId}`, { replace: true });
          }}
        >
          <span>수정하기</span>
        </ModalContent>
      )}
      <ModalContent warning onClick={handleArticleDelete}>
        <span>삭제하기</span>
      </ModalContent>
    </ModalOverlay>
  );
};

export default withModalBackground(ArticleMenuModal);
